import { TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { FlexContainer, PxRemFieldWrapper } from '../styled';
import React, { ChangeEvent, useCallback } from 'react';
import { convertPxsToRems, convertRemsToPxs } from '../utils';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import { RootFontTexts } from '../root-font-text';
import { STORAGE_KEY } from '../const';

type MultiUnitProps = {
  rootFontSize: number;
  setRootFontSize: (rootFontSize: number) => void;
};

export const CSSUnitUnit: React.FC<MultiUnitProps> = ({
  rootFontSize,
  setRootFontSize,
}) => {
  const { setValue, getValues, control } = useFormContext();
  const handleChangeRootFontSize = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const inputtedValue = e.target.value;
      const regex = /^[0-9\b]+$/;
      if (inputtedValue !== '' || regex.test(inputtedValue)) {
        const { rems } = getValues();
        const newPxs = convertRemsToPxs(rems, Number(inputtedValue));
        setValue('pxs', newPxs);
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
          name='pxs'
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              placeholder='pxs'
              label='pxs'
              error={fieldState.invalid}
              helperText={fieldState.error?.message}
              type='text'
              sx={{ width: 250 }}
              margin='normal'
              multiline
              rows={4}
              onChange={(e) => {
                field.onChange(e);
                setValue(
                  'rems',
                  convertPxsToRems(e.target.value, rootFontSize),
                  {
                    shouldValidate: true,
                    shouldDirty: true,
                  }
                );
              }}
            />
          )}
        />
        <SwapHorizIcon />
        <Controller
          name='rems'
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              placeholder='rems'
              label='rems'
              error={fieldState.invalid}
              helperText={fieldState.error?.message}
              type='text'
              sx={{ width: 250 }}
              margin='normal'
              multiline
              rows={4}
              onChange={(e) => {
                field.onChange(e);
                const pxs = convertRemsToPxs(e.target.value, rootFontSize);
                setValue('pxs', pxs, {
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
