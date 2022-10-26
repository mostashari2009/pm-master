import React from "react";
import {
    List,
    Datagrid,
    TextField,
    CardActions,
    ReferenceField,
    NumberField
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

const TaskList = ({ setId, setShowPanel, ...props }) => {

    return(
    <List filters={<AssetClassTaskFilter />} bulkActionButtons={false} {...props} actions={<NoneActions />} title="خانواده تجهیز ">
        <Datagrid>
                    <TextField label="کد فعالیت" textAlgin="right" source="TaskCode" />
                    <TextField label="نام فعالیت" textAlgin="right" source="TaskName" />
                    <TextField label="تناوب" textAlgin="right" source="FrequencyName" />
                    <NumberField label="مقدار تناوب" textAlgin="right" source="FrequencyAmount" />
                    <NumberField label="مدت زمان انجام" textAlgin="right" source="DurationOfDo" />
                    <TextField label="مسئول" textAlgin="right" source="Functor" />
                    <ReferenceField label="نوع فعالیت" textAlgin="right" source="TaskTypeID" reference="PMWorks/TaskType">
                        <TextField source="TaskTypeName" />
                    </ReferenceField>
                    <ReferenceField label="شغل" textAlgin="right" source="JobCategoryID" reference="PMWorks/JobCategory">
                        <TextField source="JobCategoryName" />
                    </ReferenceField>
                    <ReferenceField label="کلاس تجهیز" textAlgin="right" source="AssetClassID" reference="PMWorks/AssetClass">
                        <TextField source="AssetClassName" />
                    </ReferenceField>
            <SelectButton setId={setId} setShowPanel={setShowPanel} />
        </Datagrid>
    </List>
);
    };

export default TaskList;
