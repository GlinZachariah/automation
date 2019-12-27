import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobsComponent } from './jobs/jobs.component';
import { DatabasesComponent } from './databases/databases.component';


const routes: Routes = [
  {path:"jobs",component:JobsComponent},
  {path:"databases",component:DatabasesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
