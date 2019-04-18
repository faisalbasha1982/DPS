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
import { GeneralComponent } from './customer-agreement/general/general.component';
import { AlbeidersComponent } from './customer-agreement/albeiders/albeiders.component';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { BediendenComponent } from './customer-agreement/bedienden/bedienden.component';
import { JobstudentenComponent } from './customer-agreement/jobstudenten/jobstudenten.component';
import { FlexiComponent } from './customer-agreement/flexi/flexi.component';
import { FatureparametreComponent } from './customer-agreement/fatureparametre/fatureparametre.component';
import { TitleComponent } from './title/title.component';
import { InputboxComponent } from './inputbox/inputbox.component';
import { HeadquartersComponent } from './dashboard/headquarters/headquarters.component';
import { ContactPersonComponent } from './dashboard/contact-person/contact-person.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CustomerAgreementComponent } from './customer-agreement/customer-agreement.component';

  
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
    HeadquartersComponent,
    ContactPersonComponent,
    ButtonsComponent,
    CustomerAgreementComponent,
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
