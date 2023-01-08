import React, { useState } from "react";
import { Button } from "react-admin";
import { Dialog } from "@material-ui/core";
import TouchAppIcon from "@material-ui/icons/TouchApp";
import SupplierList from "./SupplierList";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  fir: { fontFamily: "system-ui", margin: "10px", color: "#0863cc" },
});

const QuickSelectSupplierButton = ({ id, setId, ...props }) => {
  const [showPanel, setShowPanel] = useState(false);
  const classes = useStyles();

  const toggleDrawer = () => setShowPanel((showPanel) => !showPanel);

  const handleCloseClick = () => {
    setShowPanel(false);
  };
  const handleClick = () => {
    setShowPanel(true);
  };
  return (
    <>
      <Button onClick={handleClick} label="انتخاب">
        <TouchAppIcon />
      </Button>
      <Dialog fullWidth open={showPanel} onClose={handleCloseClick}>
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
        <SupplierList
          style={{ width: "auto" }}
          {...props}
          resource="PMWorks/Supplier"
          setId={setId}
          setShowPanel={setShowPanel}
        />
      </Dialog>
    </>
  );
};

export default QuickSelectSupplierButton;
