import * as React from "react";
import {
    SimpleForm,
    Toolbar,
    Create,
    required,
    ReferenceInput,
    SelectInput
}
from 'react-admin';
import { parse } from 'query-string';
import AssetClassDocumentRefrenceInput from './AssetClassDocumentRefrenceInput';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
    fir: { display: 'inline-block' },
    sec: { display: 'inline-block' },
    width: { width: 533 },
    last: { display: 'inline-block', marginRight: 0 },

});

const Separator = () => <Box pt="0em" />;

const AssetClassDocumentCreate = props => {
    const classes = useStyles();

    const { AssetClassID: AssetClassID_string } = parse(props.location.search);
    const AssetClassID = AssetClassID_string ? parseInt(AssetClassID_string, 10) : '';
    const redirect = AssetClassID ? `/PMWorks/AssetClass/${AssetClassID}/show/PMWorks/AssetClassDocument` : false;

    return (
    <Create {...props} title="ایجاد سند تجهیز">
        <SimpleForm initialValues={{ AssetClassID}} redirect={redirect} toolbar={<Toolbar alwaysEnableSaveButton />}>
            <ReferenceInput disabled formClassName={classes.fir} label="کد نجهیز" textAlgin="right" source="AssetClassID" reference="PMWorks/AssetClass">
                <SelectInput optionText="AssetClassCode" />
            </ReferenceInput>
            <ReferenceInput disabled formClassName={classes.sec} label="نام نجهیز" textAlgin="right" source="AssetClassID" reference="PMWorks/AssetClass">
                <SelectInput optionText="AssetClassName" />
            </ReferenceInput>
            <Separator/>
            <AssetClassDocumentRefrenceInput label="کد سند" textAlgin="right" source="DocumentID" reference="PMWorks/Document" allowEmpty validate={required()} perPage={10000} />
        </SimpleForm>
    </Create>
    );
};


export default AssetClassDocumentCreate;
