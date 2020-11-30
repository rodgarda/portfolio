import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './pages/search/search.component';
import { CursosindexComponent } from './pages/cursosindex/cursosindex.component';
import { LandingComponent } from './pages/landing/landing.component';
import { HourzeroPipe } from './pipes/hourzero.pipe';
import { AptitudesComponent } from './pages/aptitudes/aptitudes.component';
import { CurriculumComponent } from './pages/curriculum/curriculum.component';
import { TitulacionComponent } from './pages/titulacion/titulacion.component';
import { JornadasComponent } from './pages/jornadas/jornadas.component';
import { ReconocimientosComponent } from './pages/reconocimientos/reconocimientos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ItemComponent,
    SearchComponent,
    CursosindexComponent,
    LandingComponent,
    HourzeroPipe,
    AptitudesComponent,
    CurriculumComponent,
    TitulacionComponent,
    JornadasComponent,
    ReconocimientosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
