import * as React from "react";

import {
    TextField,
    SimpleShowLayout,
    Show,
    ReferenceField
}
from 'react-admin';
import PersonnelJobCategoryTitle from './PersonnelJobCategoryTitle';


const PersonnelJobCategoryShow = (props) => (
    <Show title={<PersonnelJobCategoryTitle />} {...props}>
        <SimpleShowLayout>
            <TextField label="پرسنل" textAlgin="right" source="PersonnelID" />
            <TextField label="شغل" textAlgin="right" source="JobCategoryID" />      
        </SimpleShowLayout>
    </Show>
);


export default PersonnelJobCategoryShow;
