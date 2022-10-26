import * as React from "react";

import {
    TextField,
    SimpleShowLayout,
    Show,
}
from 'react-admin';
import DelayTitle from './DelayTitle';


const DelayShow = (props) => (
    <Show title={<DelayTitle />} {...props}>
        <SimpleShowLayout>
                <TextField label="کد تاخیر" textAlgin="right" source="DelayCode" />
                <TextField label="نام تاخیر" textAlgin="right" source="DelayName" />
        </SimpleShowLayout>
    </Show>
);


export default DelayShow;
