import React from 'react';
import { Typography } from '@material-ui/core';
import jMoment from 'moment-jalaali';

jMoment.loadPersian({ dialect: 'persian-modern', usePersianDigits: true });

const JalaaliTimeField = ({ source, record }) => (
  <Typography component='span' variant='body2'>
    {jMoment(record[source], "HH:mm:ss").locale('fa').format('HH:mm')}
  </Typography>
);

export default JalaaliTimeField;
