import React from 'react';
import { Button } from 'react-bootstrap';
import '../../Styles/button.css'

function Answer () {
    return(
        <div>
            <Button className="answer"> YES I WANT TO CONTINUE </Button>
            <Button className="answer"> NO I WANT TO STAY </Button>
        </div>
    );
}

export default Answer;