import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core/styles";
import IconImageEye from "@material-ui/icons/RemoveRedEye";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";
import {
  Button,
  SimpleShowLayout,
  TextField,
  useGetOne,
  ReferenceField,
} from "react-admin";

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
  field: {
    // These styles will ensure our drawer don't fully cover our
    // appliSubdivisionion when teaser or title are very long
    "& span": {
      display: "inline-block",
      maxWidth: "20em",
    },
  },
  but: { fontFamily: "inherit", marginBottom: "16px" },
  fir: { fontFamily: "system-ui", margin: "10px", color: "#0863cc" },
});

const QuickPreviewAssetSubdivisionButton = ({ id }) => {
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
          basePath="/PMWorks/AssetSubdivision"
          resource="PMWorks/AssetSubdivision"
        >
          <TextField className={classes.sho} label="ردیف" source="id" />
          <TextField
            className={classes.sho}
            label="کد تجهیز"
            textAlgin="right"
            source="AssetCode"
          />
          <TextField
            className={classes.sho}
            label="نام تجهیز"
            textAlgin="right"
            source="AssetName"
          />
          <ReferenceField
            className={classes.sho}
            label="کلاس تجهیز"
            textAlgin="right"
            source="AssetChildID"
            reference="PMWorks/AssetClass"
          >
            <TextField source="AssetClassName" />
          </ReferenceField>
          <TextField
            className={classes.sho}
            label="مکان"
            textAlgin="right"
            source="AssetID__LocationID__LocationNameChain"
          />
        </SimpleShowLayout>
      </Drawer>
    </>
  );
};

export default QuickPreviewAssetSubdivisionButton;
