import { Component, OnInit, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    template: `
    <markdown [data]="content"></markdown>
    `,
})
export class HomeComponent {
    public readMeUrl  = 'https://api.github.com/nellycheboi12/Store/master/README.md';
    content: any;
    constructor(private http: Http)  {
        
    }
    ngOnInit()  {
        this.getReadMeContent();
    }

    getReadMeContent() : void {
       this.http.get(this.readMeUrl).subscribe(result => {
            this.content = "";
        });
    }
}


