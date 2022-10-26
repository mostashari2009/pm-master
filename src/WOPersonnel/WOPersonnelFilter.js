import * as React from "react";
import {
    Filter,
    NumberInput
}
from 'react-admin';
import PersonnelRefrenceInput from './PersonnelRefrenceInput';
import {JalaliInput} from 'ra-hichestan-datetime';

const WOPersonnelFilter = (props) => (
    <Filter {...props}>
        <PersonnelRefrenceInput label="کد تامین کننده" textAlgin="right" source="PersonnelID" reference="PMWorks/Personnel" perPage={10000} />
        <JalaliInput label="تاریخ انجام" source="WorkDate" />
        <NumberInput textAlgin="right" label="مدت زمان انجام" source="WorkTime" />
    </Filter>
);


export default WOPersonnelFilter;
