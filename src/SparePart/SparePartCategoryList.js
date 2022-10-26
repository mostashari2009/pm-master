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
import SparePartCategoryFilter from '../SparePartCategory/SparePartCategoryFilter';


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

const SparePartCategoryTitle = ({...props}) => {
    return <span>زیر مجموعه {props ? `"${props.record.id}"` : ''}</span>;
};

const SparePartCategory5 = ({ setId, setShowPanel, ...props }) => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        title={<SparePartCategoryTitle />}
        actions={<NoneActions />}
    >
        <List empty={false} bulkActionButtons={false} {...props} filter={{ SparePartCategoryFather: props.record.id }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }}>
                <TextField label="کد خانواده قطعه" textAlgin="right" source="SparePartCategoryCode" />
                <TextField label="نام خانواده قطعه" textAlgin="right" source="SparePartCategoryName" />
                <SelectButton setId={setId} setShowPanel={setShowPanel}/>
            </Datagrid>
        </List>
    </Show>
);
};

const SparePartCategory4 = ({ setId, setShowPanel, ...props }) => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        title={<SparePartCategoryTitle />}
        actions={<NoneActions />}
    >
        <List empty={false} bulkActionButtons={false} {...props} filter={{ SparePartCategoryFather: props.record.id }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }} expand={<SparePartCategory5 setId={setId} setShowPanel={setShowPanel}/>}>
                <TextField label="کد خانواده قطعه" textAlgin="right" source="SparePartCategoryCode" />
                <TextField label="نام خانواده قطعه" textAlgin="right" source="SparePartCategoryName" />
                <SelectButton setId={setId} setShowPanel={setShowPanel}/>
            </Datagrid>
        </List>
    </Show>
);
};

const SparePartCategory3 = ({ setId, setShowPanel, ...props }) => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        title={<SparePartCategoryTitle />}
        actions={<NoneActions />}
    >
        <List empty={false} bulkActionButtons={false} {...props} filter={{ SparePartCategoryFather: props.record.id }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }} expand={<SparePartCategory4 setId={setId} setShowPanel={setShowPanel}/>}>
                <TextField label="کد خانواده قطعه" textAlgin="right" source="SparePartCategoryCode" />
                <TextField label="نام خانواده قطعه" textAlgin="right" source="SparePartCategoryName" />
                <SelectButton setId={setId} setShowPanel={setShowPanel}/>
            </Datagrid>
        </List>
    </Show>
);
};

const SparePartCategory2 = ({ setId, setShowPanel, ...props }) => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        title={<SparePartCategoryTitle />}
        actions={<NoneActions />}
    >
        <List empty={false} bulkActionButtons={false} {...props} filter={{ SparePartCategoryFather: props.record.id }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }} expand={<SparePartCategory3 setId={setId} setShowPanel={setShowPanel}/>}>
                <TextField label="کد خانواده قطعه" textAlgin="right" source="SparePartCategoryCode" />
                <TextField label="نام خانواده قطعه" textAlgin="right" source="SparePartCategoryName" />
                <SelectButton setId={setId} setShowPanel={setShowPanel}/>
            </Datagrid>
        </List>
    </Show>
);
};

const SparePartCategory = ({ setId, setShowPanel, ...props }) => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        title={<SparePartCategoryTitle />}
        actions={<NoneActions />}
    >
        <List empty={false} bulkActionButtons={false} {...props} filter={{ SparePartCategoryFather: props.record.id }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }} expand={<SparePartCategory2 setId={setId} setShowPanel={setShowPanel}/>}>
                <TextField label="کد خانواده قطعه" textAlgin="right" source="SparePartCategoryCode" />
                <TextField label="نام خانواده قطعه" textAlgin="right" source="SparePartCategoryName" />
                <SelectButton setId={setId} setShowPanel={setShowPanel}/>
            </Datagrid>
        </List>
    </Show>
);
};

const SparePartCategoryList = ({ setId, setShowPanel, ...props }) => {
    const classes = useStyles();

return(
    <List {...props} bulkActionButtons={false} filters={<SparePartCategoryFilter />} actions={<NoneActions />} filter={{ SparePartCategoryFather__isnull: true }} title="خانواده قطعه">
        <Datagrid expand={<SparePartCategory setId={setId} setShowPanel={setShowPanel}/>}>
            <TextField label="کد خانواده قطعه" textAlgin="right" source="SparePartCategoryCode" />
            <TextField label="نام خانواده قطعه" textAlgin="right" source="SparePartCategoryName" />
            <SelectButton setId={setId} setShowPanel={setShowPanel}/>
        </Datagrid>
    </List>
);
};

export default SparePartCategoryList;
