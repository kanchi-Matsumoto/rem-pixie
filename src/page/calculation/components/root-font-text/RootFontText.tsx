import { IconButton, Input } from '@mui/material';
import React, { ChangeEvent, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { RootFontTextContainer } from './styled';
import ClickAwayListener from '@mui/base/ClickAwayListener';

type RootFontTextsProps = {
  rootFontSize: number;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

export const RootFontTexts: React.FC<RootFontTextsProps> = ({
  rootFontSize,
  onChange,
}) => {
  const [editMode, setEditMode] = useState(false);
  return (
    <RootFontTextContainer>
      <span>
        based on a root font-size of {!editMode && <>{rootFontSize}</>}
      </span>
      {editMode && (
        <ClickAwayListener onClickAway={() => setEditMode(!editMode)}>
          <Input
            type='number'
            value={rootFontSize}
            onChange={onChange}
            sx={{ width: '35px', margin: '8px' }}
          />
        </ClickAwayListener>
      )}
      <IconButton onClick={() => setEditMode(!editMode)}>
        <EditIcon />
      </IconButton>
    </RootFontTextContainer>
  );
};
