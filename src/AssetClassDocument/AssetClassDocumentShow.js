import * as React from "react";
import { useShowController } from 'ra-core';

import {
    TextField,
    SimpleShowLayout,
    Show
}
from 'react-admin';
import AssetClassDocumentTitle from './AssetClassDocumentTitle';


const AssetClassDocumentShow = (props) => (
    <Show title={<AssetClassDocumentTitle />} {...props}>
        <SimpleShowLayout>
            <TextField source="AssetClassID" />
            <TextField source="DocumentID" />
        </SimpleShowLayout>
    </Show>
);


export default AssetClassDocumentShow;
