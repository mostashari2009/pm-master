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

const AddAssetButton = ({ classes, record }) => (
  <Button
    className={classes.button}
    variant="raised"
    component={Link}
    to={`/PMWorks/WOTemplateAsset/create?WOTemplateID=${record.id}`}
    label="ایجاد"
    title="اضافه کردن تجهیز"
  >
    <AddIcon />
  </Button>
);

export default withStyles(styles)(AddAssetButton);
