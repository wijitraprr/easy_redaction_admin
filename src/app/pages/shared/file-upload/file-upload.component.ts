import { Component, OnInit, Input, Output, EventEmitter, HostListener, AfterViewInit } from '@angular/core';


@Component({
    selector: 'file-upload',
    templateUrl: './file-upload.component.html',
    styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit, AfterViewInit {

    errors: Array<string> = [];
    dragAreaClass: string = 'dragarea';
    @Input() projectId: number;
    @Input() sectionId: number;
    @Input() fileExt: string = "JPG, JPEG, GIF, PNG";
    @Input() maxNumberOfFiles: number = 5;
    @Input() maxUploadSize: number = 1; // 5MB
    @Input() cancelUrl: string = '';
    @Input() uploadServiceApi: string = '';
    @Input() messageHeader: string = 'upload.upload_files';

    @Output() uploadStatus = new EventEmitter();
    @Output() onUploadStart = new EventEmitter();


    selectedFiles: Array<any> = [];
    totalFilesSize: any;
    isExecuting: boolean = false;
    maxUploadSizeMessage: string = "";
    maxNumberOfFilesMessage: string = "";

    constructor() {
    }

    ngAfterViewInit(): void {


    }

    ngOnInit() {
    }

    onFileChange(event) {


    }

    @HostListener('dragover', ['$event']) onDragOver(event) {

        this.dragAreaClass = "droparea";
        event.preventDefault();
    }

    @HostListener('dragenter', ['$event']) onDragEnter(event) {

        this.dragAreaClass = "droparea";
        event.preventDefault();
    }

    @HostListener('dragend', ['$event']) onDragEnd(event) {

        this.dragAreaClass = "dragarea";
        event.preventDefault();
    }

    @HostListener('dragleave', ['$event']) onDragLeave(event) {

        this.dragAreaClass = "dragarea";
        event.preventDefault();
    }
    @HostListener('drop', ['$event']) onDrop(event) {

        this.dragAreaClass = "dragarea";
        event.preventDefault();
        event.stopPropagation();

        let files: Array<any> = Array.prototype.slice.call(event.dataTransfer.files);

        files.forEach(file => {

        });

        this.validateFileExtensions(files);

        // remove file that have invalid extension
        files = files.filter(file => {
            let ext = file.name.toUpperCase().split('.').pop() || file.name;
            let extensions = (this.fileExt.split(','))
                .map(function (x) { return x.toLocaleUpperCase().trim() });
            var exists = extensions.includes(ext);
            return exists;
        });

        this.selectedFiles.push(...files);

    }

    showFiles(files) {

    }

    remove(file) {
        this.selectedFiles.splice(this.selectedFiles.indexOf(file), 1);
    }

    removeAll() {
        this.selectedFiles = [];
    }

    onCancel() {

    }

    upload() {

        this.saveFiles(this.selectedFiles);
    }

    saveFiles(files) {



    }


    private isValidFiles(files) {

    }

    private isValidFileExtension(files) {


    }


    private isValidFileSize(file) {

    }

    private niceBytes(x): string {

        const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        let l = 0, n = parseInt(x, 10) || 0;
        while (n >= 1024) {
            n = n / 1024;
            l++;
        }

        //return(n.toFixed(n >= 10 || l < 1 ? 0 : 2) + ' ' + units[l]);
        return (n.toFixed(2) + ' ' + units[l]);
    }


    private validateFileExtensions(files: Array<any>) {

    }

    private validateFilesSize(files: Array<any>) {

    }


}