import React from "react";
import { Fragment } from 'react';
import {
    List,
    Datagrid,
    TextField,
    CardActions,
    ReferenceField,
    NumberField,
    useMutation,
    useRefresh,
    useNotify,
    useUnselectAll,
    SelectField,
}
from 'react-admin';
import Button from "@material-ui/core/Button";
import AssetClassTaskFilter from '../AssetClassTask/AssetClassTaskFilter';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    fir: { fontFamily: 'inherit' },
});

const SelectButton = ({ selectedIds , setShowPanel, data, dataa }) =>{
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
        refresh(`PMWorks/WOTemplate/${dataa}/show/PMWorks/WOTemplateAsset`);
        refresh(`PMWorks/WOTemplateActivity`);
        refresh(`PMWorks/WOTemplate/${dataa}`);
        notify('فعالیت‌ها اضافه شدند');
        setShowPanel((showPanel) => !showPanel);
        unselectAll('PMWorks/TaskTemp')
    };
 
    const toggleDrawer = () => {{selectedIds.map(selectedId => mutate({ type: 'create', resource: 'PMWorks/WOTemplateActivity', payload: { data: {WOTemplateAssetID: data, TaskID: selectedId}} } )) }; onSuccess()};

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

const fun = [
    { _id: 'O', full_name: 'اپراتور'},
    { _id: 'T', full_name: 'تکنسین' },
];
    

const NoneActions = props => (
    <CardActions />
); 

const TaskList = ({ data, dataa, setShowPanel, ...props }) => {

    return(
    <List basePath="PMWorks/TaskTemp" filters={<AssetClassTaskFilter />} filterDefaultValues={{ WOTemplateAssetID: data }} bulkActionButtons={<BulkActionButtons data={data} dataa={dataa} setShowPanel={setShowPanel}/>} {...props} actions={<NoneActions />} title="فعالیت‌ها">
        <Datagrid>
                    <TextField label="کد فعالیت" textAlgin="right" source="TaskCode" />
                    <TextField label="نام فعالیت" textAlgin="right" source="TaskName" />
                    <TextField label="تناوب" textAlgin="right" source="FrequencyName" />
                    <NumberField label="مقدار تناوب" textAlgin="right" source="FrequencyAmount" />
                    <NumberField label="مدت زمان انجام" textAlgin="right" source="DurationOfDo" />
                    <SelectField label="مسئول" textAlgin="right" source="Functor" choices={fun} optionText="full_name" optionValue="_id" />
                    <ReferenceField label="نوع فعالیت" textAlgin="right" source="TaskTypeID" reference="PMWorks/TaskType">
                        <TextField source="TaskTypeName" />
                    </ReferenceField>
                    <ReferenceField label="تخصص" textAlgin="right" source="JobCategoryID" reference="PMWorks/JobCategory">
                        <TextField source="JobCategoryName" />
                    </ReferenceField>
                    <ReferenceField label="کلاس تجهیز" textAlgin="right" source="AssetClassID" reference="PMWorks/AssetClass">
                        <TextField source="AssetClassName" />
                    </ReferenceField>
        </Datagrid>
    </List>
);
    };

export default TaskList;