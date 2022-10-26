import React from "react";
import {
    List,
    Datagrid,
    TextField,
    CardActions,
    NumberField,
}
from 'react-admin';
import Button from "@material-ui/core/Button";
import WorkPriorityFilter from '../WorkPriority/WorkPriorityFilter';
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

const WorkPriorityList = ({ setId, setShowPanel, ...props }) => {

    return(
    <List filters={<WorkPriorityFilter />} bulkActionButtons={false} {...props} actions={<NoneActions />} title="نوع خرابی">
        <Datagrid>
            <TextField label="کد اولویت" textAlgin="right" source="WorkPriorityCode" />
            <TextField label="نام اولویت" textAlgin="right" source="WorkPriorityName" />
            <NumberField label="مقدار اولویت" textAlgin="right" source="WorkPriorityValue" />
            <SelectButton setId={setId} setShowPanel={setShowPanel} />
        </Datagrid>
    </List>
);
    };

export default WorkPriorityList;
