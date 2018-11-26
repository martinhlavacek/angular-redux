import { Component, OnInit } from '@angular/core';

import {Store} from '@ngrx/store';
import {AppState} from '../../app.state';
import { IGithubrResult } from 'src/app/models/github-result.model';


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
