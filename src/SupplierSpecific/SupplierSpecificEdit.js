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
import SupplierSpecificTitle from './SupplierSpecificTitle';

const EditActions = ({ basePath, data }) => (
    <TopToolbar>
        <ListButton basePath={basePath} />
        <ShowButton basePath={basePath} record={data} />
    </TopToolbar>
);

const validateError = (values) => {
    const errors = {};
    if (!values.SupplierSpecificCode) {
        errors.SupplierSpecificCode = 'کد را وارد کنید';
    }
    if (!values.SupplierSpecificName) {
        errors.SupplierSpecificName = 'نام را وارد کنید';
    }
    return errors
};

const SupplierSpecificEdit = props => (
    <Edit actions={<EditActions />} title={<SupplierSpecificTitle />} {...props}>
        <SimpleForm validate={validateError} toolbar={<Toolbar alwaysEnableSaveButton />} redirect="show">
            <TextInput label="کد ویژگی تامین کننده" textAlgin="right" source="SupplierSpecificCode" />
            <TextInput label="نام ویژگی تامین کننده" textAlgin="right" source="SupplierSpecificName" />
        </SimpleForm>
    </Edit>
);


export default SupplierSpecificEdit;
