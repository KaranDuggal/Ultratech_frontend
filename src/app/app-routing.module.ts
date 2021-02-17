import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'user',
    loadChildren:()=>import('./modules/core/user/user.module').then(mod=>mod.UserModule)
  },
  // {
  //   path:'property',
  //   loadChildren:()=>import('./modules/core/property/property.module').then(mod=>mod.PropertyModule)
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
