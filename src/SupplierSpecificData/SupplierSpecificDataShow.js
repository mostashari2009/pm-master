import * as React from "react";

import {
    TextField,
    SimpleShowLayout,
    Show,
    ReferenceField
}
from 'react-admin';
import SupplierSpecificDataTitle from './SupplierSpecificDataTitle';


const SupplierSpecificDataShow = (props) => (
    <Show title={<SupplierSpecificDataTitle />} {...props}>
        <SimpleShowLayout>
            <TextField label="تامین کننده" textAlgin="right" source="SupplierID" />
            <TextField label="ویژگی" textAlgin="right" source="SupplierSpecificID" />
            <TextField label="مقدار" textAlgin="right" source="SpecificAmount" /> 
        </SimpleShowLayout>
    </Show>
);


export default SupplierSpecificDataShow;
