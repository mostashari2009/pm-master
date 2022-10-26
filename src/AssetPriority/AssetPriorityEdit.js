import * as React from "react";
import {
    Edit,
    SimpleForm,
    ListButton,
    ShowButton,
    TextInput,
    Toolbar,
    TopToolbar
}
from 'react-admin';
import AssetPriorityTitle from './AssetPriorityTitle';


const EditActions = ({ basePath, data, resource }) => (
    <TopToolbar>
        <ListButton basePath={basePath} />
        <ShowButton basePath={basePath} record={data} />
    </TopToolbar>
);

const validateError = (values) => {
    const errors = {};
    if (!values.AssetPriorityCode) {
        errors.AssetPriorityCode = 'کد را وارد کنید';
    }
    if (!values.AssetPriorityName) {
        errors.AssetPriorityName = 'نام را وارد کنید';
    }
    if (!values.AssetPriorityValue) {
        errors.AssetPriorityValue = 'مقدار را وارد کنید';
    }
    return errors
};

const AssetPriorityEdit = props => (
    <Edit actions={<EditActions />} title={<AssetPriorityTitle />} {...props}>
        <SimpleForm validate={validateError} toolbar={<Toolbar alwaysEnableSaveButton />} redirect="show">
            <TextInput label="کد اولویت" textAlgin="right" source="AssetPriorityCode" />
            <TextInput label="نام اولویت" textAlgin="right" source="AssetPriorityName" />
            <TextInput label="مقدار" textAlgin="right" source="AssetPriorityValue" />
        </SimpleForm>
    </Edit>
);


export default AssetPriorityEdit;
