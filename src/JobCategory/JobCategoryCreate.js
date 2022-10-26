import * as React from "react";
import {
    SimpleForm,
    TextInput,
    Create,
    useRedirect,
    useRefresh,
    useNotify,
    ListButton,
    TopToolbar
}
from 'react-admin';

const CreateActions = ({ basePath, record, resource }) => (
    <TopToolbar>
        <ListButton basePath={basePath} />
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


const JobCategoryCreate = props => {

    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = () => {
        notify(`دیتا ذخیره شد`)
        redirect('/PMWorks/JobCategory/create');
        refresh();
    };
return(
    <Create actions={<CreateActions />} onSuccess={onSuccess} {...props} title="ایجاد تخصص">
        <SimpleForm validate={validateError}>
            <TextInput label="کد تخصص" textAlgin="right" source="JobCategoryCode" />
            <TextInput label="عنوان تخصص" textAlgin="right" source="JobCategoryName" />
        </SimpleForm>
    </Create>
);
};


export default JobCategoryCreate;