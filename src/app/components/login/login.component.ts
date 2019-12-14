import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../config/config.service'
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {

  response: any;
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    hideRequired: new FormControl('')
  });
  constructor(private config: ConfigService, private router: Router) {


  }

  ngOnInit() {

  }

  onlogin() {
    this.config.login(this.loginForm.value.username, this.loginForm.value.password).subscribe(response => {
      this.response = response;
      if (this.response.status == "200") {
        this.router.navigate(['apphome'], { queryParams: { userid: this.response.user[0].userid } });
        //this.router.navigateByUrl('/apphome');
      } else {
        alert("fail");
      }
    })

  }

}
