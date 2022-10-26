import * as React from "react";
import { useState } from 'react';
import {
    SimpleForm,
    TextInput,
    Create,
    useNotify,
    useRedirect,
    TopToolbar,
    ListButton,
    useRefresh,
    ReferenceInput,
    SelectInput
}
from 'react-admin';
import SparePartCategoryRefrenceInput from './SparePartCategoryRefrenceInput';
import SparePartDimensionRefrenceInput from './SparePartDimensionRefrenceInput';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import CodeInput from '../Components/CodeInput';

const useStyles = makeStyles({
    fir: { display: 'inline-block'},
    sec: { display: 'inline-block'},
    width: { marginTop: '-15px' },
    last: { display: 'inline-block', marginRight: 0 },
    sel: { '& svg': {display: 'none' }, marginTop: '-15px'},
});

const Separator = () => <Box pt="0em" />;

const CreateActions = ({ basePath, record, resource }) => (
    <TopToolbar>
        <ListButton basePath={basePath} />
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


const SparePartCreate = props => {
    const {source, ...rest} = props;
    const classes = useStyles();

    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();
    const [Value, setValue] = useState('');

    const onSuccess = () => {
        notify(`دیتا ذخیره شد`)
        redirect('/PMWorks/SparePart');
        redirect('/PMWorks/SparePart/create');
        refresh();
    };
    return(
    <Create actions={<CreateActions />} onSuccess={onSuccess} {...props} title="ایجاد قطعه">
        <SimpleForm validate={validateError}>
            <CodeInput formClassName={classes.fir} value={Value}  onChange={event => { let val = event.target.value;
                                                    val = val.replace(/[^\x00-\x7F]/ig, "");
                                                    setValue(val)
                                                    }}
                                                    label="کد قطعه"
                source="SparePartCode" {...rest}/>
            <TextInput formClassName={classes.sec} label="نام قطعه" textAlgin="right" source="SparePartName" />
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
    </Create>
);
    };


export default SparePartCreate;
