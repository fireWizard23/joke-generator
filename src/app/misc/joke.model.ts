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
export type JokeCategory = 'any' | 'programming' 

export type Joke = {
  error: boolean,
  category: JokeCategory,
  type: JokeType,
  flags: JokeFlags,
  explicit: boolean,
  id: number,
  safe: boolean,
  lang: String,
  
} 

export type SingleJoke = {
  joke: string,
  type: 'single'
} & Joke

export type TwoPartJoke = {
  delivery: string,
  setup: string,
  type: 'twopart'
} & Joke


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
