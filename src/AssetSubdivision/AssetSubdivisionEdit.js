import *  as React from "react";
import { useState } from "react";
import {
    Edit,
    SimpleForm,
    TopToolbar,
    ListButton,
    ShowButton,
    TextField,
    ReferenceField,
    TextInput,
    ReferenceInput,
    required,
    useEditController
}
from 'react-admin';
import CodeInput from "../Components/CodeInput";
import AssetRefrenceInput from './AssetRefrenceInput';
import AssetSubdivisionTitle from './AssetSubdivisionTitle';
import AssetPriorityRefrenceInput from './AssetPriorityRefrenceInput';

const AssetSubdivisionEditActions = ({ basePath, data }) => (
    <TopToolbar>
        <ListButton basePath={basePath} />
        <ShowButton basePath={basePath} record={data} />
    </TopToolbar>
);


const AssetSubdivisionEdit = props => {
    const {source, ...rest} = props;

    const controllerProps = useEditController(props);
    const {
        record, // record fetched via dataProvider.getOne() based on the id from the location
    } = controllerProps;
    const [Value, setValue] = useState(record.idChain);
    return(
    <Edit actions={<AssetSubdivisionEditActions />} title={<AssetSubdivisionTitle />} {...props}>
        <SimpleForm>
            <TextInput label="کد تجهیز" textAlgin="right" source="AssetCode" disabled />
            <TextInput label="نام تجهیز" textAlgin="right" source="AssetName" />
            <CodeInput value={Value}  onChange={event => { let val = event.target.value;
                                                    setValue(val)
                                                    }}
                label="آی دی چین"
                source="idChain" {...rest} disabled />
            {/* <AssetPriorityRefrenceInput label="اولویت" textAlgin="right" source="AssetID__AssetPriorityID" reference="PMWorks/AssetPriority" allowEmpty validate={required()} perPage={10000} /> */}
            <TextInput label="مکان" textAlgin="right" source="AssetID__LocationID__LocationNameChain" disabled />
            <TextInput label="کلاس تجهیز" textAlgin="right" source="AssetClassNameChain" disabled />
        </SimpleForm>
    </Edit>
    );
};


export default AssetSubdivisionEdit;
