import * as React from "react";

import {
    TextField,
    SimpleShowLayout,
    Show,
    ReferenceField,
    NumberField
}
from 'react-admin';
import WOSparePartTitle from './WOSparePartTitle';


const WOSparePartShow = (props) => (
    <Show title={<WOSparePartTitle />} {...props}>
        <SimpleShowLayout>
            <ReferenceField label="کد قطعه" textAlgin="right" source="SparePartID" reference="PMWorks/AssetSubdivisionSparePart">
                <ReferenceField label="کد قطعه" textAlgin="right" source="SparePartID" reference="PMWorks/AssetSubdivisionSparePart">
                    <TextField source="SparePartName" />
                </ReferenceField>
            </ReferenceField>
            <NumberField label="تعداد" textAlgin="right" source="SparePartAmount" />
        </SimpleShowLayout>
    </Show>
);


export default WOSparePartShow;
