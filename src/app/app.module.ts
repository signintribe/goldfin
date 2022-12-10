import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmergencyLoanComponent } from './emergency-loan/emergency-loan.component';
import { SalaryLoanComponent } from './salary-loan/salary-loan.component';
import { BusinessLoanComponent } from './business-loan/business-loan.component';
import { FaqComponent } from './faq/faq.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LafComponent } from './laf/laf.component';
import { CopComponent } from './cop/cop.component';
import { BranchComponent } from './branch/branch.component';
import { CmoComponent } from './cmo/cmo.component';
import { CsoComponent } from './cso/cso.component';
import { BoComponent } from './bo/bo.component';
import { Laf2Component } from './laf2/laf2.component';
import { Laf3Component } from './laf3/laf3.component';
import { Laf4Component } from './laf4/laf4.component';
import { Cmo2Component } from './cmo2/cmo2.component';
import { Cop2Component } from './cop2/cop2.component';
import { VoComponent } from './vo/vo.component';
import { Bo2Component } from './bo2/bo2.component';
import { AuthService } from './auth.service';
import { AccountComponent } from './account/account.component';
import { Vo2Component } from './vo2/vo2.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CmofeedbackComponent } from './cmofeedback/cmofeedback.component';
import { VofeedbackComponent } from './vofeedback/vofeedback.component';
import { AddLoanSummaryComponent } from './add-loan-summary/add-loan-summary.component';
import { LafFormComponent } from './laf-form/laf-form.component';
import { VerifyComponent } from './verify/verify.component';
import { ForgotComponent } from './forgot/forgot.component';
import { LafForm2Component } from './laf-form2/laf-form2.component';
import { LafForm3Component } from './laf-form3/laf-form3.component';
import { LafForm4Component } from './laf-form4/laf-form4.component';
import { CmovComponent } from './cmov/cmov.component';
import { LafvComponent } from './lafv/lafv.component';
import { Lafv2Component } from './lafv2/lafv2.component';
import { Lafv3Component } from './lafv3/lafv3.component';
import { Lafv4Component } from './lafv4/lafv4.component';
import { CmoAddComponent } from './cmo-add/cmo-add.component';
import { NewPassComponent } from './new-pass/new-pass.component';
import { SearchPipe } from './search.pipe';
import { CmoAddUserComponent } from './cmo-add-user/cmo-add-user.component';
import { GetdocumentsComponent } from './getdocuments/getdocuments.component';
import { GetElibilityComponent } from './get-elibility/get-elibility.component';
import { DuepaymentsComponent } from './duepayments/duepayments.component';
import { PlanvistisComponent } from './planvistis/planvistis.component';
import { TermsComponent } from './terms/terms.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { RoleboComponent } from './rolebo/rolebo.component';
import { BoregComponent } from './boreg/boreg.component';
import { NewLafComponent } from './new-laf/new-laf.component';
import { NewLaf2Component } from './new-laf2/new-laf2.component';
import { NewLaf3Component } from './new-laf3/new-laf3.component';
import { NewLaf4Component } from './new-laf4/new-laf4.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import { ReasonComponent } from './reason/reason.component';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { PrintlafComponent } from './printlaf/printlaf.component';
import { Printlaf2Component } from './printlaf2/printlaf2.component';
import { ToastrModule } from 'ngx-toastr';
import { PrintLaf3Component } from './print-laf3/print-laf3.component';
import { OrderModule } from 'ngx-order-pipe';
import { PopfileComponent } from './popfile/popfile.component';
import { SuperAdminComponent } from './super-admin/super-admin.component';
import { AddSuperAdminComponent } from './add-super-admin/add-super-admin.component';
import { AddSystemUserComponent } from './add-system-user/add-system-user.component';
import { ConfirmBoxComponent } from './confirm-box/confirm-box.component';
import { GoldrateComponent } from './goldrate/goldrate.component';

export function translateHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmergencyLoanComponent,
    SalaryLoanComponent,
    BusinessLoanComponent,
    FaqComponent,
    AboutusComponent,
    ContactusComponent,
    CalculatorComponent,
    LoginComponent,
    RegisterComponent,
    LafComponent,
    CopComponent,
    BranchComponent,
    CmoComponent,
    CsoComponent,
    BoComponent,
    Laf2Component,
    Laf3Component,
    Laf4Component,
    Cmo2Component,
    Cop2Component,
    VoComponent,
    Bo2Component,
    AccountComponent,
    Vo2Component,
    CmofeedbackComponent,
    VofeedbackComponent,
    AddLoanSummaryComponent,
    LafFormComponent,
    VerifyComponent,
    ForgotComponent,
    LafForm2Component,
    LafForm3Component,
    LafForm4Component,
    CmovComponent,
    LafvComponent,
    Lafv2Component,
    Lafv3Component,
    Lafv4Component,
    CmoAddComponent,
    NewPassComponent,
    SearchPipe,
    CmoAddUserComponent,
    GetdocumentsComponent,
    GetElibilityComponent,
    DuepaymentsComponent,
    PlanvistisComponent,
    TermsComponent,
    RoleboComponent,
    BoregComponent,
    NewLafComponent,
    NewLaf2Component,
    NewLaf3Component,
    NewLaf4Component,
    ReasonComponent,
    PrintlafComponent,
    Printlaf2Component,
    PrintLaf3Component,
    PopfileComponent,
    SuperAdminComponent,
    AddSuperAdminComponent,
    AddSystemUserComponent,
    ConfirmBoxComponent,
    GoldrateComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
    OrderModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatTableModule,
    HttpClientModule,
    MatDialogModule,
    ToastrModule.forRoot(),
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: translateHttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule
  ],
  providers: [{
    provide: MatDialogRef,
    useValue: {}
  },AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
