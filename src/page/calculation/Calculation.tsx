import { FormProvider, useForm } from 'react-hook-form';
import { object, string, z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { Tab, Container } from './styled';
import { SingleUnit, CSSUnitUnit } from './components';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import { SyntheticEvent, useMemo, useState } from 'react';
import { Tabs, useTheme } from '@mui/material';
import { TabPanel } from '../../ui/tab-panel';
import { STORAGE_KEY } from './components/const';

type Inputs = {
  rem: string;
  px: string;
  pxs: string[];
  rems: string[];
};

export const Calculation = () => {
  const schema = object({
    px: z.string().optional(),
    rem: z.string().optional(),
    pxs: z.array(string()).optional(),
    rems: z.array(string()).optional(),
  });

  const useFormMethods = useForm<Inputs>({
    defaultValues: { rem: '', px: '', pxs: [], rems: [] },
    resolver: zodResolver(schema),
  });

  const initialRootFontSize = useMemo(() => {
    const localRootFontSize = localStorage.getItem(STORAGE_KEY);
    return localRootFontSize ? Number(localRootFontSize) : 16;
  }, []);
  const [rootFontSize, setRootFontSize] = useState(initialRootFontSize);

  const [tabValue, setTabValue] = useState('1');
  const handleTabChange = (event: SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };

  const appTheme = useTheme();

  return (
    <FormProvider {...useFormMethods}>
      <Container defaultValue={'1'}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          sx={{ backgroundColor: appTheme.palette.primary.main }}
          aria-label='tabs'
        >
          <Tab value='1'>
            one
            <SwapHorizIcon />
            one
          </Tab>
          <Tab value='2'>
            css
            <SwapHorizIcon />
            css
          </Tab>
        </Tabs>
        <>
          <TabPanel value={tabValue} index={'1'}>
            <SingleUnit
              rootFontSize={rootFontSize}
              setRootFontSize={setRootFontSize}
            />
          </TabPanel>
          <TabPanel value={tabValue} index={'2'}>
            <CSSUnitUnit
              rootFontSize={rootFontSize}
              setRootFontSize={setRootFontSize}
            />
          </TabPanel>
        </>
      </Container>
    </FormProvider>
  );
};
