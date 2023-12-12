import React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

function TotalAvatars() {
  return (
    <AvatarGroup total={24}>
      <Avatar alt="Remy Sharp" src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" />
      <Avatar alt="Travis Howard" src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" />
      <Avatar alt="Agnes Walker" src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" />
      <Avatar alt="Trevor Henderson" src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" />
    </AvatarGroup>
  );
}

export default TotalAvatars;
