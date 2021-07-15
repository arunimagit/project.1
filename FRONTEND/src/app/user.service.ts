import { Injectable } from '@angular/core';
import {HttpClient,HttpResponse} from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  item={
    fullname:"",
    email:"",
    password:""
    
  }

  constructor(private http:HttpClient,private router:Router) { }

  newUser(item:any){
    return this.http.post("http://localhost:4000/userinsert",{"user":item})
    .subscribe(data =>{console.log(data)
           
    },
    
    err => {
      console.log(err);
      this.router.navigate(["signup"]);
      alert("Sorry ! User Already Exsist");
    })
  }
}