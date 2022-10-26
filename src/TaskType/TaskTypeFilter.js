import * as React from "react";
import {
    Filter,
    TextInput
}
from 'react-admin';

const TaskTypeFilter = (props) =>  {
    return (
    <Filter {...props}>
        <TextInput label="کد نوع فعالیت" textAlgin="right" source="TaskTypeCode__icontains" alwaysOn resettable/>
        <TextInput label="عنوان نوع فعالیت" textAlgin="right" source="TaskTypeName__icontains" alwaysOn resettable/>
    </Filter>
);
};


export default TaskTypeFilter;
