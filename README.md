# PouchDB, Angular 2, and Couchbase Example

Example project for synchronizing documents between platforms and Couchbase with only Angular 2 and PouchDB.

## The Requirements

This project depends on the following dependencies in order to be successful:

* Node.js 4.0+
* Angular 2 CLI
* Couchbase Sync Gateway

To develop Angular 2 applications you need the Angular CLI which is downloadable via the Node Package Manager (NPM) found in Node.js.  For synchronization at least one Couchbase Sync Gateway instance must be available.

## Installation and Configuration

Download the project from GitHub and execute the following to download all of the Angular 2 project dependencies:

```
npm install
```

With the dependencies installed, use launch Sync Gateway with the **sync-gateway-config.json** configuration file found at the root of the project.

In the project's **src/app/app.component.ts** file, change the hostname to match that of your Sync Gateway instance.

The project can be sampled by executing:

```
ng serve
```

The above command will serve the application at http://www.localhost:4200.

## Resources

Couchbase - [http://www.couchbase.com](http://www.couchbase.com)

PouchDB - [https://pouchdb.com](https://pouchdb.com)

Angular 2 - [https://angular.io](https://angular.io)