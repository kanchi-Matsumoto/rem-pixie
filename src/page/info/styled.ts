import { styled } from '@mui/system';

export const Root = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  justifyContent: 'center',
});

export const DescriptionOfSingle = styled('div')({
  border: '4px solid #1976D2',
  borderRadius: '4px',
  marginBottom: '12px',
  height: '60px',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '8px',
  fontSize: '16px',
  fontWeight: '600',
  lineHeight: '1.5',
});

export const DescriptionOfMultiple = styled('div')({
  border: '4px solid #1976D2',
  borderRadius: '4px',
  height: '160px',
  fontSize: '16px',
  padding: '8px',
  fontWeight: '600',
  lineHeight: '1.5',
});

export const EmpathizeText = styled('div')({
  fontWeight: 'bold',
  fontSize: '18px',
});

export const Example = styled('div')({
  fontWeight: 'bold',
  fontSize: '20px',
  paddingTop: '8px',
});
