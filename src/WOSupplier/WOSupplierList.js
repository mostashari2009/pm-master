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
import WOSupplierFilter from './WOSupplierFilter';

const WOSupplierList = props => (
    <List filters={<WOSupplierFilter />} {...props} title="ویژگی تامین کننده">
        <Responsive
            small={
                <SimpleList linkType="show" primaryText={record => record.SupplierID} />
            }
            medium={
                <Datagrid>
                    <TextField label="تامین کننده" textAlgin="right" source="SupplierID" />
                    <ShowButton />
                </Datagrid>
            }
         />
    </List>
);


export default WOSupplierList;
