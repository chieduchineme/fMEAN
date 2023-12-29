var userModel = require('../models/userModel');

var getDataFromDBService = () => {
    return new Promise(function checkURL(resolve,reject) {
        userModel.find({})
            .then(function(data) {
                resolve(data);
            })
            .catch(function(err) {
                reject(err);
            });
    })
}

var findOneUserDBService = (id) => {
    return new Promise(function myFn(resolve, reject) {
        userModel.findOne(id)
            .then(function(data) {
                resolve(data);
            })
            .catch(function(err) {
                reject(err);
            });
    });
}

var updateOneUserDBService = (id, userDetails) => {
    return new Promise(function myFn(resolve, reject) {
        userModel.findByIdAndUpdate(id, userDetails)
            .then(function(data) {
                resolve(data);
            })
            .catch(function(err) {
                reject(err);
            });
    });
}

var removeOneUserDBService = (id) => {
    return new Promise(function myFn(resolve,reject) {
        userModel.findOneAndDelete(id)
            .then(function(data) {
                resolve(data);
            })
            .catch(function(err) {
                reject(err);
            });
    });
    
}

module.exports = { removeOneUserDBService, updateOneUserDBService, findOneUserDBService, getDataFromDBService }