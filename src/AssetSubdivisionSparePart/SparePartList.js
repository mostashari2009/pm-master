import React from "react";
import {
    List,
    Datagrid,
    TextField,
    CardActions,
    ReferenceField
}
from 'react-admin';
import Button from "@material-ui/core/Button";
import SparePartFilter from '../SparePart/SparePartFilter';
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

const SparePartList = ({ setId, setShowPanel, ...props }) => {

    return(
    <List filters={<SparePartFilter />} bulkActionButtons={false} {...props} actions={<NoneActions />} title="خانواده تجهیز ">
        <Datagrid>
            <TextField label="کد قطعه" textAlgin="right" source="SparePartCode" />
            <TextField label="نام قطعه" textAlgin="right" source="SparePartName" />
            <ReferenceField label="خانواده قطعه" textAlgin="right" source="SparePartCategoryID" reference="PMWorks/SparePartCategory">
                <TextField source="SparePartCategoryName" />
            </ReferenceField>
            <ReferenceField label="سطح قطعه" textAlgin="right" source="SparePartDimensionID" reference="PMWorks/SparePartDimension">
                <TextField source="SparePartDimensionName" />
            </ReferenceField>
            <SelectButton setId={setId} setShowPanel={setShowPanel} />
        </Datagrid>
    </List>
);
    };

export default SparePartList;
