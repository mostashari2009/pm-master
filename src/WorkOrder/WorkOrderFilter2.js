import * as React from "react";
import { ReferenceInput, SelectInput, Filter, TextInput } from "react-admin";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  form: {
    marginTop: "5px",

    "& .MuiFormControl-root": {
      display: "inline",
    },
    "& .MuiFilledInput-root": {
      border: "2px solid #D9D9D9",
      background: "#fff",
      fontWeight: "300",
      fontSize: "./1rem",
      color: "rgb(69, 90, 100)",
      borderStartStartRadius: "15px",
      borderStartEndRadius: "15px",
      borderBottomLeftRadius: "15px",
      borderBottomRightRadius: "15px",
      margin: "0px",
    },
    "& .MuiSelect-filled.MuiSelect-filled": {
      background: "#fff",
      borderStartStartRadius: "15px",
      borderStartEndRadius: "15px",
      borderBottomLeftRadius: "15px",
      borderBottomRightRadius: "15px",
      //width: "90px",
    },
    "& .RaSelectInput-input": {
      paddingRight: "2px",
      //minWidth: "100px",
    },
    "& .MuiFormControl-marginDense": {
      marginTop: "8px",
      marginRight: "0px",
      marginBottom: "4px",
    },
    "& input:-internal-autofill-selected ": {
      backgroundColor: "#fff",
    },
    "& .RaFilterFormInput": {
      // margin: "100px",
    },
    "& .MuiIconButton-root.Mui-disabled": {
      color: "#fff",
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
    "& .MuiSelect-icon.Mui-disabled": {
      color: "#fff",
      left: "5px",
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
    "& .MuiFilledInput-colorSecondary": {
      borderStartStartRadius: "15px",
      borderStartEndRadius: "15px",
      borderBottomLeftRadius: "15px",
      borderBottomRightRadius: "15px",
      background: "#fff",
    },
    "& .MuiSelect-select": {
      minWidth: "185px",
    },
  },
});

const WorkOrderFilter2 = (props) => {
  const freq = [
    { _id: "0", full_name: "WR" },
    { _id: "1", full_name: "PM" },
  ];
  const classes = useStyles();
  return (
    <Filter className={classes.form} {...props}>
      <TextInput
        className={classes.width}
        label="کد دستور کار"
        textAlgin="right"
        source="id__icontains"
        alwaysOn
        resettable
      />

      <TextInput
        className={classes.width}
        label="دپارتمان"
        textAlgin="right"
        source="DepartmentID__DepartmentName__icontains"
        alwaysOn
        resettable
      />

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

export default WorkOrderFilter2;
