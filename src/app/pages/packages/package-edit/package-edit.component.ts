import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { VgAPI } from 'videogular2/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PackagesService } from '../packages.service';
import { NbToastrService } from '@nebular/theme';


@Component({
    selector: 'package-edit',
    styleUrls: ['./package-edit.component.scss'],
    templateUrl: './package-edit.component.html',
})
export class PackagesEditComponent implements OnInit {

    @ViewChild("packageForm") packageForm: any;
    
    data: any = {};
    submitted: boolean = false;
    selectedStatus: string = '';

    constructor(private _route: ActivatedRoute, private _packagesService: PackagesService,
        private _cdRef: ChangeDetectorRef, private _toastrService: NbToastrService, 
        private _router: Router) {

    }

    ngOnInit(): void {
        this._route.params.subscribe(params => {

            let id = params['id'];
            this._packagesService.getPackage(id).subscribe(result => {
                this.data = result.data;
                if (result.data.packageType == "Time") {
                    this.data.packageType = "duration";
                } else {
                    this.data.packageType = "storage";
                }

                if (result.data.isActive) {
                    this.selectedStatus = "active";
                } else {
                    this.selectedStatus = "inactive"
                }

            });
        });


    }

    onChange(event) {

        this._cdRef.detectChanges();

    }

    onSubmit() {

        this.submitted = true;

        if (!this.packageForm.valid) {
            return;
        }

        this._packagesService.updatePackage(this.packageForm.value).subscribe(response => {

            if (response.status == "error") {
                this._toastrService.danger("", "Unable to update package! Please try again later.");
                return;
            }

            this._toastrService.success("", "Package updated successfully!");

            this._router.navigate(["/pages/packages/packages-list"]);

        }, error => {
            this._toastrService.danger("", "Unable to update package! Please try again later.");
        });
    }

    onCancel() {

        this._router.navigate(["/pages/packages/packages-list"]);

    }
}

