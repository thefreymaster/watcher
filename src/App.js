import React from 'react';
import './App.css';
import Container from './common/Container';
import Flex from './common/Flex';
import { BORDER } from './constants';
import Branding from './components/Branding';
import Blurb from './components/Blurb';
import { isMobile } from 'react-device-detect';

const App = () => {
  return (
    <Container >
      {!isMobile
        &&
        <Flex direction="column" maxWidth="13%">
          <Flex style={{ borderBottom: BORDER }} width="100%" height="33%">
            <Flex alignItems="center" height="30px" width="100%" margin={"30px 30px 30px 30px"}>
              <Flex />
              <Flex flexGrow />
              <Flex style={{ color: '#939393' }}>
                <div style={{ fontFamily: "'Sora', sans-serif", color: 'white' }}>EJF</div>
              </Flex>
            </Flex>
          </Flex>
          <Flex width="100%" height="33%"></Flex>
          <Flex style={{ borderTop: BORDER }} width="100%" height="33%"></Flex>
        </Flex>
      }
      <Flex direction="column" style={{ borderRight: BORDER }} maxWidth="2%">
        <Flex backgroundColor="#1d1d1d" style={{ borderBottom: BORDER }} width="100%" height={isMobile ? "25%" : "33%"}>
          <Flex style={{ borderBottom: BORDER }} width="100%" height="33%" margin={"30px 30px 30px 30px"}>
            <Flex style={{ color: '#939393' }} maxWidth="100px">
            </Flex>
          </Flex>
        </Flex>
        <Flex backgroundColor="#1d1d1d" width="100%" height="33%">

        </Flex>
        <Flex backgroundColor="#1d1d1d" style={{ borderTop: BORDER }} width="100%" height="33%">

        </Flex>
      </Flex>
      <Flex direction="column" style={{ borderRight: BORDER }} maxWidth={isMobile ? "100%" : "30%"}>
        <Flex style={{ borderBottom: BORDER }} width="100%" height={isMobile ? "25%" : "33%"}>
          {
            isMobile
            &&
            <Flex alignItems="center" height="30px" width="100%" margin={"30px 30px 30px 30px"}>
              <Flex />
              <Flex maxWidth="100px" margin={"0px 30px 0px 0px"}>
                <a target="_blank" className="link" style={{ textDecoration: "none" }} href="https://www.linkedin.com/in/evanfreymiller/">Social</a>
              </Flex>
              <Flex flexGrow />

              <Flex maxWidth="100px" margin={"0px 30px 0px 0px"}>
                <a target="_blank" className="link" style={{ textDecoration: "none" }} href="mailto:evanjfreymiller@gmail.com">Digital</a>
              </Flex>
            </Flex>
          }
        </Flex>
        <Flex alignItems="center" justifyContent="center" width="100%" height={isMobile ? "50%" : "33%"}>
          <Branding />
        </Flex>
        <Flex justifyContent="center" alignItems="center" width="100%" style={{ borderTop: BORDER }} height="33%">
          {isMobile && <Blurb />}
        </Flex>
      </Flex>
      {
        !isMobile
        &&
        <Flex direction="column" maxWidth="55%">
          <Flex style={{ borderBottom: BORDER }} width="100%" height={isMobile ? "25%" : "33%"}>
            <Flex alignItems="center" height="30px" width="100%" margin={"30px 30px 30px 30px"}>
              <Flex />
              <Flex flexGrow />
              <Flex maxWidth="100px" margin={"0px 80px 0px 0px"}>
                <a target="_blank" className="link" style={{ textDecoration: "none" }} href="https://bringhome.me">Bringhome.me</a>
              </Flex>
              <Flex maxWidth="100px" margin={"0px 30px 0px 0px"}>
                <a target="_blank" className="link" style={{ textDecoration: "none" }} href="https://www.linkedin.com/in/evanfreymiller/">Social</a>
              </Flex>
              <Flex maxWidth="100px" margin={"0px 30px 0px 0px"}>
                <a target="_blank" className="link" style={{ textDecoration: "none" }} href="mailto:evanjfreymiller@gmail.com">Digital</a>
              </Flex>
              {/* <Flex style={{ color: '#939393' }} maxWidth="100px">
              Paper
            </Flex> */}
            </Flex>
          </Flex>
          <Flex justifyContent="center" alignItems="center" width="100%" height="33%">
            <Blurb />
          </Flex>
          <Flex style={{ borderTop: BORDER }} width="100%" height="33%">

          </Flex>
        </Flex>
      }
    </Container >
  );
}

export default App;
