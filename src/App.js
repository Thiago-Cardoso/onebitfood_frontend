import React, {Fragment} from 'react';
import "./App.scss";
import { Container, Section } from 'rbx';
import Header from "./components/header";
 
const App = () => (
  <Fragment>
    <Header />
    <Section>
      <Container>
        One Bit Food
      </Container>
    </Section>
  </Fragment>
)
 
export default App;