import * as React from "react";
import {
    Edit,
    SimpleForm,
    TextInput,
}
from 'react-admin';
import WOSupplierTitle from './WOSupplierTitle';
import SupplierRefrenceInput from './SupplierRefrenceInput';
import {JalaliInput} from 'ra-hichestan-datetime';


const WOSupplierEdit = props => (
    <Edit title={<WOSupplierTitle />} {...props}>
        <SimpleForm>
            <SupplierRefrenceInput label="کد تامین کننده" textAlgin="right" source="SupplierID" reference="PMWorks/Supplier" perPage={10000} />
            <JalaliInput label="تاریخ شروع" source="WorkStartDate" />
            <JalaliInput label="تاریخ پایان" source="WorkFinishDate" />
        </SimpleForm>
    </Edit>
);


export default WOSupplierEdit;
