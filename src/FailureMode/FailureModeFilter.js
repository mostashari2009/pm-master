import * as React from "react";
import { Filter, TextInput } from "react-admin";
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

    " & .MuiButton-containedPrimary": {
      padding: "40px, 20px",
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
    width: "200px",
  },
});

const FailureModeFilter = (props) => {
  const classes = useStyles();
  return (
    <Filter {...props} className={classes.form}>
      <TextInput
        className={classes.width}
        label="کد حالت خرابی"
        textAlgin="right"
        source="FailureModeCode__icontains"
        alwaysOn
        resettable
      />
      <TextInput
        className={classes.width}
        label="عنوان حالت خرابی"
        textAlgin="right"
        source="FailureModeName__icontains"
        alwaysOn
        resettable
      />
    </Filter>
  );
};

export default FailureModeFilter;
