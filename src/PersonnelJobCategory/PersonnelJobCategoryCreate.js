import * as React from "react";
import {
    SimpleForm,
    Toolbar,
    Create,
    required,
    ReferenceInput,
    SelectInput,
    useNotify,
    useRefresh,
    useRedirect
}
from 'react-admin';
import { parse } from 'query-string';
import JobCategoryRefrenceInput from './JobCategoryRefrenceInput';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
    fir: { display: 'inline-block', verticalAlign: 'bottom' },
    sec: { display: 'inline-block' },
    width: { width: 712 },
    last: { display: 'inline-block', marginRight: 0 },
    sel: { '& svg': {display: 'none' }},
});

const Separator = () => <Box pt="0em" />;

const validateError = (values) => {
    const errors = {};
    if (!values.JobCategoryID) {
        errors.JobCategoryID = 'شغل را وارد کنید';
    }
    return errors
};

const PersonnelJobCategoryCreate = props => {
    const classes = useStyles();
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const { PersonnelID: PersonnelID_string } = parse(props.location.search);
    const PersonnelID = PersonnelID_string ? parseInt(PersonnelID_string, 10) : '';

    const onSuccess = () => {
        notify(`دیتا ذخیره شد`)
        redirect(`/PMWorks/PersonnelJobCategory/create?PersonnelID=${PersonnelID}`);
        refresh();
    };

    return (
    <Create onSuccess={onSuccess} {...props} title="ایجاد شغل پرسنل">
        <SimpleForm validate={validateError} initialValues={{ PersonnelID}} redirect={redirect} toolbar={<Toolbar alwaysEnableSaveButton />}>
            <ReferenceInput disabled className={classes.sel} formClassName={classes.fir} label="کد پرسنل" textAlgin="right" source="PersonnelID" reference="PMWorks/Personnel">
                <SelectInput optionText="PersonnelCode" />
            </ReferenceInput>
            <ReferenceInput disabled className={classes.sel} formClassName={classes.sec} label="نام پرسنل" textAlgin="right" source="PersonnelID" reference="PMWorks/Personnel">
                <SelectInput optionText="PersonnelName" />
            </ReferenceInput>
            <Separator/>
            <ReferenceInput disabled className={classes.sel} formClassName={classes.fir} label="کد شغل" textAlgin="right" source="JobCategoryID" reference="PMWorks/JobCategory">
                <SelectInput optionText="JobCategoryCode" />
            </ReferenceInput>
            <JobCategoryRefrenceInput formClassName={classes.sec} label="نام شغل" textAlgin="right" source="JobCategoryID" reference="PMWorks/JobCategory" allowEmpty validate={required()} perPage={10000} />
        </SimpleForm>
    </Create>
    );
};


export default PersonnelJobCategoryCreate;