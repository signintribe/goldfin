import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {EmergencyLoanComponent} from './emergency-loan/emergency-loan.component';
import {SalaryLoanComponent} from './salary-loan/salary-loan.component';
import {BusinessLoanComponent} from './business-loan/business-loan.component';
import {AboutusComponent} from './aboutus/aboutus.component';
import {FaqComponent} from './faq/faq.component';
import {ContactusComponent} from './contactus/contactus.component';
import {CalculatorComponent} from './calculator/calculator.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LafComponent } from './laf/laf.component';
import { Laf2Component } from './laf2/laf2.component';
import { Laf3Component } from './laf3/laf3.component';
import { Laf4Component } from './laf4/laf4.component';
import { CopComponent } from './cop/cop.component';
import { Cop2Component } from './cop2/cop2.component';
import { BranchComponent } from './branch/branch.component';
import { CmoComponent } from './cmo/cmo.component';
import { Cmo2Component } from './cmo2/cmo2.component';
import { CsoComponent } from './cso/cso.component';
import { BoComponent } from './bo/bo.component';
import { VoComponent } from './vo/vo.component';
import { Vo2Component } from './vo2/vo2.component'
import { Bo2Component } from './bo2/bo2.component';
import { VofeedbackComponent } from './vofeedback/vofeedback.component';
import { CmofeedbackComponent } from './cmofeedback/cmofeedback.component';
import { AccountComponent } from './account/account.component';
import { AddLoanSummaryComponent } from './add-loan-summary/add-loan-summary.component';
import { LafFormComponent } from './laf-form/laf-form.component';
import { VerifyComponent } from './verify/verify.component';
import { ForgotComponent } from './forgot/forgot.component';
import { LafForm2Component } from './laf-form2/laf-form2.component';
import { LafForm3Component } from './laf-form3/laf-form3.component';
import { LafForm4Component } from './laf-form4/laf-form4.component';
import { LafvComponent } from './lafv/lafv.component';
import { Lafv2Component } from './lafv2/lafv2.component';
import { Lafv3Component } from './lafv3/lafv3.component';
import { Lafv4Component } from './lafv4/lafv4.component';
import { CmoAddComponent } from './cmo-add/cmo-add.component';
import { NewPassComponent } from './new-pass/new-pass.component';
import { GetdocumentsComponent } from './getdocuments/getdocuments.component';
import { GetElibilityComponent } from './get-elibility/get-elibility.component';
import { DuepaymentsComponent } from './duepayments/duepayments.component';
import { PlanvistisComponent } from './planvistis/planvistis.component';
import { TermsComponent } from './terms/terms.component';
import { RoleboComponent } from './rolebo/rolebo.component';
import { BoregComponent } from './boreg/boreg.component';
import { NewLafComponent } from './new-laf/new-laf.component';
import { NewLaf2Component } from './new-laf2/new-laf2.component';
import { NewLaf3Component } from './new-laf3/new-laf3.component';
import { NewLaf4Component } from './new-laf4/new-laf4.component';
import { PrintlafComponent } from './printlaf/printlaf.component';
import { Printlaf2Component } from './printlaf2/printlaf2.component';
import { PrintLaf3Component } from './print-laf3/print-laf3.component';
import { SuperAdminComponent } from './super-admin/super-admin.component';
import { AddSuperAdminComponent } from './add-super-admin/add-super-admin.component';
import { AddSystemUserComponent } from './add-system-user/add-system-user.component';
import { GoldrateComponent } from './goldrate/goldrate.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'emergencyloan',
    component: EmergencyLoanComponent
  },
  {
    path: 'salaryloan',
    component: SalaryLoanComponent
  },
  {
    path: 'businessloan',
    component: BusinessLoanComponent
  },
  {
    path: 'aboutus',
    component: AboutusComponent
  },
  {
    path: 'faq',
    component: FaqComponent
  },
  {
    path: 'contactus',
    component: ContactusComponent
  },
  {
    path: 'loancalculator',
    component: CalculatorComponent
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'register',
    component : RegisterComponent
  },
  {
    path : 'laf',
    component : LafComponent
  },
  {
    path : 'laf2',
    component : Laf2Component
  },
  {
    path : 'laf3',
    component : Laf3Component
  },
  {
    path : 'laf4',
    component : Laf4Component
  },
  {
    path : 'cop',
    component : CopComponent
  },
  {
    path : 'viewForm',
    children: [
      { path: ':id', component: Cop2Component }
    ]
  },
  {
    path : 'branch',
    children: [
      { path: ':id', component: BranchComponent }
    ]
  },
  {
    path : 'cmo2',
    children: [
      { path: ':id', component: CmoComponent }
    ]
  },
  {
    path : 'voPrint',
    children: [
      { path: ':id', component: PrintlafComponent }
    ]
  },
  {
    path : 'cmoPrint',
    children: [
      { path: ':id', component: Printlaf2Component }
    ]
  },
  {
    path : 'printLoanSummary',
    children: [
      { path: ':id', component: PrintLaf3Component }
    ]
  },
  {
    path : 'cmo',
    component : Cmo2Component
  },
  {
    path : 'cso',
    component : CsoComponent
  },
  {
    path : 'bo',
    component : BoComponent
  },
  {
    path : 'vo',
    component : VoComponent
  },
  {
    path : 'bo2',
    component : Bo2Component
  },
  {
    path : 'vo2',
    children: [
      { path: ':id', component: Vo2Component }
    ]
  },
  {
    path : 'account',
    component : AccountComponent
  },
  {
    path : 'vofeedback',
    children: [
      { path: ':id', component: VofeedbackComponent }
    ]
  },
  {
    path : 'cmofeedback',
    children: [
      { path: ':id', component: CmofeedbackComponent }
    ]
  },
  {
    path : 'addLoanSummary',
    children: [
      { path: ':id', component: AddLoanSummaryComponent }
    ]
  },
  {
    path : 'lafForm',
    children: [
      { path: ':id', component: LafFormComponent }
    ]
  },
  {
    path : 'verify',
    component: VerifyComponent
  },
  {
    path : 'forgot',
    component: ForgotComponent
  },
  {
    path : 'lafForm2',
    children: [
      { path: ':id', component: LafForm2Component }
    ]
  },
  {
    path : 'lafForm3',
    children: [
      { path: ':id', component: LafForm3Component }
    ]
  },
  {
    path : 'lafForm4',
    children: [
      { path: ':id', component: LafForm4Component }
    ]
  },
  {
    path : 'lafView',
    children: [
      { path: ':id', component: LafvComponent }
    ]
  },
  {
    path : 'lafView2',
    children: [
      { path: ':id', component: Lafv2Component }
    ]
  },
  {
    path : 'lafView3',
    children: [
      { path: ':id', component: Lafv3Component }
    ]
  },
  {
    path : 'lafView4',
    children: [
      { path: ':id', component: Lafv4Component }
    ]
  },
  {
    path : 'cmoAddUser',
    component: CmoAddComponent
  },
  {
    path : 'new-password',
    children: [
      { path: ':id', component: NewPassComponent }
    ]
    
  },
  {
    path : "viewDocuments",
    children: [
      { path: ':id', component: GetdocumentsComponent }
    ]
  },
  {
    path : "eligibility",
    children: [
      { path: ':id', component: GetElibilityComponent }
    ]
  },
  {
    path : "due_payments",
    component: DuepaymentsComponent
  },
  {
    path : "planVisits",
    component: PlanvistisComponent
  },
  {
    path : "terms",
    component : TermsComponent
  }
  ,{
    path: "branchOfficer",
    component : RoleboComponent
  },
  {
    path : "branchOfficerReg",
    component : BoregComponent
  },
  {
    path: "newLaf",
    children: [
      { path: ':id', component: NewLafComponent }
    ]
  },
  {
    path: "newLaf2",
    children: [
      { path: ':id', component: NewLaf2Component }
    ]
  },
  {
    path: "newLaf3",
    children: [
      { path: ':id', component: NewLaf3Component }
    ]
  },
  {
    path: "newLaf4",
    children: [
      { path: ':id', component: NewLaf4Component }
    ]
  },
  {
    path : "superAdmin",
    component : SuperAdminComponent
  },{
    path : "addSuperAdmin",
    component : AddSuperAdminComponent
  },{
    path : "addSystemUser",
    component :AddSystemUserComponent
  },{
    path : "goldRate",
    component :GoldrateComponent
  }
  
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
