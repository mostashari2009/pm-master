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
import SpecificDataFilter from '../SpecificData/SpecificDataFilter';
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

const SpecificDataList = ({ setId, setShowPanel, ...props }) => {

    return(
    <List filters={<SpecificDataFilter />} bulkActionButtons={false} {...props} actions={<NoneActions />} title="خانواده تجهیز ">
        <Datagrid>
            <TextField label="کد ویژگی" textAlgin="right" source="SpecificDataCode" />
            <TextField label="نام ویژگی" textAlgin="right" source="SpecificDataName" />
            <TextField label="واحد اندازه گیری" textAlgin="right" source="Measurment" />
            <SelectButton setId={setId} setShowPanel={setShowPanel} />
        </Datagrid>
    </List>
);
    };

export default SpecificDataList;
