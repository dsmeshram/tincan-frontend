import { Component, OnInit, ViewChild, Inject, AfterViewInit } from '@angular/core';
import { AppdashboardComponent } from '../appdashboard.component';
import { ConfigService } from 'src/app/config/config.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-appdoverview',
  templateUrl: './appdoverview.component.html',
  styleUrls: ['./appdoverview.component.scss']
})
export class AppdoverviewComponent implements OnInit,AfterViewInit {
  
  packagename:any
  appmetadata : any;
  appreviews : any;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  constructor(private _formBuilder: FormBuilder,public dialog: MatDialog,private route: ActivatedRoute,private config: ConfigService,private router: Router) { 
   
  }

  ngOnInit() {

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.packagename =  "com.linkedin.android.lite";
      this.config.getAppMetaData(this.packagename).subscribe(response=>{
        this.appmetadata = response;
      });
  
      this.config.getAppReviews(this.packagename).subscribe(response=>{
        this.appreviews = response;
      });
  }

  ngAfterViewInit(){
    
  }

}
