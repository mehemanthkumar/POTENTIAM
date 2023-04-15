import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PostCreateComponent } from './post-data/post-create/post-create.component';
import { PostDataComponent } from './post-data/post-data.component';

const routes: Routes = [
  { path: '',  redirectTo: '/posts', pathMatch: 'full' },
  { path: 'posts', pathMatch: 'full', component: PostDataComponent},
  { path: 'post-create', component:PostCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
