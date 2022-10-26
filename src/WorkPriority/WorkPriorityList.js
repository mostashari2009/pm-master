import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    Responsive,
    ShowButton,
    SimpleList,
    NumberField
}
from 'react-admin';
import WorkPriorityFilter from './WorkPriorityFilter';

const WorkPriorityList = props => (
    <List filters={<WorkPriorityFilter />} {...props} title="اولویت درخواست کار">
        <Responsive
            small={
                <SimpleList linkType="show" primaryText={record => record.WorkPriorityName} />
            }
            medium={
                <Datagrid>
                    <TextField label="کد اولویت" textAlgin="right" source="WorkPriorityCode" />
                    <TextField label="نام اولویت" textAlgin="right" source="WorkPriorityName" />
                    <NumberField label="مقدار اولویت" textAlgin="right" source="WorkPriorityValue" />
                    <ShowButton />
                </Datagrid>
            }
         />
    </List>
);


export default WorkPriorityList;
