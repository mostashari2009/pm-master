import React from 'react';
import { Typography } from '@material-ui/core';
import jMoment from 'moment-jalaali';

jMoment.loadPersian({ dialect: 'persian-modern', usePersianDigits: true });

const JalaaliDateField = ({ source, record }) => (
  <Typography component='span' variant='body2'>
    {jMoment(record[source]).locale('fa').format('jD jMMMM jYYYY')}
  </Typography>
);

export default JalaaliDateField;
