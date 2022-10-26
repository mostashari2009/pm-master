import * as React from "react";

import {
    TextField,
    SimpleShowLayout,
    Show,
}
from 'react-admin';
import TypeWrTitle from './TypeWrTitle';


const TypeWrShow = (props) => (
    <Show title={<TypeWrTitle />} {...props}>
        <SimpleShowLayout>
                <TextField label="کد نوع" textAlgin="right" source="TypeWrCode" />
                <TextField label="نام نوع" textAlgin="right" source="TypeWrName" />
        </SimpleShowLayout>
    </Show>
);


export default TypeWrShow;
