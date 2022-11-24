import { Injectable } from "@angular/core"
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from "rxjs"
import { HighwayNetwork } from "./highway-network"
import { HighwayDetails } from "./highway-details"

@Injectable({
    providedIn: "root",
})
export class HighwayService {
    private apiBaseUrl: string = "https://verkehr.autobahn.de/o/autobahn"

    constructor(private http: HttpClient) {}

    getHighwayNetwork(): Observable<HighwayNetwork> {
        return this.http.get<HighwayNetwork>(`${this.apiBaseUrl}/`)
    }

    getHighwayParkingLorries(hwId: string): Observable<HighwayDetails> {
        return this.http.get<HighwayDetails>(
            `${this.apiBaseUrl}/${hwId}/services/parking_lorry`
        )
    }
}
