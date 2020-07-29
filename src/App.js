import React from 'react';
import './App.css';
import Container from './common/Container';
import Flex from './common/Flex';
import { BORDER } from './constants';
import Branding from './components/Branding';
import Blurb from './components/Blurb';

const App = () => {
  return (
    <Container backgroundColor="#1d1d1d">
      <Flex direction="column" style={{ borderRight: BORDER }} maxWidth="15%">
        <Flex style={{ borderBottom: BORDER }} width="100%" height="33%">

        </Flex>
        <Flex width="100%" height="33%">

        </Flex>
        <Flex style={{ borderTop: BORDER }} width="100%" height="33%">

        </Flex>
      </Flex>
      <Flex direction="column" style={{ borderRight: BORDER }} maxWidth="30%">
        <Flex style={{ borderBottom: BORDER }} width="100%" height="33%">

        </Flex>
        <Flex alignItems="center" justifyContent="center" width="100%" height="33%">
          <Branding />
        </Flex>
        <Flex style={{ borderTop: BORDER }} width="100%" height="33%">

        </Flex>
      </Flex>
      <Flex direction="column" style={{ borderRight: BORDER }} maxWidth="55%">
        <Flex style={{ borderBottom: BORDER }} width="100%" height="33%">
          <Flex alignItems="center" height="30px" width="100%" margin={"30px 30px 30px 30px"}>
            <Flex />
            <Flex flexGrow />
            <Flex style={{ color: 'white' }} maxWidth="100px" margin={"0px 80px 0px 0px"}>
              <a target="_blank" style={{color: '#fff', textDecoration: "none"}} href="https://bringhome.me">Bringhome.me</a>
            </Flex>
            <Flex style={{ color: 'white' }} maxWidth="100px" margin={"0px 30px 0px 0px"}>
              <a target="_blank" style={{color: '#fff', textDecoration: "none"}} href="https://www.linkedin.com/in/evanfreymiller/">Social</a>
            </Flex>
            <Flex style={{ color: 'white' }} maxWidth="100px" margin={"0px 30px 0px 0px"}>
              <a target="_blank" style={{color: '#fff', textDecoration: "none"}} href="mailto:evanjfreymiller@gmail.com">Digital</a>
            </Flex>
            {/* <Flex style={{ color: 'white' }} maxWidth="100px">
              Paper
            </Flex> */}
          </Flex>
        </Flex>
        <Flex alignItems="center" margin="0px 0px 0px 30px" width="100%" height="33%">
          <Blurb />
        </Flex>
        <Flex style={{ borderTop: BORDER }} width="100%" height="33%">

        </Flex>
      </Flex>
    </Container>
  );
}

export default App;
