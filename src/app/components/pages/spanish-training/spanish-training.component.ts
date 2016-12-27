import * as _ from 'lodash';

import { Component, OnInit } from '@angular/core';
import {SpanishTrainingService} from './spanish-training.service';
import {Dictionary, TranslationDetails} from './Dictionary';

@Component({
  selector: 'app-spanish-training',
  templateUrl: './spanish-training.component.html',
  styleUrls: ['./spanish-training.component.scss']
})
export class SpanishTrainingComponent implements OnInit {

  private direction: string = 'from-spanish';
  private dict: Dictionary;
  private curTranslation: TranslationDetails;
  private toTranslate: string;
  private toAnswer: string[];
  private curAnswer: string;
  private msg: string;
  private running: boolean = true;
  private curSecondsInterval: any;
  private curSeconds: number = 0;

  constructor(private spanishTrainingService: SpanishTrainingService) {
    this.dict = spanishTrainingService.getDictionary();
    this.nextTranslation();
  }

  ngOnInit() {
    this.curSecondsInterval = setInterval(() => ++this.curSeconds, 1000);
  }

  public nextTranslation(): void {
    this.curAnswer = '';
    this.curTranslation = this.dict.randomTranslation();
    if (!this.curTranslation) {
      clearInterval(this.curSecondsInterval);
      this.running = false;
    }
    if (this.direction == 'from-spanish') {
      this.toTranslate = this.curTranslation.translation.spanish;
      this.toAnswer = this.curTranslation.translation.translations;
    } else {
      this.toTranslate = this.curTranslation.translation.translations.join('/');
      this.toAnswer = [this.curTranslation.translation.spanish];
    }
  }

  public directionChanged(newVal: string): void {
    this.direction = newVal;
    this.nextTranslation();
  }

  public submitAnswer(): void {
    this.msg = null;
    if (_.includes(this.toAnswer, this.curAnswer.trim())) {
      this.msg = 'Correct!';
      this.dict.hide(this.curTranslation.translation);
      setTimeout(() => {
        this.msg = '';
        this.nextTranslation();
      }, 1000);
    } else {
      this.msg = 'Oops... that\'s incorrect';
      this.dict.increaseAttempts(this.curTranslation.translation);
      this.curSeconds += 10;
      setTimeout(() => this.msg = null, 1500);
    }
  }

  public skipAnswer(): void {
    this.msg = 'Right answer was: \'' + this.toAnswer + '\'';
    this.dict.increaseAttempts(this.curTranslation.translation);
    this.curSeconds += 5;
    setTimeout(() => {
      this.msg = null;
      this.nextTranslation();
    }, 1500);
  }
}
