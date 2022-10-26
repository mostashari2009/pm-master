import * as React from "react";

import {
    TextField,
    SimpleShowLayout,
    Show,
    ReferenceField,
    NumberField
}
from 'react-admin';
import WOPersonnelTitle from './WOPersonnelTitle';
import {JalaliField} from 'ra-hichestan-datetime';


const WOPersonnelShow = (props) => (
    <Show title={<WOPersonnelTitle />} {...props}>
        <SimpleShowLayout>
            <ReferenceField label="تامین کننده" textAlgin="right" source="PersonnelID" reference="PMWorks/Personnel">
                <TextField source="PersonnelName" />
            </ReferenceField>
            <JalaliField label="تاریخ انجام" textAlgin="right" source="WorkDate" />
            <NumberField label="مذت زمان انجام" textAlgin="right" source="WorkTime" />
        </SimpleShowLayout>
    </Show>
);


export default WOPersonnelShow;
