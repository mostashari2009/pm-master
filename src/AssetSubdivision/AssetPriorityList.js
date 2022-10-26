import React from "react";
import {
    List,
    Datagrid,
    TextField,
    CardActions,
}
from 'react-admin';
import Button from "@material-ui/core/Button";
import AssetPriorityFilter from '../AssetPriority/AssetPriorityFilter';
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

const AssetPriorityList = ({ setId, setShowPanel, ...props }) => {

    return(
    <List filters={<AssetPriorityFilter />} bulkActionButtons={false} {...props} actions={<NoneActions />} title="خانواده تجهیز ">
        <Datagrid>
            <TextField label="کد اولویت" textAlgin="right" source="AssetPriorityCode" />
            <TextField label="نام اولویت" textAlgin="right" source="AssetPriorityName" />
            <TextField label="مقدار" textAlgin="right" source="AssetPriorityValue" />
            <SelectButton setId={setId} setShowPanel={setShowPanel} />
        </Datagrid>
    </List>
);
    };

export default AssetPriorityList;
