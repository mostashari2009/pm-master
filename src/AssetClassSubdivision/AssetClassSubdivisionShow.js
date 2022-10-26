import * as React from "react";

import {
    TextField,
    SimpleShowLayout,
    Show,
}
from 'react-admin';
import AssetClassSubdivisionTitle from './AssetClassSubdivisionTitle';


const AssetClassSubdivisionShow = (props) => (
    <Show title={<AssetClassSubdivisionTitle />} {...props}>
        <SimpleShowLayout>
            <TextField label="کلاس تجهیز پدر" textAlgin="right" source="AssetClassFatherID" />
            <TextField label="کلاس تجهیز فرزند" textAlgin="right" source="AssetClassChildID" />
            <TextField label="تعداد" textAlgin="right" source="AssetClassChildNumber" />
        </SimpleShowLayout>
    </Show>
);


export default AssetClassSubdivisionShow;
