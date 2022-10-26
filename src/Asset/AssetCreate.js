import * as React from "react";
import { useState } from 'react';
import {
    SimpleForm,
    required,
    TextInput,
    Create,
    useRedirect,
    ListButton,
    TopToolbar,
    useNotify,
    useRefresh,
    ReferenceInput,
    SelectInput
}
from 'react-admin';
import AssetPriorityRefrenceInput from './AssetPriorityRefrenceInput';
import LocationRefrenceInput from './LocationRefrenceInput';
import AssetClassRefrenceInput from './AssetClassRefrenceInput';
import { DateInput } from '../Components/JalaliDatePicker';
import CodeInput from '../Components/CodeInput';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
    fir: { display: 'inline-block', verticalAlign: 'top' },
    sec: { display: 'inline-block' },
    width: { width: '179px' },
    last: { display: 'inline-block', marginRight: 0 },
    sel: { '& svg': {display: 'none' }},
});

const Separator = () => <Box pt="0em" />;

const CreateActions = ({ basePath, record, resource }) => (
    <TopToolbar>
        <ListButton basePath="/PMWorks/AssetSubdivision" />
    </TopToolbar>
);


const validateError = (values) => {
    const errors = {};
    if (!values.AssetCode) {
        errors.AssetCode = 'کد را وارد کنید';
    }
    if (!values.AssetName) {
        errors.AssetName = 'نام را وارد کنید';
    }
    if (!values.LocationID) {
        errors.LocationID = 'مکان را وارد کنید';
    }
    if (!values.AssetClassID) {
        errors.AssetClassID = 'کلاس نجهیز را وارد کنید';
    }
    return errors
};

const AssetCreate = props => {
    const {source, ...rest} = props;
    const classes = useStyles();

    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();
    const [Value, setValue] = useState('');

    const onSuccess = () => {
        notify(`دیتا ذخیره شد`);
        redirect('/PMWorks/Asset');
        redirect('/PMWorks/Asset/create');
        refresh();
    };
return(
    <Create actions={<CreateActions />} onSuccess={onSuccess} {...props} title="ایجاد تجهیز">
        <SimpleForm validate={validateError} initialValues={{ status: 0, fakesub: 0 }}>
            <CodeInput formClassName={classes.fir} value={Value}  onChange={event => { let val = event.target.value;
                                                    val = val.replace(/[^\x00-\x7F]/ig, "");
                                                    setValue(val)
                                                    }}
                label="کد تجهیز"
                source="AssetCode" {...rest}/>
            <TextInput formClassName={classes.sec} label="نام تجهیز" textAlgin="right" source="AssetName" />
            <DateInput formClassName={classes.last} label="تاریخ نصب" source="InstallationDate" />
            <Separator/>
            <ReferenceInput className={classes.sel} disabled formClassName={classes.fir} label="کد اولویت" textAlgin="right" source="AssetPriorityID" reference="PMWorks/AssetPriority">
                <SelectInput optionText="AssetPriorityCode" />
            </ReferenceInput>
            <AssetPriorityRefrenceInput formClassName={classes.sec} label="نام اولویت" textAlgin="right" source="AssetPriorityID" reference="PMWorks/AssetPriority" perPage={10000} />
            <Separator/>
            <ReferenceInput className={classes.sel} disabled formClassName={classes.fir} label="کد مکان" textAlgin="right" source="LocationID" reference="PMWorks/Location">
                <SelectInput optionText="LocationCodeChain" />
            </ReferenceInput>
            <LocationRefrenceInput formClassName={classes.sec} label="نام مکان" textAlgin="right" source="LocationID" reference="PMWorks/Location" allowEmpty validate={required()} perPage={10000} />
            <Separator/>
            <ReferenceInput className={classes.sel} disabled formClassName={classes.fir} label="کد خانواده تجهیز" textAlgin="right" source="AssetClassID" reference="PMWorks/AssetClass">
                <SelectInput optionText="AssetClassCode" />
            </ReferenceInput>
            <AssetClassRefrenceInput formClassName={classes.sec} label="عنوان خانواده تجهیز" textAlgin="right" source="AssetClassID" reference="PMWorks/AssetClass" allowEmpty validate={required()} perPage={10000} />
        </SimpleForm>
    </Create>
 );
};


export default AssetCreate;
