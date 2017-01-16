import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Grid, Col, Row, Clearfix} from'react-bootstrap';
import {range} from 'lodash';
import {StickyContainer, Sticky} from 'react-sticky';



class App extends Component {
  

  render() {

    const NUMBER_OF_KITTIES = 5;
    const kitties = range(0,NUMBER_OF_KITTIES).map((i) => (
      <div className="sidebar-kitty" key={i}>
        <StickyContainer style={{zIndex:2}}>
          <Sticky>
            <img src="https://placekitten.com/g/200/300" alt="kitties"/> 
          </Sticky>
          <div style={{height: "300px"}}></div>
        </StickyContainer>
      </div>

    ));



    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome Nice visitor</h2>
        </div>
        <div className="container">
          <div className="App-intro">
            <Grid>
              <Row className="show-grid">
                <Col xs={12} md={8}><p>Lorizzle ipsizzle dolor sit amizzle, away adipiscing elizzle. 
                Nullam sapizzle velizzle, boofron volutpizzle, suscipit quizzle, fo shizzle boom shackalack, get down get down. Pellentesque yo tortor. Sed eros. Sheezy izzle dolizzle dapibizzle da bomb tempizzle things. Mauris mofo rizzle sheezy turpizzle. I'm in the shizzle izzle tortizzle. Pellentesque mah nizzle rhoncizzle nisi. In hac pot funky fresh dictumst. Mofo dapibizzle. Owned gizzle urna, pretizzle check it out, mattizzle ac, eleifend vitae, nunc. Gangster suscipit. 
                Mammasay mammasa mamma oo sa dawg da bomb sizzle fo shizzle mah nizzle fo rizzle, mah home g-dizzle.</p></Col>
                <Col xs={6} md={4}>{kitties}</Col>
              </Row>

              
            </Grid>
          </div>
        </div>
      </div>
      
    );
  }
}





export default App;
