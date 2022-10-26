import * as React from "react";
import {
    ReferenceInput,
    SelectInput,
    Filter,
    NumberInput
}
from 'react-admin';


const WOSparePartFilter = (props) => (
    <Filter {...props}>
        <ReferenceInput label="کد قطعه" source="SparePartID" reference="PMWorks/AssetSubdivisionSparePart">
            <ReferenceInput label="کد قطعه" source="SparePartID" reference="PMWorks/SparePart">
                <SelectInput optionText="SparePartCode" />
            </ReferenceInput>
        </ReferenceInput>
        <NumberInput textAlgin="right" label="تعداد" source="SparePartAmount" />
    </Filter>
);


export default WOSparePartFilter;
