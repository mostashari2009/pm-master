import * as React from "react";
import {
    Edit,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    useNotify,
    useRefresh,
    useRedirect,
    useEditController
}
from 'react-admin';
import AssetSpecificDataTitle from './AssetSpecificDataTitle';
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

const AssetSpecificDataEdit = props => {

    const classes = useStyles();
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();
    const controllerProps = useEditController(props);

    const AssetSubdivisionID = controllerProps.record.AssetSubdivisionID;

    const onSuccess = () => {
        notify(`دیتا ذخیره شد`)
        redirect(`/PMWorks/AssetSubdivision/${AssetSubdivisionID}/show/PMWorks/AssetSpecificData`);
        refresh();
    };

    return (
    <Edit onSuccess={onSuccess} title={<AssetSpecificDataTitle />} {...props}>
        <SimpleForm redirect={redirect}>
            <ReferenceInput disabled className={classes.sel} formClassName={classes.fir} label="کد تجهیز" textAlgin="right" disabled source="AssetSubdivisionID" reference="PMWorks/AssetSubdivision">
                <SelectInput optionText="AssetCode" />
            </ReferenceInput>
            <ReferenceInput disabled className={classes.sel} formClassName={classes.sec} label="نام تجهیز" textAlgin="right" disabled source="AssetSubdivisionID" reference="PMWorks/AssetSubdivision">
                <SelectInput optionText="AssetName" />
            </ReferenceInput>
            <Separator/>
            <ReferenceInput disabled className={classes.sel} formClassName={classes.fir} label="کد ویژگی" textAlgin="right" disabled source="SpecificDataID" reference="PMWorks/SpecificData">
                <SelectInput optionText="SpecificDataCode" />
            </ReferenceInput>
            <ReferenceInput disabled className={classes.sel} formClassName={classes.sec} label="نام ویژگی" textAlgin="right" disabled source="SpecificDataID" reference="PMWorks/SpecificData">
                <SelectInput optionText="SpecificDataName" />
            </ReferenceInput>
            <Separator/>
            <TextInput label="مقدار" textAlgin="right" source="SpecificAmount" />
        </SimpleForm>
    </Edit>
);
    };


export default AssetSpecificDataEdit;
