import React from "react";
import Navbar from "./components/Navbar/Navbar.js";
import Jumbotron from "./components/Jumbotron/Jumbotron.js";
import PlayerCard from "./components/PlayerCard/PlayerCard.js";
import chiefs from "./chiefs.json";
import "./App.css";

class App extends React.Component {
  state = {
    chiefs,
    clickedChiefs: [],
    score: 0,
    highScore: 0,
    gameWon: false,
  };

  imageClick = event => {
    let chiefAlreadyClicked = false;
    const currentChief = event.target.alt;

    for (let i = 0; i < this.state.clickedChiefs.length; i++) {
      if (this.state.clickedChiefs[i] === currentChief)
        chiefAlreadyClicked = true;
    } 

    if (chiefAlreadyClicked) {
      this.setState({
        chiefs: this.state.chiefs.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedChiefs: [],
        highScore: this.state.score,
        score: 0
      });
        alert("You clicked the same Chief! You lose, play again?");

    } else {
      this.setState(
        {
          chiefs: this.state.chiefs.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedChiefs: this.state.clickedChiefs.concat(
            currentChief
          ),
          score: this.state.score + 1,

        },
        () => {
          if (this.state.score === 12) {
            alert("Yay! You Win!");
            this.setState({
              chiefs: this.state.chiefs.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedChiefs: [],
              score: 0,
              highScore: 12
            });
          }
        }
      );
    }
  };

  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
          highScore={this.state.highScore}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.chiefs.map(chief => (
            <PlayerCard
              imageClick={this.imageClick}
              id={chief.id}
              key={chief.id}
              image={chief.image}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default App;
