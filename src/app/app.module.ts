import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { ButtonMaterialComponent } from './components/button-material/button-material.component';
import { TypographyComponent } from './components/typography/typography.component';
import { MatIconsComponent } from './components/mat-icons/mat-icons.component';
import { MatBadgeComponent } from './components/mat-badge/mat-badge.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    TypographyComponent,
    ButtonMaterialComponent,
    MatIconsComponent,
    MatBadgeComponent,
    WelcomePageComponent,
    ToolBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
