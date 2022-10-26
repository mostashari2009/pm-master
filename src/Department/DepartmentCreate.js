import * as React from "react";
import {
    SimpleForm,
    TextInput,
    Create,
    useNotify,
    useRefresh,
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
    if (!values.DepartmentCode) {
        errors.DepartmentCode = 'کد را وارد کنید';
    }
    if (!values.DepartmentName) {
        errors.DepartmentName = 'نام را وارد کنید';
    }
    return errors
};

const DepartmentCreate = props => {

    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = () => {
        notify(`دیتا ذخیره شد`)
        redirect('/PMWorks/Department/create');
        refresh();
    };
return(
    <Create actions={<CreateActions />} onSuccess={onSuccess} {...props} title="ایجاد دپارتمان">
        <SimpleForm validate={validateError}>
            <TextInput label="کد دپارتمان" textAlgin="right" source="DepartmentCode" />
            <TextInput label="نام دپارتمان" textAlgin="right" source="DepartmentName" />
        </SimpleForm>
    </Create>
);
};


export default DepartmentCreate;