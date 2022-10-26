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
import SparePartDimensionTitle from './SparePartDimensionTitle';

const EditActions = ({ basePath, data, resource }) => (
    <TopToolbar>
        <ListButton basePath={basePath} />
        <ShowButton basePath={basePath} record={data} />
    </TopToolbar>
);

const validateError = (values) => {
    const errors = {};
    if (!values.SparePartDimensionCode) {
        errors.SparePartDimensionCode = 'کد را وارد کنید';
    }
    if (!values.SparePartDimensionName) {
        errors.SparePartDimensionName = 'نام را وارد کنید';
    }
    return errors
};

const SparePartDimensionEdit = props => (
    <Edit actions={<EditActions />} title={<SparePartDimensionTitle />} {...props}>
        <SimpleForm validate={validateError} toolbar={<Toolbar alwaysEnableSaveButton />} redirect="show">
            <TextInput label="کد سطح" textAlgin="right" source="SparePartDimensionCode" />
            <TextInput label="نام سطح" textAlgin="right" source="SparePartDimensionName" />
        </SimpleForm>
    </Edit>
);


export default SparePartDimensionEdit;
