import * as React from "react";
import {
    Filter,
    NumberInput
}
from 'react-admin';
import DelayRefrenceInput from './DelayRefrenceInput';

const WODelayFilter = (props) => (
    <Filter {...props}>
        <DelayRefrenceInput label="کد تاخیر" textAlgin="right" source="DelayID" reference="PMWorks/Delay" perPage={10000} />
        <NumberInput textAlgin="right" label="روز" source="DayAmount" />
        <NumberInput textAlgin="right" label="ساعت" source="HourAmount" />
    </Filter>
);


export default WODelayFilter;
