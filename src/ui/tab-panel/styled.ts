import { styled } from '@mui/system';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';

export const StyledTabPanel = styled(TabPanelUnstyled)(
  ({ theme }) => `
  width: 100%;
  font-size: 0.875rem;
  background: ${theme.palette.mode === 'dark' ? '#212121' : '#fff'};
  border-radius: 12px;
  opacity: 0.6;
  `
);
