import React from 'react';
import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';
import { Button } from 'react-admin';

const styles = {
  button: {
    color: '#243261',
    fontSize: '0.8125rem',
    paddingLeft: '0px',
    paddingTop: '3px'
  },
  dis:{
      display: 'none',
  },
};

const AddWorkOrderButton = ({ classes, record }) => (
  <Button
    className={classes.button}
    className={{
      [classes.dis]: record.Status == 11 || record.Status == 12,
    }}
    variant="raised"
    component={Link}
    to={`/PMWorks/WorkOrder/create?WorkRequestID=${record.id}`}
    label="ایجاد"
    title="اضافه کردن دستور کار"
  >
    <AddIcon />
  </Button>
);

export default withStyles(styles)(AddWorkOrderButton);
