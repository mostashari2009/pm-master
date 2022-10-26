import * as React from "react";
import {
    Edit,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    NumberInput
}
from 'react-admin';
import WOSparePartTitle from './WOSparePartTitle';


const WOSparePartEdit = props => (
    <Edit title={<WOSparePartTitle />} {...props}>
        <SimpleForm>
            <ReferenceInput label="کد قطعه" source="SparePartID" reference="PMWorks/AssetSubdivisionSparePart">
                <ReferenceInput label="کد قطعه" source="SparePartID" reference="PMWorks/SparePart">
                    <SelectInput optionText="SparePartCode" />
                </ReferenceInput>
            </ReferenceInput>
            <NumberInput textAlgin="right" label="تعداد" source="SparePartAmount" />
        </SimpleForm>
    </Edit>
);


export default WOSparePartEdit;
