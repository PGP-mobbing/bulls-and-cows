export interface IUser {
    email: string;
    password: string;
    username?: string;
  }

 export interface IGameplayProps {
    user: Object;
    room: string;
    socket: any;
  }

 export interface iOpponentPlayer {
    number: string,
    room: string, 
    user: { email: string, username: string },
  }

 export interface IBoardProps {
    opponentsNumber: string,
    myNumber: string,
    socket: any,
    myInitialTurn: boolean,
    user: Object,
    room: string
  }

export interface IGuess {
  guess: string,
  bulls: number, 
  cows: number
}