import { Injectable } from "@angular/core";
import { Resolve, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { EnvironmentSpecificService } from "./environment-specific.service";

@Injectable()
export class EnvironmentSpecificResolver implements Resolve<EnvSpecific> {
    constructor(private envSpecificSvc: EnvironmentSpecificService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<EnvSpecific> {

        return this.envSpecificSvc.loadEnvironment()
            .then(es => {
                this.envSpecificSvc.setEnvSpecific(es);
                return this.envSpecificSvc.envSpecific;
            }, error => {
                console.log(error);
                return null;
            });
    }
}

export class EnvSpecific {
    apiUrl: string;
}