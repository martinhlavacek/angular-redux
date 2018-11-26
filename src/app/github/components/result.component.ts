import { Component, OnInit } from '@angular/core';

import {Store} from '@ngrx/store';
import {AppState} from '../../app.state';
import * as GithubActions from '../github.actions';
import { Observable } from 'rxjs';
import { IGithubrResult } from 'src/app/models/github-result.model';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-result-github',
  templateUrl: './result.component.html'
})
export class ResultComponent implements OnInit {

  githubUser: IGithubrResult;

  constructor(private store: Store<AppState>) {
      this.store.select('githubUser').subscribe(result => {
          this.githubUser = result;
      });
   }


  ngOnInit() {
  }

}
