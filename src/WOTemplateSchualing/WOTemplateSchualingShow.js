import * as React from "react";

import {
    TextField,
    SimpleShowLayout,
    Show,
    ReferenceField,
    BooleanField,
    NumberField
}
from 'react-admin';
import WOTemplateSchualingTitle from './WOTemplateSchualingTitle';
import DateField from '../Components/JalaaliDateField';


const WOTemplateSchualingShow = (props) => (
    <Show title={<WOTemplateSchualingTitle />} {...props}>
        <SimpleShowLayout>
            <DateField label="تاریخ شروع" source="WOTemplateSchualingStartDate" />
            <DateField label="تاریخ پایان" source="WOTemplateSchualingFinishDate" />
            <NumberField label="مقدار" textAlgin="right" source="AmountFrequency"/>
            <ReferenceField label="تناوب" textAlgin="right" source="FrequencyID" reference="PMWorks/Frequency">
                <TextField source="FrequencyName" />
            </ReferenceField>
            <BooleanField label="وضعیت" source="Status" />
        </SimpleShowLayout>
    </Show>
);

export default WOTemplateSchualingShow;
