import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';

export const Root = styled('div')({
  height: '300px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const Main = styled('div')({
  flex: 3,
  padding: '16px',
  width: '800px',
});

export const Sidebar = styled('div')({
  flex: 1,
  borderLeft: '1px solid #ccc',
  height: '100%',
});

export const SideBarContainer = styled('div')({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const IconWrapper = styled('div')({
  padding: '16px',
  width: '30px',
  height: '30px',
});

export const Container = styled(TabsUnstyled)({
  display: 'flex',
  flexDirection: 'column',
});

export const SettingPage = styled('div')({
  fontSize: '50px',
  width: '100%',
  textAlign: 'center',
});
