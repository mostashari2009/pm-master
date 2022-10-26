import * as React from "react";
import { useState } from 'react';
import {
    Edit,
    SimpleForm,
    TextInput,
    ReferenceInput,
    SelectInput,
    TopToolbar,
    ListButton,
    ShowButton,
    useEditController,
    Toolbar
}
from 'react-admin';
import SparePartTitle from './SparePartTitle';
import SparePartCategoryRefrenceInput from './SparePartCategoryRefrenceInput';
import SparePartDimensionRefrenceInput from './SparePartDimensionRefrenceInput';
import CodeInput from '../Components/CodeInput';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
    fir: { display: 'inline-block'},
    sec: { display: 'inline-block'},
    width: { marginTop: '-15px' },
    last: { display: 'inline-block', marginRight: 0 },
    sel: { '& svg': {display: 'none' }, marginTop: '-15px'},
});

const Separator = () => <Box pt="0em" />;

const EditActions = ({ basePath, data, resource }) => (
    <TopToolbar>
        <ListButton basePath={basePath} />
        <ShowButton basePath={basePath} record={data} />
    </TopToolbar>
);

const validateError = (values) => {
    const errors = {};
    if (!values.SparePartCode) {
        errors.SparePartCode = 'کد را وارد کنید';
    }
    if (!values.SparePartName) {
        errors.SparePartName = 'نام را وارد کنید';
    }
    if (!values.SparePartCategoryID) {
        errors.SparePartCategoryID = 'خانواده را وارد کنید';
    }
    return errors
};

const SparePartEdit = props => {
    const {source, ...rest} = props;

    const controllerProps = useEditController(props);
    const {
        record, // record fetched via dataProvider.getOne() based on the id from the location
    } = controllerProps;
    const [Value, setValue] = useState(record.SparePartCode);
    const classes = useStyles();

    return(
    <Edit actions={<EditActions />} title={<SparePartTitle />} {...props}>
        <SimpleForm validate={validateError} toolbar={<Toolbar alwaysEnableSaveButton />} redirect="show">
            <CodeInput formClassName={classes.fir} value={Value}  onChange={event => { let val = event.target.value;
                                                    val = val.replace(/[^\x00-\x7F]/ig, "");
                                                    setValue(val)
                                                    }}
                                                    label="کد"
                source="SparePartCode" {...rest}/>
            <TextInput formClassName={classes.sec} label="نام" textAlgin="right" source="SparePartName" />
            <Separator/>
            <ReferenceInput className={classes.sel} disabled formClassName={classes.fir} label="کد خانواده قطعه" textAlgin="right" source="SparePartCategoryID" reference="PMWorks/SparePartCategory">
                <SelectInput optionText="SparePartCategoryCode" />
            </ReferenceInput>
            <SparePartCategoryRefrenceInput formClassName={classes.sec} label="نام خانواده قطعه" textAlgin="right" source="SparePartCategoryID" reference="PMWorks/SparePartCategory" perPage={10000} />
            <Separator/>
            <ReferenceInput className={classes.sel} disabled formClassName={classes.fir} label="کد واحد اندازه‌گیری" textAlgin="right" source="SparePartDimensionID" reference="PMWorks/SparePartDimension">
                <SelectInput optionText="SparePartDimensionCode" />
            </ReferenceInput>
            <SparePartDimensionRefrenceInput formClassName={classes.sec} label="نام واحد اندازه‌گیری" textAlgin="right" source="SparePartDimensionID" reference="PMWorks/SparePartDimension" perPage={10000} />
        </SimpleForm>
    </Edit>
);
    };


export default SparePartEdit;
