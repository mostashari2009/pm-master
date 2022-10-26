import * as React from "react";
import {
    SimpleForm,
    TextInput,
    Create
}
from 'react-admin';

const TaskTypeCreate = props => (
    <Create {...props} title="ایجاد نوع درخواست کار">
        <SimpleForm>
            <TextInput label="کد نوع" textAlgin="right" source="TypeWrCode" />
            <TextInput label="نام نوع" textAlgin="right" source="TypeWrName" />
        </SimpleForm>
    </Create>
);


export default TaskTypeCreate;