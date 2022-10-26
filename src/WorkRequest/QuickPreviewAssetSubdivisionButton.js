import React, { useState } from "react";
import { Button } from "react-admin";
import { Dialog } from "@material-ui/core";
import TouchAppIcon from '@material-ui/icons/TouchApp';
import { makeStyles } from '@material-ui/core/styles';
import AssetSubdivisionList from "./AssetSubdivisionList";

const useStyles = makeStyles({
  fir: { fontFamily: 'system-ui', marginBottom: '16px' },

});


const QuickPreviewAssetSubdivisionButton = ({ id, setId, ...props }) => {
  const [showPanel, setShowPanel] = useState(false);
  const classes = useStyles();

  const toggleDrawer = () => setShowPanel((showPanel) => !showPanel);

  return (
    <>
      <Button className={classes.fir} onClick={toggleDrawer} label="انتخاب">
        <TouchAppIcon />
      </Button>
      <Dialog fullWidth open={showPanel} onClose={toggleDrawer}>
        <AssetSubdivisionList style={{width: '780px'}} {...props} resource="PMWorks/AssetSubdivision" setId={setId} setShowPanel={setShowPanel}/>
      </Dialog>
    </>
  );
};

export default QuickPreviewAssetSubdivisionButton;