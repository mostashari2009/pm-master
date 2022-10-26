import * as React from "react";
import {
    Edit,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput
}
from 'react-admin';
import WOTaskTitle from './WOTaskTitle';


const WOTaskEdit = props => (
    <Edit title={<WOTaskTitle />} {...props}>
        <SimpleForm>
            <ReferenceInput label="کد وظیفه" source="TaskID" reference="PMWorks/AssetClassTask">
                <SelectInput optionText="TaskCode" />
            </ReferenceInput>
            <TextInput textAlgin="right" label="وضعیت" source="WOTaskSituationOfDo" />
        </SimpleForm>
    </Edit>
);


export default WOTaskEdit;
