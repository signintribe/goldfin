import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router, Route} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //private _baseUrl = "http://134.209.144.186:3000"
  //private _baseUrl = "http://localhost:3000"
  private _baseUrl = "https://api.goldfin.com.pk"

  constructor(private http: HttpClient, private _router : Router) { }
  registerUser(user){
    return this.http.post<any>(this._baseUrl+"/auth/signup",user)
  }
  loginUser(user){
    return this.http.post<any>(this._baseUrl+"/auth/login",user)
  }
  verifyUser(user){
    return this.http.post<any>(this._baseUrl+"/auth/verifyAccount",user)
  }
  verifyUser2(user){
    return this.http.post<any>(this._baseUrl+"/auth/verifyAccount2",user)
  }
  forgotPassword(user){
    return this.http.post<any>(this._baseUrl+"/auth/forget-password",user)
  }
  salariedLAF1(user){
    return this.http.post<any>(this._baseUrl+"/salariedLaf/lafForm1",user)
  }
  salariedLAFWeb2(user){
    return this.http.post<any>(this._baseUrl+"/salariedLaf/lafFormWeb2",user)
  }
  salariedLAFDocuments(user){
    return this.http.post<any>(this._baseUrl+"/salariedLaf/addDocuments",user)
  }
  businessLAF1(user){
    return this.http.post<any>(this._baseUrl+"/businessLaf/lafForm1",user)
  }
  businessLAFWeb2(user){
    return this.http.post<any>(this._baseUrl+"/businessLaf/lafFormWeb2",user)
  }
  businessLAFDocuments(user){
    return this.http.post<any>(this._baseUrl+"/businessLaf/addDocuments",user)
  }
  inviteUsers(user){
    return this.http.post<any>(this._baseUrl+"/recommend/addToInvite",user)
  }
  cafForm(user){
    return this.http.post<any>(this._baseUrl+"/cmo/cafForm",user)
  }
  voForm(user){
    return this.http.post<any>(this._baseUrl+"/vo/voForm",user)
  }
  getForms(){
    return this.http.get<any>(this._baseUrl+"/user/getUsersForms")
  }
  getgoldprice(){
    return this.http.get<any>(this._baseUrl+"/rates/goldRate0")
  }
  getdirectBOForms(){
    return this.http.get<any>(this._baseUrl+"/user/getdirectBOForms")
  }
  getdirectBSForms(){
    return this.http.get<any>(this._baseUrl+"/user/getdirectBSForms")
  }
  getFormsCMO(){
    return this.http.get<any>(this._baseUrl+"/user/getUsersForms")
  }
  getFormsVO(){
    return this.http.get<any>(this._baseUrl+"/user/getFormsVO")
  }
  getFilledForm(data){
    return this.http.get<any>(this._baseUrl+"/user/getFilledFormbyId/"+data)
  }
  getverifiedCode(data){
    return this.http.get<any>(this._baseUrl+"/user/getverifiedCode/"+data)
  }
  
  setPasswordForWeb(data){
    return this.http.post<any>(this._baseUrl+"/auth/setPasswordForWeb",data)
  }
  getFormById(link){
    return this.http.get<any>(this._baseUrl+"/user/getForm/"+link)
  }
  userData(link){
    return this.http.get<any>(this._baseUrl+"/user/userData/"+link)
  }
  getFormData1(link){
    return this.http.get<any>(this._baseUrl+"/user/getLAF1/"+link)
  }
  getFormData2(link){
    return this.http.get<any>(this._baseUrl+"/user/getLAF2/"+link)
  }
  getFormData3(link){
    return this.http.get<any>(this._baseUrl+"/user/getLAF3/"+link)
  }
  webFormLAF(link){
    return this.http.get<any>(this._baseUrl+"/user/webFormLAF/"+link)
  }
  
  getGeneralInformation(link){
    return this.http.get<any>(this._baseUrl+"/user/getGeneralInformation/"+link)
  }
  assignVO(id,value){
    return this.http.get<any>(this._baseUrl+"/user/assignVO/"+id+"/"+value)
  }
  assignCSO(id,value){
    return this.http.get<any>(this._baseUrl+"/user/assignCSO/"+id+"/"+value)
  }
  assignBO(id,value){
    return this.http.get<any>(this._baseUrl+"/user/assignBO/"+id+"/"+value)
  }
  assignBO2(id,value,csoId,csoName){
    return this.http.get<any>(this._baseUrl+"/user/assignBO2/"+id+"/"+value+"/"+csoId+"/"+csoName)
  }
  assignBO3(id,value,boId,boName){
    return this.http.get<any>(this._baseUrl+"/user/assignBO3/"+id+"/"+value+"/"+boId+"/"+boName)
  }
  userNameCheck(id){
    return this.http.get<any>(this._baseUrl+"/user/userNameCheck/"+id)
  }
  phoneCheck(id){
    return this.http.get<any>(this._baseUrl+"/user/phoneCheck/"+id)
  }
  cnicCheck(id){
    return this.http.get<any>(this._baseUrl+"/user/cnicCheck/"+id)
  }
  getVOForm(id){
    return this.http.get<any>(this._baseUrl+"/vo/getVO/"+id)
  }
  getdirectCSOForms(){
    return this.http.get<any>(this._baseUrl+"/user/getdirectCSOForms")
  }
  getCMOForm(id){
    return this.http.get<any>(this._baseUrl+"/cmo/getCMO/"+id)
  }
  getFormsBO(){
    return this.http.get<any>(this._baseUrl+"/user/getFormsBO")
  }

  
  getLoanStatus(id){
    return this.http.get<any>(this._baseUrl+"/user/getLoanStatus/"+id)
  }
  
  getDocuments(id){
    return this.http.get<any>(this._baseUrl+"/user/getDocuments/"+id)
  }
  cmoDone(id){
    return this.http.get<any>(this._baseUrl+"/user/cmoDone/"+id)
  } 
  getVisits(){
    return this.http.get<any>(this._baseUrl+"/planVisit/getVisits")
  }
  getLoanSummaries(){
    return this.http.get<any>(this._baseUrl+"/loanSummary/getLoanSummaries")
  }
  getRatePerGram(){
    return this.http.get<any>(this._baseUrl+"/rates/goldrateqty/gram/1")
  }
  addSummary(user){
    return this.http.post<any>(this._baseUrl+"/loanSummary/addSummary",user)
  }
  getLoanSummary(id){
    return this.http.get<any>(this._baseUrl+"/loanSummary/getLoanSummary/"+id)
  }
  
  changeLoanStatus(id,value,bsId,bsName){
    return this.http.get<any>(this._baseUrl+"/user/loanStatus2/"+id+"/"+value+"/"+bsId+"/"+bsName)
  }
  changeLoanStatus2(id,value,reason,bsId,bsName){
    return this.http.get<any>(this._baseUrl+"/user/loanStatus/"+id+"/"+value+"/"+reason+"/"+bsId+"/"+bsName)
  }
  loggedIn()
  {
    return !!localStorage.getItem('_id');
  }
  logoutUser()
  {
    localStorage.removeItem('_id');
    this._router.navigate(['/login']);
  }
  deleteDocuments(user){
    return this.http.post<any>(this._baseUrl+"/salariedLaf/deleteDocuments",user)
  }
  deleteDocuments1(user){
    return this.http.post<any>(this._baseUrl+"/businessLaf/deleteDocuments",user)
  }
  getToken()
  {
    return sessionStorage.getItem('_id');
  }
  signupCMO(data){
    return this.http.post<any>(this._baseUrl+"/auth/signupCMO",data)
  }
  signupSystem(data){
    return this.http.post<any>(this._baseUrl+"/auth/signupSystem",data)
  }
  signupAdmin(data){
    return this.http.post<any>(this._baseUrl+"/auth/signupAdmin",data)
  }
  viewUpdate(id){
    return this.http.get<any>(this._baseUrl+"/user/viewUpdate/"+id)
  }
  getSystemUsers(id){
    return this.http.get<any>(this._baseUrl+"/user/getSystemUsers/"+id)
  }
  getRoleUsers(){
    return this.http.get<any>(this._baseUrl+"/user/getRoleUsers")
  }
  deleteUser(id){
    return this.http.get<any>(this._baseUrl+"/user/deleteUser/"+id)
  }
  goldRateArchive(){
    return this.http.get<any>(this._baseUrl+"/rates/goldRateArchive");
  }
  updategoldrate(user){
    return this.http.post<any>(this._baseUrl+"/rates/updategoldrate",user);
  }
  getAllFiles(){
    return this.http.get<any>(this._baseUrl+"/user/getAllFiles")
  }

  //new
  getLoanAmount(id:any){
    return this.http.get<any>(this._baseUrl+"/user/getLoanAmount/"+id);
  }

  addLoanStatus(data:any){
    return this.http.post<any>(this._baseUrl+"/user/addLoan/", data);
  }

  getUserData(id:any){
    return this.http.get<any>(this._baseUrl+"/user/getUserData/"+id);
  }

  updateUserData(data:any){
    return this.http.post<any>(this._baseUrl+"/user/updateUserData", data); 
  }

  rollUpUser(data:any){
    return this.http.post<any>(this._baseUrl+"/user/rollup", data);
  }
}
