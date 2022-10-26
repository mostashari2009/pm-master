import * as React from "react";
import {
    ReferenceInput,
    SelectInput,
    Filter,
    TextInput
}
from 'react-admin';
import SupplierRefrenceInput from './SupplierRefrenceInput';
import {JalaliInput} from 'ra-hichestan-datetime';

const WOSupplierFilter = (props) => (
    <Filter {...props}>
        <SupplierRefrenceInput label="کد تامین کننده" textAlgin="right" source="SupplierID" reference="PMWorks/Supplier" perPage={10000} />
        <JalaliInput label="تاریخ شروع" source="WorkStartDate" />
        <JalaliInput label="تاریخ پایان" source="WorkFinishDate" />
    </Filter>
);


export default WOSupplierFilter;
