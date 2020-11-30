import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { CursosindexComponent } from './pages/cursosindex/cursosindex.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';
import { LandingComponent } from './pages/landing/landing.component';
import { AptitudesComponent } from './pages/aptitudes/aptitudes.component';
import { CurriculumComponent } from './pages/curriculum/curriculum.component';
import { fromEvent } from 'rxjs';



const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'home', component: LandingComponent},
  {path: 'about', component: AboutComponent},
  {path: 'cursos', component: CursosindexComponent},
  {path: 'aptitudes', component: AptitudesComponent},
  {path: 'curriculum', component: CurriculumComponent},
  {path: 'item/:componente/:id', component: ItemComponent},
  {path: 'search/:componente/:termino',  pathMatch: 'full', component: SearchComponent},
  {path: '*', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
