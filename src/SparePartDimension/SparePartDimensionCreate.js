import * as React from "react";
import {
    SimpleForm,
    TextInput,
    Create,
    TopToolbar,
    ListButton,
    useNotify,
    useRefresh,
    useRedirect
}
from 'react-admin';

const CreateActions = ({ basePath, record, resource }) => (
    <TopToolbar>
        <ListButton basePath={basePath} />
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

const SparePartDimensionCreate = props => {

    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = () => {
        notify(`دیتا ذخیره شد`)
        redirect('/PMWorks/SparePartDimension/create');
        refresh();
    };
return(
    <Create actions={<CreateActions />} onSuccess={onSuccess} {...props} title="ایجاد سطح">
        <SimpleForm validate={validateError}>
            <TextInput label="کد سطح" textAlgin="right" source="SparePartDimensionCode" />
            <TextInput label="نام سطح" textAlgin="right" source="SparePartDimensionName" />
        </SimpleForm>
    </Create>
);
};


export default SparePartDimensionCreate;
