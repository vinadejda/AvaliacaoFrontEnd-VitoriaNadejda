import { Component } from '@angular/core';
import { legends } from '../names/nameslist';

@Component({
  selector: 'app-edit',
  templateUrl: 'edit.page.html',
  styleUrls: ['edit.page.scss']
})
export class EditPage {

  legends: Array<string> = [];
  currentName = null;
  currentIndex = null;
  editingCurrentName = null;

  constructor() {

  }

  ngOnInit() {
    this.legends = legends;
  }

  //Define o valor do index, currentName e editingCurrentName para a edição
  onItemClicked(val) {
    this.currentIndex = legends.indexOf(val);
    this.currentName = legends[this.currentIndex];
    this.editingCurrentName = this.currentName;
  }

  //Altera o valor da legends[index] para o novo novo valor digitado 
  submit() {
    legends[this.currentIndex] = this.editingCurrentName;
    this.currentName = null;
  }

  //Deixa um valor nulo para a o currentName, para cancelar o opção de editar
  cancelEdit() {
    this.currentName = null;
  }

}


