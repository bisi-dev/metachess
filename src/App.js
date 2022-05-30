import Box from 'ui-box';
import { Flex, FlexCol, Relative, Text } from 'ui/es';
import Logo from '~/assets/logo.svg';
import {
  DiagramContainer,
  MenuContainer, NotiBarContainer, SheetContainer
} from '~/containers';
import { Sidebar, Viewport } from '~/layout';
import '~/styles/app.css';
import useTheme from '~/styles/useTheme';

function App() {
  const { diagram, logo } = useTheme();

  return (
    <Viewport>
      <Relative id="board" flexBasis={diagram.width}>
        <DiagramContainer />
      </Relative>

      <Sidebar id = "side">
        <FlexCol height="100%" justifyContent="space-between">
          {/* Touched by Babs */}
          <Text is="h1" textAlign="center" marginTop={30}>
            MetaChess
          </Text>

          <Flex is="figure" justifyContent="center">
            <Logo width={logo.width} height={logo.height} />
          </Flex>

          <Box padding={20} marginTop={20}>
            <MenuContainer />
          </Box>

          <Box
            flex="1"
            overflowY="scroll"
            margin={20}
            marginTop={0}
            backgroundColor="#fff"
          >
            <SheetContainer />
          </Box>

          <NotiBarContainer />
        </FlexCol>
      </Sidebar>
    </Viewport>
  );
}

export default App;
