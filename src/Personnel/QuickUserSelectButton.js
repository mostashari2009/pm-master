import React, { useState } from "react";
import { Button } from "react-admin";
import { Dialog } from "@material-ui/core";
import TouchAppIcon from '@material-ui/icons/TouchApp';
import UserList from "./UserList";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  fir: { fontFamily: 'system-ui', marginBottom: '30px' },

});

const QuickUserSelectButton = ({ id, setId, ...props }) => {
  const [showPanel, setShowPanel] = useState(false);
  const classes = useStyles();

  const toggleDrawer = () => setShowPanel((showPanel) => !showPanel);

  return (
    <>
      <Button className={classes.fir} onClick={toggleDrawer} label="انتخاب">
        <TouchAppIcon />
      </Button>
      <Dialog fullWidth open={showPanel} onClose={toggleDrawer}>
        <UserList style={{width: '780px'}} {...props} resource="PMWorks/User" setId={setId} setShowPanel={setShowPanel} />
      </Dialog>
    </>
  );
};

export default QuickUserSelectButton;