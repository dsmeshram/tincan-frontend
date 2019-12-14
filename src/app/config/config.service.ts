import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ConfigService {

  public selectedpackagename:String
  
  constructor(private http: HttpClient) {
    
  }

  public login(username, password) {
    let body = {
      username: username,
      password: password
    }
    let header = new HttpHeaders();
    header = header.append('content-type', 'application/json');
    header = header.append('accept', 'application/json');
    return this.http.post("http://localhost:1234/tincan/userlogin", JSON.stringify(body), { headers: header });
  }

  public getApps(userid) {
    let header = new HttpHeaders();
    header = header.append('content-type', 'application/json');
    header = header.append('accept', 'application/json');
    return this.http.get("http://localhost:1234/tincan/apps/"+userid);
  }

  public postApp(body) {
    let header = new HttpHeaders();
    header = header.append('content-type', 'application/json');
    header = header.append('accept', 'application/json');
    return this.http.post("http://localhost:1234/tincan/apps", JSON.stringify(body), { headers: header });

  }

  public deleteApp(userid,appid) {
    let header = new HttpHeaders();
    header = header.append('content-type', 'application/json');
    header = header.append('accept', 'application/json');
    return this.http.delete("http://localhost:1234/tincan/apps/"+userid+"/"+appid+"", { headers: header });

  }

  public getPlatformdata(){
    return this.http.get('assets/android-platforms.json');
  }

  public getAppMetaData(packagename){
    return this.http.get("http://localhost:1234/tincan/apps/details/metadata/"+packagename+"");
  }

  public getAppReviews(packagename){
    return this.http.get("http://localhost:1234/tincan/apps/details/review/"+packagename+"");
  }


  public forgotpassword(emailaddess){
    let header = new HttpHeaders();
    header = header.append('content-type', 'application/json');
    header = header.append('accept', 'application/json');
    return this.http.post("http://localhost:1234/tincan/user/forgotpassword/"+emailaddess+"", "", { headers: header });
  }

  public registration(name,emailaddess,password){
    let body = {
      username: name,
      lastname: name,
      email: emailaddess,
      password: password
    }
    let header = new HttpHeaders();
    header = header.append('content-type', 'application/json');
    header = header.append('accept', 'application/json');
    return this.http.post("http://localhost:1234/tincan/user", JSON.stringify(body), { headers: header });
  }
}

