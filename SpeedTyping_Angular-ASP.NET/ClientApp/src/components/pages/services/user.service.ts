import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TextWriteInfo } from '../text-write-result/text-write-info';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = "/api/Account/UserInfo";
  private allTextWriteResultsUrl = "/api/Account/AllTextWriteResults";
  private updateResultUrl = "/api/TextWrite/UpdateResult";
  userName: string = "";
  private _isAuthorized: boolean | null = null;
  data?: User;
  constructor(private http: HttpClient) {
    this.update();
  }

  private updateAuthorized(){
    this._isAuthorized = localStorage.getItem("token") !== null;
  }
  public get isAuthorized() {
    if(this._isAuthorized === null)
      this.updateAuthorized();      
    return this._isAuthorized;
  }
  async update() {
    if (!localStorage.getItem("token"))
      return;
    try {
      this.data = await this.getUserInfo();
      console.log(this.data.userName);
      this.userName = this.data.userName;
      console.log(this.getUserRole());
      
      this.updateAuthorized();
    }
    catch (err) {
      console.log(err);
      this.logout();
    }
  }
  private getUserInfo(){
    let header = this.authHeaders;
    return this.http.get<User>(this.url, { headers: header }).toPromise();
  }
  isAllRolesMatch(rolesToMatch: string[]) {
    var userRole = this.getUserRole();
    var isMatch = true;
    rolesToMatch.forEach(elem=> {      
      if(userRole !== elem){
        isMatch = false;
        return;
      }
    })
    return isMatch;
  }
  getUserRole(): string {
    var token = localStorage.getItem("token");
    if(!token)
    {
      this.logout();
      return "";
    }
    var payLoad = JSON.parse(window.atob(token.split(".")[1]));
    var userRole = payLoad.role;
    return userRole;
  }
  getAllTextWriteResults(): Promise<TextWriteInfo[]> {
    let header = this.authHeaders;    
    return this.http.get<TextWriteInfo[]>(
      this.allTextWriteResultsUrl, { headers: header })
      .toPromise();
  }
  updateTextWriteInfoAndGetBest(textWriteInfo: TextWriteInfo): Promise<TextWriteInfo> {
    
    let header = this.authHeaders;
    let body = { 
      textId: textWriteInfo.textId, 
      textSize: textWriteInfo.textSize,
      textWriteType: textWriteInfo.textWriteType, 
      correctCharsCount: textWriteInfo.correctCharsCount, 
      errorCharsCount: textWriteInfo.errorCharsCount, 
      unfixedErrorsCount: textWriteInfo.unfixedErrorsCount,
      miliseconds: textWriteInfo.miliseconds,
      countOfAllChars: textWriteInfo.countOfAllChars
    };
    return this.http.post<TextWriteInfo>(this.updateResultUrl, body, { headers: header }).toPromise();
  }
  private get authHeaders()
  {
    let token = localStorage.getItem("token");    
    return new HttpHeaders({"Authorization": "Bearer " + token});
  }
  logout()
  {
    localStorage.removeItem("token");
    this.updateAuthorized();
  }
}
