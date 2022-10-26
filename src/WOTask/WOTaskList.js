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
import WOTaskFilter from './WOTaskFilter';

const WOTaskList = props => (
    <List filters={<WOTaskFilter />} {...props} title="وظیفه">
        <Responsive
            small={
                <SimpleList linkType="show" primaryText={record => record.TaskID} />
            }
            medium={
                <Datagrid>
                    <TextField label="قطعات" textAlgin="right" source="TaskID" />
                    <ShowButton />
                </Datagrid>
            }
         />
    </List>
);


export default WOTaskList;
