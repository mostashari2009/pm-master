import * as React from "react";
import { useState } from 'react';
import {
    Edit,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    useEditController,
    Toolbar,
    ShowButton,
    ListButton,
    TopToolbar
}
from 'react-admin';
import LocationTitle from './LocationTitle';
import CodeInput from '../Components/CodeInput';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import LocationRefrenceInput from './LocationRefrenceInput';

const useStyles = makeStyles({
    fir: { display: 'inline-block', verticalAlign: 'top' },
    sec: { display: 'inline-block' },
    width: { width: 712 },
    last: { display: 'inline-block', marginRight: 0 },
    sel: { '& svg': {display: 'none' }},
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
    if (!values.LocationCode) {
        errors.LocationCode = 'کد را وارد کنید';
    }
    if (!values.LocationName) {
        errors.LocationName = 'نام را وارد کنید';
    }
    return errors
};

const LocationEdit = props => {
    const {source, ...rest} = props;
    const classes = useStyles();

    const controllerProps = useEditController(props);
    const {
        record, // record fetched via dataProvider.getOne() based on the id from the location
    } = controllerProps;
    const [Value, setValue] = useState(record.LocationCode);
return(
    <Edit actions={<EditActions />} title={<LocationTitle />} {...props}>
        <SimpleForm validate={validateError} toolbar={<Toolbar alwaysEnableSaveButton />} redirect="show">
            <CodeInput formClassName={classes.fir} value={Value}  onChange={event => { let val = event.target.value;
                                                    val = val.replace(/[^\x00-\x7F]/ig, "");
                                                    setValue(val)
                                                    }}
                label="کد مکان"
                source="LocationCode" {...rest}/>
            <TextInput formClassName={classes.sec} label="نام مکان" textAlgin="right" source="LocationName" />
            <Separator/>
            <ReferenceInput className={classes.sel} disabled formClassName={classes.fir} label="مکان پدر" textAlgin="right" source="LocationFatherID" reference="PMWorks/Location">
                <SelectInput optionText="LocationCode" />
            </ReferenceInput>
            <LocationRefrenceInput formClassName={classes.sec} label="نام مکان پدر" textAlgin="right" source="LocationFatherID" reference="PMWorks/Location" perPage={10000} allowEmpty/>
        </SimpleForm>
    </Edit>
);
};


export default LocationEdit;
