import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { RouteReuseStrategy } from "@angular/router";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NSRouteReuseStrategy } from "nativescript-angular/router/ns-route-reuse-strategy";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        NativeScriptModule,
        NativeScriptUISideDrawerModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        {provide: RouteReuseStrategy, useClass: NSRouteReuseStrategy}
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
