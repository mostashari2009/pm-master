import * as React from "react";

import {
    TextField,
    SimpleShowLayout,
    Show,
    ReferenceField
}
from 'react-admin';
import WorkRequestFailureCauseTitle from './WorkRequestFailureCauseTitle';


const WorkRequestFailureCauseShow = (props) => (
    <Show title={<WorkRequestFailureCauseTitle />} {...props}>
        <SimpleShowLayout>
            <TextField label="پرسنل" textAlgin="right" source="WorkRequestID" />
            <TextField label="شغل" textAlgin="right" source="FailureCauseID" />      
        </SimpleShowLayout>
    </Show>
);


export default WorkRequestFailureCauseShow;
