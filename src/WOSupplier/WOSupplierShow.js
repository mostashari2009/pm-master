import * as React from "react";

import {
    TextField,
    SimpleShowLayout,
    Show,
    ReferenceField
}
from 'react-admin';
import WOSupplierTitle from './WOSupplierTitle';
import {JalaliField} from 'ra-hichestan-datetime';


const WOSupplierShow = (props) => (
    <Show title={<WOSupplierTitle />} {...props}>
        <SimpleShowLayout>
            <ReferenceField label="تامین کننده" textAlgin="right" source="SupplierID" reference="PMWorks/Supplier">
                <TextField source="SupplierName" />
            </ReferenceField>
            <JalaliField label="تاریخ شروع" textAlgin="right" source="WorkStartDate" />
            <JalaliField label="تاریخ پایان" textAlgin="right" source="WorkFinishDate" />
        </SimpleShowLayout>
    </Show>
);


export default WOSupplierShow;
