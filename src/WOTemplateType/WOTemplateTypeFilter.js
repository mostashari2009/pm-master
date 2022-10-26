import * as React from "react";
import {
    Filter,
    TextInput
}
from 'react-admin';

const WOTemplateTypeFilter = (props) => (
    <Filter {...props}>
        <TextInput label="کد نوع برنامه" textAlgin="right" source="WOTemplateTypeCode__icontains" alwaysOn resettable/>
        <TextInput label="نام نوع برنامه" textAlgin="right" source="WOTemplateTypeName__icontains" alwaysOn resettable/>
    </Filter>
);


export default WOTemplateTypeFilter;
