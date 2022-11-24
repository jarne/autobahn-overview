import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { HttpClientModule } from "@angular/common/http"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { HighwayListComponent } from "./highway-list/highway-list.component"
import { HighwayDetailsComponent } from "./highway-details/highway-details.component"

@NgModule({
    declarations: [AppComponent, HighwayListComponent, HighwayDetailsComponent],
    imports: [BrowserModule, HttpClientModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
