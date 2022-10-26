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
import DepartmentRefrenceInput from './DepartmentRefrenceInput';
import UserRefrenceInput from './UserRefrenceInput';
import CodeInput from '../Components/CodeInput';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
    fir: { display: 'inline-block', verticalAlign: 'top' },
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
    if (!values.PersonnelCode) {
        errors.PersonnelCode = 'کد را وارد کنید';
    }
    if (!values.PersonnelNetCode) {
        errors.PersonnelNetCode = 'کد نت را وارد کنید';
    }
    if (!values.DepartmentID) {
        errors.DepartmentID = 'دپارتمان را وارد کنید';
    }
    return errors
};

const PersonnelCreate = props =>  {
    const {source, ...rest} = props;
    const classes = useStyles();

    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();
    const [Value, setValue] = useState('');
    const [Valuen, setValuen] = useState('');

    const onSuccess = () => {
        notify(`دیتا ذخیره شد`)
        redirect('/PMWorks/Personnel');
        redirect('/PMWorks/Personnel/create');
        refresh();
    };
return(
    <Create actions={<CreateActions />} onSuccess={onSuccess} {...props} title="ایجاد نیروی انسانی">
        <SimpleForm validate={validateError}>
            <CodeInput formClassName={classes.fir} value={Value}  onChange={event => { let val = event.target.value;
                                                    val = val.replace(/[^\x00-\x7F]/ig, "");
                                                    setValue(val)
                                                    }}
                label="کد پرسنلی"
                source="PersonnelCode" {...rest}/>
            <CodeInput formClassName={classes.sec} value={Valuen}  onChange={event => { let val = event.target.value;
                                                    val = val.replace(/[^\x00-\x7F]/ig, "");
                                                    setValuen(val)
                                                    }}
                label="کد نت نیروی انسانی"
                source="PersonnelNetCode" {...rest}/>
            <Separator/>
            <TextInput formClassName={classes.fir} label="نام نیروی انسانی" textAlgin="right" source="PersonnelName" />
            <TextInput formClassName={classes.sec} label="نام خانوادگی نیروی انسانی" textAlgin="right" source="PersonnelFamily" />
            <Separator/>
            <TextInput className={classes.width} formClassName={classes.fir} label="شماره نیروی انسانی" textAlgin="right" source="PersonnelMobile" />
            <UserRefrenceInput className={classes.sel} formClassName={classes.fir} label="کاربر" textAlgin="right" source="user" reference="PMWorks/User" perPage={10000} />
            <Separator/>
            <ReferenceInput className={classes.sel} disabled formClassName={classes.fir} label="کد دپارتمان" textAlgin="right" source="DepartmentID" reference="PMWorks/Department">
                <SelectInput optionText="DepartmentCode" />
            </ReferenceInput>
            <DepartmentRefrenceInput className={classes.sel} formClassName={classes.sec} label="نام دپارتمان" textAlgin="right" source="DepartmentID" reference="PMWorks/Department" perPage={10000} />
        </SimpleForm>
    </Create>
);
};


export default PersonnelCreate;