import * as React from "react";
import {
    SimpleForm,
    useNotify,
    useRefresh,
    useRedirect,
    TextInput,
    Create,
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


const AssetPriorityCreate = props => {

    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = () => {
        notify(`دیتا ذخیره شد`)
        redirect('/PMWorks/AssetPriority/create');
        refresh();
    };
return(
    <Create actions={<CreateActions />} onSuccess={onSuccess} {...props} title="ایجاد اولویت">
        <SimpleForm validate={validateError}>
            <TextInput label="کد اولویت" textAlgin="right" source="AssetPriorityCode" />
            <TextInput label="نام اولویت" textAlgin="right" source="AssetPriorityName" />
            <TextInput label="مقدار" textAlgin="right" source="AssetPriorityValue" />
        </SimpleForm>
    </Create>
);
}



export default AssetPriorityCreate;
