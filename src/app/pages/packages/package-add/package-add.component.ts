import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { PackagesService } from '../packages.service';
import { NbToastrService } from '@nebular/theme';

@Component({
    selector: 'package-add',
    styleUrls: ['./package-add.component.scss'],
    templateUrl: './package-add.component.html',
})
export class PackagesAddComponent {

    @ViewChild("packageForm") packageForm: any;
    selectedStatus: string = 'active';
    submitted: boolean = false;

    constructor(private _cdRef: ChangeDetectorRef, private _router: Router,
        private _packagesService: PackagesService, private _toastrService: NbToastrService) {

    }

    onSubmit() {

        this.submitted = true;

        if (!this.packageForm.valid) {
            return;
        }

        this._packagesService.addPackage(this.packageForm.value).subscribe(response => {

            if (response.status == "error") {
                this._toastrService.danger("", "Unable to create a package! Please try again later.");
                return;
            }

            this._toastrService.success("", "Package created successfully!");

            this._router.navigate(["/pages/packages/packages-list"]);

        }, error => {
            this._toastrService.danger("", "Unable to create a package! Please try again later.");
        });
    }

    onCancel() {

        this._router.navigate(["/pages/packages/packages-list"]);

    }

    onChange(event) {

        this._cdRef.detectChanges();
        
    }
}

