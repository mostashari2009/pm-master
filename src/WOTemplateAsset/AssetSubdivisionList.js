import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    Show,
    CardActions,
    ReferenceField
}
from 'react-admin';
import { makeStyles } from '@material-ui/core';
import Button from "@material-ui/core/Button";
import AssetSubdivisionFilter from '../AssetSubdivision/AssetSubdivisionFilter';


const SelectButton = ({ record, setId, setShowPanel }) =>{
    const classes = useStyles();
    const toggleDrawer = () => {setShowPanel((showPanel) => !showPanel); setId(record.id)};

    return(
    <Button  className={classes.fir} onClick={toggleDrawer} color="secondary">
     انتخاب
    </Button>
  );
    };


const useStyles = makeStyles({
    head: {
        display: 'none',
    },
    fir: { fontFamily: 'inherit' },
});

const NoneActions = props => (
    <CardActions />
); 

const AssetSubdivisionTitle = ({...props}) => {
    return <span>زیر مجموعه {props ? `"${props.record.id}"` : ''}</span>;
};

const AssetSubdivision5 = ({ setId, setShowPanel, ...props }) => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        title={<AssetSubdivisionTitle />}
        actions={<NoneActions />}
    >
        <List empty={false} bulkActionButtons={false} {...props} filter={{ AssetSubdivisionFatherID: props.record.id }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }}>
            <ReferenceField label="کد تجهیز" textAlgin="right" source="AssetID" reference="PMWorks/Asset">
                <TextField source="AssetCode" />
            </ReferenceField>
            <ReferenceField label="نام تجهیز" textAlgin="right" source="AssetID" reference="PMWorks/Asset">
                <TextField source="AssetName" />
            </ReferenceField>
            <TextField label="مکان" textAlgin="right" source="AssetID__LocationID__LocationNameChain" />
            <ReferenceField label="کلاس تجهیز" textAlgin="right" source="AssetChildID" reference="PMWorks/AssetClass">
                <TextField source="AssetClassName" />
            </ReferenceField>
                <SelectButton setId={setId} setShowPanel={setShowPanel}/>
            </Datagrid>
        </List>
    </Show>
);
};

const AssetSubdivision4 = ({ setId, setShowPanel, ...props }) => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        title={<AssetSubdivisionTitle />}
        actions={<NoneActions />}
    >
        <List empty={false} bulkActionButtons={false} {...props} filter={{ AssetSubdivisionFatherID: props.record.id }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }} expand={<AssetSubdivision5 setId={setId} setShowPanel={setShowPanel}/>}>
            <ReferenceField label="کد تجهیز" textAlgin="right" source="AssetID" reference="PMWorks/Asset">
                <TextField source="AssetCode" />
            </ReferenceField>
            <ReferenceField label="نام تجهیز" textAlgin="right" source="AssetID" reference="PMWorks/Asset">
                <TextField source="AssetName" />
            </ReferenceField>
            <TextField label="مکان" textAlgin="right" source="AssetID__LocationID__LocationNameChain" />
            <ReferenceField label="کلاس تجهیز" textAlgin="right" source="AssetChildID" reference="PMWorks/AssetClass">
                <TextField source="AssetClassName" />
            </ReferenceField>
                <SelectButton setId={setId} setShowPanel={setShowPanel}/>
            </Datagrid>
        </List>
    </Show>
);
};

const AssetSubdivision3 = ({ setId, setShowPanel, ...props }) => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        title={<AssetSubdivisionTitle />}
        actions={<NoneActions />}
    >
        <List empty={false} bulkActionButtons={false} {...props} filter={{ AssetSubdivisionFatherID: props.record.id }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }} expand={<AssetSubdivision4 setId={setId} setShowPanel={setShowPanel}/>}>
            <ReferenceField label="کد تجهیز" textAlgin="right" source="AssetID" reference="PMWorks/Asset">
                <TextField source="AssetCode" />
            </ReferenceField>
            <ReferenceField label="نام تجهیز" textAlgin="right" source="AssetID" reference="PMWorks/Asset">
                <TextField source="AssetName" />
            </ReferenceField>
            <TextField label="مکان" textAlgin="right" source="AssetID__LocationID__LocationNameChain" />
            <ReferenceField label="کلاس تجهیز" textAlgin="right" source="AssetChildID" reference="PMWorks/AssetClass">
                <TextField source="AssetClassName" />
            </ReferenceField>
                <SelectButton setId={setId} setShowPanel={setShowPanel}/>
            </Datagrid>
        </List>
    </Show>
);
};

const AssetSubdivision2 = ({ setId, setShowPanel, ...props }) => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        title={<AssetSubdivisionTitle />}
        actions={<NoneActions />}
    >
        <List empty={false} bulkActionButtons={false} {...props} filter={{ AssetSubdivisionFatherID: props.record.id }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }} expand={<AssetSubdivision3 setId={setId} setShowPanel={setShowPanel}/>}>
            <ReferenceField label="کد تجهیز" textAlgin="right" source="AssetID" reference="PMWorks/Asset">
                <TextField source="AssetCode" />
            </ReferenceField>
            <ReferenceField label="نام تجهیز" textAlgin="right" source="AssetID" reference="PMWorks/Asset">
                <TextField source="AssetName" />
            </ReferenceField>
            <TextField label="مکان" textAlgin="right" source="AssetID__LocationID__LocationNameChain" />
            <ReferenceField label="کلاس تجهیز" textAlgin="right" source="AssetChildID" reference="PMWorks/AssetClass">
                <TextField source="AssetClassName" />
            </ReferenceField>
                <SelectButton setId={setId} setShowPanel={setShowPanel}/>
            </Datagrid>
        </List>
    </Show>
);
};

const AssetSubdivision = ({ setId, setShowPanel, ...props }) => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        title={<AssetSubdivisionTitle />}
        actions={<NoneActions />}
    >
        <List empty={false} bulkActionButtons={false} {...props} filter={{ AssetSubdivisionFatherID: props.record.id }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }} expand={<AssetSubdivision2 setId={setId} setShowPanel={setShowPanel}/>}>
            <ReferenceField label="کد تجهیز" textAlgin="right" source="AssetID" reference="PMWorks/Asset">
                <TextField source="AssetCode" />
            </ReferenceField>
            <ReferenceField label="نام تجهیز" textAlgin="right" source="AssetID" reference="PMWorks/Asset">
                <TextField source="AssetName" />
            </ReferenceField>
            <TextField label="مکان" textAlgin="right" source="AssetID__LocationID__LocationNameChain" />
            <ReferenceField label="کلاس تجهیز" textAlgin="right" source="AssetChildID" reference="PMWorks/AssetClass">
                <TextField source="AssetClassName" />
            </ReferenceField>
                <SelectButton setId={setId} setShowPanel={setShowPanel}/>
            </Datagrid>
        </List>
    </Show>
);
};

const AssetSubdivisionList = ({ setId, setShowPanel, ...props }) => {
    const classes = useStyles();

return(
    <List {...props} bulkActionButtons={false} filters={<AssetSubdivisionFilter />} actions={<NoneActions />} filter={{ tree: 1 }} title="تجهیزات ">
        <Datagrid expand={<AssetSubdivision setId={setId} setShowPanel={setShowPanel}/>}>
        <ReferenceField label="کد تجهیز" textAlgin="right" source="AssetID" reference="PMWorks/Asset">
                <TextField source="AssetCode" />
            </ReferenceField>
            <ReferenceField label="نام تجهیز" textAlgin="right" source="AssetID" reference="PMWorks/Asset">
                <TextField source="AssetName" />
            </ReferenceField>
            <TextField label="مکان" textAlgin="right" source="AssetID__LocationID__LocationNameChain" />
            <ReferenceField label="کلاس تجهیز" textAlgin="right" source="AssetChildID" reference="PMWorks/AssetClass">
                <TextField source="AssetClassName" />
            </ReferenceField>
            <SelectButton setId={setId} setShowPanel={setShowPanel}/>
        </Datagrid>
    </List>
);
};

export default AssetSubdivisionList;
