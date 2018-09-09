import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing-module/app-routing.module';
import { FormsModule } from '@angular/forms';
import { SportsComponent } from './sports/sports.component';
import { AthletesComponent } from './athletes/athletes.component';
import { AthletesService } from './athletes.service';
import { SportsService } from './sports.service';


@NgModule({
    declarations: [
        AppComponent,
        SportsComponent,
        AthletesComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [
        SportsService,
        AthletesService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
