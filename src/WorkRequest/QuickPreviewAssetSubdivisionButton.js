import React, { useState } from "react";
import { Button, useGetOne } from "react-admin";
import { Dialog } from "@material-ui/core";
import TouchAppIcon from "@material-ui/icons/TouchApp";
import { makeStyles } from "@material-ui/core/styles";
import AssetSubdivisionList from "./AssetSubdivisionList";
import Drawer from "@material-ui/core/Drawer";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";

const useStyles = makeStyles({
  fir: { fontFamily: "system-ui", margin: "10px", color: "#0863cc" },
});

const QuickPreviewAssetSubdivisionButton = ({ id, setId, ...props }) => {
  const [showPanel, setShowPanel] = useState(false);
  const classes = useStyles();
  const { data } = useGetOne("PMWorks/AssetSubdivision", id);
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

        <AssetSubdivisionList
          record={data}
          basePath="/PMWorks/AssetSubdivision"
          style={{ width: "auto" }}
          {...props}
          resource="PMWorks/AssetSubdivision"
          setId={setId}
          setShowPanel={setShowPanel}
        />
      </Drawer>
    </>
  );
};

export default QuickPreviewAssetSubdivisionButton;
