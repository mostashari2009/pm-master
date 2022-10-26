import * as React from "react";
import {
    Filter,
    TextInput
}
from 'react-admin';

const JobCategoryFilter = (props) => (
    <Filter {...props}>
        <TextInput label="کد تخصص" textAlgin="right" source="JobCategoryCode__icontains" alwaysOn resettable/>
        <TextInput label="عنوان تخصص" textAlgin="right" source="JobCategoryName__icontains" alwaysOn resettable/>
    </Filter>
);


export default JobCategoryFilter;
