import * as React from "react";
import {
    Filter,
    TextInput,
    SelectInput,
    NumberInput
}
from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    width: { width: 135 },
});

const freq = [
    { _id: 'H', full_name: 'ساعتی'},
    { _id: 'D', full_name: 'روزانه'},
    { _id: 'W', full_name: 'هفتگی'},
    { _id: 'M', full_name: 'ماهانه'},
    { _id: 'Y', full_name: 'سالانه'},
];


const AssetClassTaskFilter = (props) => {
    const classes = useStyles();
    return(
    <Filter {...props}>
        <TextInput className={classes.width} label="عنوان فعالیت" textAlgin="right" source="TaskName__icontains" alwaysOn resettable />
        <SelectInput className={classes.width} label="تناوب" textAlgin="right" source="FrequencyName" choices={freq} optionText="full_name" optionValue="_id" alwaysOn resettable/>
        <NumberInput className={classes.width} label="مقدار تناوب" textAlgin="right" source="FrequencyAmount" alwaysOn resettable/>
        <TextInput className={classes.width} label="نوع فعالیت" textAlgin="right" source="TaskTypeID__TaskTypeName__icontains" alwaysOn resettable />
        <TextInput className={classes.width} label="تخصص" textAlgin="right" source="JobCategoryID__JobCategoryName__icontains" alwaysOn resettable />
    </Filter>
);
    };


export default AssetClassTaskFilter;
