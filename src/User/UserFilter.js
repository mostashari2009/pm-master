import * as React from "react";
import {
    Filter,
    TextInput,
    BooleanInput
}
from 'react-admin';

const UserFilter = (props) => (
    <Filter {...props}>
        <TextInput label="یوزر" textAlgin="right" source="username" />
        <TextInput label="پسورد" textAlgin="right" source="password" />
        <BooleanInput label="پرسنل" textAlgin="right" source="is_staff" />
        <BooleanInput label="فعال" textAlgin="right" source="is_active" />
        <BooleanInput label="دسترسی تمام" textAlgin="right" source="is_superuser" />
    </Filter>
);


export default UserFilter;
