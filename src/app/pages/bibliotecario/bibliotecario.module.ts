import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BibliotecarioComponent } from './bibliotecario.component';
import { RouterModule } from '@angular/router';
import { BibliotecarioRoutes } from './bibliotecario.routes';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [BibliotecarioComponent],
  exports: [BibliotecarioComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(BibliotecarioRoutes),
    TranslateModule
  ]
})
export class BibliotecarioModule { }
