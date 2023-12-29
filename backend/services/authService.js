const { sign } = require('jsonwebtoken');
const { compare } = require('bcrypt');
var userModel = require('../models/userModel');

var registerUserDBService = (userDetails) => {
    return new Promise(function myFn(resolve,reject) {
        var userModelData = new userModel();

        userModelData.username = userDetails.username;
        userModelData.email = userDetails.email;
        userModelData.acctNumber = userDetails.acctNumber;
        
        // userModelData.password = bcrypt.hash(userDetails.password, 5);
        // if (userDetails.name == "admin", userDetails.password = "pass") {
        //     userModelData.role = userDetails.role.push('admin');
        // } else {
        //     userModelData.role = userDetails.role.push('');
        // }      

        userModelData.save()
        // userModel.findOne(userDetails.acctNumber)
            .then(function(savedData) {
                resolve(savedData);
            })
            .catch(function(err) {
                reject(err);
            });
    })
}

var loginUserDBService = (userDetails) => {
    return new Promise(function myFn(resolve,reject) {
        const responseArray = [];
        const { input, password } = userDetails;
        // Determine whether input is an email or a username using regex
        const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);
        
        // Find user with matching email or username
        if(isEmail){
            const email = input;
            var user = userModel.findOne(email);
        } else {
            const username = input;
            var user = userModel.findOne(username);
        }
        
        // const user = userModel.findOne(isEmail ? { email: input } : { username: input });
        if (user) { 
            responseArray.push({"user": user})
            var match = compare(password, user.password);
        }

        if (match) { 
            // Compare password
            responseArray.push({"match": match});
            // Note: Here we use user.email as the email payload because we don't know whether the user entered an email or a username
            const token = sign({ email: user.email, roles: user.roles }, process.env.SECRET_KEY, { expiresIn: '1h' });
            responseArray.push({token: token});
        }

        function getResponseArray() {  return responseArray  }

        getResponseArray()
            .then(function(savedData) {
                resolve(savedData);
            })
            .catch(function(err) {
                reject(err);
            });
        }
)}

module.exports = { registerUserDBService, loginUserDBService}