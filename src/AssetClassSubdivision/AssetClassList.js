import React from "react";
import {
    List,
    Datagrid,
    TextField,
    CardActions,
    ReferenceField,
    ResourceContextProvider
}
from 'react-admin';
import Button from "@material-ui/core/Button";
import AssetClassFilter from '../AssetClass/AssetClassFilter';
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

const AssetClassList = ({ setId, setShowPanel, ...props }) => {

    return(
    <ResourceContextProvider value="PMWorks/AssetClass" >
    <List basePath="PMWorks/AssetClass" filters={<AssetClassFilter />} bulkActionButtons={false} actions={<NoneActions />} title="خانواده تجهیز ">
        <Datagrid>
            <TextField label="کد خانواده تجهیز" textAlgin="right" source="AssetClassCode" />
            <TextField label="نام خانواده تجهیز" textAlgin="right" source="AssetClassName" />
            <ReferenceField label="گروه خانواده تجهیز" textAlgin="right" source="AssetCategoryID" reference="PMWorks/AssetCategory" sortBy="AssetCategoryID__AssetCategoryName">
                <TextField source="AssetCategoryName" />
            </ReferenceField>
            <SelectButton setId={setId} setShowPanel={setShowPanel} />
        </Datagrid>
    </List>
    </ResourceContextProvider>
);
    };

export default AssetClassList;
