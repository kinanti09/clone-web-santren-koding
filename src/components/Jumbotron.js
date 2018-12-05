import React,{Component} from 'react';
import { Jumbotron, Container } from 'reactstrap';

class JumboTron extends Component{
    render(){
        return(
            <div>
                <Jumbotron Fluid>
                    <Container Fluid>
                        <h1>Fluid jumbotron</h1>
                        <p >Jumbotron</p>
                    </Container>
                </Jumbotron>
            </div>
        );        
    };
}

export default JumboTron;