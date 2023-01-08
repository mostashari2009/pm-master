import * as React from "react";
import {
    SimpleForm,
    Toolbar,
    Create,
    required,
    useNotify,
    useRefresh,
    useRedirect,
    TextInput,
    ReferenceInput,
    SelectInput 
}
from 'react-admin';
import { parse } from 'query-string';
import SupplierRefrenceInput from './SupplierRefrenceInput';
import { DateInput } from '../Components/JalaliDatePicker';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

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
    if (!values.SupplierID) {
        errors.SupplierID = 'پیمانکار را وارد کنید';
    }
    return errors
};

const WorkOrderFormat = ({ record }) => {
    let str = record ? `${record.WorkRequestID}` : '';
    str = str.padStart(4,0);
    let text = "WR0".concat(str);
    let stro = record ? `${record.id}` : '';
    stro = stro.padStart(4,0);
    let texto = "_WO0".concat(stro);
    return <span> {text} {texto} </span>;
};

const WOSupplierCreate = props => {

    const classes = useStyles();
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const { WorkOrderID: WorkOrderID_string } = parse(props.location.search);
    const WorkOrderID = WorkOrderID_string ? parseInt(WorkOrderID_string, 10) : '';

    const onSuccess = () => {
        notify(`دیتا ذخیره شد`)
        redirect(`/PMWorks/WOSupplier/create?WorkOrderID=${WorkOrderID}`);
        refresh();
    };

    return (
    <Create onSuccess={onSuccess} {...props} title="ایجاد پیمانکار دستور کار">
        <SimpleForm validate={validateError} initialValues={{ WorkOrderID}} redirect={redirect} toolbar={<Toolbar alwaysEnableSaveButton />} className={classes.form}>
            <ReferenceInput disabled className={classes.width} label="کد درخواست‌کار" source="WorkOrderID" textAlgin="right" reference="PMWorks/WorkOrder">
                <SelectInput source="WorkRequestID" optionText={<WorkOrderFormat />}/>
            </ReferenceInput>
            <ReferenceInput disabled className={classes.sel} formClassName={classes.fir} label= "کد پیمانکار "    textAlgin="right" source="SupplierID" reference="PMWorks/Supplier">
                <SelectInput optionText="SupplierCode" />
            </ReferenceInput>
            <SupplierRefrenceInput formClassName={classes.sec} label="نام پیمانکار" textAlgin="right" source="SupplierID" reference="PMWorks/Supplier" allowEmpty validate={required()} perPage={10000} />
            <Separator/>
            <DateInput formClassName={classes.fir} label="تاریخ شروع" source="WorkStartDate" />
            <DateInput formClassName={classes.sec} label="تاریخ پایان" source="WorkFinishDate" />
        </SimpleForm>
    </Create>
    );
};


export default WOSupplierCreate;
