// import { Component, Inject, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
// import { Subject, Subscription, interval, map, takeWhile, tap } from 'rxjs';
// import { InjectionToken } from '@angular/core';

// export const MY_INJECTION_TOKEN = new InjectionToken<string>('my_injection_token');
// interface Employee {
//   username: number;
//   email: string;
//   acctNumber: string;
//   // other properties...
// }
import { Component, Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable, BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { tap, retry, catchError, shareReplay } from 'rxjs/operators';

const encoder = new TextEncoder();
const headers = new HttpHeaders({
  // 'Authorization': 'Basic ' + btoa(`${environment.apiPassword}:${environment.apiPassword}`),
  'Authorization': 'Basic ' + window.btoa(`${environment.apiPassword}:${environment.apiPassword}`),
});

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
// export class EmployeesComponent {
  

//   EmployeeArray : any[] = [];
//   isResultLoaded = false;
//   isUpdated = false;

//   username: string = "";
//   email: string = "";
//   acctNumber: string = "";
//   currentEmployeeId = "";

//   constructor(private http: HttpClient) {
//     this.getAllStudent();
//   }

//   getAllStudent() {
//     this.http.get("http://localhost:3000/user/getAll").subscribe((resultData: any)=> {
//       // console.log(resultData);
//       this.EmployeeArray = resultData.data;
//       this.isResultLoaded = true;
//     })
//   }

//   ngOnInit(): void {
//   }

//   register() {
//     let bodyData = {
//       "username": this.username,
//       "address": this.email,
//       "acctNumber": this.acctNumber,
//     };
//     this.http.post("http://localhost:3000/user/register", bodyData).subscribe((resultData: any)=> {
//       // console.log(resultData);
//       console.log("Student Registered Successfully")
//       this.username = "";
//       this.email= "";
//       this.acctNumber= "";
//       this.getAllStudent();
//     });
//   }

//   setUpdate(data: any) {
//     this.username = data.username;
//     this.email = data.email;
//     this.acctNumber = data.acctNumber;

//     this.currentEmployeeId = data._id;
//     //console.log(this.currentEmployeeId);
//   }

//   UpdateRecords() {
//     let bodyData = {
//       "username": this.username,
//       "address": this.email,
//       "acctNumber": this.acctNumber,
//     };
//     // console.log(this)
//     this.http.patch("http://localhost:3000/user/update"+ "/"+ this.currentEmployeeId, bodyData).subscribe((resultData: any)=> {
//       this.isUpdated = true;
//       console.log("Employee Updated");
//       this.getAllStudent();
//     });
//   }

//   save() {
//     if(this.currentEmployeeId == '') {
//       this.register();
//     } else {
//       this.UpdateRecords();
//     }
//   }

//   setDelete(data: any) {
//     this.http.delete("http://localhost:3000/user/delete"+ "/"+ data.id).subscribe((resultData: any)=> {
//       console.log(resultData);
//       console.log("Employee Deleted")
//       this.getAllStudent();
//     });
//   }
// }


export class EmployeesComponent {
  newAccountNumber = new BehaviorSubject(null);
  newAccountNumber$ = this.newAccountNumber.asObservable();
  
  constructor( public http: HttpClient) {
  }

  createAccount(accountCreationDetails: any): Observable<any> {
    return this.http.post(environment.createAccount, accountCreationDetails, { headers })
      .pipe(
        catchError(this.handleError), shareReplay(1)        
      );
  }

  getOccupations(): Observable<any> {
    return this.http.get(environment.getOccupationCatalogs, { headers })
    .pipe(
      retry(3), catchError(this.handleError), shareReplay(1),
    );
  }

  getBranches(): Observable<any> {
    return this.http.get(environment.getBranches, { headers })
    .pipe(
      retry(3), catchError(this.handleError), shareReplay(1)
    );
  }

  validateAccountCreation(payload: any): Observable<any> {
    return this.http.post(environment.validateAccountCreation, payload, {
      headers: new HttpHeaders({
        'Authorization': 'Basic ' + btoa(`${environment.otpPassword}:${environment.otpPassword}`),
        'Content-Type' : 'application/json'
      })
    }).pipe(
      retry(3), catchError(this.handleError), shareReplay(1)
    );
  }

  createMandate(accountCreationDetails: any): Observable<any> {
    return this.http.post(environment.validateAccountNumber, accountCreationDetails, { headers })
      .pipe(
        catchError(this.handleError), shareReplay(1)
      );
  }

  validateSentOtp(accountCreationDetails: any): Observable<any> {
    return this.http.post(environment.validateOtp, accountCreationDetails, { headers })
      .pipe(
        catchError(this.handleError), shareReplay(1)
      );
  }

  uploadMandate(accountCreationDetails: any): Observable<any> {
    return this.http.post(environment.uploadSignature, accountCreationDetails, { headers })
      .pipe(
        catchError(this.handleError), shareReplay(1)
      );
  }

  referee(payload: any): Observable<any> {
    return this.http.post(environment.refereeEndpoint, payload, { headers })
      .pipe(
        catchError(this.handleError), shareReplay(1)
      );
  }

  validatereferee(refereeCreationDetails: any): Observable<any> {
    return this.http.post(environment.refereeEndpoint, refereeCreationDetails, { headers })
      .pipe(
        catchError(this.handleError), shareReplay(1)
      );
  }

  validateReCaptchaToken(token: string): Observable<any> {

    let requestBody = {
      Token: token
    }

    return this.http.post(environment.validateReCaptchaToken, requestBody, {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    });
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error);
  }
  accountCreationService = this.getOccupations().subscribe(result => {
    //   console.log('getOccupations result:', result);
     });
  
  
}



// accountCreationService.getOccupations().subscribe(result => {
//   console.log('getOccupations result:', result);
// });





