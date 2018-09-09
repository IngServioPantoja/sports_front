import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Sport } from '../dto/sport-dto';

const API_URL = environment.apiURL;
const editorials = '/sports';

@Injectable()
export class SportsService {

  constructor(private http: HttpClient) { }

  getSports(): Promise<Sport[]> {
    return this.http.get<Sport[]>(API_URL + editorials).toPromise();
  }
}
