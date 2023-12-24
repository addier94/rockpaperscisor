export type GameShape = {
  name: 'rock' | 'paper' | 'scissors'; // Specify the possible values for 'name'
  iconSrc: string;
  altText: string;
  ringColorStart: string;
  ringColorEnd: string;
};

type GameDataHashTable = {
  [key in GameShape['name']]: GameShape; // Use the 'name' property values as keys
};

export const gameOptions: GameDataHashTable = {
  rock: {
    name: 'rock',
    iconSrc: '/images/icon-rock.svg',
    altText: 'Rock Icon',
    ringColorStart: 'ring-primary-rock-gradient-start',
    ringColorEnd: 'after:ring-primary-rock-gradient-end/50',
  },
  paper: {
    name: 'paper',
    iconSrc: '/images/icon-paper.svg',
    altText: 'Paper Icon',
    ringColorStart: 'ring-primary-paper-gradient-start',
    ringColorEnd: 'after:ring-primary-paper-gradient-end/50',
  },
  scissors: {
    name: 'scissors',
    iconSrc: '/images/icon-scissors.svg',
    altText: 'Scissors Icon',
    ringColorStart: 'ring-primary-scissors-gradient-start',
    ringColorEnd: 'after:ring-primary-scissors-gradient-end/50',
  },
};
