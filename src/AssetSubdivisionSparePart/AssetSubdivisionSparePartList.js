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
import AssetSubdivisionSparePartFilter from './AssetSubdivisionSparePartFilter';

const AssetSubdivisionSparePartList = props => (
    <List filters={<AssetSubdivisionSparePartFilter />} {...props} title="قطعات تجهیز">
        <Responsive
            small={
                <SimpleList linkType="show" primaryText={record => record.AssetSubdivisionID} />
            }
            medium={
                <Datagrid>
                    <TextField label="تجهیز" textAlgin="right" source="AssetSubdivisionID" />
                    <ReferenceField label="قطعه" textAlgin="right" disabled source="SparePartID" reference="PMWorks/SparePart">
                        <TextField source="SparePartName" />
                    </ReferenceField>
                    <ShowButton />
                </Datagrid>
            }
         />
    </List>
);


export default AssetSubdivisionSparePartList;
