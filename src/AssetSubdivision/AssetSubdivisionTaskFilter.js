import * as React from "react";
import {
    Filter,
    TextInput,
    SelectInput,
    ReferenceInput,
}
from 'react-admin';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    width: { width: '125px !important' }
});


const ASTaskFilter = (props) => {

    const classes = useStyles();

    const freqe = [
        { _id: '0', full_name: 'WR'},
        { _id: '1', full_name: 'PM'},
    ];
    const freq = [
        { _id: 'D', full_name: 'انجام شده'},
        { _id: 'ND', full_name: 'انجام نشده'},
        { _id: 'N', full_name: 'نیاز به انجام نمی‌باشد'}
    ];    
    return(
    <Filter {...props}>
        <SelectInput label="منبع" className={classes.width} textAlgin="right" source="WOAssetSubdivisionID__WorkOrderID__WorkOrderType" choices={freqe} optionText="full_name" optionValue="_id" alwaysOn resettable/>
        <ReferenceInput label="دپارتمان" className={classes.width} formClassName={classes.width} textAlgin="right" source="WOAssetSubdivisionID__WorkOrderID__DepartmentID" reference="PMWorks/Department" alwaysOn resettable>
            <SelectInput className={classes.width} optionText="DepartmentName" />
        </ReferenceInput>
        <ReferenceInput label=" وضعیت دستورکار" className={classes.width} formClassName={classes.width} textAlgin="right" source="WOAssetSubdivisionID__WorkOrderID__StatusID" reference="PMWorks/Status" alwaysOn resettable>
            <SelectInput className={classes.width} optionText="StatusName" />
        </ReferenceInput>
        <TextInput label="کد فعالیت" className={classes.width} textAlgin="right" source="TaskID__TaskCode__icontains" alwaysOn resettable />
        <TextInput label="عنوان فعالیت" className={classes.width} textAlgin="right" source="TaskID__TaskName__icontains" alwaysOn resettable />
        <SelectInput label="وضعیت انجام" className={classes.width} textAlgin="right" source="WOTaskSituationOfDo" alwaysOn resettable choices={freq} optionText="full_name" optionValue="_id" />
    </Filter>
);
};


export default ASTaskFilter;