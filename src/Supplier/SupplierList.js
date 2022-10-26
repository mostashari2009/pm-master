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
import SupplierFilter from './SupplierFilter';

const SupplierList = props => (
    <List filters={<SupplierFilter />} {...props} title="تامین کنندگان">
        <Responsive
            small={
                <SimpleList linkType="show" primaryText={record => record.SupplierName} />
            }
            medium={
                <Datagrid>
                    <TextField label="کد تامین کننده" textAlgin="right" source="SupplierCode" />
                    <TextField label="نام تامین کننده" textAlgin="right" source="SupplierName" />
                    <ShowButton />
                </Datagrid>
            }
         />
    </List>
);


export default SupplierList;
