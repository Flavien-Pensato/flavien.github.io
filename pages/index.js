import React, { Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components';


import { Title } from '../modules/components/title.component';
import { Contact } from '../modules/components/contacts.component';

const Wrapper = styled.div`
  img {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    z-index: -1;
  }

  display: flex;
  justify-content: space-between;
  
  @media (max-width: 700px) {
    justify-content: center;
    align-items: center;
  }
`;

const App = () => (
  <Wrapper>
    <img async src="/static/assets/background.png" />
    <Title />
    <Contact />
  </Wrapper>
);

export default App;
