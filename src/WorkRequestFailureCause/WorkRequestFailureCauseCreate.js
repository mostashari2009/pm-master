import * as React from "react";
import {
    SimpleForm,
    Toolbar,
    Create,
    required,
    FormDataConsumer,
    ReferenceInput,
    SelectInput,
    useRedirect,
    useNotify,
    useRefresh,
    TextInput
}
from 'react-admin';
import { parse } from 'query-string';
import FailureCauseRefrenceInput from './FailureCauseRefrenceInput';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
    fir: { display: 'inline-block', verticalAlign: 'bottom' },
    sec: { display: 'inline-block' },
    width: { width: 533, '& label': {marginRight: '25px'} },
    last: { display: 'inline-block', marginRight: 0 },
    sel: { '& svg': {display: 'none' }},
});

const WorkRequestformat  = v => {
    let str = v ? `${v}` : '';
    str = str.padStart(4,0);
    let text = "WR0".concat(str);
    return text;
};

const Separator = () => <Box pt="0em" />;

const validateError = (values) => {
    const errors = {};
    if (!values.FailureCauseID) {
        errors.FailureCauseID = 'علت خرابی را وارد کنید';
    }
    return errors
};

const WorkRequestFailureCauseCreate = props => {

    const classes = useStyles();
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const { WorkRequestID: WorkRequestID_string } = parse(props.location.search);
    const WorkRequestID = WorkRequestID_string ? parseInt(WorkRequestID_string, 10) : '';

    const onSuccess = () => {
        notify(`دیتا ذخیره شد`)
        redirect(`/PMWorks/WorkRequestFailureCause/create?WorkRequestID=${WorkRequestID}`);
        refresh();
    };

    return (
    <Create onSuccess={onSuccess} {...props} title="ایجاد علت خرابی درخواست‌کار">
        <SimpleForm validate={validateError} initialValues={{ WorkRequestID}} redirect={redirect} toolbar={<Toolbar alwaysEnableSaveButton />}>
            <TextInput disabled className={classes.width} label="کد درخواست‌کار" source="WorkRequestID" format={WorkRequestformat}/>
            <ReferenceInput disabled className={classes.sel} formClassName={classes.fir} label="کد علت خرابی" textAlgin="right" source="FailureCauseID" reference="PMWorks/FailureCause">
                <SelectInput optionText="FailureCauseCode" />
            </ReferenceInput>
            <FormDataConsumer formClassName={classes.sec}>
                {({ formData, ...rest }) => formData.WorkRequestID &&
                    <FailureCauseRefrenceInput label="نام علت خرابی" textAlgin="right" source="FailureCauseID" reference="PMWorks/WRCause" allowEmpty validate={required()} perPage={10000} filter={{ FailureModeID: formData.WorkRequestID }} {...rest} />
                }
            </FormDataConsumer>
        </SimpleForm>
    </Create>
    );
};


export default WorkRequestFailureCauseCreate;