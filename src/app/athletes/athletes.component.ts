import { Component, OnInit } from '@angular/core';
import { AthletesService } from '../athletes.service';
import { Athlete } from '../../dto/athlete-dto';

@Component({
  selector: 'app-athletes',
  templateUrl: './athletes.component.html',
  styleUrls: ['./athletes.component.css']
})
export class AthletesComponent implements OnInit {

  athletes: Athlete[]
  constructor(private athletesService: AthletesService) { }

  async ngOnInit() {
    this.athletes = await this.athletesService.getAthletes();
  }

}
