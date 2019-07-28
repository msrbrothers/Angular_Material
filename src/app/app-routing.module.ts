import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TypographyComponent } from './components/typography/typography.component';
import { ButtonMaterialComponent } from './components/button-material/button-material.component';
import { MatIconsComponent } from './components/mat-icons/mat-icons.component';
import { MatBadgeComponent } from './components/mat-badge/mat-badge.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';

const routes: Routes = [
  
  { path: 'typography', component: TypographyComponent},
  { path: 'button', component: ButtonMaterialComponent},
  {path: 'matIcon', component:MatIconsComponent},
  {path : 'Badge',component :MatBadgeComponent},
  { path: 'wecome', component: WelcomePageComponent},
  { path: 'toolbar', component: ToolBarComponent},
  
  { path: '**', redirectTo: '/wecome', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
