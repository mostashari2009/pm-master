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
}
from 'react-admin';
import AssetTitle from './AssetTitle';
import {JalaliField} from 'ra-hichestan-datetime';


const AssetShow = props => {
    const controllerProps = useShowController(props);
    return (
    <ShowView {...controllerProps} title={<AssetTitle />}>
        <TabbedShowLayout>
            <Tab label="مشخصات">
                <TextField label="کد تجهیز" textAlgin="right" source="AssetCode" />
                <TextField label="نام تجهیز" textAlgin="right" source="AssetName" />
                <JalaliField label="تاریخ نصب" textAlgin="right" source="InstallationDate" />
                <ReferenceField label="کلاس تجهیز" textAlgin="right" source="AssetClassID" reference="PMWorks/AssetClass">
                    <TextField source="AssetClassName" />
                </ReferenceField>
                <ReferenceField label="اولویت" textAlgin="right" source="AssetPriorityID" reference="PMWorks/AssetPriority">
                    <TextField source="AssetPriorityName" />
                </ReferenceField>
                <ReferenceField label="مکان" textAlgin="right" source="LocationID" reference="PMWorks/Location">
                    <TextField source="LocationName" />
                </ReferenceField>
            </Tab>
        </TabbedShowLayout>
    </ShowView>
    );
};


export default AssetShow;
