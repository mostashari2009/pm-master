import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    Responsive,
    ShowButton,
    SimpleList,
    BooleanField,
    EditButton
}
from 'react-admin';
import UserFilter from './UserFilter';

const UserList = props => (
    <List filters={<UserFilter />} {...props} title="کاربران">
        <Responsive
            small={
                <SimpleList linkType="show" primaryText={record => record.username} />
            }
            medium={
                <Datagrid>
                    <TextField label="یوزر" textAlgin="right" source="username" />
                    <TextField label="پسورد" textAlgin="right" source="last_name" />
                    <BooleanField label="پرسنل" textAlgin="right" source="is_staff" />
                    <BooleanField label="فعال" textAlgin="right" source="is_active" />
                    <BooleanField label="دسترسی تمام" textAlgin="right" source="is_superuser" />
                    <ShowButton />
                    <EditButton />
                </Datagrid>
            }
         />
    </List>
);


export default UserList;
