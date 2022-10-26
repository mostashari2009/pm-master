import * as React from "react";
import {
    Filter,
    TextInput
}
from 'react-admin';

const LocationFilter = (props) => (
    <Filter {...props}>
        <TextInput label="کد مکان" textAlgin="right" source="LocationCode" alwaysOn resettable/>
        <TextInput label="عنوان مکان" textAlgin="right" source="LocationName" alwaysOn resettable/>
    </Filter>
);


export default LocationFilter;
