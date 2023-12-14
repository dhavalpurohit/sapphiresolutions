import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ListComponent } from '../app/list/list.component'
import { LoginComponent } from '../app/login/login.component'

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'list', component: ListComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
