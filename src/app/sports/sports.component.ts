import { Component, OnInit } from '@angular/core';
import { SportsService } from '../sports.service';
import { Sport } from '../../dto/sport-dto';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  sports: Sport[]
  athletesActive: Boolean = false;

  constructor(private sportsService: SportsService) { }

  async ngOnInit() {
    this.sports = await this.sportsService.getSports();
  }

  public showAthletes() {
    console.log("showAthletes");
    this.athletesActive = true;
  }

}
