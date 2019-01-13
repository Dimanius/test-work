import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GamesComponent } from './games/games.component';
import { GameInfoComponent } from './game-info/game-info.component';
import { DevelopersComponent } from './developers/developers.component';
import { DeveloperInfoComponent } from './developer-info/developer-info.component';
import { PublishersComponent } from './publishers/publishers.component';
import { PublisherInfoComponent } from './publisher-info/publisher-info.component';

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    GameInfoComponent,
    DevelopersComponent,
    DeveloperInfoComponent,
    PublishersComponent,
    PublisherInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
