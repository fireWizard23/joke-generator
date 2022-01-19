import { Pipe, PipeTransform } from '@angular/core';
import { AnyTypeJoke, getJokeString, Joke } from '../misc/joke.model';

@Pipe({
  name: 'jokify'
})
export class JokifyPipe implements PipeTransform {

  transform(value: Joke) : string {
    if(value == null) {
      return "";
    }
    return getJokeString(value)!;
  }

}
