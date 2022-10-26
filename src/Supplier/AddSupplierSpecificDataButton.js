import React from 'react';
import { Link } from 'react-router-dom';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import { withStyles } from '@material-ui/core/styles';
import { Button } from 'react-admin';

const styles = {
  button: {
    marginTop: '1em'
  }
};

const AddSupplierSpecificDataButton = ({ classes, record }) => (
  <Button
    className={classes.button}
    variant="raised"
    component={Link}
    to={`/PMWorks/SupplierSpecificData/create?SupplierID=${record.id}`}
    label="اضافه کردن ویژگی"
    title="اضافه کردن ویژگی"
  >
    <ChatBubbleIcon />
  </Button>
);

export default withStyles(styles)(AddSupplierSpecificDataButton);
