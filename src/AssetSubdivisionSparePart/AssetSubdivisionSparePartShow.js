import * as React from "react";
import { useShowController } from 'ra-core';

import {
    TextField,
    SimpleShowLayout,
    Show,
    ReferenceField
}
from 'react-admin';
import AssetSubdivisionSparePartTitle from './AssetSubdivisionSparePartTitle';


const AssetSubdivisionSparePartShow = (props) => (
    <Show title={<AssetSubdivisionSparePartTitle />} {...props}>
        <SimpleShowLayout>
            <ReferenceField label="تجهیز" textAlgin="right" disabled source="AssetSubdivisionID" reference="PMWorks/AssetSubdivision">
                <TextField source="id" />
            </ReferenceField>
            <ReferenceField label="قطعه" textAlgin="right" disabled source="SparePartID" reference="PMWorks/SparePart">
                <TextField source="SparePartName" />
            </ReferenceField>
        </SimpleShowLayout>
    </Show>
);


export default AssetSubdivisionSparePartShow;
