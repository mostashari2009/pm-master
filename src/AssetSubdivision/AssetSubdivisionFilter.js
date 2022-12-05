import * as React from "react";
import { TextInput, Filter } from "react-admin";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  form: {
    padding: "14px 7px",

    "& .MuiIconButton-root.Mui-disabled": {
      color: "#fff",
    },
    "& .MuiFilledInput-root": {
      position: "relative",
      border: "2px solid #D9D9D9",
      background: "#fff",
      fontWeight: "300",
      fontSize: "./1rem",
      color: "rgb(69, 90, 100)",
      borderStartStartRadius: "15px",
      borderStartEndRadius: "15px",
      borderBottomLeftRadius: "15px",
      borderBottomRightRadius: "15px",
    },

    "& .MuiInputLabel-formControl": {
      left: "auto",
      color: "#0863cc",
    },
    "& .MuiInputLabel-shrink ": {
      transform: "translate(30%, -7px ) scale(0.75) !important;",
      background: "#fff",
      color: "#0863cc",
      paddingRight: "3px",
    },
    "& .RaButton-label-7": {
      paddingRight: "5px",
    },
    "& .makeStyles-form-219 .MuiFilledInput-input": {
      paddingLeft: "5px",
    },
    "& .MuiToolbar-root": {
      backgroundColor: "#fff",
    },
    "& .MuiSelect-icon.Mui-disabled": {
      color: "#fff",
    },
    "& .MuiFilledInput-filled:focus": {
      border: "2px solid #0863cc",
    },
    "& .MuiFilledInput-underline:before": {
      content: "",
      position: "absolute",
      transform: "scaleX(0)",
    },
    "& .MuiFilledInput-underline:after": {
      content: "",
      position: "absolute",
      transform: "scaleX(0)",
    },
    "& .MuiSelect-filled.MuiSelect-filled": {
      borderStartStartRadius: "15px",
      borderStartEndRadius: "15px",
      borderBottomLeftRadius: "15px",
      borderBottomRightRadius: "15px",
      background: "#fff",
    },
    "& .RaResettableTextField-selectAdornment-74": {
      marginRight: "90px",
    },
    "& .RaResettableTextField-selectAdornment-149": {
      marginRight: "90px",
    },
  },
  width: {
    width: "155px",
  },
});
const AssetSubdivisionFilter = (props) => {
  const classes = useStyles();
  return (
    <Filter className={classes.form} {...props}>
      <TextInput
        className={classes.width}
        source="AssetCode__icontains"
        label="کد تجهیز"
        textAlgin="right"
        alwaysOn
        resettable
      />
      <TextInput
        className={classes.width}
        source="AssetName__icontains"
        label="نام تجهیز"
        textAlgin="right"
        alwaysOn
        resettable
      />
      <TextInput
        className={classes.width}
        source="AssetID__LocationID__LocationNameChain__icontains"
        label="مکان"
        textAlgin="right"
        alwaysOn
        resettable
      />
      <TextInput
        className={classes.width}
        source="AssetChildID__AssetClassName__icontains"
        label="خانواده تجهیز"
        alwaysOn
        resettable
      />
    </Filter>
  );
};

export default AssetSubdivisionFilter;
