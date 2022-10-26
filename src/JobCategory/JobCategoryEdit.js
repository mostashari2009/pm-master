import * as React from "react";
import {
    Edit,
    SimpleForm,
    TextInput,
    Toolbar,
    ShowButton,
    ListButton,
    TopToolbar
}
from 'react-admin';
import JobCategoryTitle from './JobCategoryTitle';

const EditActions = ({ basePath, data, resource }) => (
    <TopToolbar>
        <ListButton basePath={basePath} />
        <ShowButton basePath={basePath} record={data} />
    </TopToolbar>
);

const validateError = (values) => {
    const errors = {};
    if (!values.JobCategoryCode) {
        errors.JobCategoryCode = 'کد را وارد کنید';
    }
    if (!values.JobCategoryName) {
        errors.JobCategoryName = 'نام را وارد کنید';
    }
    return errors
};


const JobCategoryEdit = props => (
    <Edit actions={<EditActions />} title={<JobCategoryTitle />} {...props}>
        <SimpleForm validate={validateError} toolbar={<Toolbar alwaysEnableSaveButton />} redirect="show">
            <TextInput label="کد تخصص" textAlgin="right" source="JobCategoryCode" />
            <TextInput label="عنوان تخصص" textAlgin="right" source="JobCategoryName" />
        </SimpleForm>
    </Edit>
);


export default JobCategoryEdit;
