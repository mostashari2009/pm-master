import React from "react";
import {
    List,
    Datagrid,
    TextField,
    CardActions,
    ReferenceField,
    NumberField,
    SelectField
}
from 'react-admin';
import Button from "@material-ui/core/Button";
import AssetClassTaskFilter from '../AssetClassTask/AssetClassTaskFilter';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    fir: { fontFamily: 'inherit' },
});

const SelectButton = ({ record, setId, setShowPanel }) =>{

    const classes = useStyles();

    const toggleDrawer = () => {setShowPanel((showPanel) => !showPanel); setId(record.id)};

    return(
    <Button className={classes.fir} onClick={toggleDrawer} color="secondary">
     انتخاب
    </Button>
  );
    };


const NoneActions = props => (
    <CardActions />
); 

const freq = [
    { _id: 'H', full_name: 'ساعتی'},
    { _id: 'D', full_name: 'روزانه'},
    { _id: 'W', full_name: 'هفتگی'},
    { _id: 'M', full_name: 'ماهانه'},
    { _id: 'Y', full_name: 'سالانه'},
];

const fun = [
    { _id: 'O', full_name: 'اپراتور'},
    { _id: 'T', full_name: 'تکنسین' },
];

const TaskList = ({ setId, setShowPanel, ...props }) => {

    return(
    <List perPage={10} filters={<AssetClassTaskFilter />} bulkActionButtons={false} {...props} actions={<NoneActions />} title="خانواده تجهیز ">
        <Datagrid>
            <TextField label="کد" textAlgin="right" source="TaskCode" />
            <TextField label="عنوان" textAlgin="right" source="TaskName" />
            <SelectField label="تناوب" textAlgin="right" source="FrequencyName" choices={freq} optionText="full_name" optionValue="_id" />
            <NumberField label="مقدار تناوب" textAlgin="right" source="FrequencyAmount" />
            <NumberField label="مدت زمان انجام(دقیقه)" textAlgin="right" source="DurationOfDo" />
            <SelectField label="مسئول" textAlgin="right" source="Functor" choices={fun} optionText="full_name" optionValue="_id" />
            <ReferenceField label="تخصص" textAlgin="right" source="JobCategoryID" reference="PMWorks/JobCategory">
                <TextField source="JobCategoryName" />
            </ReferenceField>
            <ReferenceField label="خانواده تجهیز" textAlgin="right" source="AssetClassID" reference="PMWorks/AssetClass">
                <TextField source="AssetClassName" />
            </ReferenceField>
            <SelectButton setId={setId} setShowPanel={setShowPanel} />
        </Datagrid>
    </List>
);
    };

export default TaskList;
