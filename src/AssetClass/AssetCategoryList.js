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
import AssetCategoryFilter from '../AssetCategory/AssetCategoryFilter';


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

const AssetCategoryTitle = ({...props}) => {
    return <span>زیر مجموعه {props ? `"${props.record.id}"` : ''}</span>;
};

const AssetCategory5 = ({ setId, setShowPanel, ...props }) => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        title={<AssetCategoryTitle />}
        actions={<NoneActions />}
    >
        <List empty={false} bulkActionButtons={false} {...props} filter={{ AssetClassFather: props.record.id }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }}>
                <TextField label="کد خانواده تجهیز" textAlgin="right" source="AssetCategoryCode" />
                <TextField label="نام خانواده تجهیز" textAlgin="right" source="AssetCategoryName" />
                <SelectButton setId={setId} setShowPanel={setShowPanel}/>
            </Datagrid>
        </List>
    </Show>
);
};

const AssetCategory4 = ({ setId, setShowPanel, ...props }) => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        title={<AssetCategoryTitle />}
        actions={<NoneActions />}
    >
        <List empty={false} bulkActionButtons={false} {...props} filter={{ AssetClassFather: props.record.id }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }} expand={<AssetCategory5 setId={setId} setShowPanel={setShowPanel}/>}>
                <TextField label="کد خانواده تجهیز" textAlgin="right" source="AssetCategoryCode" />
                <TextField label="نام خانواده تجهیز" textAlgin="right" source="AssetCategoryName" />
                <SelectButton setId={setId} setShowPanel={setShowPanel}/>
            </Datagrid>
        </List>
    </Show>
);
};

const AssetCategory3 = ({ setId, setShowPanel, ...props }) => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        title={<AssetCategoryTitle />}
        actions={<NoneActions />}
    >
        <List empty={false} bulkActionButtons={false} {...props} filter={{ AssetClassFather: props.record.id }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }} expand={<AssetCategory4 setId={setId} setShowPanel={setShowPanel}/>}>
                <TextField label="کد خانواده تجهیز" textAlgin="right" source="AssetCategoryCode" />
                <TextField label="نام خانواده تجهیز" textAlgin="right" source="AssetCategoryName" />
                <SelectButton setId={setId} setShowPanel={setShowPanel}/>
            </Datagrid>
        </List>
    </Show>
);
};

const AssetCategory2 = ({ setId, setShowPanel, ...props }) => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        title={<AssetCategoryTitle />}
        actions={<NoneActions />}
    >
        <List empty={false} bulkActionButtons={false} {...props} filter={{ AssetClassFather: props.record.id }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }} expand={<AssetCategory3 setId={setId} setShowPanel={setShowPanel}/>}>
                <TextField label="کد خانواده تجهیز" textAlgin="right" source="AssetCategoryCode" />
                <TextField label="نام خانواده تجهیز" textAlgin="right" source="AssetCategoryName" />
                <SelectButton setId={setId} setShowPanel={setShowPanel}/>
            </Datagrid>
        </List>
    </Show>
);
};

const AssetCategory = ({ setId, setShowPanel, ...props }) => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        title={<AssetCategoryTitle />}
        actions={<NoneActions />}
    >
        <List empty={false} bulkActionButtons={false} {...props} filter={{ AssetClassFather: props.record.id }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }} expand={<AssetCategory2 setId={setId} setShowPanel={setShowPanel}/>}>
                <TextField label="کد خانواده تجهیز" textAlgin="right" source="AssetCategoryCode" />
                <TextField label="نام خانواده تجهیز" textAlgin="right" source="AssetCategoryName" />
                <SelectButton setId={setId} setShowPanel={setShowPanel}/>
            </Datagrid>
        </List>
    </Show>
);
};

const AssetCategoryList = ({ setId, setShowPanel, ...props }) => {
    const classes = useStyles();

return(
    <List {...props} bulkActionButtons={false} filters={<AssetCategoryFilter />} actions={<NoneActions />} filter={{ AssetClassFather__isnull: true }} title="تجهیزات ">
        <Datagrid expand={<AssetCategory setId={setId} setShowPanel={setShowPanel}/>}>
            <TextField label="کد خانواده تجهیز" textAlgin="right" source="AssetCategoryCode" />
            <TextField label="نام خانواده تجهیز" textAlgin="right" source="AssetCategoryName" />
            <SelectButton setId={setId} setShowPanel={setShowPanel}/>
        </Datagrid>
    </List>
);
};

export default AssetCategoryList;
