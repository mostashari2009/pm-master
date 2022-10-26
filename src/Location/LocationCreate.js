import * as React from "react";
import { useState } from 'react';
import {
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    Create,
    TopToolbar,
    ListButton,
    useNotify,
    useRedirect,
    useRefresh
}
from 'react-admin';
import CodeInput from '../Components/CodeInput';
import LocationRefrenceInput from './LocationRefrenceInput';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
    fir: { display: 'inline-block', verticalAlign: 'top' },
    sec: { display: 'inline-block' },
    width: { width: 712 },
    last: { display: 'inline-block', marginRight: 0 },
    sel: { '& svg': {display: 'none' }},
});

const Separator = () => <Box pt="0em" />;

const CreateActions = ({ basePath, record, resource }) => (
    <TopToolbar>
        <ListButton basePath={basePath} />
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

const LocationCreate = props => {
    const {source, ...rest} = props;
    const classes = useStyles();

    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();
    const [Value, setValue] = useState('');

    const onSuccess = () => {
        notify(`دیتا ذخیره شد`);
        redirect('/PMWorks/Location');
        redirect('/PMWorks/Location/create');
        refresh();
    };
return(
    <Create actions={<CreateActions />} onSuccess={onSuccess} {...props} title="ایجاد مکان">
        <SimpleForm validate={validateError}>
            <CodeInput formClassName={classes.fir} value={Value}  onChange={event => { let val = event.target.value;
                                                    val = val.replace(/[^\x00-\x7F]/ig, "");
                                                    setValue(val)
                                                    }}
                label="کد مکان"
                source="LocationCode" {...rest}/>
            <TextInput formClassName={classes.sec} label="نام مکان" textAlgin="right" source="LocationName" />
            <Separator/>
            <ReferenceInput className={classes.sel} disabled formClassName={classes.fir} label="کد مکان پدر" textAlgin="right" source="LocationFatherID" reference="PMWorks/Location">
                <SelectInput optionText="LocationCode" />
            </ReferenceInput>
            <LocationRefrenceInput formClassName={classes.sec} label="نام مکان پدر" textAlgin="right" source="LocationFatherID" reference="PMWorks/Location" perPage={10000} allowEmpty/>
        </SimpleForm>
    </Create>
);
};


export default LocationCreate;
