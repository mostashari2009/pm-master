import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    Responsive,
    ShowButton,
    SimpleList,
}
from 'react-admin';
import FailureCauseFilter from './FailureCauseFilter';

const FailureCauseList = props => (
    <List filters={<FailureCauseFilter />} {...props} title="علت خرابی">
        <Responsive
            small={
                <SimpleList linkType="show" primaryText={record => record.FailureCauseName} />
            }
            medium={
                <Datagrid>
                    <TextField label="کد علت خرابی" textAlgin="right" source="FailureCauseCode" />
                    <TextField label="نام علت خرابی" textAlgin="right" source="FailureCauseName" />
                    <TextField label="نوع خرابی" textAlgin="right" source="FailureModeID" />
                    <ShowButton />
                </Datagrid>
            }
         />
    </List>
);


export default FailureCauseList;
