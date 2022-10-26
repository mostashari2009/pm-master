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
import DelayFilter from '../Delay/DelayFilter';
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

const DelayList = ({ setId, setShowPanel, ...props }) => {

    return(
    <List filters={<DelayFilter />} bulkActionButtons={false} {...props} actions={<NoneActions />} title="خانواده تجهیز ">
        <Datagrid>
            <TextField label="کد تاخیر" textAlgin="right" source="DelayCode" />
            <TextField label="نام تاخیر" textAlgin="right" source="DelayName" />
            <SelectButton setId={setId} setShowPanel={setShowPanel} />
        </Datagrid>
    </List>
);
    };

export default DelayList;
