import * as React from "react";
import {
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    Create
}
from 'react-admin';


const SparePartCategoryCreate = props => (
    <Create {...props} title="ایجاد خانواده قطعه">
        <SimpleForm>
            <TextInput label="کد خانواده قطعه" textAlgin="right" source="SparePartCategoryCode" />
            <TextInput label="نام خانواده قطعه" textAlgin="right" source="SparePartCategoryName" />
            <ReferenceInput label="خانواده پدر" textAlgin="right" source="SparePartCategoryFather" reference="PMWorks/SparePartCategory">
                <SelectInput optionText="SparePartCategoryName" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);


export default SparePartCategoryCreate;
