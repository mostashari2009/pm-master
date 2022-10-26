import React from "react";
import Dialog from "@material-ui/core/Dialog";
import { TextField, useRefresh, useUnselectAll,
         ReferenceField, Datagrid, List, useMutation, Button,
         useNotify, NumberInput, SimpleForm, ResourceContextProvider } from "react-admin";
import AddIcon from '@material-ui/icons/Add';
import SparePartFilter from '../SparePart/SparePartFilter';
import Divider from '@material-ui/core/Divider';

export default function ScrollDialog(props) {
    const [taskTime, setTaskTime] = React.useState(null);

    let { open, setOpen, record } = props;

    //close dialog window
    const handleClose = () => {
        setOpen(false);
    };

    const AddButton = ({ selectedIds }) => {
        const refresh = useRefresh();
        const notify = useNotify();
        const unselectAll = useUnselectAll();
        const [mutate] = useMutation();
        const unselectAlll = useUnselectAll();

    
        const onSuccess = () => {
            refresh();
            notify('قطعات اضافه شدند');
            unselectAll('PMWorks/WOTask');
            unselectAlll('PMWorks/SparePart');
            unselectAll('PMWorks/WOTaskk');
        };
    
        const toggleDrawer = () => {{selectedIds.map(personId =>
            mutate({
            type: 'create',
            resource: 'PMWorks/WOSparePart',
            payload: {
                data: {
                WOTaskID: record.id,
                SparePartID: personId,
                SparePartAmount: parseInt(taskTime),
                }
            }
            })
        )}; onSuccess()};
    
        return (
            <Button
                label='ثبت'
                onClick={toggleDrawer}
            >
                <AddIcon />
            </Button>
        );
    };

    const PersonnelBulkActionButtons = props => {
        return (
            <React.Fragment>
                <AddButton label="تایید فعالیت" {...props} />
            </React.Fragment>
        )
    };


    const PersonnalList = (...props) => {
        return (
        <ResourceContextProvider value="PMWorks/SparePart" {...props}>
            <List basePath="PMWorks/SparePart" bulkActionButtons={<PersonnelBulkActionButtons />} filters={<SparePartFilter />} exporter={false} actions={false} {...props}>
            <Datagrid>
                <TextField label="کد" textAlgin="right" source="SparePartCode" />
                <TextField label="عنوان" textAlgin="right" source="SparePartName" />
                <ReferenceField label="خانواده" textAlgin="right" source="SparePartCategoryID" reference="PMWorks/SparePartCategory">
                    <TextField source="SparePartCategoryName" />
                </ReferenceField>
                <ReferenceField label="واحد اندازه‌گیری" textAlgin="right" source="SparePartDimensionID" reference="PMWorks/SparePartDimension">
                    <TextField source="SparePartDimensionName" />
                </ReferenceField>
            </Datagrid>
            </List>
        </ResourceContextProvider>
        );
    };

    return (
        <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={true}
        maxWidth={"md"}
        >
                <SimpleForm toolbar={false}>
                    <NumberInput isRequired={true} label={"تعداد"} source={"SparePartAmount"} value={taskTime} onChange={(e) => setTaskTime(e.target.value)} />
                </SimpleForm>
                <Divider />
                <PersonnalList />
        </Dialog>
    );
}