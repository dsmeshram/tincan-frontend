import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { ConfigService } from 'src/app/config/config.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { MatInput } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastmessageComponent } from '../appdashboard/toastmessage/toastmessage.component';

@Component({
  selector: 'app-appregistration',
  templateUrl: './appregistration.component.html',
  styleUrls: ['./appregistration.component.scss']
})


export class AppregistrationComponent implements OnInit {
  registrationform: FormGroup;
  secondFormGroup: FormGroup;
  app :any;
  response: any
  isExist : boolean
  apikey:String
  isOptional = false
  durationInSeconds = 1;
  @ViewChild('stepper') private regitration: MatStepper;

  @ViewChild('apikey') private appkey : MatInput;
  
  constructor(private _snackBar: MatSnackBar,private _formBuilder: FormBuilder,@Inject(MAT_DIALOG_DATA) public data: any,private config: ConfigService,public dialogRef: MatDialogRef<AppregistrationComponent>) { 
    
    this.registrationform = this._formBuilder.group({
      projectname: ['', Validators.required],
      packagename:['', Validators.required],
      signature :[]
    });

    this.secondFormGroup = this._formBuilder.group({
      apikey: ''
    });
    this.app = data;
  }

  ngOnInit() {

  }

  openSnackBar() {
    this._snackBar.openFromComponent(ToastmessageComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

  copyApiKey(){

    const selBox= document.createElement('textarea');
    selBox.style.position ="fixed";
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value =this.secondFormGroup.controls.apikey.value
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.openSnackBar();
  }

  onRegisterApp(){
    let data = {
      userid:this.app.userid,
      appname:this.registrationform.value.projectname,
      packagename:this.registrationform.value.packagename,
      signature:this.registrationform.value.signature == undefined? "" :this.registrationform.value.signature
      }

      this.config.postApp(data).subscribe(response=>{
        this.response = response;
        
        this.app = data;
        this.app.appid = this.response.appid;
        if(this.response.status == 200)
        {
          this.secondFormGroup.controls.apikey.setValue(this.response.key);
          this.secondFormGroup.controls.apikey.disabled;
          this.isOptional  =true;
          this.regitration.next();
        }else if(this.response.status == 400){
          this.isExist = true;
          this.isOptional  =false;
        }
      })
  }

  onCancel(){
    this.dialogRef.close(this.app);
  }
}

