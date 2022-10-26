import * as React from "react";

import {
    TextField,
    SimpleShowLayout,
    Show,
    ReferenceField
}
from 'react-admin';
import SparePartCategoryTitle from './SparePartCategoryTitle';


const SparePartCategoryShow = (props) => (
    <Show title={<SparePartCategoryTitle />} {...props}>
        <SimpleShowLayout>
                <TextField label="کد خانواده قطعه" textAlgin="right" source="SparePartCategoryCode" />
                <TextField label="نام خانواده قطعه" textAlgin="right" source="SparePartCategoryName" />
                <ReferenceField label="خانواده پدر" textAlgin="right" source="SparePartCategoryFather" reference="PMWorks/SparePartCategory">
                    <TextField source="SparePartCategoryName" />
                </ReferenceField>
        </SimpleShowLayout>
    </Show>
);


export default SparePartCategoryShow;
