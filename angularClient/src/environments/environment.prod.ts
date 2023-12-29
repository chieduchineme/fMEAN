export const environment = {
  production: true,
  
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
  linkToMandate:'https://digital.fidelitybank.ng/accountOpening/#/Updateaccount?acct_number'
};