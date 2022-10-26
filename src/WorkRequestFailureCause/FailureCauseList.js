import React from "react";
import {
    List,
    Datagrid,
    TextField,
    CardActions,
    ReferenceField,
}
from 'react-admin';
import Button from "@material-ui/core/Button";
import FailureCauseFilter from '../FailureCause/FailureCauseFilter';
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

const FailureCauseList = ({ setId, setShowPanel, ...props }) => {

    return(
    <List filters={<FailureCauseFilter />} bulkActionButtons={false} {...props} actions={<NoneActions />} title="خانواده تجهیز ">
        <Datagrid>
            <TextField label="کد علت خرابی" textAlgin="right" source="FailureCauseCode" />
            <TextField label="نام علت خرابی" textAlgin="right" source="FailureCauseName" />
            <ReferenceField label="نوع خرابی" textAlgin="right" source="FailureModeID" reference="PMWorks/FailureMode">
                <TextField source="FailureModeName" />
            </ReferenceField>
            <SelectButton setId={setId} setShowPanel={setShowPanel} />
        </Datagrid>
    </List>
);
    };

export default FailureCauseList;
