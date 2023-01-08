import * as React from "react";
import { Filter, TextInput } from "react-admin";
import { TimeInput } from "../Components/TimeInput";
import { DateInput } from "../Components/JalaliDatePicker";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  form: {
    alignItems: "center",
    marginTop: "4px",
    marginBottom: "4px",
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
    "& .MuiFormControl-marginDense": {
      width: "220px",
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
    "& .MuiFilledInput-underline:before": {
      position: "absolute",
      transform: "scaleX(0)",
    },
    "& .MuiFilledInput-underline:after": {
      content: "",
      position: "absolute",
      transform: "scaleX(0)",
    },
  },
});

const WRStatusFilter = (props) => {
  const classes = useStyles();
  return (
    <Filter className={classes.form} {...props}>
      <TextInput
        className={classes.width}
        label="کد وضعیت"
        textAlgin="right"
        source="StatusID__StatusCode__icontains"
        alwaysOn
        resettable
      />
      <TextInput
        className={classes.width}
        label="نام وضعیت"
        textAlgin="right"
        source="StatusID__StatusName__icontains"
        alwaysOn
        resettable
      />
      <DateInput
        className={classes.width}
        label="تاریخ ثبت"
        source="StatusDate"
        alwaysOn
        resettable
      />
      <TimeInput
        className={classes.width}
        label="ساعت ثبت"
        textAlgin="right"
        source="StatusTime"
        alwaysOn
        resettable
      />
    </Filter>
  );
};

export default WRStatusFilter;
