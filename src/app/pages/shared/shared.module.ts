import { NgModule, ModuleWithProviders } from '@angular/core';
import { FileUploadComponent } from './file-upload/file-upload.component';


@NgModule({
    declarations: [
        
        FileUploadComponent,
       
    ],
    imports: [
       
    ],
    exports: [
        
        FileUploadComponent,
        
    ],
    providers: [
        
    ],
    entryComponents: [
        
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders>{
            ngModule: SharedModule,
            declarations: [],
            providers: [],
            // entryComponents: [CustomActionViewComponent]
        };
    }
}