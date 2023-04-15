import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { PostReducer } from './post-data/post-state/post-reducers';
import { PostsEffects } from './post-data/post-state/posts-effects';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { PostDataComponent } from './post-data/post-data.component';
import { PostCreateComponent } from './post-data/post-create/post-create.component';

@NgModule({
  declarations: [
    AppComponent,
    PostDataComponent,
    PostCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ Posts: PostReducer }),
    EffectsModule.forRoot([PostsEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
