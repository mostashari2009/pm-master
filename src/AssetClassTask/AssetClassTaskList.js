import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    Responsive,
    ShowButton,
    SimpleList,
    NumberField,
    ReferenceField
}
from 'react-admin';
import AssetClassTaskFilter from './AssetClassTaskFilter';

const AssetClassTaskList = props => (
    <List filters={<AssetClassTaskFilter />} {...props} title="فعالیت ها">
        <Responsive
            small={
                <SimpleList linkType="show" primaryText={record => record.AssetClassTaskName} />
            }
            medium={
                <Datagrid>
                    <TextField label="کد فعالیت" textAlgin="right" source="TaskCode" />
                    <TextField label="نام فعالیت" textAlgin="right" source="TaskName" />
                    <TextField label="تناوب" textAlgin="right" source="FrequencyName" />
                    <NumberField label="مقدار تناوب" textAlgin="right" source="FrequencyAmount" />
                    <NumberField label="مدت زمان انجام" textAlgin="right" source="DurationOfDo" />
                    <TextField label="مسئول" textAlgin="right" source="Functor" />
                    <ReferenceField label="نوع فعالیت" textAlgin="right" source="TaskTypeID" reference="PMWorks/TaskType">
                        <TextField source="TaskTypeName" />
                    </ReferenceField>
                    <ReferenceField label="شغل" textAlgin="right" source="JobCategoryID" reference="PMWorks/JobCategory">
                        <TextField source="JobCategoryName" />
                    </ReferenceField>
                    <ReferenceField label="کلاس تجهیز" textAlgin="right" source="AssetClassID" reference="PMWorks/AssetClass">
                        <TextField source="AssetClassName" />
                    </ReferenceField>
                    <ShowButton />
                </Datagrid>
            }
         />
    </List>
);


export default AssetClassTaskList;
