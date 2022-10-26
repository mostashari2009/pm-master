import * as React from "react";
import {
    Filter,
    NumberInput,
    ReferenceInput,
    SelectInput
}
from 'react-admin';
import { DateInput } from '../Components/JalaliDatePicker';

const WOTemplateSchualingFilter = (props) => (
    <Filter {...props}>
        <DateInput label="تاریخ شروع" source="WOTemplateSchualingStartDate" />
        <DateInput label="تاریخ پایان" source="WOTemplateSchualingFinishDate" />
        <NumberInput label="مقدار" textAlgin="right" source="AmountFrequency"/>
        <ReferenceInput label="تناوب" textAlgin="right" source="FrequencyID" reference="PMWorks/Frequency">
            <SelectInput optionText="FrequencyName" />
        </ReferenceInput>
    </Filter>
);


export default WOTemplateSchualingFilter;
