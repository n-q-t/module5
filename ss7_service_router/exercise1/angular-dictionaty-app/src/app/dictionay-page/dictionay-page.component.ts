import { Component, OnInit } from '@angular/core';
import {IWord} from "../model/iword";
import {DictionaryService} from "../service/dictionary.service";

@Component({
  selector: 'app-dictionay-page',
  templateUrl: './dictionay-page.component.html',
  styleUrls: ['./dictionay-page.component.css']
})
export class DictionayPageComponent implements OnInit {

  words: IWord[]=[];

  constructor(private dictionaryService: DictionaryService) {
    this.words=this.dictionaryService.getAll();
  }

  ngOnInit(): void {
  }

}
