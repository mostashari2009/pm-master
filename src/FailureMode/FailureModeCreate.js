import * as React from "react";
import { useState } from 'react';

import {
    SimpleForm,
    ReferenceInput,
    TextInput,
    Toolbar,
    Create,
    useNotify,
    useRefresh,
    useRedirect,
    SelectInput
}
from 'react-admin';
import { parse } from 'query-string';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import CodeInput from '../Components/CodeInput';

const useStyles = makeStyles({
    fir: { display: 'inline-block' },
    sec: { display: 'inline-block' },
    width: { width: 533, '& label': {marginRight: '25px'} },
    last: { display: 'inline-block', marginRight: 0 },
    sel: { '& svg': {display: 'none' }},

});

const Separator = () => <Box pt="0em" />;

const validateError = (values) => {
    const errors = {};
    if (!values.FailureModeCode) {
        errors.FailureModeCode = 'کد را وارد کنید';
    }
    if (!values.FailureModeName) {
        errors.FailureModeName = 'نام را وارد کنید';
    }
    return errors
};

const FailureModeCreate = props => {
    const classes = useStyles();
    const {source, ...rest} = props;
    const [Value, setValue] = useState('');

    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const { AssetClassID: AssetClassID_string } = parse(props.location.search);
    const AssetClassID = AssetClassID_string ? parseInt(AssetClassID_string, 10) : '';
    const redirectt = AssetClassID ? `/PMWorks/AssetClass/${AssetClassID}/show/PMWorks/FailureMode` : false;

    const onSuccess = () => {
        notify(`دیتا ذخیره شد`)
        redirect(`/PMWorks/FailureMode/create?AssetClassID=${AssetClassID}`);
        refresh();
    };

    return (
    <Create onSuccess={onSuccess} {...props} title="ایجاد نوع خرابی">
        <SimpleForm validate={validateError} initialValues={{ AssetClassID}} redirect={redirectt} toolbar={<Toolbar alwaysEnableSaveButton />}>
            <ReferenceInput disabled className={classes.sel} formClassName={classes.fir} label="کد خانواده تجهیز" textAlgin="right" source="AssetClassID" reference="PMWorks/AssetClass">
                <SelectInput optionText="AssetClassCode" />
            </ReferenceInput>
            <ReferenceInput disabled className={classes.sel} formClassName={classes.sec} label="نام خانواده تجهیز" textAlgin="right" source="AssetClassID" reference="PMWorks/AssetClass">
                <SelectInput optionText="AssetClassName" />
            </ReferenceInput>
            <Separator/>
            <CodeInput formClassName={classes.fir} value={Value}  onChange={event => { let val = event.target.value;
                                                    val = val.replace(/[^\x00-\x7F]/ig, "");
                                                    setValue(val)
                                                    }}
                label="کد حالت خرابی"
                source="FailureModeCode" {...rest}/>
            <TextInput formClassName={classes.sec} label="نام حالت خرابی" textAlgin="right" source="FailureModeName" />
            <Separator/>
            <TextInput className={classes.width} multiline label="توضیحات حالت خرابی" textAlgin="right" source="FailureModeDescription" />
        </SimpleForm>
    </Create>
    );
};


export default FailureModeCreate;
