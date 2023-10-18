import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TitleComponent } from './title/title.component';
import { IconMenuComponent } from './icon-menu/icon-menu.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    TitleComponent,
    IconMenuComponent,
  ],
  imports: [CommonModule, AppMaterialModule, RouterModule, MatToolbarModule],
  exports: [
    AppMaterialModule,
    CommonModule,
    FooterComponent,
    HeaderComponent,
    TitleComponent,
    IconMenuComponent,
  ],
})
export class SharedModule {}
