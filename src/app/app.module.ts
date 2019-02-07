import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { MovieListComponent } from './containers/movie-list/movie-list.component';
import { MovieComponent } from './components/movie/movie.component';
import { OverviewShorterPipe } from './pipes/overview-shorter.pipe';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { BannerComponent } from './components/banner/banner.component';
import { MovieDetailComponent } from './containers/movie-detail/movie-detail.component';
import {RouterModule} from '@angular/router';
import {routes} from './routes';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';
import { SliderComponent } from './components/slider/slider.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MovieInfoBarComponent } from './components/movie-info-bar/movie-info-bar.component';
import { CalcTimePipe } from './pipes/calc-time.pipe';
import { CovertMoneyPipe } from './pipes/covert-money.pipe';
import { ActorComponent } from './components/actor/actor.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieListComponent,
    MovieComponent,
    OverviewShorterPipe,
    SearchBarComponent,
    SpinnerComponent,
    BannerComponent,
    MovieDetailComponent,
    MovieInfoComponent,
    SliderComponent,
    MovieInfoBarComponent,
    CalcTimePipe,
    CovertMoneyPipe,
    ActorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
