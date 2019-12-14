import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ConfigService } from 'src/app/config/config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  response: any;
  registrationForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private config: ConfigService, private router: Router) { }

  ngOnInit() {
  }

  onRegistration(){
    this.config.registration(this.registrationForm.value.username, this.registrationForm.value.email, this.registrationForm.value.password).subscribe(response=>{
      this.response = response;
      if (this.response.status == "200") {
        this.router.navigate(['apphome'], { queryParams: { userid: this.response.user.userid } });
      } else {
        alert("fail");
      }
    })
  }

}
