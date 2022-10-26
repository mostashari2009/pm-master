import * as React from "react";

import {
    TextField,
    SimpleShowLayout,
    Show,
    ReferenceField,
    NumberField,
    RichTextField
}
from 'react-admin';
import WODelayTitle from './WODelayTitle';


const WODelayShow = (props) => (
    <Show title={<WODelayTitle />} {...props}>
        <SimpleShowLayout>
            <ReferenceField label="تاخیر" textAlgin="right" source="DelayID" reference="PMWorks/Delay">
                <TextField source="DelayName" />
            </ReferenceField>
            <NumberField label="روز" textAlgin="right" source="DayAmount" />
            <NumberField label="ساعت" textAlgin="right" source="HourAmount" />
            <RichTextField label="توضیحات علت تاخیر" textAlgin="right" source="WODelayDescription" />
        </SimpleShowLayout>
    </Show>
);


export default WODelayShow;
