import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http'
import { HomeComponent } from './home/home.component';
import { FilterComponent } from './home/filter/filter.component';
import { CountryListComponent } from './home/country-list/country-list.component';
import { CountryCardComponent } from './home/country-card/country-card.component';
import { CountryDetailComponent } from './home/country-detail/country-detail.component';
import { LoaderComponent } from './loader/loader.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { NoContentComponent } from './no-content/no-content.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilterComponent,
    CountryListComponent,
    CountryCardComponent,
    CountryDetailComponent,
    LoaderComponent,
    NavbarComponent,
    NoContentComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
