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
import AssetClassDocumentFilter from './AssetClassDocumentFilter';

const AssetClassDocumentList = props => (
    <List {...props} title="سند تجهیز">
        <Responsive
            small={
                <SimpleList linkType="show" primaryText={record => record.DocumentID} />
            }
            medium={
                <Datagrid>
                    <TextField label="کد تجهیز" textAlgin="right" source="AssetClassID" />
                    <TextField label="کد سند" textAlgin="right" source="DocumentID" />
                    <ShowButton />
                </Datagrid>
            }
         />
    </List>
);


export default AssetClassDocumentList;
