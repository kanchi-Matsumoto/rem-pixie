import { styled } from '@mui/system';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import TabsUnstyled from '@mui/base/TabsUnstyled';

export const Container = styled(TabsUnstyled)({
  display: 'flex',
  flexDirection: 'column',
});

export const Tab = styled(TabUnstyled)(
  ({ theme }) => `

  color: #fff;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  background-color: transparent;
  width: 100%;
  padding: 12px;
  margin: 6px 6px;
  border: none;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  &:hover {
    background-color: ${theme.palette.primary.light};
  }

  &:focus {
    color: #fff;
    outline: 3px solid ${theme.palette.primary.dark};
  }

  &.${tabUnstyledClasses.selected} {
    background-color: #fff;
    color: ${theme.palette.primary.main};
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
);
