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
import WorkRequestFailureCauseFilter from './WorkRequestFailureCauseFilter';

const WorkRequestFailureCauseList = props => (
    <List filters={<WorkRequestFailureCauseFilter />} {...props} title="شغل پرسنل">
        <Responsive
            small={
                <SimpleList linkType="show" primaryText={record => record.WorkRequestID} />
            }
            medium={
                <Datagrid>
                    <TextField label="پرسنل" textAlgin="right" source="WorkRequestID" />
                    <TextField label="شغل" textAlgin="right" source="FailureCauseID" />
                    <ShowButton />
                </Datagrid>
            }
         />
    </List>
);


export default WorkRequestFailureCauseList;
