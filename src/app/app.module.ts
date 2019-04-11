import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { UiSwitchModule } from 'ngx-toggle-switch';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GeneralComponent } from './CustomerAgreementPage/general/general.component';
import { AlbeidersComponent } from './CustomerAgreementPage/albeiders/albeiders.component';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { BediendenComponent } from './CustomerAgreementPage/bedienden/bedienden.component';
import { JobstudentenComponent } from './CustomerAgreementPage/jobstudenten/jobstudenten.component';
import { FlexiComponent } from './CustomerAgreementPage/flexi/flexi.component';
import { FatureparametreComponent } from './CustomerAgreementPage/fatureparametre/fatureparametre.component';
import { TitleComponent } from './CustomerAgreementPage/title/title.component';
import { InputboxComponent } from './inputbox/inputbox.component';

  
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GeneralComponent,
    AlbeidersComponent,
    BediendenComponent,
    JobstudentenComponent,
    FlexiComponent,
    FatureparametreComponent,
    TitleComponent,
    InputboxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiSwitchModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    TypeaheadModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
