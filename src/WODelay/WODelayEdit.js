import * as React from "react";
import {
    Edit,
    SimpleForm,
    NumberInput,
}
from 'react-admin';
import WODelayTitle from './WODelayTitle';
import DelayRefrenceInput from './DelayRefrenceInput';
import RichTextInput from 'ra-input-rich-text';


const WODelayEdit = props => (
    <Edit title={<WODelayTitle />} {...props}>
        <SimpleForm>
            <DelayRefrenceInput label="کد تاخیر" textAlgin="right" source="DelayID" reference="PMWorks/Delay" perPage={10000} />
            <NumberInput textAlgin="right" label="روز" source="DayAmount" />
            <NumberInput textAlgin="right" label="ساعت" source="HourAmount" />
            <RichTextInput label="توضیحات علت تاخیر" textAlgin="right" source="WODelayDescription" toolbar={[ ['bold', 'italic', 'underline', 'link'] ]} />
        </SimpleForm>
    </Edit>
);


export default WODelayEdit;
