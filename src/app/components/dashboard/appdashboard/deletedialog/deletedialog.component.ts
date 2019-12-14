import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ConfigService } from 'src/app/config/config.service';

@Component({
  selector: 'app-deletedialog',
  templateUrl: './deletedialog.component.html',
  styleUrls: ['./deletedialog.component.scss']
})
export class DeletedialogComponent implements OnInit {

  appid : string;
  userid:string;
  appname:string;
  constructor(private config: ConfigService,@Inject(MAT_DIALOG_DATA) public data: any,public dialogRef: MatDialogRef<DeletedialogComponent>) {
    this.appid = data.appid;
    this.userid = data.userid;
    this.appname = data.appname;
   }

  ngOnInit() {
  }

  onNoClick(){

  }

  onDeleteClick(){
    this.config.deleteApp(this.userid,this.appid).subscribe(response=>{
      let returnresponse : any;
      returnresponse = response;
      if(returnresponse.status == 200){
        let returnobj = {
          appid: this.appid,
          status: 200
        }
        this.dialogRef.close(returnobj);
      }
     
    })
  }

}
