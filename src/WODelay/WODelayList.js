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
import WODelayFilter from './WODelayFilter';

const WODelayList = props => (
    <List filters={<WODelayFilter />} {...props} title="پرسنل">
        <Responsive
            small={
                <SimpleList linkType="show" primaryText={record => record.DelayID} />
            }
            medium={
                <Datagrid>
                    <TextField label="تاخیرات" textAlgin="right" source="DelayID" />
                    <ShowButton />
                </Datagrid>
            }
         />
    </List>
);


export default WODelayList;
