import { Root, Main, Sidebar, SideBarContainer, SettingPage } from './styled';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';
import { SyntheticEvent, useState } from 'react';
import { Tab, Tabs, ThemeProvider, createTheme } from '@mui/material';
import { Calculation } from './page/calculation';
import { Info } from './page/info';

function App() {
  const [modeValue, setModeValue] = useState('1');
  const handleModeChange = (event: SyntheticEvent, newValue: string) => {
    setModeValue(newValue);
  };

  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <Root>
        <Main>
          {modeValue === '1' && <Calculation />}
          {modeValue === '2' && <Info />}
          {modeValue === '3' && <SettingPage>Coming Soon....</SettingPage>}
        </Main>
        <Sidebar>
          <SideBarContainer>
            <Tabs
              orientation='vertical'
              value={modeValue}
              onChange={handleModeChange}
              aria-label='tabs'
              variant='fullWidth'
              sx={{
                margin: 'auto',
              }}
              centered
            >
              <Tab
                icon={
                  <SwapHorizIcon
                    sx={{
                      width: '30px',
                      height: '30px',
                      paddingBottom: '20px',
                    }}
                  />
                }
                value='1'
              />
              <Tab
                icon={
                  <InfoIcon
                    sx={{
                      width: '30px',
                      height: '30px',
                      paddingBottom: '20px',
                    }}
                  />
                }
                value='2'
              />
              <Tab
                icon={<SettingsIcon sx={{ width: '30px', height: '30px' }} />}
                value='3'
              />
            </Tabs>
          </SideBarContainer>
        </Sidebar>
      </Root>
    </ThemeProvider>
  );
}

export default App;
