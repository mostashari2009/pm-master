import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core/styles";

import IconImageEye from "@material-ui/icons/RemoveRedEye";
import IconKeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import {
  Button,
  SimpleShowLayout,
  TextField,
  useGetOne,
  ReferenceField,
} from "react-admin";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";
const useStyles = makeStyles({
  sho: {
    //display: "inline-block",
    "& .MuiFormControl-marginDense": {
      border: "2px solid #A9A9A9",
      background: "#fff",
      fontWeight: "300",
      fontSize: "./1rem",
      color: "rgb(69, 90, 100)",
      borderStartStartRadius: "15px",
      borderStartEndRadius: "15px",
      borderBottomLeftRadius: "15px",
      borderBottomRightRadius: "15px",
      right: "5px",
      height: "60px",
      width: "285px",
      paddingRight: "10px",
    },
    "& .MuiInputLabel-shrink ": {
      transform: "translate(30%, -8px ) scale(0.75) !important;",
      background: "#fff",
      color: "#0863cc",
      paddingRight: "3px",
    },
    "& .MuiInputLabel-formControl": {
      left: "auto",
      color: "#0863cc",
      margin: "0",
      padding: "0px 5px",
    },
    "& .MuiFormLabel-root": {
      position: "absolute",
    },
  },
  fir: {
    fontFamily: "system-ui",
    margin: "10px",
    color: "#0863cc",
  },
  field: {
    // These styles will ensure our drawer don't fully cover our
    // application when teaser or title are very long
    "& span": {
      display: "inline-block",
      maxWidth: "20em",
    },
  },
  but: { fontFamily: "inherit", marginBottom: "16px" },
});

const QuickPreviewFailureModeButton = ({ id }) => {
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
      <Button
        className={classes.but}
        onClick={handleClick}
        label="ra.action.show"
      >
        <IconImageEye />
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
        <SimpleShowLayout
          record={data}
          basePath="/PMWorks/FailureMode"
          resource="PMWorks/FailureMode"
        >
          <TextField className={classes.sho} source="id" label="ردیف" />
          <TextField
            className={classes.sho}
            label="کد حالت خرابی"
            textAlgin="right"
            source="FailureModeCode"
          />
          <TextField
            className={classes.sho}
            label="عنوان حالت خرابی"
            textAlgin="right"
            source="FailureModeName"
          />
          <TextField
            className={classes.sho}
            label="توضیحات"
            textAlgin="right"
            source="FailureModeDescription"
          />
        </SimpleShowLayout>
      </Drawer>
    </>
  );
};

export default QuickPreviewFailureModeButton;
