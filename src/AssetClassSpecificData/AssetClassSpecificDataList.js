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
import AssetClassSpecificDataFilter from './AssetClassSpecificDataFilter';

const AssetClassSpecificDataList = props => (
    <List {...props} title="کلاس تجهیز">
        <Responsive
            small={
                <SimpleList linkType="show" primaryText={record => record.SpecificDataID} />
            }
            medium={
                <Datagrid>
                    <TextField label="کد کلاس تجهیز" textAlgin="right" source="AssetClassID" />
                    <TextField label="نام کلاس تجهیز" textAlgin="right" source="SpecificDataID" />
                    <ShowButton />
                </Datagrid>
            }
         />
    </List>
);


export default AssetClassSpecificDataList;
