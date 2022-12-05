import React, { useState } from "react";
import { Button, useGetOne } from "react-admin";
import { Dialog } from "@material-ui/core";
import TouchAppIcon from "@material-ui/icons/TouchApp";
import FailureModeList from "./FailureModeList";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core/styles";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";
const useStyles = makeStyles({
  fir: { fontFamily: "system-ui", margin: "10px", color: "#0863cc" },
});

const QuickSelectFailureModeButton = ({ id, setId, ...props }) => {
  //const toggleDrawer = () => setShowPanel((showPanel) => !showPanel);
  const [showPanel, setShowPanel] = useState(false);
  const classes = useStyles();
  const { data } = useGetOne("PMWorks/FailureMode", id);

  const handleClick = () => {
    setShowPanel(true);
  };

  const handleCloseClick = () => {
    setShowPanel(false);
  };
  return (
    <>
      <Button className={classes.fir} onClick={handleClick} label="انتخاب">
        <TouchAppIcon />
      </Button>
      <Drawer anchor="right" open={showPanel} onClose={handleCloseClick}>
        <div>
          <Button
            className={classes.fir}
            label={null}
            title="بستن صفحه"
            onClick={handleCloseClick}
          >
            <CancelPresentationIcon />
          </Button>
        </div>

        <FailureModeList
          record={data}
          style={{ width: "780px" }}
          {...props}
          resource="PMWorks/FailureAsset"
          setId={setId}
          setShowPanel={setShowPanel}
        />
      </Drawer>
    </>
  );
};

export default QuickSelectFailureModeButton;
