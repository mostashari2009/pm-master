import * as React from "react";
import {
    Filter,
    TextInput
}
from 'react-admin';

const PersonnelJobCategoryFilter = (props) => (
    <Filter {...props}>
        <TextInput label="کد شغل" textAlgin="right" source="JobCategoryID__JobCategoryCode__icontains" alwaysOn resettable/>
        <TextInput label="نام شغل" textAlgin="right" source="JobCategoryID__JobCategoryName__icontains" alwaysOn resettable/>
    </Filter>
);


export default PersonnelJobCategoryFilter;
