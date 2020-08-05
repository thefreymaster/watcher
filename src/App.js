import React from 'react';
import './App.css';
import Container from './common/Container';
import Flex from './common/Flex';
import { BORDER, BORDER_BRIGHT, STRIPES, STRIPES_BRIGHT, LINKS, COLOR, COLOR_BRIGHT, COLOR_2_PERCENT_BRIGHT, COLOR_2_PERCENT } from './constants';
import Branding from './components/Branding';
import Blurb from './components/Blurb';
import { isMobile } from 'react-device-detect';
import Sidebar from "react-sidebar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV, faExternalLinkAlt, faMobileAlt, faDice } from '@fortawesome/free-solid-svg-icons';
import { faYoutubeSquare, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import "react-awesome-button/dist/themes/theme-one.css";
import { Context } from "./Context";
import { getStripes } from './utils';

const App = () => {
  const { dispatch, sideMenuIsOpen, isDay } = React.useContext(Context);

  return (
    <Container>
      {!isMobile
        &&
        <Flex style={{ backgroundImage: !isMobile && isDay ? STRIPES_BRIGHT : STRIPES }} direction="column" maxWidth="13%">
          <Flex style={{ borderBottom: isDay ? BORDER_BRIGHT : BORDER }} width="100%" height="33%">
            <Flex alignItems="center" height="30px" width="100%" margin={"30px 30px 30px 30px"}>
              <Flex alignItems="center" style={{ color: '#939393' }}>
                <div style={{ fontFamily: "'Sora', sans-serif", color: isDay ? COLOR : COLOR_BRIGHT, width: '100%', textAlign: 'center' }}>EJF</div>
              </Flex>
            </Flex>
          </Flex>
          <Flex width="100%" height="33%"></Flex>
          <Flex style={{ borderTop: isDay ? BORDER_BRIGHT : BORDER }} width="100%" height="33%"></Flex>
        </Flex>
      }
      <TwoPercent />
      <Flex direction="column" maxWidth={isMobile ? "100%" : "30%"}>
        <Flex style={{ borderBottom: isDay ? BORDER_BRIGHT : BORDER, backgroundImage: getStripes(isDay) }} width="100%" height={isMobile ? "25%" : "33%"}>
          {isMobile
            &&
            <Sidebar
              sidebar={<MobileNavigation />}
              open={sideMenuIsOpen}
              onSetOpen={() => dispatch({ type: "SET_SIDE_MENU_CLOSED" })}
              styles={{ sidebar: { background: "#333333", transform: '100ms ease-in-out' } }}
            >
              <Flex margin="30px" justifyContent="flex-end">
                {/* <AwesomeButton ripple size='icon' onPress={() => setSideMenuIsOpen(true)} type="secondary"><FontAwesomeIcon size="sm" icon={faEllipsisV} /></AwesomeButton> */}
                <FontAwesomeIcon
                  size="lg"
                  color={isDay ? 'white' : COLOR}
                  icon={faEllipsisV}
                  onClick={() => dispatch({ type: 'SET_SIDE_MENU_OPEN' })}
                  style={{
                    padding: "10px 17px 10px 17px",
                    backgroundColor: isDay ? COLOR : COLOR_BRIGHT,
                    borderRadius: 100,
                  }}
                  className="navigation-button"
                />
              </Flex>
            </Sidebar>
          }
        </Flex>
        <Flex alignItems="center" justifyContent="center" width="100%" height={isMobile ? "50%" : "33%"}>
          <Branding />
        </Flex>
        <Flex justifyContent="center" alignItems={isMobile ? "center" : "flex-end"} width="100%" style={{
          borderTop: isDay ? BORDER_BRIGHT : BORDER,
          backgroundImage: getStripes(isDay)
        }} height="33%">
          {isMobile && <Blurb />}
          {!isMobile && <div style={{ color: '#ffffff24', fontSize: 10, position: 'fixed', bottom: 10 }}>EvanFreymiller.com. Copyright 2020. All rights reserved.</div>}
        </Flex>
      </Flex>
      <TwoPercent />
      {
        !isMobile
        &&
        <Flex style={{ backgroundImage: isDay ? STRIPES_BRIGHT : STRIPES }} direction="column" maxWidth="53%">
          <Flex style={{ borderBottom: isDay ? BORDER_BRIGHT : BORDER }} width="100%" height={isMobile ? "25%" : "33%"}>
            <Flex alignItems="center" height="30px" width="100%" margin={"30px 30px 30px 30px"}>
              <Flex />
              <Flex flexGrow />
              <Flex>
                <a target="_blank" className={isDay ? "link-bright" : "link"} style={{ textDecoration: "none" }} href="https://bringhome.me">Bringhome.me</a>
              </Flex>
              <Flex>
                <a target="_blank" className={isDay ? "link-bright" : "link"} style={{ textDecoration: "none" }} href="https://www.youtube.com/channel/UC1nF2hzsIfDu-cpum80GFJQ">YouTube</a>
              </Flex>
              <Flex>
                <a target="_blank" className={isDay ? "link-bright" : "link"} style={{ textDecoration: "none" }} href="https://github.com/thefreymaster">Github</a>
              </Flex>
              <Flex>
                <a target="_blank" className={isDay ? "link-bright" : "link"} style={{ textDecoration: "none" }} href="https://www.linkedin.com/in/evanfreymiller/">Social</a>
              </Flex>
              <Flex>
                <a target="_blank" className={isDay ? "link-bright" : "link"} style={{ textDecoration: "none" }} href="mailto:evanjfreymiller@gmail.com">Digital</a>
              </Flex>
              {/* <Flex style={{ color: '#939393' }} maxWidth="100px">
              Paper
            </Flex> */}
            </Flex>
          </Flex>
          <Flex justifyContent="center" alignItems="center" width="100%" height="33%">
            <Blurb />
          </Flex>
          <Flex style={{ borderTop: isDay ? BORDER_BRIGHT : BORDER }} width="100%" height="33%">

          </Flex>
        </Flex>
      }
    </Container >
  );
}

const TwoPercent = () => {
  const { isDay } = React.useContext(Context);
  return (
    !isMobile &&
    <Flex direction="column" style={{ borderRight: isDay ? BORDER_BRIGHT : BORDER, borderLeft: isDay ? BORDER_BRIGHT : BORDER }} maxWidth="2%">
      <Flex backgroundColor={isDay ? COLOR_2_PERCENT_BRIGHT : COLOR_2_PERCENT} style={{ borderBottom: isDay ? BORDER_BRIGHT : BORDER }} width="100%" height={isMobile ? "25%" : "33%"}>
        <Flex style={{ borderBottom: isDay ? BORDER_BRIGHT : BORDER }} width="100%" height="33%" margin={"30px 30px 30px 30px"}>
          <Flex style={{ color: '#939393' }} maxWidth="100px">
          </Flex>
        </Flex>
      </Flex>
      <Flex backgroundColor={isDay ? COLOR_2_PERCENT_BRIGHT : COLOR_2_PERCENT} width="100%" height="33%" />
      <Flex backgroundColor={isDay ? COLOR_2_PERCENT_BRIGHT : COLOR_2_PERCENT} style={{ borderTop: isDay ? BORDER_BRIGHT : BORDER }} width="100%" height="33%" />
    </Flex>
  )
}

const MobileNavigation = () => {
  const { dispatch, isDay } = React.useContext(Context);

  return isMobile
    &&
    <Flex direction="column" alignItems="center" height={window.innerHeight} width="100%">
      <Flex flexGrow="none" justifyContent="center" alignItems="center" style={{ width: 200, borderBottom: isDay ? BORDER_BRIGHT : BORDER }} padding="20px">
        <a target="_blank" className="link" style={LINKS} href="https://bringhome.me">Bringhome.me</a>
        <Flex />
        <FontAwesomeIcon size="md" color="white" icon={faExternalLinkAlt} />
      </Flex>
      <Flex flexGrow="none" justifyContent="center" alignItems="center" style={{ width: 200, borderBottom: isDay ? BORDER_BRIGHT : BORDER }} padding="20px">
        <a target="_blank" className="link" style={{ textDecoration: "none", color: 'white' }} href="https://www.youtube.com/channel/UC1nF2hzsIfDu-cpum80GFJQ">YouTube</a>
        <Flex />
        <FontAwesomeIcon size="md" color="white" icon={faYoutubeSquare} />
      </Flex>
      <Flex flexGrow="none" justifyContent="center" alignItems="center" style={{ width: 200, borderBottom: isDay ? BORDER_BRIGHT : BORDER }} padding="20px">
        <a target="_blank" className="link" style={{ textDecoration: "none", color: 'white' }} href="https://github.com/thefreymaster">Github</a>
        <Flex />
        <FontAwesomeIcon size="md" color="white" icon={faGithubSquare} />
      </Flex>
      <Flex flexGrow="none" justifyContent="center" alignItems="center" style={{ width: 200, borderBottom: isDay ? BORDER_BRIGHT : BORDER }} padding="20px">
        <a target="_blank" className="link" style={{ textDecoration: "none", color: 'white' }} href="https://www.linkedin.com/in/evanfreymiller/">Social</a>
        <Flex />
        <FontAwesomeIcon size="md" color="white" icon={faLinkedin} />
      </Flex>
      <Flex flexGrow="none" justifyContent="center" alignItems="center" style={{ width: 200, borderBottom: isDay ? BORDER_BRIGHT : BORDER }} padding="20px">
        <a target="_blank" className="link" style={{ textDecoration: "none", color: 'white' }} href="mailto:evanjfreymiller@gmail.com">Digital</a>
        <Flex />
        <FontAwesomeIcon size="md" color="white" icon={faMobileAlt} />
      </Flex>
      <Flex />
      <Flex flexGrow="none" justifyContent="center" alignItems="center" style={{ width: 200, borderTop: isDay ? BORDER_BRIGHT : BORDER }} padding="20px">
        <div className="link" style={{ color: "white" }} onClick={() => {
          dispatch({ type: "SET_SIDE_MENU_CLOSED" });
          isDay ? dispatch({ type: "SET_IS_NIGHT" }) : dispatch({ type: "SET_IS_DAY" });
        }}>Toggle Theme</div>
        <Flex />
        <FontAwesomeIcon size="md" color="white" icon={faDice} />
      </Flex>
      {/* <Flex style={{ color: '#939393' }} maxWidth="100px">
    Paper
  </Flex> */}
    </Flex>
}

export default App;
