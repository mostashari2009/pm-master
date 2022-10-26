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
import WOSparePartFilter from './WOSparePartFilter';

const WOSparePartList = props => (
    <List filters={<WOSparePartFilter />} {...props} title="قطعات">
        <Responsive
            small={
                <SimpleList linkType="show" primaryText={record => record.SparePartID} />
            }
            medium={
                <Datagrid>
                    <TextField label="قطعات" textAlgin="right" source="SparePartID" />
                    <ShowButton />
                </Datagrid>
            }
         />
    </List>
);


export default WOSparePartList;
