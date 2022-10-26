import * as React from "react";
import {
    SimpleForm,
    Toolbar,
    Create,
    required,
    useNotify,
    useRefresh,
    useRedirect,
    ReferenceInput,
    SelectInput
}
from 'react-admin';
import { parse } from 'query-string';
import SparePartRefrenceInput from './SparePartRefrenceInput';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
    fir: { display: 'inline-block', verticalAlign: 'bottom' },
    sec: { display: 'inline-block' },
    width: { width: 712 },
    last: { display: 'inline-block', marginRight: 0 },
    sel: { '& svg': {display: 'none' }},
});

const Separator = () => <Box pt="0em" />;


const AssetSubdivisonSparePartCreate = props => {

    const classes = useStyles();
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const { AssetSubdivisionID: AssetSubdivisionID_string } = parse(props.location.search);
    const AssetSubdivisionID = AssetSubdivisionID_string ? parseInt(AssetSubdivisionID_string, 10) : '';

    const onSuccess = () => {
        notify(`دیتا ذخیره شد`)
        redirect(`/PMWorks/AssetSubdivision/${AssetSubdivisionID}/show/PMWorks/AssetSubdivisionSparePart`);
        refresh();
    };

    return (
    <Create onSuccess={onSuccess} {...props} title="ایجاد قطعه تجهیز">
        <SimpleForm initialValues={{ AssetSubdivisionID}} redirect={redirect} toolbar={<Toolbar alwaysEnableSaveButton />}>
            <ReferenceInput disabled className={classes.sel} formClassName={classes.fir} label="کد تجهیز" textAlgin="right" disabled source="AssetSubdivisionID" reference="PMWorks/AssetSubdivision">
                <SelectInput optionText="AssetCode" />
            </ReferenceInput>
            <ReferenceInput disabled className={classes.sel} formClassName={classes.sec} label="نام تجهیز" textAlgin="right" disabled source="AssetSubdivisionID" reference="PMWorks/AssetSubdivision">
                <SelectInput optionText="AssetName" />
            </ReferenceInput>
            <Separator/>
            <ReferenceInput disabled className={classes.sel} formClassName={classes.fir} label="کد قطعه" textAlgin="right" disabled source="SparePartID" reference="PMWorks/SparePart">
                <SelectInput optionText="SparePartCode" />
            </ReferenceInput>
            <SparePartRefrenceInput formClassName={classes.sec} label="نام قطعه" textAlgin="right" source="SparePartID" reference="PMWorks/SparePart" allowEmpty validate={required()} perPage={10000} />
        </SimpleForm>
    </Create>
    );
};


export default AssetSubdivisonSparePartCreate;
