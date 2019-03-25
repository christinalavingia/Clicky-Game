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
    score: 0
  };

  imageClick = event => {
    const currentChief = event.target.alt;
    const ChiefAlreadyClicked =
      this.state.clickedChief.filter(currentChief) > -1;

    if (ChiefAlreadyClicked) {
      this.setState({
        chiefs: this.state.chiefs.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedChiefs: [],
        score: 0
      });
        alert("You clicked the same Chief! You lose, play again?");

    } else {
      this.setState(
        {
          chiefs: this.state.chiefs.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedChiefs: this.state.clickedChiefs.push(
            currentChief
          ),
          score: this.state.score + 1
        },
        () => {
          if (this.state.score === 12) {
            alert("Yay! You Win!");
            this.setState({
              chiefs: this.state.chiefs.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedChiefs: [],
              score: 0
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
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.chiefs.map(chiefs => (
            <PlayerCard
              imageClick={this.imageClick}
              id={chiefs.id}
              key={chiefs.id}
              image={chiefs.image}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default App;