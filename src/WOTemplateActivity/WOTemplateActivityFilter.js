import * as React from "react";
import {
    Filter,
    TextInput
}
from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    width: { width: '200px !important' }
});

const WOTemplateActivityFilter = (props) => {
    const classes = useStyles();
    return (
    <Filter {...props}>
        <TextInput className={classes.width} label="کد فعالیت" textAlgin="right" source="TaskID__TaskCode__icontains" alwaysOn resettable/>
        <TextInput className={classes.width} label="عنوان فعالیت" textAlgin="right" source="TaskID__TaskName__icontains" alwaysOn resettable/>
        <TextInput className={classes.widthimport * as React from "react";
import { Filter, TextInput } from "react-admin";
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
      hight: "40px",
    },
    "& .MuiFormControl-marginDense": {
      width: "200px",
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

const WOTemplateActivityFilter = (props) => {
  const classes = useStyles();
  return (
    <Filter {...props} className={classes.form}>
      <TextInput
        className={classes.width}
        label="کد فعالیت"
        textAlgin="right"
        source="TaskID__TaskCode__icontains"
        alwaysOn
        resettable
      />
      <TextInput
        className={classes.width}
        label="عنوان فعالیت"
        textAlgin="right"
        source="TaskID__TaskName__icontains"
        alwaysOn
        resettable
      />
      <TextInput
        className={classes.width}
        label="تناوب"
        textAlgin="right"
        source="TaskID__FrequencyName__icontains"
        alwaysOn
        resettable
      />
      <TextInput
        className={classes.width}
        label="مقدار تناوب"
        textAlgin="right"
        source="TaskID__FrequencyAmount__icontains"
        alwaysOn
        resettable
      />
      <TextInput
        className={classes.width}
        label="تخصص"
        textAlgin="right"
        source="TaskID__JobCategoryID__JobCategoryName__icontains"
        alwaysOn
        resettable
      />
    </Filter>
  );
};

export default WOTemplateActivityFilter;
} label="تناوب" textAlgin="right" source="TaskID__FrequencyName__icontains" alwaysOn resettable/>
        <TextInput className={classes.width} label="مقدار تناوب" textAlgin="right" source="TaskID__FrequencyAmount__icontains" alwaysOn resettable/>
        <TextInput className={classes.width} label="تخصص" textAlgin="right" source="TaskID__JobCategoryID__JobCategoryName__icontains" alwaysOn resettable/>
    </Filter>
);
};


export default WOTemplateActivityFilter;
