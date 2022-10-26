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
import SupplierSpecificDataFilter from './SupplierSpecificDataFilter';

const SupplierSpecificDataList = props => (
    <List filters={<SupplierSpecificDataFilter />} {...props} title="ویژگی تامین کننده">
        <Responsive
            small={
                <SimpleList linkType="show" primaryText={record => record.SupplierID} />
            }
            medium={
                <Datagrid>
                    <TextField label="تامین کننده" textAlgin="right" source="SupplierID" />
                    <TextField label="ویژگی" textAlgin="right" source="SupplierSpecificID" />
                    <TextField label="مقدار" textAlgin="right" source="SpecificAmount" />
                    <ShowButton />
                </Datagrid>
            }
         />
    </List>
);


export default SupplierSpecificDataList;
