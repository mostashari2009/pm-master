import React from "react";
import {
    List,
    Datagrid,
    TextField,
    CardActions,
}
from 'react-admin';
import Button from "@material-ui/core/Button";
import TypeWrFilter from '../TypeWr/TypeWrFilter';
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

const TypeWrList = ({ setId, setShowPanel, ...props }) => {

    return(
    <List filters={<TypeWrFilter />} bulkActionButtons={false} {...props} actions={<NoneActions />} title="نوع خرابی">
        <Datagrid>
            <TextField label="کد نوع" textAlgin="right" source="TypeWrCode" />
            <TextField label="نام نوع" textAlgin="right" source="TypeWrName" />
            <SelectButton setId={setId} setShowPanel={setShowPanel} />
        </Datagrid>
    </List>
);
    };

export default TypeWrList;
