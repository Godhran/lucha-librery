import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { GeneratorSettingsComponent } from './generator-settings/generator-settings.component';
import { GeneratorOutputComponent } from './generator-output/generator-output.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GeneratorSettingsComponent,
    GeneratorOutputComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
