import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './shared/material-module/material-module';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import {
  DateAdapter,
  MatNativeDateModule,
  NativeDateAdapter,
  MAT_DATE_FORMATS,
  MatDateFormats
} from '@angular/material';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { MoviesComponent, MovieDetailsDialog } from './modules/movies/movies.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { FiltersComponent } from './modules/filters/filters.component';
import { GetGenreNamePipe } from './shared/pipe/getGenreName';
@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieDetailsDialog,
    FiltersComponent,
    GetGenreNamePipe
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpModule,
    HttpClientModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  entryComponents: [MoviesComponent, MovieDetailsDialog],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
