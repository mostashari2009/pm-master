import * as React from "react";
import {
    Edit,
    SimpleForm,
    TextInput,
}
from 'react-admin';
import PersonnelJobCategoryTitle from './PersonnelJobCategoryTitle';


const PersonnelJobCategoryEdit = props => (
    <Edit title={<PersonnelJobCategoryTitle />} {...props}>
        <SimpleForm>
            <TextInput label="پرسنل" textAlgin="right" source="PersonnelID" />
            <TextInput label="شغل" textAlgin="right" source="JobCategoryID" />
        </SimpleForm>
    </Edit>
);


export default PersonnelJobCategoryEdit;
