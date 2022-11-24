import { Component } from "@angular/core"
import { ActivatedRoute } from "@angular/router"
import { HighwayDetails } from "../highway-details"
import { HighwayService } from "../highway.service"

@Component({
    selector: "app-highway-details",
    templateUrl: "./highway-details.component.html",
    styleUrls: ["./highway-details.component.css"],
})
export class HighwayDetailsComponent {
    highwayId?: string | null
    highwayDetails?: HighwayDetails

    constructor(
        private route: ActivatedRoute,
        private highways: HighwayService
    ) {}

    ngOnInit() {
        this.highwayId = this.route.snapshot.paramMap.get("id")

        if (this.highwayId === null) {
            return
        }

        this.highways
            .getHighwayParkingLorries(this.highwayId)
            .subscribe((hwDetails) => {
                this.highwayDetails = hwDetails
            })
    }
}
