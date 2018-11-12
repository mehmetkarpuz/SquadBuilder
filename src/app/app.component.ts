import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { PlayerComponent } from './player/player.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  @ViewChild('playercontainer', { read: ViewContainerRef }) entry: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) {

  }

  createComponent(playerName: string) {
    const factory = this.resolver.resolveComponentFactory(PlayerComponent);
    const componentRef = this.entry.createComponent(factory);
    componentRef.instance.playerName = playerName;
  }
}
