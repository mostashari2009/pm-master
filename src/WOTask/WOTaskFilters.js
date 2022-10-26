import * as React from "react";
import {
    Filter,
    TextInput,
    SelectInput
}
from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    width: { width: 125 },
});

const WOTaskFilters = (props) => {
    const classes = useStyles();
    const freq = [
        { _id: 'D', full_name: 'انجام شده'},
        { _id: 'ND', full_name: 'انجام نشده'},
        { _id: 'N', full_name: 'نیاز به انجام نمی‌باشد'}
    ]; 
    return (
    <Filter {...props}>
        <TextInput className={classes.width} label="کد تجهیز" textAlgin="right" source="WOAssetSubdivisionID__AssetSubdivisionID__AssetCode__icontains" alwaysOn resettable/>
        <TextInput className={classes.width} label="عنوان تجهیز" textAlgin="right" source="WOAssetSubdivisionID__AssetSubdivisionID__AssetName__icontains" alwaysOn resettable/>
        <TextInput className={classes.width} label="مکان" textAlgin="right" source="WOAssetSubdivisionID__AssetSubdivisionID__AssetID__LocationID__LocationNameChain__icontains" alwaysOn resettable/>
        <TextInput className={classes.width} label="نام فعالیت" source="TaskID__TaskName__icontains" alwaysOn resettable/>
        <TextInput className={classes.width} label="کد فعالیت" source="TaskID__TaskCode__icontains" alwaysOn resettable/>
        <SelectInput label="وضعیت انجام" textAlgin="right" source="WOTaskSituationOfDo" choices={freq} optionText="full_name" resettable optionValue="_id" alwaysOn />
    </Filter>
);
};


export default WOTaskFilters;