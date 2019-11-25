import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadcsvComponent } from './uploadcsv/uploadcsv.component';


const routes: Routes = [
  { path: '',component: UploadcsvComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
