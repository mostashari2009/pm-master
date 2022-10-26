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
import WOPersonnelFilter from './WOPersonnelFilter';

const WOPersonnelList = props => (
    <List filters={<WOPersonnelFilter />} {...props} title="پرسنل">
        <Responsive
            small={
                <SimpleList linkType="show" primaryText={record => record.PersonnelID} />
            }
            medium={
                <Datagrid>
                    <TextField label="پرسنل" textAlgin="right" source="PersonnelID" />
                    <ShowButton />
                </Datagrid>
            }
         />
    </List>
);


export default WOPersonnelList;
