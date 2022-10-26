import * as React from "react";
import {
    Edit,
    SimpleForm,
    required,
    SelectInput,
    TextInput,
}
from 'react-admin';
import AssetTitle from './AssetTitle';
import AssetPriorityRefrenceInput from './AssetPriorityRefrenceInput';
import LocationRefrenceInput from './LocationRefrenceInput';
import AssetClassRefrenceInput from './AssetClassRefrenceInput';
import {JalaliInput} from 'ra-hichestan-datetime';

const AssetEdit = props => (
    <Edit title={<AssetTitle />} {...props}>
        <SimpleForm>
            <TextInput label="کد تجهیز" textAlgin="right" source="AssetCode" />
            <TextInput label="نام تجهیز" textAlgin="right" source="AssetName" />
            <JalaliInput label="تاریخ نصب" textAlgin="right" source="InstallationDate" options={{ format: 'DD/MM/YYYY' }} />
            <AssetPriorityRefrenceInput label="اولویت" textAlgin="right" source="AssetPriorityID" reference="PMWorks/AssetPriority" allowEmpty validate={required()} perPage={10000} />
            <LocationRefrenceInput label="مکان" textAlgin="right" source="LocationID" reference="PMWorks/Location" allowEmpty validate={required()} perPage={10000} />
            <AssetClassRefrenceInput label="کلاس تجهیز" textAlgin="right" source="AssetClassID" reference="PMWorks/AssetClass" allowEmpty validate={required()} perPage={10000} />
        </SimpleForm>
    </Edit>
);


export default AssetEdit;
