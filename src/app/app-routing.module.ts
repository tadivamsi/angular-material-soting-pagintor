import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from './button/button.component';

import { GridComponent } from './grid/grid.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageComponent } from './page/page.component';




const routes: Routes = [{path:"",component:NavbarComponent},
                        {path:"page",component:PageComponent},
                        {path:"grid",component:GridComponent},
                        {path:"button",component:ButtonComponent},
                        {path:"logout",component:NavbarComponent}]
                        
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
