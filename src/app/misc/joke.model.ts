export type JokeFlags = {
    nsfw: boolean,
    religious: boolean,
    political: boolean,
    racist: boolean,
    sexist: boolean
  }

export type JokeError = {
  error: boolean;
  internalError: boolean;
  code: number;
  message: string;
  causedBy: string[];
  additionalInfo: string;
  timestamp: number;
}
  
export type JokeType = 'twopart' | 'single';
export type JokeCategory = 'any' | 'programming' | "pun" | "misc" | "dark" | "spooky" | "christmas"
export type JokeLang = string;

export interface JokeRequestData {
  readonly error: boolean;
}

export interface Joke {
  readonly category: JokeCategory,
  readonly type: JokeType,
  readonly flags: JokeFlags,
  readonly explicit: boolean,
  readonly id: number,
  readonly safe: boolean,
  readonly lang: JokeLang,
  
} 

export interface AnyJoke  extends JokeRequestData, Joke{
  
} 

export interface SingleJoke extends JokeRequestData, Joke {
  readonly joke: string,
  readonly type: 'single'
}

export interface TwoPartJoke extends JokeRequestData, Joke {
  readonly delivery: string,
  readonly setup: string,
  readonly type: 'twopart'
}

export interface MultiJoke extends JokeRequestData{

  amount: number;
  jokes: Joke[]
}


export function jokeToError(joke: Joke) : JokeError {
  return (joke as any) as JokeError;
}

export function getJokeString(joke : Joke) : string | null {
    if(joke.type === 'twopart') {
      let twopartJoke = joke as TwoPartJoke;
      return `${twopartJoke.setup} \n${twopartJoke.delivery}`;

    } else if(joke.type == 'single') {
      let singleJoke = joke as SingleJoke;

      return singleJoke.joke;
    }

    return null;


}
