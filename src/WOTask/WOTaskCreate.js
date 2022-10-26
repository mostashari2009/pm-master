import * as React from "react";
import {
    SimpleForm,
    Toolbar,
    Create,
    ReferenceInput,
    SelectInput,
    FormDataConsumer,
    useNotify,
    useRefresh,
    useRedirect,
    required
}
from 'react-admin';
import { parse } from 'query-string';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import TaskRefrenceInput from './TaskRefrenceInput';

const useStyles = makeStyles({
    fir: { display: 'inline-block', verticalAlign: 'bottom' },
    sec: { display: 'inline-block' },
    width: { width: 533, '& label': {marginRight: '25px'}, '& svg': {display: 'none' } },
    last: { display: 'inline-block', marginRight: 0 },
    sel: { '& svg': {display: 'none' }},
});

const Separator = () => <Box pt="0em" />;

const validateError = (values) => {
    const errors = {};
    if (!values.TaskID) {
        errors.TaskID = 'وظیفه را وارد کنید';
    }
    return errors
};

const freq = [
    { _id: 'D', full_name: 'انجام شده'},
    { _id: 'ND', full_name: 'انجام نشده'},
    { _id: 'N', full_name: 'نیاز به انجام نمی‌باشد'}
];

const WOTaskCreate = props => {
    const classes = useStyles();
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const { WOAssetSubdivisionID: WOAssetSubdivisionID_string } = parse(props.location.search);
    const WOAssetSubdivisionID = WOAssetSubdivisionID_string ? parseInt(WOAssetSubdivisionID_string, 10) : '';

    const onSuccess = () => {
        notify(`دیتا ذخیره شد`)
        redirect(`/PMWorks/WOTask/create?WorkOrderID=${WOAssetSubdivisionID}`);
        refresh();
    };

    return (
    <Create onSuccess={onSuccess} {...props} title="ایجاد وظیفه دستور کار">
        <SimpleForm validate={validateError} initialValues={{ WOAssetSubdivisionID}} redirect={redirect} toolbar={<Toolbar alwaysEnableSaveButton />}>
            <ReferenceInput disabled className={classes.width} formClassName={classes.fir} label="تجهیز" source="WOAssetSubdivisionID" textAlgin="right" reference="PMWorks/WorkOrder">
                <SelectInput source="AssetSubdivisionID"/>
            </ReferenceInput>
            <Separator/>
            <ReferenceInput disabled className={classes.sel} formClassName={classes.fir} label="کد وظیفه" textAlgin="right" source="TaskID" reference="PMWorks/WRTask">
                <SelectInput optionText="TaskCode" />
            </ReferenceInput>
            <FormDataConsumer formClassName={classes.sec}>
                {({ formData, ...rest }) => formData.WorkOrderID &&

                    <TaskRefrenceInput label="نام وظیفه" textAlgin="right" source="TaskID" reference="PMWorks/WRTask" allowEmpty validate={required()} perPage={10000} filter={{ WorkOrderID: formData.WorkOrderID }} {...rest} />

                }
            </FormDataConsumer>
            <Separator/>
            <SelectInput formClassName={classes.fir} label="وضعیت" textAlgin="right" source="WOTaskSituationOfDo" choices={freq} optionText="full_name" optionValue="_id" />
        </SimpleForm>
    </Create>
    );
};


export default WOTaskCreate;