import * as React from "react";
import {
    Filter,
    TextInput
}
from 'react-admin';

const SupplierSpecificFilter = (props) => (
    <Filter {...props}>
        <TextInput label="کد ویژگی تامین کننده" textAlgin="right" source="SupplierSpecificCode" alwaysOn resettable />
        <TextInput label="نام ویژگی تامین کننده" textAlgin="right" source="SupplierSpecificName" alwaysOn resettable />
    </Filter>
);


export default SupplierSpecificFilter;
