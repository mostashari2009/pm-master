import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    Responsive,
    ShowButton,
    SimpleList,
}
from 'react-admin';
import PersonnelJobCategoryFilter from './PersonnelJobCategoryFilter';

const PersonnelJobCategoryList = props => (
    <List filters={<PersonnelJobCategoryFilter />} {...props} title="شغل پرسنل">
        <Responsive
            small={
                <SimpleList linkType="show" primaryText={record => record.PersonnelID} />
            }
            medium={
                <Datagrid>
                    <TextField label="پرسنل" textAlgin="right" source="PersonnelID" />
                    <TextField label="شغل" textAlgin="right" source="JobCategoryID" />
                    <ShowButton />
                </Datagrid>
            }
         />
    </List>
);


export default PersonnelJobCategoryList;
