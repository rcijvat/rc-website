import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import {Dictionary} from './Dictionary';


@Injectable()
export class SpanishTrainingService {

  private wordsRaw = `
apenas: hardly
entonces: then
porque: because
aunque: though
dice: says
mientras: while
llega: arrive
ayuda: help
aquel: that
pared: wall
secadora: dryer
todo: everything
estos: these
este: this
ambos: both
pocas: few
cualquier: any
tampoco: neither
tambien: too
nuevamente: again
puedo: I can
realmente: truly
alrededor: around
pronto: soon
tan/tanto: so
demasiado: too much
encuentra: find
muestras: samples
ya: already
fetcha: date
antes: before
despues: after
peor: worse
realmente: really
menos: less
alli: there
plano: flat
inmediatamente: immediately
aproximademente: approximately
casi: almost
apenas: barely
aun: still/even
puedes: can
gente: people
mira: look
pareja: pair/couple
custombre: habit
  `;

  private dict: Dictionary;

  constructor() {
    this.dict = new Dictionary(this.wordsRaw);
  }

  public getDictionary() {
    return this.dict;
  }
}
