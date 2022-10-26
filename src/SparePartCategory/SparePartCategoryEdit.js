import * as React from "react";
import {
    Edit,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
}
from 'react-admin';
import SparePartCategoryTitle from './SparePartCategoryTitle';


const SparePartCategoryEdit = props => (
    <Edit title={<SparePartCategoryTitle />} {...props}>
        <SimpleForm>
            <TextInput label="کد خانواده قطعه" textAlgin="right" source="SparePartCategoryCode" />
            <TextInput label="نام خانواده قطعه" textAlgin="right" source="SparePartCategoryName" />
            <ReferenceInput label="خانواده پدر" textAlgin="right" source="SparePartCategoryFather" reference="PMWorks/SparePartCategory">
                <SelectInput optionText="SparePartCategoryName" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);


export default SparePartCategoryEdit;
