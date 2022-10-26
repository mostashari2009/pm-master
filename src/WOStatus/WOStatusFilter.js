import * as React from "react";
import {
    Filter,
    TextInput
}
from 'react-admin';
import { TimeInput } from '../Components/TimeInput';
import { DateInput } from '../Components/JalaliDatePicker';

const WOStatusFilter = (props) => (
    <Filter {...props}>
        <TextInput label="کد وضعیت" textAlgin="right" source="StatusID__StatusCode__icontains" alwaysOn resettable/>
        <TextInput label="نام وضعیت" textAlgin="right" source="StatusID__StatusName__icontains" alwaysOn resettable/>
        <DateInput label="تاریخ ثبت" source="StatusDate" alwaysOn resettable/>
        <TimeInput label="ساعت ثبت" textAlgin="right" source="StatusTime" alwaysOn resettable/>
    </Filter>
);


export default WOStatusFilter;
