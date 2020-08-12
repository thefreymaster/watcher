import React from 'react';
import './App.css';
import Container from './common/Container';
import Flex from './common/Flex';
import { BORDER, BORDER_BRIGHT, STRIPES, STRIPES_BRIGHT, COLOR_2_PERCENT_BRIGHT, COLOR_2_PERCENT } from './constants';
import Branding from './components/Branding';
import Blurb from './components/Blurb';
import { isMobile } from 'react-device-detect';
import { Context } from "./Context";
import { getStripes } from './utils';
import * as Navigation from './components/Navigation';
import Loader from './components/Loader';
import Zindex from './common/Zindex';
import Title from './components/Title';
import ThemeToggle from './components/ThemeToggle';
import Viewer from './components/Viewer';
import * as Card from './common/Card';

const App = () => {
  const { fetching, isDay } = React.useContext(Context);

  const [delay, setDelay] = React.useState(true);
  const [isExiting, setIsExiting] = React.useState(false);

  const viewerRefLT = React.createRef();
  const viewerRefRT = React.createRef();
  const viewerRefLB = React.createRef();
  const viewerRefRB = React.createRef();

  setTimeout(() => {
    setIsExiting(true);
    setTimeout(() => {
      setDelay(false)
    }, 1500);
  }, 1000);

  if (fetching) {
    return <Container />
  }
  return (
    <React.Fragment>
      <Zindex zIndex={2}>
        <Loader delayedHide={delay} isExiting={isExiting} />
      </Zindex>
      <Zindex zIndex={1}>
        <Container>
          {!isMobile
            &&
            <Flex style={{ backgroundImage: !isMobile && isDay ? STRIPES_BRIGHT : STRIPES }} direction="column" maxWidth="13%">
              <Flex style={{ borderBottom: isDay ? BORDER_BRIGHT : BORDER }} width="100%" height="33%">
                <Flex alignItems="center" height="30px" width="100%" margin={"30px 30px 30px 30px"}>
                  <Flex alignItems="center" style={{ color: '#939393' }}>
                    <Title />
                  </Flex>
                </Flex>
              </Flex>
              <Flex width="100%" height="33%"></Flex>
              <Flex style={{ borderTop: isDay ? BORDER_BRIGHT : BORDER }} width="100%" height="33%">
                {!delay && <ThemeToggle />}
              </Flex>
            </Flex>
          }
          <VerticalBar />
          <Flex direction="column" maxWidth={isMobile ? "100%" : "43%"}>
            <Flex style={{ borderBottom: isDay ? BORDER_BRIGHT : BORDER, backgroundImage: getStripes(isDay) }} width="100%" height={isMobile ? "25%" : "50%"}>
              <Card.Container>
                <Card.Title>Living Room</Card.Title>
                <Card.Body>
                  <Viewer ref={viewerRefLT} port={9998} />
                </Card.Body>
              </Card.Container>
            </Flex>
            <Flex alignItems="center" justifyContent="center" width="100%" height={isMobile ? "50%" : "50%"}>
              <Card.Container>
                <Card.Title>Side Gate</Card.Title>
                <Card.Body>
                  {/* <Viewer ref={viewerRefLB} port={9998} /> */}
                </Card.Body>
              </Card.Container>
            </Flex>
          </Flex>
          <Flex direction="column" maxWidth={isMobile ? "100%" : "43%"}>
            <Flex style={{ borderBottom: isDay ? BORDER_BRIGHT : BORDER, backgroundImage: getStripes(isDay) }} width="100%" height={isMobile ? "25%" : "50%"}>
              <Card.Container>
                <Card.Title>Back Yard</Card.Title>
                <Card.Body>
                  {/* <Viewer ref={viewerRefLT} port={9998} /> */}
                </Card.Body>
              </Card.Container>
            </Flex>
            <Flex alignItems="center" justifyContent="center" width="100%" height={isMobile ? "50%" : "50%"}>
              <Card.Container>
                <Card.Title>Side Gate</Card.Title>
                <Card.Body>
                  {/* <Viewer ref={viewerRefLB} port={9998} /> */}
                </Card.Body>
              </Card.Container>
            </Flex>
          </Flex>
        </Container >
      </Zindex>

    </React.Fragment>
  );
}

const VerticalBar = () => {
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

export default App;
