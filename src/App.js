import React from 'react';
import './App.css';
import Container from './common/Container';
import Flex from './common/Flex';
import { BORDER, STRIPES } from './constants';
import Branding from './components/Branding';
import Blurb from './components/Blurb';
import { isMobile } from 'react-device-detect';
import Sidebar from "react-sidebar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import {
  AwesomeButton,
} from 'react-awesome-button';
import "react-awesome-button/dist/themes/theme-one.css";



const TwoPercent = () => (
  !isMobile &&
  <Flex direction="column" style={{ borderRight: BORDER, borderLeft: BORDER }} maxWidth="2%">
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
)

const MobileNavigation = () => {
  return isMobile
    &&
    <Flex direction="column" alignItems="center" height="30px" width="100%">
      <Flex />
      <Flex flexGrow />
      <Flex style={{ width: 200 }} margin="20px">
        <a target="_blank" className="link" style={{ textDecoration: "none", color: 'white' }} href="https://bringhome.me">Bringhome.me</a>
      </Flex>
      <Flex style={{ width: 200 }} margin="20px">
        <a target="_blank" className="link" style={{ textDecoration: "none", color: 'white' }} href="https://www.youtube.com/channel/UC1nF2hzsIfDu-cpum80GFJQ">YouTube</a>
      </Flex>
      <Flex style={{ width: 200 }} margin="20px">
        <a target="_blank" className="link" style={{ textDecoration: "none", color: 'white' }} href="https://github.com/thefreymaster">Github</a>
      </Flex>
      <Flex style={{ width: 200 }} margin="20px">
        <a target="_blank" className="link" style={{ textDecoration: "none", color: 'white' }} href="https://www.linkedin.com/in/evanfreymiller/">Social</a>
      </Flex>
      <Flex style={{ width: 200 }} margin="20px">
        <a target="_blank" className="link" style={{ textDecoration: "none", color: 'white' }} href="mailto:evanjfreymiller@gmail.com">Digital</a>
      </Flex>
      {/* <Flex style={{ color: '#939393' }} maxWidth="100px">
    Paper
  </Flex> */}
    </Flex>
}

const App = () => {
  const [sideMenuIsOpen, setSideMenuIsOpen] = React.useState(false)
  return (
    <Container >
      {!isMobile
        &&
        <Flex style={{ backgroundImage: STRIPES }} direction="column" maxWidth="13%">
          <Flex style={{ borderBottom: BORDER }} width="100%" height="33%">
            <Flex alignItems="center" height="30px" width="100%" margin={"30px 30px 30px 30px"}>
              <Flex alignItems="center" style={{ color: '#939393' }}>
                <div style={{ fontFamily: "'Sora', sans-serif", color: 'white', width: '100%', textAlign: 'center' }}>EJF</div>
              </Flex>
            </Flex>
          </Flex>
          <Flex width="100%" height="33%"></Flex>
          <Flex style={{ borderTop: BORDER }} width="100%" height="33%"></Flex>
        </Flex>
      }
      <TwoPercent />
      <Flex direction="column" maxWidth={isMobile ? "100%" : "30%"}>
        <Flex style={{ borderBottom: BORDER, backgroundImage: isMobile && STRIPES }} width="100%" height={isMobile ? "25%" : "33%"}>
          {isMobile
            &&
            <Sidebar
              sidebar={<MobileNavigation />}
              open={sideMenuIsOpen}
              onSetOpen={() => setSideMenuIsOpen(false)}
              styles={{ sidebar: { background: "#333333", transform: '100ms ease-in-out' } }}
            >
              <Flex margin="30px" justifyContent="flex-end">
                <AwesomeButton ripple size='icon' onPress={() => setSideMenuIsOpen(true)} type="secondary"><FontAwesomeIcon size="sm" icon={faEllipsisV} /></AwesomeButton>
                {/* <button onClick={() => setSideMenuIsOpen(true)}><FontAwesomeIcon icon={faEllipsisV} /></button> */}
              </Flex>
            </Sidebar>
          }
        </Flex>
        <Flex alignItems="center" justifyContent="center" width="100%" height={isMobile ? "50%" : "33%"}>
          <Branding />
        </Flex>
        <Flex justifyContent="center" alignItems="flex-end" width="100%" style={{ borderTop: BORDER, backgroundImage: isMobile && STRIPES }} height="33%">
          {isMobile && <Blurb />}
          {!isMobile && <div style={{ color: '#ffffff24', fontSize: 10, position: 'fixed', bottom: 10 }}>EvanFreymiller.com. Copyright 2020. All rights reserved.</div>}
        </Flex>
      </Flex>
      <TwoPercent />
      {
        !isMobile
        &&
        <Flex style={{ backgroundImage: STRIPES }} direction="column" maxWidth="53%">
          <Flex style={{ borderBottom: BORDER }} width="100%" height={isMobile ? "25%" : "33%"}>
            <Flex alignItems="center" height="30px" width="100%" margin={"30px 30px 30px 30px"}>
              <Flex />
              <Flex flexGrow />
              <Flex>
                <a target="_blank" className="link" style={{ textDecoration: "none" }} href="https://bringhome.me">Bringhome.me</a>
              </Flex>
              <Flex>
                <a target="_blank" className="link" style={{ textDecoration: "none" }} href="https://www.youtube.com/channel/UC1nF2hzsIfDu-cpum80GFJQ">YouTube</a>
              </Flex>
              <Flex>
                <a target="_blank" className="link" style={{ textDecoration: "none" }} href="https://github.com/thefreymaster">Github</a>
              </Flex>
              <Flex>
                <a target="_blank" className="link" style={{ textDecoration: "none" }} href="https://www.linkedin.com/in/evanfreymiller/">Social</a>
              </Flex>
              <Flex>
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
