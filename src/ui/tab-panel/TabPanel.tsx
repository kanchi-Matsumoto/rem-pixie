import { ReactNode } from 'react';
import { StyledTabPanel } from './styled';

type TabPanelProps = {
  children?: ReactNode;
  index: string;
  value: string;
};
export const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div role='tabpanel' hidden={value !== index} {...other}>
      {value === index && (
        <StyledTabPanel value={value}>{children}</StyledTabPanel>
      )}
    </div>
  );
};
