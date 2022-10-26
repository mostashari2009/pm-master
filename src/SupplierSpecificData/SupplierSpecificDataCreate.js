import * as React from "react";
import {
    SimpleForm,
    Toolbar,
    Create,
    required,
    TextInput
}
from 'react-admin';
import { parse } from 'query-string';
import SupplierSpecificRefrenceInput from './SupplierSpecificRefrenceInput';


const SupplierSpecificDataCreate = props => {

    const { SupplierID: SupplierID_string } = parse(props.location.search);
    const SupplierID = SupplierID_string ? parseInt(SupplierID_string, 10) : '';
    const redirect = SupplierID ? `/PMWorks/Supplier/${SupplierID}/show/PMWorks/SupplierSpecificData` : false;

    return (
    <Create {...props} title="ایجاد ویژگی تامین کننده">
        <SimpleForm initialValues={{ SupplierID}} redirect={redirect} toolbar={<Toolbar alwaysEnableSaveButton />}>
            <SupplierSpecificRefrenceInput label="کد ویژگی" textAlgin="right" source="SupplierSpecificID" reference="PMWorks/SupplierSpecific" allowEmpty validate={required()} perPage={10000} />
            <TextInput label="مقدار ویژگی" textAlgin="right" source="SpecificAmount" />
        </SimpleForm>
    </Create>
    );
};


export default SupplierSpecificDataCreate;