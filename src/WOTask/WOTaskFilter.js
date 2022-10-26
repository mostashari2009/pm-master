import * as React from "react";
import {
    ReferenceInput,
    SelectInput,
    Filter,
    TextInput
}
from 'react-admin';


const WOTaskFilter = (props) => (
    <Filter {...props}>
        <ReferenceInput label="کد وظیفه" source="TaskID" reference="PMWorks/AssetClassTask">
            <SelectInput optionText="TaskCode" />
        </ReferenceInput>
        <TextInput textAlgin="right" label="وضعیت" source="WOTaskSituationOfDo" />
    </Filter>
);


export default WOTaskFilter;
