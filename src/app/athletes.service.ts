import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Athlete } from '../dto/athlete-dto';
import { HttpClient } from '@angular/common/http';

const API_URL = environment.apiURL;
const editorials = '/athletes';

@Injectable()
export class AthletesService {

  constructor(private http: HttpClient) { }

  getAthletes(): Promise<Athlete[]> {
    return this.http.get<Athlete[]>(API_URL + editorials).toPromise();
  }

}
