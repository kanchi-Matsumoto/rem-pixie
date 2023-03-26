import { TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { FlexContainer, PxRemFieldWrapper } from '../styled';
import React, { ChangeEvent, useCallback } from 'react';
import { convertPxToRem, convertRemToPx } from '../utils';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import { RootFontTexts } from '../root-font-text';
import { STORAGE_KEY } from '../const';

type SingleUnitProps = {
  rootFontSize: number;
  setRootFontSize: (rootFontSize: number) => void;
};

export const SingleUnit: React.FC<SingleUnitProps> = ({
  rootFontSize,
  setRootFontSize,
}) => {
  const { setValue, getValues, control } = useFormContext();
  const handleChangeRootFontSize = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const inputtedValue = e.target.value;
      const regex = /^[0-9\b]+$/;
      if (inputtedValue !== '' || regex.test(inputtedValue)) {
        const { rem } = getValues();
        const newPx = convertRemToPx(rem, Number(inputtedValue));
        const newRem = convertPxToRem(newPx, Number(inputtedValue));
        setValue('px', newPx);
        setValue('rem', newRem);
        setRootFontSize(Number(inputtedValue));
        localStorage.setItem(STORAGE_KEY, inputtedValue);
      }
    },
    []
  );

  return (
    <FlexContainer>
      <PxRemFieldWrapper>
        <Controller
          name='px'
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              error={fieldState.invalid}
              helperText={fieldState.error?.message}
              type='text'
              label='px'
              sx={{ width: 250 }}
              margin='normal'
              onChange={(e) => {
                field.onChange(e);
                setValue('rem', convertPxToRem(e.target.value, rootFontSize));
              }}
            />
          )}
        />
        <SwapHorizIcon />
        <Controller
          name='rem'
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              error={fieldState.invalid}
              helperText={fieldState.error?.message}
              type='text'
              label='rem'
              sx={{ width: 250 }}
              margin='normal'
              onChange={(e) => {
                field.onChange(e);
                setValue('px', convertRemToPx(e.target.value, rootFontSize), {
                  shouldValidate: true,
                  shouldDirty: true,
                });
              }}
            />
          )}
        />
      </PxRemFieldWrapper>
      <RootFontTexts
        rootFontSize={rootFontSize}
        onChange={handleChangeRootFontSize}
      />
    </FlexContainer>
  );
};
