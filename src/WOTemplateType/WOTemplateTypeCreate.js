import * as React from "react";
import {
    SimpleForm,
    useRefresh,
    useNotify,
    TextInput,
    Create,
    useRedirect,
    TopToolbar,
    ListButton
}
from 'react-admin';

const CreateActions = ({ basePath, record, resource }) => (
    <TopToolbar>
        <ListButton basePath={basePath} />
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

const WOTemplateTypeCreate = props => {

    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = () => {
        notify(`دیتا ذخیره شد`)
        redirect('/PMWorks/WOTemplateType/create');
        refresh();
    };
return(
    <Create actions={<CreateActions />} onSuccess={onSuccess} {...props} title="ایجاد نوع برنامه">
        <SimpleForm validate={validateError}>
            <TextInput label="کد نوع برنامه" textAlgin="right" source="WOTemplateTypeCode" />
            <TextInput label="نام نوع برنامه" textAlgin="right" source="WOTemplateTypeName" />
            <TextInput multiline label="توضیحات نوع برنامه" textAlgin="right" source="WOTemplateTypeDescription"/>
        </SimpleForm>
    </Create>
);
};


export default WOTemplateTypeCreate;