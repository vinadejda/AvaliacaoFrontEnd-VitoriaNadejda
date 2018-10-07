import { Component } from '@angular/core';
import { legends } from '../names/nameslist';
import { Reorder } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage {
  legends: Array<string> = [];

  ngOnInit() {
    this.legends = legends;
  }

  //Função para reordernar os itens do array
  reorderItems(ev) {
    let itemToMove = this.legends.splice(ev.detail.from, 1)[0];
    this.legends.splice(ev.detail.to, 0, itemToMove);
  }


}
