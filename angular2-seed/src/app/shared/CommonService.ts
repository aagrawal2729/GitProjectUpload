import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { Http} from '@angular/http';

@Injectable()
export class CommonService {

    constructor(
        private http: Http
    ) {}

    commonService: any;

    baseUrl = "http//localhost:4000";

    getAllUsers() {   
    let url = this.baseUrl + "/getAll";
    this.commonService = this.http.get(url).map((res)=>res.json());
    console.log("Admin Login Service Object : " + this.commonService);
    return this.commonService;
  }

  getRoleBasedUsers() {      //removed parameter user
    let url = "http://localhost:4000/getRole";  // updated string 
    this.commonService = this.http.get(url).map((res)=>res.json()); 
    console.log("Admin Login Service Object : " + this.commonService);
    return this.commonService;
  }
}