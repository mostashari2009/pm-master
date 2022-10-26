import React from "react";
import { Fragment } from 'react';
import {
    List,
    Datagrid,
    TextField,
    CardActions,
    ReferenceField,
    Show,
    useMutation,
    useRefresh,
    useNotify,
    useUnselectAll
}
from 'react-admin';
import Button from "@material-ui/core/Button";
import AssetSubdivisionFilter from '../AssetSubdivision/AssetSubdivisionFilter';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    fir: { fontFamily: 'inherit' },
});

const SelectButton = ({ selectedIds , setShowPanel, data }) =>{
    const refresh = useRefresh();
    const notify = useNotify();
    const unselectAll = useUnselectAll();
    const classes = useStyles();
    const [mutate, { loading }] = useMutation();

    //const [create, { loading }] = useCreate(
     //   'posts',
      //  selectedIds,
       // { views: 0 },
        //{
    const onSuccess = () => {
        refresh(`PMWorks/WOTemplate/${data}/show/PMWorks/WOTemplateAsset`);
        notify('تجهیزات اضافه شدند');
        setShowPanel((showPanel) => !showPanel);
        unselectAll('PMWorks/AssetSubdivision')
    };
 
    const toggleDrawer = () => {{selectedIds.map(selectedId => mutate({ type: 'create', resource: 'PMWorks/WOTemplateAsset', payload: { data: {WOTemplateID: data.id, AssetSubdivisionID: selectedId}} } )) }; onSuccess()};

    return(
    <Button className={classes.fir} onClick={toggleDrawer} color="secondary">
     انتخاب
    </Button>
  );
    };

const BulkActionButtons = ({ setShowPanel, ...props }) => (
        <Fragment>
            <SelectButton setShowPanel={setShowPanel} {...props}/>
        </Fragment>
    );

const NoneActions = props => (
    <CardActions />
); 


const AssetSubdivision5 = ({ data, setShowPanel, ...props }) => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        actions={<NoneActions />}
    >
        <List empty={false} filters={<AssetSubdivisionFilter />} bulkActionButtons={<BulkActionButtons data={data} setShowPanel={setShowPanel}/>} {...props} filter={{ AssetSubdivisionFatherID: props.record.id }} actions={null} title=" ">
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
            </Datagrid>
        </List>
    </Show>
);
};

const AssetSubdivision4 = ({ data, setShowPanel, ...props }) => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        actions={<NoneActions />}
    >
        <List empty={false} filters={<AssetSubdivisionFilter />} bulkActionButtons={<BulkActionButtons data={data} setShowPanel={setShowPanel}/>} {...props} filter={{ AssetSubdivisionFatherID: props.record.id }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }} expand={<AssetSubdivision5 data={data} setShowPanel={setShowPanel}/>}>
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
            </Datagrid>
        </List>
    </Show>
);
};

const AssetSubdivision3 = ({ data, setShowPanel, ...props }) => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        actions={<NoneActions />}
    >
        <List empty={false} filters={<AssetSubdivisionFilter />} bulkActionButtons={<BulkActionButtons data={data} setShowPanel={setShowPanel}/>} {...props} filter={{ AssetSubdivisionFatherID: props.record.id }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }} expand={<AssetSubdivision4 data={data} setShowPanel={setShowPanel}/>}>
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
            </Datagrid>
        </List>
    </Show>
);
};

const AssetSubdivision2 = ({ data, setShowPanel, ...props }) => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        actions={<NoneActions />}
    >
        <List empty={false} filters={<AssetSubdivisionFilter />} bulkActionButtons={<BulkActionButtons data={data} setShowPanel={setShowPanel}/>} {...props} filter={{ AssetSubdivisionFatherID: props.record.id }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }} expand={<AssetSubdivision3 data={data} setShowPanel={setShowPanel}/>}>
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
            </Datagrid>
        </List>
    </Show>
);
};

const AssetSubdivision = ({ data, setShowPanel, ...props }) => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        actions={<NoneActions />}
    >
        <List empty={false} filters={<AssetSubdivisionFilter />} bulkActionButtons={<BulkActionButtons data={data} setShowPanel={setShowPanel}/>} {...props} filter={{ AssetSubdivisionFatherID: props.record.id }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }} expand={<AssetSubdivision2 data={data} setShowPanel={setShowPanel}/>}>
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
            </Datagrid>
        </List>
    </Show>
);
};

const AssetList = ({ data, setShowPanel, ...props }) => {

    return(
    <List basePath="PMWorks/AssetSubdivision" filter={{ tree: 1 }} filters={<AssetSubdivisionFilter />} bulkActionButtons={<BulkActionButtons data={data} setShowPanel={setShowPanel}/>} {...props} actions={<NoneActions />} title="تجهیزات">
        <Datagrid expand={<AssetSubdivision data={data} setShowPanel={setShowPanel}/>}>
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
        </Datagrid>
    </List>
);
    };

export default AssetList;
