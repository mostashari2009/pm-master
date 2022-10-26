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

const AddSpecificDataButton = ({ classes, record }) => (
  <Button
    className={classes.button}
    variant="raised"
    component={Link}
    to={`/PMWorks/AssetClassSpecificData/create?AssetClassID=${record.id}`}
    label="ایجاد"
    title="اضافه کردن پروفایل"
  >
    <AddIcon/>
  </Button>
);

export default withStyles(styles)(AddSpecificDataButton);
