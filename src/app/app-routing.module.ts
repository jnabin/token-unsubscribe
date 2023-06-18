import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TokenUnsubscribeComponent } from './token-unsubscribe/token-unsubscribe.component';
import { UnsubscribeConfimationComponent } from './unsubscribe-confimation/unsubscribe-confimation.component';

const routes: Routes = [
  {
    path: 'token-unsubscribe',
    component: TokenUnsubscribeComponent
  },
  {
    path: 'token-unsubscribe/confirmation',
    component: UnsubscribeConfimationComponent
  },
  {
    path: '',
    redirectTo: 'token-unsubscribe',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'token-unsubscribe',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
