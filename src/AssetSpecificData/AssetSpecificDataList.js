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
import AssetSpecificDataFilter from './AssetSpecificDataFilter';

const AssetSpecificDataList = props => (
    <List filters={<AssetSpecificDataFilter />} {...props} title="ویژگی تجهیز">
        <Responsive
            small={
                <SimpleList linkType="show" primaryText={record => record.AssetID} />
            }
            medium={
                <Datagrid>
                    <TextField label="تجهیز" textAlgin="right" source="AssetSubdivisionID" />
                    <ReferenceField label="ویژگی" textAlgin="right" disabled source="SpecificDataID" reference="PMWorks/SpecificData">
                        <TextField source="SpecificDataName" />
                    </ReferenceField>
                    <TextField label="مقدار" textAlgin="right" source="SpecificAmount" />
                    <ShowButton />
                </Datagrid>
            }
         />
    </List>
);


export default AssetSpecificDataList;
