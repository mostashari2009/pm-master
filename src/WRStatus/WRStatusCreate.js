import * as React from "react";
import {
  SimpleForm,
  Toolbar,
  Create,
  TextInput,
  useNotify,
  useRefresh,
  useRedirect,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { parse } from "query-string";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import { TimeInputNow } from "../Components/TimeInputNow";
import { DateInputtoday } from "../Components/JalaliDatePickertoday";
import moment from "moment";

const useStyles = makeStyles({
  form: {
    "& .MuiPaper-elevation1": {
      backgroundColor: "#FFFFFF !important",
      boxShadow:
        "0px 2px 4px -1px rgba(0,0,0,0.20), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
    },
    "& .MuiFilledInput-root": {
      position: "relative",
      border: "2px solid #D9D9D9",
      background: "#fff",
      fontWeight: "400",
      fontSize: "1rem",
      color: "rgb(69, 90, 100)",
      borderStartStartRadius: "15px",
      borderStartEndRadius: "15px",
      borderBottomLeftRadius: "15px",
      borderBottomRightRadius: "15px",
      marginTop: "10px",
      height: "50px",
    },
    "& .MuiFilledInput-input": {
      padding: "10px 12px 10px",
    },
    "& button": {
      borderStartStartRadius: "15px",
      borderStartEndRadius: "15px",
      borderBottomLeftRadius: "15px",
      borderBottomRightRadius: "15px",
      margin: "auto",
      color: "#0863cc",
    },
    "& input:disabled": {
      borderStartStartRadius: "15px",
      borderStartEndRadius: "15px",
      borderBottomLeftRadius: "15px",
      borderBottomRightRadius: "15px",
      backgroundColor: "whitesmoke",
      height: "27px",
    },
    "& .MuiButton-contained": {
      marginRight: "10px",
      background: "#0863cc",
      color: "#fff",
      marginBottom: " 20px",
      width: "80px",
    },
    "& .MuiFormHelperText-contained": {
      height: "0px",
    },
    "& .MuiInputLabel-formControl": {
      left: "auto",
      color: "#0863cc",
      marginTop: "7px",
    },
    "& .MuiInputLabel-shrink ": {
      transform: "translate(30%, -5px ) scale(0.75) !important;",
      background: "#fff",
      color: "#0863cc",
      padding: "1px",
    },

    "& .MuiButton-textPrimary": {
      color: "#0863cc",
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
  },

  fir: {
    display: "inline-grid",

    "& .MuiFilledInput-underline:before": {
      content: "",
      position: "absolute",
      transform: "scaleX(0)",
    },

    "& .MuiFilledInput-underline:after ": {
      transform: "scaleX(0)",
      transition: "transform 200ms cubic-bezier(0.0, 0, 0.5, 1) 0ms",
    },
    "& .MuiSelect-select:focus": {
      background: "#fff",
      borderStartStartRadius: "20px",
      borderStartEndRadius: "20px",
      borderBottomLeftRadius: "20px",
      borderBottomRightRadius: "20px",
    },
  },
  sec: {
    display: "inline-grid",

    "& .MuiFilledInput-underline:before": {
      content: "",
      position: "absolute",
      transform: "scaleX(0)",
    },

    "& .MuiFilledInput-underline:after ": {
      transform: "scaleX(0)",
      transition: "transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",
    },
    "& .MuiSelect-select:focus": {
      background: "#fff",
      borderStartStartRadius: "17px",
      borderStartEndRadius: "17px",
      borderBottomLeftRadius: "17px",
      borderBottomRightRadius: "17px",
    },
  },
  text: {
    "& .MuiFilledInput-root": {
      display: "inline-grid",
      width: "533px",
      height: "100px",
      border: "2px solid #D9D9D9",
      background: "#fff",
      borderStartStartRadius: "15px",
      borderStartEndRadius: "15px",
      borderBottomLeftRadius: "15px",
      borderBottomRightRadius: "15px",
      color: "rgb(69, 90, 100)",
      boxSizing: "borderBox",
      cursor: "text",
    },

    "& .MuiFilledInput-underline:before": {
      content: "",
      position: "absolute",
      transform: "scaleX(0)",
    },

    "& .MuiFilledInput-underline:after ": {
      transform: "scaleX(0)",
      transition: "transform 200ms cubic-bezier(0.0, 0, 0.5, 1) 0ms",
    },
    "& .MuiInputBase-inputMultiline": {
      width: "500px",
      height: "100px",
    },
  },

  width: {
    width: "533px",
    "& .MuiFilledInput-underline:before": {
      content: "",
      position: "absolute",
      transform: "scaleX(0)",
    },
    "& .MuiFilledInput-underline:after ": {
      transform: "scaleX(0)",
      transition: "transform 200ms cubic-bezier(0.0, 0, 0.5, 1) 0ms",
    },
  },
  last: { display: "inline-block", marginRight: 0 },
  sel: {
    "& svg": { display: "none" },
  },
});

const Separator = () => <Box pt="0em" />;

const validateError = (values) => {
  const errors = {};
  if (!values.StatusID) {
    errors.StatusID = " ???? ?? ?????????? ?????????? ???? ???????? ????????";
  }
  return errors;
};

const WorkRequestformat = (v) => {
  let str = v ? `${v}` : "";
  str = str.padStart(4, 0);
  let text = "WR0".concat(str);
  return text;
};

const WRStatusCreate = (props) => {
  const classes = useStyles();
  const notify = useNotify();
  const refresh = useRefresh();
  const redirect = useRedirect();
  var today = new Date();
  var time = moment().format("HH:mm");

  const { WorkRequestID: WorkRequestID_string } = parse(props.location.search);
  const WorkRequestID = WorkRequestID_string
    ? parseInt(WorkRequestID_string, 10)
    : "";

  const onSuccess = () => {
    notify(`???????? ?????????? ????`);
    redirect(`/PMWorks/WorkRequest/${WorkRequestID}/show/PMWorks/WRStatus`);
    refresh();
  };

  return (
    <Create
      onSuccess={onSuccess}
      {...props}
      title="?????????? ?????????? ?????????????? ??????"
      className={classes.Create}
    >
      <SimpleForm
        validate={validateError}
        initialValues={{ WorkRequestID, StatusDate: today, StatusTime: time }}
        redirect={redirect}
        toolbar={<Toolbar alwaysEnableSaveButton />}
        className={classes.form}
      >
        <TextInput
          className={classes.width}
          disabled
          label="???? ???????????????????????"
          source="WorkRequestID"
          format={WorkRequestformat}
        />
        <Separator />
        <DateInputtoday
          formClassName={classes.fir}
          label="?????????? ??????"
          source="StatusDate"
          disabled
        />
        <TimeInputNow
          formClassName={classes.sec}
          label="???????? ??????"
          textAlgin="right"
          source="StatusTime"
        />
        <Separator />
        <ReferenceInput
          disabled
          className={classes.sel}
          formClassName={classes.fir}
          label="???? ??????????"
          textAlgin="right"
          source="StatusID"
          reference="PMWorks/Status"
        >
          <SelectInput optionText="StatusCode" />
        </ReferenceInput>
        <ReferenceInput
          formClassName={classes.sec}
          label="?????????? ??????????"
          textAlgin="right"
          source="StatusID"
          reference="PMWorks/StatusWR"
          filter={{ WorkRequestID: WorkRequestID }}
        >
          <SelectInput optionText="StatusName" />
        </ReferenceInput>
        <Separator />
        <TextInput
          multiline
          className={classes.text}
          label="??????????????"
          textAlgin="right"
          source="StatusDescription"
        />
      </SimpleForm>
    </Create>
  );
};

export default WRStatusCreate;
