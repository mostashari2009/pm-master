import * as React from "react";

import {
    TextField,
    TabbedShowLayout,
    Show,
    RichTextField,
    Tab,
    DeleteButton,
    ShowButton,
    Datagrid,
    ReferenceManyField
}
from 'react-admin';
import FailureModeTitle from './FailureModeTitle';
import AddFailureCauseButton from './AddFailureCauseButton';


const FailureModeShow = (props) => (
    <Show title={<FailureModeTitle />} {...props}>
        <TabbedShowLayout>
            <Tab label="مشخصات">
                <TextField label="کد نوع خرابی" textAlgin="right" source="FailureModeCode" />
                <TextField label="نام نوع خرابی" textAlgin="right" source="FailureModeName" />
                <RichTextField label="توضیحات نوع خرابی" textAlgin="right" source="FailureModeDescription" />
                <TextField label="کلاس تجهیز" textAlgin="right" source="AssetClassID" />
            </Tab>
            <Tab label="علت خرابی" path="PMWorks/FailureCause">
                <ReferenceManyField
                    addLabel={false}
                    reference="PMWorks/FailureCause"
                    target="FailureModeID"
                >
                    <Datagrid>
                        <TextField label="کد علت خرابی" textAlgin="right" source="FailureCauseCode" />
                        <TextField label="نام علت خرابی" textAlgin="right" source="FailureCauseName" />
                        <ShowButton />
                        <DeleteButton />
                    </Datagrid>
                </ReferenceManyField>
                <AddFailureCauseButton />         
            </Tab>
        </TabbedShowLayout>
    </Show>
);


export default FailureModeShow;
