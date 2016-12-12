import { Component, OnInit, NgZone } from '@angular/core';
import { PouchDBService } from "./pouchdb.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    public people: Array<any>;
    public form: any;

    public constructor(private database: PouchDBService, private zone: NgZone) {
        this.people = [];
        this.form = {
            "username": "",
            "firstname": "",
            "lastname": ""
        }
    }

    public ngOnInit() {
        this.database.sync("http://localhost:4984/nraboy");
        this.database.getChangeListener().subscribe(data => {
            for(let i = 0; i < data.change.docs.length; i++) {
                this.zone.run(() => {
                    this.people.push(data.change.docs[i]);
                });
            }
        });
        this.database.fetch().then(result => {
            this.people = [];
            for(let i = 0; i < result.rows.length; i++) {
                this.people.push(result.rows[i].doc);
            }
        }, error => {
            console.error(error);
        });
    }

    public insert() {
        if(this.form.username && this.form.firstname && this.form.lastname) {
            this.database.put(this.form.username, this.form);
            this.form = {
                "username": "",
                "firstname": "",
                "lastname": ""
            }
        }
    }

}
