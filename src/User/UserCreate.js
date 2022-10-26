import * as React from "react";
import {
    SimpleForm,
    TextInput,
    Create,
    BooleanInput 
}
from 'react-admin';

const UserCreate = props => (
    <Create {...props} title="ایجاد کاربر">
        <SimpleForm>
            <TextInput label="یوزر" textAlgin="right" source="username" />
            <TextInput label="پسورد" textAlgin="right" source="password" />
        </SimpleForm>
    </Create>
);


export default UserCreate;