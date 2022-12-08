import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FlightModel } from "../models/Fligth.model";
import { GeneralData } from "../config/general.data";
import { JourneyModel } from "../models/Journey.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class Services {
    private urlFlights: string = GeneralData.URL_FLIGHT;
    private urlBack: string = GeneralData.URL_BACK;
    private flights: FlightModel[] = [];
    constructor(private http: HttpClient) { }

    MoneyChange(origin: string, destination: string): Observable<JourneyModel> {
        return this.http.post<JourneyModel>(`${this.urlBack}`, {Origin: origin, Destination: destination},
        {headers: new HttpHeaders()});
      }
            
}

