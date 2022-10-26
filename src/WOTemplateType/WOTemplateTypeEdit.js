import * as React from "react";
import {
    Edit,
    SimpleForm,
    TopToolbar,
    ListButton,
    TextInput,
    ShowButton,
    Toolbar
}
from 'react-admin';
import WOTemplateTypeTitle from './WOTemplateTypeTitle';

const EditActions = ({ basePath, data, resource }) => (
    <TopToolbar>
        <ListButton basePath={basePath} />
        <ShowButton basePath={basePath} record={data} />
    </TopToolbar>
);

const validateError = (values) => {
    const errors = {};
    if (!values.WOTemplateTypeCode) {
        errors.WOTemplateTypeCode = 'کد را وارد کنید';
    }
    if (!values.WOTemplateTypeName) {
        errors.WOTemplateTypeName = 'نام را وارد کنید';
    }
    return errors
};

const WOTemplateTypeEdit = props => (
    <Edit actions={<EditActions />} title={<WOTemplateTypeTitle />} {...props}>
        <SimpleForm validate={validateError} toolbar={<Toolbar alwaysEnableSaveButton />} redirect="show">
            <TextInput label="کد نوع برنامه" textAlgin="right" source="WOTemplateTypeCode" />
            <TextInput label="نام نوع برنامه" textAlgin="right" source="WOTemplateTypeName" />
            <TextInput multiline label="توضیحات نوع برنامه" textAlgin="right" source="WOTemplateTypeDescription"/>
        </SimpleForm>
    </Edit>
);


export default WOTemplateTypeEdit;
