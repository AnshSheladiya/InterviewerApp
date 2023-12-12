import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" />
      <Avatar alt="Travis Howard" src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp" />
      <Avatar alt="Cindy Baker" src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" />
    </Stack>
  );
}

export default ImageAvatars;
