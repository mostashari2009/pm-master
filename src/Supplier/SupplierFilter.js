import * as React from "react";
import {
    Filter,
    TextInput
}
from 'react-admin';

const SupplierFilter = (props) => (
    <Filter {...props}>
        <TextInput label="کد تامین کننده" textAlgin="right" source="SupplierCode" />
        <TextInput label="نام تامین کننده" textAlgin="right" source="SupplierName" />
    </Filter>
);


export default SupplierFilter;
