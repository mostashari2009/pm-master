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

const AddJobButton = ({ classes, record }) => (
  <Button
    className={classes.button}
    variant="raised"
    component={Link}
    to={`/PMWorks/PersonnelJobCategory/create?PersonnelID=${record.id}`}
    label="ایجاد"
    title="اضافه کردن شغل"
  >
    <AddIcon/>
  </Button>
);

export default withStyles(styles)(AddJobButton);