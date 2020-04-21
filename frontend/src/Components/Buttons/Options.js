import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '../../Styles/button.css'

class Options extends Component {

  /*firstAnswer = [];
  secondAnswer = [];
  lastAnswer = []; */

  constructor(props) {
    super(props);
    this.state = {
      firstAnswer: [
        { "Yes": 1 },
        { "No": 0 }
      ],
      secondAnswer: [
        { "Yes": 1 },
        { "No": 0 }
      ],
      lastAnswer: [
        { "Yes": 1 },
        { "No": 0 }
      ]
    }
    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent() {

  }

  handleAnswer(answer) {
    if (this.firstAnswer.value === 0) {
      console.log("You've clicked Yes");
    } else {
      console.log("Go to question 2");
    }

    if (this.secondAnswer.value === 0) {
      console.log("You've clicked Yes");
    } else {
      console.log("Go to question 3");
    }

    console.log(answer);
  }

  render() {
    return <div>
        <h2> Hi and Welcome to this test and find out if you're allowed to go outside</h2>            
            <Button className="answer"> YES I WANT TO CONTINUE </Button>
            <Button className="answer"> NO I WANT TO STAY </Button>
        </div>
  }
}

export default Options;