import * as React from "react";
import {
    Edit,
    SimpleForm,
    NumberInput,
    ReferenceInput,
    SelectInput
}
from 'react-admin';
import WOTemplateSchualingTitle from './WOTemplateSchualingTitle';
import { DateInput } from '../Components/JalaliDatePicker';


const WOTemplateSchualingEdit = props => (
    <Edit title={<WOTemplateSchualingTitle />} {...props}>
        <SimpleForm>
            <DateInput label="تاریخ شروع" source="WOTemplateSchualingStartDate" />
            <DateInput label="تاریخ پایان" source="WOTemplateSchualingFinishDate" />
            <NumberInput label="مقدار" textAlgin="right" source="AmountFrequency"/>
            <ReferenceInput label="تناوب" textAlgin="right" source="FrequencyID" reference="PMWorks/Frequency">
                <SelectInput optionText="FrequencyName" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);


export default WOTemplateSchualingEdit;
