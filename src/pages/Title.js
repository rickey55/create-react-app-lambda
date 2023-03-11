/* eslint-disable */
import React from 'react';
import {Typography} from '@mui/material';

export default function Title(props) {
  return (
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {props.children}
    </Typography>
  );
}
