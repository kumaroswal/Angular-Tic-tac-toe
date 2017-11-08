import { Component, Input  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  person = 'X';
  finalWinner = null;
  blocks = Array(16).fill(null);

  hasWon() {
    const winningStates = [
      [0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15],
      [0, 4, 8, 12], [1, 5, 9, 13], [2, 6, 10, 14], [3, 7, 11, 15],
      [0, 5, 10, 15], [3, 6, 9, 12]
    ];
    for (let state of winningStates) {
        if ( this.blocks[state[0]] && this.blocks[state[0]] === this.blocks[state[1]]
            && this.blocks[state[1]] === this.blocks[state[2]] && this.blocks[state[2]] === this.blocks[state[3]]) {
              return true;
        }
    }
    return false;
  }

  implementTurn(position) {
    if(!this.finalWinner && !this.blocks[position] ){
      this.blocks[position] = this.person;
      if(this.hasWon()) {
        this.finalWinner = this.person;
      }
      this.person = this.person === 'X' ? 'O' : 'X';
    }
  }

  resetMe() {
    this.finalWinner = null;
    this.person = 'X';
    this.blocks = Array(16).fill(null);
  }

  get resultAnnouncement(){
    if(this.finalWinner)
      return `${this.finalWinner} wins`;
    else
      return `${this.person}'s turn`;
  }

}
