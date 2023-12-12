import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const TextButtons = () => {
  return (
    <Stack spacing={2} direction="row">
      <Button>Primary</Button>
      <Button disabled>Disabled</Button>
      <Button href="#text-buttons">Link</Button>
    </Stack>
  );
};

export default TextButtons;