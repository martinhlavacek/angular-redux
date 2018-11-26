import { Component, OnInit } from '@angular/core';

import {Store} from '@ngrx/store';
import {AppState} from '../../app.state';
import * as GithubActions from '../github.actions';


@Component({
  selector: 'app-search-github',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  searchGithubUser(name: string) {
      this.store.dispatch(new GithubActions.GithubUserRequest(name));
  }

  ngOnInit() {
  }

}
