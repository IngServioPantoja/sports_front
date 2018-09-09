import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AthletesComponent } from '../athletes/athletes.component';
import { SportsComponent } from '../sports/sports.component';


const routes: Routes = [

    {
        path: 'athletes',
        children: [
            {
                path: 'list',
                component: AthletesComponent
            }
        ]
    },
    {
        path: 'sports',
        children: [
            {
                path: 'list',
                component: SportsComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {

}
