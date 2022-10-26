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
  }
};

const AddDelayButton = ({ classes, record }) => (
  <Button
    className={classes.button}
    variant="raised"
    component={Link}
    to={`/PMWorks/WODelay/create?WorkOrderID=${record}`}
    label="ایجاد"
    title="اضافه کردن تاخیر"
  >
    <AddIcon />
  </Button>
);

export default withStyles(styles)(AddDelayButton);
