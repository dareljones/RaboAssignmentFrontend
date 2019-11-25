import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadcsvComponent } from './uploadcsv/uploadcsv.component';


const routes: Routes = [
  { path: 'displaystatement',component: UploadcsvComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
