import React from 'react';
import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';
import { Button } from 'react-admin';

const styles = {
  button: {
    color: '#0863cc',
    fontSize: '0.8125rem',
    paddingLeft: '0px',
    paddingTop: '3px'
  }
};

const AddSupplierButton = ({ classes, record }) => (
  <Button
    className={classes.button}
    variant="raised"
    component={Link}
    to={`/PMWorks/WOSupplier/create?WorkOrderID=${record.id}`}
    label="ایجاد"
    title=" اضافه کردن پیمانکار "
  >
    <AddIcon />
  </Button>
);

export default withStyles(styles)(AddSupplierButton);
