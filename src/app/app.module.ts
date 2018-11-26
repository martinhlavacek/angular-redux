import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';

import { GithubEffects} from './github/github.effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers/reducers';
import { SearchComponent} from './github/components/search.component';
import { ResultComponent} from './github/components/result.component';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';

import { GithubService } from './github/github.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EffectsModule.forRoot([
      GithubEffects
    ]),
    StoreModule.forRoot(reducers),
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : [],
    HttpClientModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
