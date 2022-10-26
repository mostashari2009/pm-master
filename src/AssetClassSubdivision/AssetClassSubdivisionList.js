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
import AssetClassSubdivisionFilter from './AssetClassSubdivisionFilter';

const AssetClassSubdivisionList = props => (
    <List filters={<AssetClassSubdivisionFilter />} {...props} title="نوع خرابی">
        <Responsive
            small={
                <SimpleList linkType="show" primaryText={record => record.FailureModeName} />
            }
            medium={
                <Datagrid>
                    <TextField label="کلاس تجهیز پدر" textAlgin="right" source="AssetClassFatherID" />
                    <TextField label="کلاس تجهیز فرزند" textAlgin="right" source="AssetClassChildID" />
                    <TextField label="تعداد" textAlgin="right" source="AssetClassChildNumber" />
                    <ShowButton />
                </Datagrid>
            }
         />
    </List>
);


export default AssetClassSubdivisionList;
