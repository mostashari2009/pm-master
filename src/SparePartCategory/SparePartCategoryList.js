import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    Show,
    EditButton,
    CardActions 
}
from 'react-admin';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    head: {
        display: 'none',
    },
});

const CreateChildButton = ({ record }) => (
    <Button
        component={Link}
        to={{
            pathname: '/PMWorks/SparePartCategory/create',
            state: { record: { SparePartCategoryFather: record.id } },
        }}
        label="اضافه کردن زیرمجموعه"
        title="اضافه کردن زیرمجموعه"
        color="secondary"
    >
        <AddIcon color="secondary" />
        زیرمجموعه
    </Button>
);


const NoneActions = props => (
    <CardActions />
);


const SparePartCategoryTitle = ({...props}) => {
    return <span>زیر مجموعه {props ? `"${props.record.SparePartCategoryName}"` : ''}</span>;
};

const SparePartCategoryShow5 = props => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        title={<SparePartCategoryTitle />}
        actions={<NoneActions />}
    >
        <List {...props} filter={{ SparePartCategoryFather: props.record.id }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }}>
                <TextField label="نام خانواده قطعه" textAlgin="right" source="SparePartCategoryName" />
                <TextField label="کد خانواده قطعه" textAlgin="right" source="SparePartCategoryCode" />
                <EditButton />
            </Datagrid>
        </List>
    </Show>
);
};

const SparePartCategoryShow4 = props => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        title={<SparePartCategoryTitle />}
        actions={<NoneActions />}
    >
        <List {...props} filter={{ SparePartCategoryFather: props.record.id }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }} expand={<SparePartCategoryShow5 />}>
                <TextField label="نام خانواده قطعه" textAlgin="right" source="SparePartCategoryName" />
                <TextField label="کد خانواده قطعه" textAlgin="right" source="SparePartCategoryCode" />
                <CreateChildButton />
                <EditButton />
            </Datagrid>
        </List>
    </Show>
);
};

const SparePartCategoryShow3 = props => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        title={<SparePartCategoryTitle />}
        actions={<NoneActions />}
    >
        <List {...props} filter={{ SparePartCategoryFather: props.record.id }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }} expand={<SparePartCategoryShow4 />}>
                <TextField label="نام خانواده قطعه" textAlgin="right" source="SparePartCategoryName" />
                <TextField label="کد خانواده قطعه" textAlgin="right" source="SparePartCategoryCode" />
                <CreateChildButton />
                <EditButton />
            </Datagrid>
        </List>
    </Show>
);
};

const SparePartCategoryShow2 = props => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        title={<SparePartCategoryTitle />}
        actions={<NoneActions />}
    >
        <List {...props} filter={{ SparePartCategoryFather: props.record.id }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }} expand={<SparePartCategoryShow3 />}>
                <TextField label="نام خانواده قطعه" textAlgin="right" source="SparePartCategoryName" />
                <TextField label="کد خانواده قطعه" textAlgin="right" source="SparePartCategoryCode" />
                <CreateChildButton />
                <EditButton />
            </Datagrid>
        </List>
    </Show>
);
};

const SparePartCategoryShow = props => {
    const classes = useStyles();
    return (
    <Show
        {...props}
        /* disable the app title change when shown */
        title={<SparePartCategoryTitle />}
        actions={<NoneActions />}
    >
        <List {...props} filter={{ SparePartCategoryFather: props.record.id }} actions={null} title=" ">
            <Datagrid classes={{ thead: classes.head }} expand={<SparePartCategoryShow2 />}>
                <TextField label="نام خانواده قطعه" textAlgin="right" source="SparePartCategoryName" />
                <TextField label="کد خانواده قطعه" textAlgin="right" source="SparePartCategoryCode" />
                <CreateChildButton />
                <EditButton />
            </Datagrid>
        </List>
    </Show>
);
};

const SparePartCategoryList = props => (
    <List {...props} filter={{ SparePartCategoryFather__isnull: true }} title="خانواده قطعه">
        <Datagrid expand={<SparePartCategoryShow />}>
            <TextField label="نام خانواده قطعه" textAlgin="right" source="SparePartCategoryName" />
            <TextField label="کد خانواده قطعه" textAlgin="right" source="SparePartCategoryCode" />
            <CreateChildButton />
            <EditButton />
        </Datagrid>
    </List>
);

export default SparePartCategoryList;
