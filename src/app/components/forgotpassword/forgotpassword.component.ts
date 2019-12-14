import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ConfigService } from 'src/app/config/config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {

  response: any;
  loginForm = new FormGroup({
    email: new FormControl('')
  });
  
  constructor(private config: ConfigService,private router: Router) {
    
  }
  ngOnInit() {
  }

  onForgotClick(){
    this.config.forgotpassword(this.loginForm.value.email).subscribe(response=>{

    })
  }

}
