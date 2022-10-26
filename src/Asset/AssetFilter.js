import * as React from "react";
import {
    ReferenceInput,
    SelectInput,
    Filter,
}
from 'react-admin';

const AssetFilter = (props) => (
    <Filter {...props}>
        <ReferenceInput label="کلاس تجهیز" source="id" reference="PMWorks/AssetClass" allowEmpty>
            <SelectInput optionText="AssetClassName" />
        </ReferenceInput>
    </Filter>
);


export default AssetFilter;
