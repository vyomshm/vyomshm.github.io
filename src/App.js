import { Box, Button, Heading, Grommet, Image, Main, Text } from 'grommet';
import { Chat, Github, LinkedinOption, Mail, Twitter } from 'grommet-icons';
import illHead from './assets/03.svg';
// import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";

const theme = {
  global: {
    colors: {
      brand: '#000',
    },
    font: {
      family: 'Book',
    },
  },
};

// const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
// const FadeUp = batch(Fade(), Move(), Sticky());

function App() {
  return (
    <Grommet theme={theme} full>
      <Main>
        <Box justify="center" align="center" margin="large">
          <Image fit="cover" src={illHead} />
        </Box>
        <Box justify="top" align="center" fill>
          <Heading color>Hello, I'm Vyom 👋</Heading>
          <Text>I build products for the internet. DMs open!</Text>
          <Box direction="row" margin="medium">
            <Button icon={<Github color="brand" />} href="https://github.com/vyomshm" target="_blank" rel="noopener noreferrer"/>
            <Button icon={<Twitter color="brand" />} href="https://twitter.com/VCrizpy" target="_blank" rel="noopener noreferrer"/>
            <Button icon={<LinkedinOption color="brand" />} href="https://www.linkedin.com/in/VCrizpy" target="_blank" rel="noopener noreferrer"/>
            <Button icon={<Mail color="brand" />} href="mailto:vyomshm@gmail.com" target="_blank" rel="noopener noreferrer"/>
            <Button icon={<Chat color="brand" />} href="https://wa.me/919873970908" target="_blank" rel="noopener noreferrer"/>
          </Box>
        </Box>
      </Main>
    </Grommet>
  );
}

export default App;
