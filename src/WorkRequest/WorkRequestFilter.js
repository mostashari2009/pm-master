import * as React from "react";
import { Filter, TextInput, ReferenceInput, SelectInput } from "react-admin";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  form: {
    paddingTop: "15px",
    "& .MuiIconButton-root.Mui-disabled": {
      paddingRight: "2px",
      color: "#fff",
    },
    "& .MuiFilledInput-root": {
      //position: "relative",
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
    "& button": {
      borderStartStartRadius: "15px",
      borderStartEndRadius: "15px",
      borderBottomLeftRadius: "15px",
      borderBottomRightRadius: "15px",
      fontFamily: "B Nazanin",
      color: "#0863cc",
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
    width: "150px",
    margin: "5px",
  },
});

const WorkRequestFilter = (props) => {
  const classes = useStyles();
  return (
    <Filter className={classes.form} {...props}>
      <TextInput
        className={classes.width}
        label="کد درخواست کار"
        textAlgin="right"
        source="id__icontains"
        alwaysOn
        resettable
      />
      <TextInput
        className={classes.width}
        label="کد تجهیز"
        textAlgin="right"
        source="AssetSubdivisionID__AssetCode__icontains"
        alwaysOn
        resettable
      />
      <TextInput
        className={classes.width}
        label=" حالت خرابی"
        textAlgin="right"
        source="FailureModeID__FailureModeName__icontains"
        alwaysOn
        resettable
      />
      <ReferenceInput
        className={classes.width}
        label="اولویت"
        textAlgin="right"
        source="WorkPriorityID"
        reference="PMWorks/WorkPriority"
        alwaysOn
        resettable
      >
        <SelectInput className={classes.width} optionText="WorkPriorityName" />
      </ReferenceInput>
      <ReferenceInput
        className={classes.width}
        label="نوع"
        textAlgin="right"
        source="TypeWrID"
        reference="PMWorks/TypeWr"
        alwaysOn
        resettable
      >
        <SelectInput className={classes.width} optionText="TypeWrName" />
      </ReferenceInput>
      <ReferenceInput
        className={classes.width}
        label="وضعیت"
        textAlgin="right"
        source="StatusID"
        reference="PMWorks/Status"
        alwaysOn
        resettable
      >
        <SelectInput className={classes.width} optionText="StatusName" />
      </ReferenceInput>
    </Filter>
  );
};

export default WorkRequestFilter;
