import * as React from "react";
import {
    Edit,
    SimpleForm,
    TextInput
}
from 'react-admin';
import PersonnelTitle from './PersonnelTitle';
import DepartmentRefrenceInput from './DepartmentRefrenceInput';


const PersonnelEdit = props => (
    <Edit title={<PersonnelTitle />} {...props}>
        <SimpleForm>
            <TextInput label="کد پرسنلی" textAlgin="right" source="PersonnelCode" />
            <TextInput label="کد نت نیروی انسانی" textAlgin="right" source="PersonnelNetCode" />
            <TextInput label="نام نیروی انسانی" textAlgin="right" source="PersonnelName" />
            <TextInput label="نام خانوادگی نیروی انسانی" textAlgin="right" source="PersonnelFamily" />
            <TextInput label="شماره نیروی انسانی" textAlgin="right" source="PersonnelMobile" />
            <DepartmentRefrenceInput label="دپارتمان" textAlgin="right" source="DepartmentID" reference="PMWorks/Department" perPage={10000} />
        </SimpleForm>
    </Edit>
);


export default PersonnelEdit;
