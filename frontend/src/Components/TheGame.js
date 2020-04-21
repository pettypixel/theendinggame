import React, { Component } from 'react';
import { Button } from 'react-bootstrap';


class Options extends Component {



    startGame(){
      //  let state = {};
      //bör innehålla startvärdena när spelet sätts igång
    }

    handleQuestion(){
        //ska hantera allt som har med frågan/texten att göra
    }

    handleOption(playersChoice){
        //ska hantera svaren som användaren väljer  och i sin tur påverkar frågorna
        let answer = document.getElementById('btns').innerText;
        alert(answer);
        
        if(playersChoice){
            console.log("YES button was clicked");
        } else {
            console.log("NO button was clicked");
        }
    }

render () { 
    return <div>
        <h2 id='welcome'> Hi and Welcome to this test and find out if you're allowed to go outside</h2>
        <h3 id="question"> Q1: Are you young? </h3>
        
        <div id="btns"> 
            <Button id="yesbtn" variant="light" onClick={this.handleOption}> Yes </Button>
            <Button id="nobtn" variant="light" onClick={this.handleOption}> No </Button>
        </div>
    </div>
    }
}

export default Options;