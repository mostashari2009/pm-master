import * as React from "react";

import {
    TextField,
    SimpleShowLayout,
    Show,
    BooleanField
}
from 'react-admin';
import UserTitle from './UserTitle';


const UserShow = (props) => (
    <Show title={<UserTitle />} {...props}>
        <SimpleShowLayout>
            <TextField label="یوزر" textAlgin="right" source="username" />
            <TextField label="پسورد" textAlgin="right" source="last_name" />
            <BooleanField label="پرسنل" textAlgin="right" source="is_staff" />
            <BooleanField label="فعال" textAlgin="right" source="is_active" />
            <BooleanField label="دسترسی تمام" textAlgin="right" source="is_superuser" />
        </SimpleShowLayout>
    </Show>
);


export default UserShow;
