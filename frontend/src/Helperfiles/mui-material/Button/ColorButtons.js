import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const ColorButtons = () => {
  return (
    <Stack spacing={2} direction="row">
<Button color="secondary">Secondary</Button>
<Button variant="contained" color="success">
  Success
</Button>
<Button variant="outlined" color="error">
  Error
</Button>
    </Stack>
  );
};

export default ColorButtons;