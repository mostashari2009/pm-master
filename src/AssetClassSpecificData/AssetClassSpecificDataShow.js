import * as React from "react";
import { useShowController } from 'ra-core';

import {
    TextField,
    SimpleShowLayout,
    Show
}
from 'react-admin';
import AssetClassSpecificDataTitle from './AssetClassSpecificDataTitle';


const AssetClassSpecificDataShow = (props) => (
    <Show title={<AssetClassSpecificDataTitle />} {...props}>
        <SimpleShowLayout>
            <TextField source="AssetClassID" />
            <TextField source="SpecificDataID" />
        </SimpleShowLayout>
    </Show>
);


export default AssetClassSpecificDataShow;
