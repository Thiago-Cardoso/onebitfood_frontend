import React, {Fragment} from 'react';
import "./App.scss";
import { Container, Section } from 'rbx';
import Header from "./components/header";
import Home from './screens/home'; 


const App = () => (
  <Fragment>
    <Header />
    <Section>
      <Container>
       <Home />
      </Container>
    </Section>
  </Fragment>
)
 
export default App;