import * as React from "react";

import {
    TextField,
    SimpleShowLayout,
    Show,
    NumberField
}
from 'react-admin';
import WorkPriorityTitle from './WorkPriorityTitle';


const WorkPriorityShow = (props) => (
    <Show title={<WorkPriorityTitle />} {...props}>
        <SimpleShowLayout>
            <TextField label="کد اولویت" textAlgin="right" source="WorkPriorityCode" />
            <TextField label="نام اولویت" textAlgin="right" source="WorkPriorityName" />
            <NumberField label="مقدار اولویت" textAlgin="right" source="WorkPriorityValue" />
        </SimpleShowLayout>
    </Show>
);


export default WorkPriorityShow;
