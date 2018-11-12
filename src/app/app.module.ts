import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';

import {UsedAngualarMaterial} from './angularmaterial.modoule';


import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';



@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
  ],
  imports: [
    BrowserModule,
    UsedAngualarMaterial,
    DragDropModule,
    FormsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
