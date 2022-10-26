import * as React from "react";
import { useShowController } from 'ra-core';

import {
    Datagrid,
    TextField,
    ReferenceField,
    ShowButton,
    ShowView,
    TabbedShowLayout,
    ReferenceManyField,
    Tab,
    DeleteButton,
    EditButton,
    Show,
    List
}
from 'react-admin';
import AddSupplierSpecificDataButton from './AddSupplierSpecificDataButton';
import SupplierTitle from './SupplierTitle';


const SupplierShow = props => {
    const controllerProps = useShowController(props);
    return (
    <ShowView title={<SupplierTitle />} {...controllerProps}>
        <TabbedShowLayout>
            <Tab label="مشخصات">
                <TextField label="کد تامیین کننده" textAlgin="right" source="SupplierCode" />
                <TextField label="نام تامین کننده" textAlgin="right" source="SupplierName" />
            </Tab>
            <Tab label="ویژگی ها" path="PMWorks/SupplierSpecificData">
                <ReferenceManyField
                    addLabel={false}
                    reference="PMWorks/SupplierSpecificData"
                    target="SupplierID"
                >
                    <Datagrid>
                        <ReferenceField label="نام ویژگی" textAlgin="right" disabled source="SupplierSpecificID" reference="PMWorks/SupplierSpecific">
                            <TextField source="SupplierSpecificName" />
                        </ReferenceField>
                        <ReferenceField label="کد ویژگی" textAlgin="right" source="SupplierSpecificID" reference="PMWorks/SupplierSpecific">
                            <TextField source="SupplierSpecificCode" />
                        </ReferenceField>
                        <TextField label="مقدار" textAlgin="right" source="SpecificAmount" />
                        <EditButton />
                    </Datagrid>
                </ReferenceManyField>
                <AddSupplierSpecificDataButton />      
            </Tab>
        </TabbedShowLayout>
    </ShowView>
);
    };


export default SupplierShow;
