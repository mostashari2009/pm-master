import * as React from "react";
import {
  SimpleForm,
  ReferenceInput,
  Create,
  SelectInput,
  FormDataConsumer,
  TopToolbar,
  ListButton,
  TextInput,
} from "react-admin";
import AssetSubdivisionRefrenceInput from "./AssetSubdivisionRefrenceInput";
import FailureModeRefrenceInput from "./FailureModeRefrenceInput";
import WorkPriorityRefrenceInput from "./WorkPriorityRefrenceInput";
import TypeWrRefrenceInput from "./TypeWrRefrenceInput";
import { DateInput } from "../Components/JalaliDatePicker";
import { DateInputtoday } from "../Components/JalaliDatePickertoday";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import { TimeInput } from "../Components/TimeInput";
import { TimeInputNow } from "../Components/TimeInputNow";

import moment from "moment";

const CreateActions = ({ basePath, record, resource }) => (
  <TopToolbar>
    <ListButton basePath={basePath} />
  </TopToolbar>
);

const validateError = (values) => {
  const errors = {};
  if (!values.AssetSubdivisionID) {
    errors.AssetSubdivisionID = "تجهیز را وارد کنید";
  }
  if (!values.FailureModeID) {
    errors.FailureModeID = " عنوان خرابی را وارد کنید";
  }
  if (!values.WorkPriorityID) {
    errors.WorkPriorityID = "اولویت را وارد کنید";
  }
  if (!values.TypeWrID) {
    errors.TypeWrID = "نوع درخواست را وارد کنید";
  }
  if (!values.WRDate) {
    errors.WRDate = "تاریخ را وارد کنید";
  }
  if (!values.WRTime) {
    errors.WRTime = "ساعت را وارد کنید";
  }
  return errors;
};

const useStyles = makeStyles({
  form: {
    paddingTop: "15px",
    paddingBottom: "8PX",

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
    },
    "& button": {
      borderStartStartRadius: "15px",
      borderStartEndRadius: "15px",
      borderBottomLeftRadius: "15px",
      borderBottomRightRadius: "15px",
      margin: "auto",
      fontFamily: "B Nazanin",
      color: "#0863cc",
    },
    "& .MuiButton-contained": {
      marginRight: "10px",
      background: "#0863cc",
      color: "#fff",
      padding: "5px, 10px",
      marginBottom: " 20px",
    },

    "& .MuiInputLabel-formControl": {
      left: "auto",
      color: "#0863cc",
    },
    "& .MuiInputLabel-shrink ": {
      transform: "translate(30%, -8px ) scale(0.75) !important;",
      background: "#fff",
      color: "#0863cc",
      paddingRight: "3px",
    },
    "& .RaButton-label-7": {
      paddingRight: "5px",
    },
    "& .MuiButton-textPrimary": {
      color: "#0863cc",
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
    "& input": {
      padding: "17px 30px 10px",
    },
    "& .MuiFormHelperText-root": {
      textAlign: "right",
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
});

const Separator = () => <Box pt="0em" />;

export const WorkRequestCreate = (props) => {
  const classes = useStyles();
  var today = new Date();
  var time = moment().format("HH:mm");
  const FullNameField = ({ record }) => (
    <span>
      {record.WorkPriorityCode}_{record.WorkPriorityName}
    </span>
  );
  const FullNameField1 = ({ record }) => (
    <span>
      {record.TypeWrCode}_{record.TypeWrName}
    </span>
  );

  return (
    <Create
      actions={<CreateActions />}
      className={classes.Create}
      {...props}
      title="فرم درخواست کار"
    >
      <SimpleForm
        className={classes.form}
        redirect="show"
        validate={validateError}
        initialValues={{
          WRDateOfRegistration: today,
          WRDate: today,
          WRTimeOfRegistration: time,
          WRTime: time,
        }}
      >
        <Separator />
        <ReferenceInput
          formClassName={classes.fir}
          disabled
          label="کد تجهیز"
          textAlgin="right"
          source="AssetSubdivisionID"
          reference="PMWorks/AssetSubdivision"
        >
          <SelectInput optionText="AssetCode" />
        </ReferenceInput>
        <AssetSubdivisionRefrenceInput
          formClassName={classes.sec}
          disabled
          label="عنوان تجهیز"
          textAlgin="right"
          source="AssetSubdivisionID"
          reference="PMWorks/AssetSubdivision"
          perPage={10000}
        />
        <Separator />
        <FormDataConsumer formClassName={classes.fir} className={classes.sel}>
          {({ formData, ...rest }) =>
            formData.AssetSubdivisionID && (
              <ReferenceInput
                disabled
                label="کد خانواده تجهیز"
                textAlgin="right"
                source="AssetSubdivisionID"
                reference="PMWorks/AssetSubdivision"
                {...rest}
              >
                <SelectInput optionText="AssetClassCodeChain" />
              </ReferenceInput>
            )
          }
        </FormDataConsumer>
        <FormDataConsumer formClassName={classes.sec}>
          {({ formData, ...rest }) =>
            formData.AssetSubdivisionID && (
              <ReferenceInput
                disabled
                label="عنوان خانواده تجهیز"
                textAlgin="right"
                source="AssetSubdivisionID"
                reference="PMWorks/AssetSubdivision"
                {...rest}
              >
                <SelectInput optionText="AssetClassNameChain" />
              </ReferenceInput>
            )
          }
        </FormDataConsumer>

        <Separator />
        <DateInput
          formClassName={classes.fir}
          label="تاریخ خرابی"
          source="WRDate"
        />
        <TimeInput
          formClassName={classes.sec}
          label=" ساعت خرابی"
          textAlgin="right"
          source="WRTime"
        />
        <br />
        <Separator />
        <FormDataConsumer className={classes.sel} formClassName={classes.fir}>
          {({ formData, ...rest }) =>
            formData.AssetSubdivisionID && (
              <ReferenceInput
                disabled
                label="کد حالت خرابی"
                textAlgin="right"
                source="FailureModeID"
                reference="PMWorks/FailureAsset"
                {...rest}
              >
                <SelectInput optionText="FailureModeCode" />
              </ReferenceInput>
            )
          }
        </FormDataConsumer>
        <FormDataConsumer formClassName={classes.sec}>
          {({ formData, ...rest }) =>
            formData.AssetSubdivisionID && (
              <FailureModeRefrenceInput
                label="عنوان حالت خرابی"
                textAlgin="right"
                source="FailureModeID"
                reference="PMWorks/FailureAsset"
                perPage={10000}
                filter={{ AssetClassID: formData.AssetSubdivisionID }}
                {...rest}
              />
            )
          }
        </FormDataConsumer>
        <Separator />
        <FormDataConsumer formClassName={classes.fir}>
          {({ formData, ...rest }) =>
            formData.AssetSubdivisionID && (
              <ReferenceInput
                label="اولویت"
                textAlgin="right"
                source="WorkPriorityID"
                reference="PMWorks/WorkPriority"
                sort={{ field: "id", order: "ASC" }}
                {...rest}
              >
                <SelectInput optionText={<FullNameField />} />
              </ReferenceInput>
            )
          }
        </FormDataConsumer>
        <FormDataConsumer formClassName={classes.sec}>
          {({ formData, ...rest }) =>
            formData.AssetSubdivisionID && (
              <ReferenceInput
                className={classes.sel}
                label="نوع درخواست"
                textAlgin="right"
                source="TypeWrID"
                reference="PMWorks/TypeWr"
                sort={{ field: "id", order: "ASC" }}
                {...rest}
              >
                <SelectInput optionText={<FullNameField1 />} />
              </ReferenceInput>
            )
          }
        </FormDataConsumer>
        <FormDataConsumer className={classes.text}>
          {({ formData, ...rest }) =>
            formData.AssetSubdivisionID && (
              <TextInput
                multiline
                label="توضیحات"
                textAlgin="right"
                source="WRDescription"
                {...rest}
              />
            )
          }
        </FormDataConsumer>
      </SimpleForm>
    </Create>
  );
};
