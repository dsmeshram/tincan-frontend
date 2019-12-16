import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfigService } from 'src/app/config/config.service';
import { Router, ActivatedRoute } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';
import { AppregistrationComponent } from '../appregistration/appregistration.component';

import { DeletedialogComponent } from './deletedialog/deletedialog.component';
import { AppinformationComponent } from './appinformation/appinformation.component';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-appdashboard',
  templateUrl: './appdashboard.component.html',
  styleUrls: ['./appdashboard.component.scss']
})
export class AppdashboardComponent implements OnInit {

  cardscolor = [1,2,3,4,5,6,7,8,9];
  platformscoverage :any;
  apps: any;
  parentid: any
  message:string;

  constructor(public dialog: MatDialog,private route: ActivatedRoute,private config: ConfigService,private router: Router) {
    
  }
  
  getRandomColor2() {
    var length = 6;
    var chars = '0123456789ABCDEF';
    var hex = '#';
    while(length--) hex += chars[(Math.random() * 16) | 0];
    return hex;
  }
  
  onLogout(){
    this.router.navigateByUrl('/login');
  }

  openDeleteDialog(app): void {
    const dialogRef = this.dialog.open(DeletedialogComponent, {
      width: '350px',
      data: {appid: app.appid, userid:  this.parentid,appname:app.appname}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.status ==  200){
        let outindex = undefined;
        this.apps.forEach((element,index) => {
          if(element.appid == result.appid){
            outindex = index;
          }
        });
       this.apps.splice(outindex, 1);
       this.checkApps();
      }
    });
  }

  ngOnInit() {

    this.route.queryParams
    .subscribe(params => {
      this.parentid = +params['userid'] || 0;
      this.config.getApps(this.parentid).subscribe(data => {
        let objest: any = data;
        this.apps = objest.apps;
        this.config.selectedpackagename =this.apps[0].packagename;
        this.checkApps();
      })
    });
  }

  checkApps(){
    if(this.apps.length == 0){
      this.router.navigateByUrl("apphome/noapp");
    }else{
      this.router.navigateByUrl("apphome/appoverview");
    }
  }

  onRegisterAppClick(type){
    this.openDialog(type);
  }

  onApplicationCLick(app) {
    this.config.selectedpackagename =app.packagename;
    //  this.router.navigateByUrl("apphome/appoverview/"+app.packagename);

    //this.router.navigate(['appoverview'], { queryParams: { packagename: app.packagename } });
       
  }

  onAppDelete(app){
    this.openDeleteDialog(app);
  }

  opneinfodialog(app){
    this.openInfoDialog(app);
  }


  openDialog(type): void {
    const dialogRef = this.dialog.open(AppregistrationComponent, {
      width: '500px',
      height : '500px',
      data:{ userid:this.parentid,apptype:type}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result != undefined){
        this.apps.unshift(result);
        this.checkApps();
      }
    });
  }

  openInfoDialog(app): void {
    const dialogRef = this.dialog.open(AppinformationComponent, {
      width: window.innerWidth+'px',
      height : '100%',
      data:{ app:app}
    });

    dialogRef.afterClosed().subscribe(result => {
      //if(result != undefined){
        //this.apps.unshift(result);
        //this.checkApps();
      //}
    });
  }

}
