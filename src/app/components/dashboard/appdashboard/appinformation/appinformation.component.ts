import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfigService } from 'src/app/config/config.service';

@Component({
  selector: 'app-appinformation',
  templateUrl: './appinformation.component.html',
  styleUrls: ['./appinformation.component.scss']
})
export class AppinformationComponent implements OnInit {
  app:any
  appmetadata : any;
  appreviews : any;
  constructor(private config: ConfigService,@Inject(MAT_DIALOG_DATA) public data: any,public dialogRef: MatDialogRef<AppinformationComponent>) { 
    this.app = data.app;
  }

  ngOnInit() {

    this.config.getAppMetaData(this.app.packagename).subscribe(response=>{
      this.appmetadata = response
    });

    this.config.getAppReviews(this.app.packagename).subscribe(response=>{
      this.appreviews = response
    });

  }

}
