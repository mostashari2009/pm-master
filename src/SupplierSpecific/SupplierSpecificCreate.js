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

const CreateActions = ({ basePath}) => (
    <TopToolbar>
        <ListButton basePath={basePath} />
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


const SupplierSpecificCreate = props => {
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = () => {
        notify(`دیتا ذخیره شد`)
        redirect('/PMWorks/SupplierSpecific/create');
        refresh();
    };
    return(
        <Create actions={<CreateActions />} onSuccess={onSuccess}  {...props} title="ایجاد ویژگی تامین کننده">
            <SimpleForm validate={validateError}>
                <TextInput label="کد ویژگی تامین کننده" textAlgin="right" source="SupplierSpecificCode"/>
                <TextInput label="نام ویژگی تامین کننده" textAlgin="right" source="SupplierSpecificName"/>
            </SimpleForm>
        </Create>
    )
};


export default SupplierSpecificCreate;