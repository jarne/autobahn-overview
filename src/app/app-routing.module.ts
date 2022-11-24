import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { HighwayDetailsComponent } from "./highway-details/highway-details.component"
import { HighwayListComponent } from "./highway-list/highway-list.component"

const routes: Routes = [
    {
        path: "",
        component: HighwayListComponent,
    },
    {
        path: "highway/:id",
        component: HighwayDetailsComponent,
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
