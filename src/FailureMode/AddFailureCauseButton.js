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

const AddFailureCauseButton = ({ classes, record }) => (
  <Button
    className={classes.button}
    variant="raised"
    component={Link}
    to={`/PMWorks/FailureCause/create?FailureModeID=${record.id}`}
    label="اضافه کردن علت خرابی"
    title="اضافه کردن علت خرابی"
  >
    <ChatBubbleIcon />
  </Button>
);

export default withStyles(styles)(AddFailureCauseButton);
