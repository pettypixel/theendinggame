import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '../../Styles/button.css'

class Options extends Component {

firstAnswer = [ 
    { "Yes": 1 },
    { "No": 0} 
];
secondAnswer = [];
lastAnswer = [];

constructor (props) {
    super(props);
    this.state = {
      firstAnswer : [ 
        { "Yes": 1 },
        { "No": 0} 
     ],
      secondAnswer : [
        { "Yes": 1 },
        { "No" : 0 }
    ],
      lastAnswer : [
        { "Yes": 1 },
        { "No" : 0 }
    ]
 }
 console.log(this.firstAnswer.value)
    this.handleEvent = this.handleEvent.bind(this);
}

handleEvent(event){
    if(event.value === 1) {
        console.log("Inside the first if in handleEvent");
    }
}

handleAnswer(){
  //  console.log(this.firstAnswer +  "hello");

    if ( this.firstAnswer.value === 0 ){

        console.log("You've clicked Yes");
    } else{
        console.log("Go to question 2");
    }

    if( this.secondAnswer.value === 0 ){
        console.log("You've clicked Yes");
    } else{
        console.log("Go to question 3");
    }

    console.log("world");
}

render () { 
    return  <div>
        <h2> Hi and Welcome to this test and find out if you're allowed to go outside</h2>            
            <Button className="yes" onClick={this.handleAnswer}> YES I WANT TO CONTINUE </Button>
            <Button className="no"> NO I WANT TO STAY </Button>
        </div>
    }
}

export default Options;