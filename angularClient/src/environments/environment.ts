// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false, 
  verifyBvn: 'https://digital.fidelitybank.ng/SMECorporateAccount/api/CorporateAccount/validate_bvn',
  validateCompanyName: 'https://digital.fidelitybank.ng/SMECorporateAccount/api/CorporateAccount/validate_business_name',
  createAccount: 'https://digital.fidelitybank.ng/SMECorporateAccount/api/CorporateAccount/create_corporate_account',
  getOccupationCatalogs: 'https://digital.fidelitybank.ng/SMECorporateAccount/api/CorporateAccount/catalog',
  getBranches: 'https://digital.fidelitybank.ng/SMECorporateAccount/api/CorporateAccount/branches',  
  getRefCode: 'https://digital.fidelitybank.ng/ReferenceOTPAPI/api/OTP/generate/otp',
  validateRefCode: 'https://digital.fidelitybank.ng/referenceotpapi/api/OTP/validate/otp',
  validateAccountCreation: 'https://digital.fidelitybank.ng/ReferenceOTPAPI/api/OTP/validate/account/creation',
  otpPassword: 'referenceotp123',
  apiPassword: 'SmeCorporateAccount',
  validateReCaptchaToken: 'https://digital.fidelitybank.ng/recaptchaValidation/api/ReCaptcha/validate-recaptcha-token',
  validateAccountNumber: 'https://digital.fidelitybank.ng/SMECorporateAccount/validate_account_number',
  validateOtp: 'https://digital.fidelitybank.ng/referenceotpapi/api/OTP/validate/otp',
  uploadSignature: 'https://digital.fidelitybank.ng/SMECorporateAccount/upload_mandate',
  getProductInfo: 'https://digital.fidelitybank.ng/SMECorporateAccount/api/CorporateAccount/product_types',
  refereeEndpoint: 'https://digital.fidelitybank.ng/SMECorporateAccount/api/CorporateAccount/referee/form/submit',
  validaterefereeEndpoint:'https://digital.fidelitybank.ng/SMECorporateAccount/api/CorporateAccount/referee/validate',
  linkToMandate:'https://digital.fidelitybank.ng/accountOpening/#/Updateaccount?acct_number&strName'
   // verifyBvn: 'https://dtptest.fidelitybank.ng/SMECorporateAccountTest/api/CorporateAccount/validate_bvn',
  // validateCompanyName: 'https://dtptest.fidelitybank.ng/SMECorporateAccountTest/api/CorporateAccount/validate_business_name',
  // createAccount: 'https://dtptest.fidelitybank.ng/SMECorporateAccountTest/api/CorporateAccount/create_corporate_account',
  // getOccupationCatalogs: 'https://dtptest.fidelitybank.ng/SMECorporateAccountTest/api/CorporateAccount/catalog',
  // getBranches: 'https://dtptest.fidelitybank.ng/SMECorporateAccount/api/CorporateAccount/branches',  
  // getRefCode: 'https://dtptest.fidelitybank.ng/ReferenceOTPAPI/api/OTP/generate/otp',
  // validateRefCode: 'https://dtptest.fidelitybank.ng/ReferenceOTPAPI/api/OTP/validate/otp',
  // // tslint:disable-next-line: max-line-length
  // validateAccountCreation: 'https://dtptest.fidelitybank.ng/ReferenceOTPAPI/api/OTP/validate/account/creation',
  // otpPassword: 'referenceotp123',
  // apiPassword: 'SmeCorporateAccount',
  // validateReCaptchaToken: 'https://dtptest.fidelitybank.ng/recaptchaValidation/api/ReCaptcha/validate-recaptcha-token',
  // validateAccountNumber: 'https://dtptest.fidelitybank.ng/SMECorporateAccount/validate_account_number',
  // validateOtp: 'https://dtptest.fidelitybank.ng/referenceotpapi/api/OTP/validate/otp',
  // uploadSignature: 'https://dtptest.fidelitybank.ng/SMECorporateAccount/upload_mandate',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
