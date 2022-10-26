import * as React from "react";
import {
    Edit,
    SimpleForm,
    NumberInput,
}
from 'react-admin';
import WOPersonnelTitle from './WOPersonnelTitle';
import PersonnelRefrenceInput from './PersonnelRefrenceInput';
import {JalaliInput} from 'ra-hichestan-datetime';


const WOPersonnelEdit = props => (
    <Edit title={<WOPersonnelTitle />} {...props}>
        <SimpleForm>
            <PersonnelRefrenceInput label="کد پرسنل" textAlgin="right" source="PersonnelID" reference="PMWorks/Personnel" perPage={10000} />
            <JalaliInput label="تاریخ انجام" source="WorkDate" />
            <NumberInput textAlgin="right" label="مدت زمان انجام" source="WorkTime" />
        </SimpleForm>
    </Edit>
);


export default WOPersonnelEdit;
