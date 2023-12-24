type gameOption = 'rock' | 'paper' | 'scissors';

export const defineTheWinner = (clientPlayer: gameOption, machinePlayer: gameOption): string => {
  if(clientPlayer === 'paper' && machinePlayer === 'rock'
    || clientPlayer === 'rock' && machinePlayer === 'scissors'
    || clientPlayer === 'scissors' && machinePlayer === 'paper') {
      return 'YOU WIN';
  } else if(clientPlayer === machinePlayer) {
    return 'DRAW';
  } else {
    return 'YOU LOSE';
  }
}