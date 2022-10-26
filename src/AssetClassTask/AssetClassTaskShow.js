import * as React from "react";

import {
    TextField,
    SimpleShowLayout,
    Show,
    NumberField,
    RichTextField,
    ReferenceField
}
from 'react-admin';
import AssetClassTaskTitle from './AssetClassTaskTitle';


const AssetClassTaskShow = (props) => (
    <Show title={<AssetClassTaskTitle />} {...props}>
        <SimpleShowLayout>
            <TextField label="کد فعالیت" textAlgin="right" source="TaskCode" />
            <TextField label="نام فعالیت" textAlgin="right" source="TaskName" />
            <RichTextField label="توضیحات فعالیت" textAlgin="right" source="TaskDescription" />
            <TextField label="تناوب" textAlgin="right" source="FrequencyName" />
            <NumberField label="مقدار تناوب" textAlgin="right" source="FrequencyAmount" />
            <NumberField label="مدت زمان انجام" textAlgin="right" source="DurationOfDo" />
            <TextField label="مسئول" textAlgin="right" source="Functor" />
            <ReferenceField label="نوع فعالیت" textAlgin="right" source="TaskTypeID" reference="PMWorks/TaskType">
                <TextField source="TaskTypeName" />
            </ReferenceField>
            <ReferenceField label="تخصص" textAlgin="right" source="JobCategoryID" reference="PMWorks/JobCategory">
                <TextField source="JobCategoryName" />
            </ReferenceField>
            <ReferenceField label="کلاس تجهیز" textAlgin="right" source="AssetClassID" reference="PMWorks/AssetClass">
                <TextField source="AssetClassName" />
            </ReferenceField>
        </SimpleShowLayout>
    </Show>
);


export default AssetClassTaskShow;
