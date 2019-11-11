import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription, BehaviorSubject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

import { EnvSpecific } from './environment-specific-resolver.service';

@Injectable()
export class EnvironmentSpecificService {

  public envSpecific: EnvSpecific = null;
  public envSpecificNull: EnvSpecific = null;
  private envSpecificSubject: BehaviorSubject<EnvSpecific> = new BehaviorSubject<EnvSpecific>(null);

  constructor(private http: HttpClient) {
    console.log('EnvironmentSpecificService created');
    this.loadEnvironment().then(es => {
        this.setEnvSpecific(es);

        //return this.envSpecific;
        
    }, error => {
        console.log(error);
        return null;
    })
  }

  public loadEnvironment() {
      // Only want to do this once - if root page is revisited, it calls this again.
      if (this.envSpecific === null || this.envSpecific === undefined) {
        console.log('Loading env-specific.json');

        return this.http.get<any>('./assets/env-specific.json')
            .toPromise<EnvSpecific>();
      }

      return Promise.resolve(this.envSpecificNull);
  }

  public setEnvSpecific(es: EnvSpecific) {
    // This has already been set so bail out.
    if (es === null || es === undefined) {
        return;
    }

    this.envSpecific = es;
    // console.log(this.envSpecific);

    if (this.envSpecificSubject) {
        this.envSpecificSubject.next(this.envSpecific);
    }
  }

  /*
    Call this if you want to know when EnvSpecific is set.
  */
  public subscribe(caller: any, callback: (caller: any, es: EnvSpecific) => void) {
      this.envSpecificSubject
          .subscribe((es) => {
              if (es === null) {
                  return;
              }
              callback(caller, es);
          });
  }
}
