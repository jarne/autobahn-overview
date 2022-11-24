import { Component } from "@angular/core"
import { HighwayNetwork } from "../highway-network"
import { HighwayService } from "../highway.service"

@Component({
    selector: "app-highway-list",
    templateUrl: "./highway-list.component.html",
    styleUrls: ["./highway-list.component.css"],
})
export class HighwayListComponent {
    highwayNetwork?: HighwayNetwork

    constructor(private highways: HighwayService) {}

    ngOnInit() {
        this.highways.getHighwayNetwork().subscribe((hwNetwork) => {
            this.highwayNetwork = hwNetwork
        })
    }
}
