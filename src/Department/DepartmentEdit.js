import * as React from "react";
import {
    Edit,
    SimpleForm,
    TextInput,
    TopToolbar,
    ListButton,
    ShowButton,
    Toolbar
}
from 'react-admin';
import DepartmentTitle from './DepartmentTitle';

const EditActions = ({ basePath, data, resource }) => (
    <TopToolbar>
        <ListButton basePath={basePath} />
        <ShowButton basePath={basePath} record={data} />
    </TopToolbar>
);

const validateError = (values) => {
    const errors = {};
    if (!values.DepartmentCode) {
        errors.DepartmentCode = 'کد را وارد کنید';
    }
    if (!values.DepartmentName) {
        errors.DepartmentName = 'نام را وارد کنید';
    }
    return errors
};

const DepartmentEdit = props => (
    <Edit actions={<EditActions />} title={<DepartmentTitle />} {...props}>
        <SimpleForm validate={validateError} toolbar={<Toolbar alwaysEnableSaveButton />} redirect="show">
            <TextInput label="کد دپارتمان" textAlgin="right" source="DepartmentCode" />
            <TextInput label="نام دپارتمان" textAlgin="right" source="DepartmentName" />
        </SimpleForm>
    </Edit>
);


export default DepartmentEdit;
