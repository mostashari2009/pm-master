import * as React from "react";
import {
    Edit,
    SimpleForm,
    TextInput,
    BooleanInput
}
from 'react-admin';
import UserTitle from './UserTitle';

const UserEdit = props => (
    <Edit title={<UserTitle />} {...props}>
        <SimpleForm>
            <TextInput label="یوزر" textAlgin="right" source="username" />
            <TextInput label="پسورد" textAlgin="right" source="password" />
            <BooleanInput label="پرسنل" textAlgin="right" source="is_staff" />
            <BooleanInput label="فعال" textAlgin="right" source="is_active" />
            <BooleanInput label="دسترسی تمام" textAlgin="right" source="is_superuser" />
        </SimpleForm>
    </Edit>
);


export default UserEdit;
