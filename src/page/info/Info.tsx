import {
  DescriptionOfMultiple,
  DescriptionOfSingle,
  EmpathizeText,
  Example,
  Root,
} from './styled';

export const Info = () => {
  return (
    <Root>
      <DescriptionOfSingle>
        The tab one to one converts one px and one rem. Enter a single number in
        either form. As you type, the value is reactively reflected in the form.
      </DescriptionOfSingle>
      <DescriptionOfMultiple>
        For the css tab, enter the css as is. The px or rem in the css will be
        converted.
        <EmpathizeText>
          px or rem will be converted even if multiple numbers are entered.
        </EmpathizeText>
        Please note that entering only a number will not be calculated.
        <Example>{`ex.) font-size: 16px; -> font-size: 1rem;`}</Example>
      </DescriptionOfMultiple>
    </Root>
  );
};
