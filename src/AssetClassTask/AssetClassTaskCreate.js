import * as React from "react";
import {
    SimpleForm,
    TextInput,
    Create,
    NumberInput,
    SelectInput,
    RadioButtonGroupInput,
    required
}
from 'react-admin';
import RichTextInput from 'ra-input-rich-text';
import JobCategoryRefrenceInput from './JobCategoryRefrenceInput';
import TaskTypeRefrenceInput from './TaskTypeRefrenceInput';
import AssetClassRefrenceInput from './AssetClassRefrenceInput';

const freq = [
    { _id: 'H', full_name: 'ساعتی'},
    { _id: 'D', full_name: 'روزانه'},
    { _id: 'W', full_name: 'هفتگی'},
    { _id: 'M', full_name: 'ماهانه'},
    { _id: 'Y', full_name: 'سالانه'},
];

const fun = [
    { _id: 'O', full_name: 'اپراتور'},
    { _id: 'T', full_name: 'تکنسین' },
];

const AssetClassTaskCreate = props => (
    <Create {...props} title="ایجاد فعالیت خانواده تجهیز">
        <SimpleForm>
            <TextInput label="کد فعالیت" textAlgin="right" source="TaskCode" />
            <TextInput label="عنوان فعالیت" textAlgin="right" source="TaskName" />
            <RichTextInput label="توضیحات فعالیت" textAlgin="right" source="TaskDescription" toolbar={[ ['bold', 'italic', 'underline', 'link'] ]} />
            <SelectInput label="مقدار تناوب" textAlgin="right" source="FrequencyName" choices={freq} optionText="full_name" optionValue="_id" />
            <NumberInput label="مقدار تناوب" textAlgin="right" source="FrequencyAmount" />
            <NumberInput label="مدت زمان انجام" textAlgin="right" source="DurationOfDo" />
            <RadioButtonGroupInput label="مسئول" textAlgin="right" source="Functor" choices={fun} optionText="full_name" optionValue="_id" />
            <TaskTypeRefrenceInput label="کد فعالیت" textAlgin="right" source="TaskTypeID" reference="PMWorks/TaskType" allowEmpty validate={required()} perPage={10000} />
            <JobCategoryRefrenceInput label="کد شغل" textAlgin="right" source="JobCategoryID" reference="PMWorks/JobCategory" allowEmpty validate={required()} perPage={10000} />
            <AssetClassRefrenceInput label="کد خانواده تجهیز" textAlgin="right" source="AssetClassID" reference="PMWorks/AssetClass" perPage={10000} />
        </SimpleForm>
    </Create>
);


export default AssetClassTaskCreate;