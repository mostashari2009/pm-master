import * as React from "react";
import { useShowController } from 'ra-core';

import {
    TextField,
    SimpleShowLayout,
    Show,
    ReferenceField
}
from 'react-admin';
import AssetSpecificDataTitle from './AssetSpecificDataTitle';


const AssetSpecificDataShow = (props) => (
    <Show title={<AssetSpecificDataTitle />} {...props}>
        <SimpleShowLayout>
            <ReferenceField label="تجهیز" textAlgin="right" disabled source="AssetSubdivisionID" reference="PMWorks/AssetSubdivision">
                <TextField source="id" />
            </ReferenceField>
            <ReferenceField label="ویژگی" textAlgin="right" disabled source="SpecificDataID" reference="PMWorks/SpecificData">
                <TextField source="SpecificDataName" />
            </ReferenceField>
            <TextField label="مقدار" textAlgin="right" source="SpecificAmount" />
        </SimpleShowLayout>
    </Show>
);


export default AssetSpecificDataShow;
