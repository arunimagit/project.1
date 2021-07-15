import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  errormsg:any;
  pwdstrength:any;
  textcolor:any;

  user={
    fullname:"",
    email:"",
    password:"",
    confirmpwd:""
  }

  constructor(private router:Router, private userService:UserService) { }

  ngOnInit(): void {
  }

  validatepassword(){
    var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{6,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])(?=.*\\W))|((?=.*[a-z])(?=.*[0-9])(?=.*\\W))|((?=.*[A-Z])(?=.*[a-z])(?=.*\\W))).*$", "g");
    var enoughRegex = new RegExp("(?=.{3,}).*", "g");

    if(false == enoughRegex.test(this.user.password)){
      this.pwdstrength="Password Length:Too Short",
      this.textcolor="text-danger"
      
    }
    else if(strongRegex.test(this.user.password)){
      this.pwdstrength="Password Strength:Strong",
      this.textcolor="text-success"
    }
    else if(mediumRegex.test(this.user.password)){
      this.pwdstrength="Password Strength:Medium",
      this.textcolor="text-warning"
    }
    else{
      this.pwdstrength="Password Strength:Poor",
      this.textcolor="text-danger"
    }

  }

  Userdata(){
    if(this.user.confirmpwd==this.user.password){
      this.userService.newUser(this.user);
    console.log("called");
      // alert("success")
      this.router.navigate(['studentlogin'])
    
    }
    else{
         this.errormsg="Password does't match"
    
        }
  }

}
