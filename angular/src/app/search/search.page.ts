import { Component } from '@angular/core';
import { legends } from '../names/nameslist';

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss']
})
export class SearchPage {
  searchInput: string;
  results = [];

  ngOnInit() {
  }

  onSearch() {
    //verifica se searchInput está vazio
    if (this.searchInput == "") {
      this.results.length = 0;
    }
    //caso não esteja vazio
    else {
      //verifica se searchInput é igual a searchInput com letras minusculas usando o métod toLowerCase()
      if (this.searchInput == this.searchInput.toLowerCase()) {
        this.results = legends.filter(legends => legends.toLowerCase().includes(this.searchInput));
      }
      //se tiver letras maiuscula não realiza a pesquisa e altera o resultado para zero
      else {
        this.results.length = 0;
      }
    }
  }
}
