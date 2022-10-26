import * as React from "react";

import {
    TextField,
    SimpleShowLayout,
    Show,
    RichTextField
}
from 'react-admin';
import FailureCauseTitle from './FailureCauseTitle';


const FailureCauseShow = (props) => (
    <Show title={<FailureCauseTitle />} {...props}>
        <SimpleShowLayout>
                <TextField label="کد علت خرابی" textAlgin="right" source="FailureCauseCode" />
                <TextField label="نام علت خرابی" textAlgin="right" source="FailureCauseName" />
                <RichTextField label="توضیحات علت خرابی" textAlgin="right" source="FailureCauseDescription" />
                <TextField label="نوع خرابی" textAlgin="right" source="FailureModeID" />
        </SimpleShowLayout>
    </Show>
);


export default FailureCauseShow;
