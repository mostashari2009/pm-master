import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    Show,
    CardActions,
}
from 'react-admin';
import { makeStyles } from '@material-ui/core';
import Button from "@material-ui/core/Button";
import LocationFilter from '../Location/LocationFilter';


const SelectButton = ({ record, setId, setShowPanel }) =>{
    const classes = useStyles();
    const toggleDrawer = () => {setShowPanel((showPanel) => !showPanel); setId(record.id)};

    return(
    <Button className={classes.fir} onClick={toggleDrawer} color="secondary">
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

const LocationTitle = ({...props}) => {
    return <span>زیر مجموعه {props ? `"${props.record.id}"` : ''}</span>;
};

const Location5 = ({ setId, setShowPanel, ...props }) => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        title={<LocationTitle />}
        actions={<NoneActions />}
    >
        <List empty={false} perPage={10} {...props} bulkActionButtons={false} filters={<LocationFilter />} filter={{ LocationFatherID: props.record.id }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }}>
                <TextField label="کد مکان" textAlgin="right" source="LocationCode" />
                <TextField label="نام مکان" textAlgin="right" source="LocationName" />
                <SelectButton setId={setId} setShowPanel={setShowPanel}/>
            </Datagrid>
        </List>
    </Show>
);
};

const Location4 = ({ setId, setShowPanel, ...props }) => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        title={<LocationTitle />}
        actions={<NoneActions />}
    >
        <List empty={false} perPage={10} {...props} bulkActionButtons={false} filters={<LocationFilter />} filter={{ LocationFatherID: props.record.id }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }} expand={<Location5 setId={setId} setShowPanel={setShowPanel}/>}>
                <TextField label="کد مکان" textAlgin="right" source="LocationCode" />
                <TextField label="نام مکان" textAlgin="right" source="LocationName" />
                <SelectButton setId={setId} setShowPanel={setShowPanel}/>
            </Datagrid>
        </List>
    </Show>
);
};

const Location3 = ({ setId, setShowPanel, ...props }) => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        title={<LocationTitle />}
        actions={<NoneActions />}
    >
        <List empty={false} perPage={10} {...props} bulkActionButtons={false} filters={<LocationFilter />} filter={{ LocationFatherID: props.record.id }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }} expand={<Location4 setId={setId} setShowPanel={setShowPanel}/>}>
                <TextField label="کد مکان" textAlgin="right" source="LocationCode" />
                <TextField label="نام مکان" textAlgin="right" source="LocationName" />
                <SelectButton setId={setId} setShowPanel={setShowPanel}/>
            </Datagrid>
        </List>
    </Show>
);
};

const Location2 = ({ setId, setShowPanel, ...props }) => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        title={<LocationTitle />}
        actions={<NoneActions />}
    >
        <List empty={false} perPage={10} {...props} bulkActionButtons={false} filters={<LocationFilter />} filter={{ LocationFatherID: props.record.id }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }} expand={<Location3 setId={setId} setShowPanel={setShowPanel}/>}>
                <TextField label="کد مکان" textAlgin="right" source="LocationCode" />
                <TextField label="نام مکان" textAlgin="right" source="LocationName" />
                <SelectButton setId={setId} setShowPanel={setShowPanel}/>
            </Datagrid>
        </List>
    </Show>
);
};

const Location = ({ setId, setShowPanel, ...props }) => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        title={<LocationTitle />}
        actions={<NoneActions />}
    >
        <List empty={false} perPage={10} {...props} bulkActionButtons={false} filters={<LocationFilter />} filter={{ LocationFatherID: props.record.id }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }} expand={<Location2 setId={setId} setShowPanel={setShowPanel}/>}>
                <TextField label="کد مکان" textAlgin="right" source="LocationCode" />
                <TextField label="نام مکان" textAlgin="right" source="LocationName" />
                <SelectButton setId={setId} setShowPanel={setShowPanel}/>
            </Datagrid>
        </List>
    </Show>
);
};

const LocationList = ({ setId, setShowPanel, ...props }) => (
    <List {...props} perPage={10} bulkActionButtons={false} actions={<NoneActions />} filters={<LocationFilter />} filter={{ LocationFatherID__isnull: true }} title="مکان ها">
        <Datagrid expand={<Location setId={setId} setShowPanel={setShowPanel}/>}>
            <TextField label="کد مکان" textAlgin="right" source="LocationCode" />
            <TextField label="نام مکان" textAlgin="right" source="LocationName" />
            <SelectButton setId={setId} setShowPanel={setShowPanel}/>
        </Datagrid>
    </List>
);

export default LocationList;
