import React from "react";
import Dialog from "@material-ui/core/Dialog";
import { TextField, useRefresh, useUnselectAll,
         ReferenceField, Datagrid, List, useMutation, Button,
         useNotify, NumberInput, SimpleForm, ResourceContextProvider } from "react-admin";
import AddIcon from '@material-ui/icons/Add';
import PersonnelFilter from '../Personnel/PersonnelFilter';
import { DateInput } from "../Components/JalaliDatePickerDialog"
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

export default function ScrollDialog(props) {
    var today = new Date();
    const [taskTime, setTaskTime] = React.useState(null);
    const [taskDate, setTaskDate] = React.useState(today);

    let { open, setOpen, taskSelectedIds } = props;

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
            notify('پرسنل اضافه شدند');
            unselectAll('PMWorks/WOTask');
            unselectAlll('PMWorks/Personnel');
            unselectAll('PMWorks/WOTaskk');
        };
    
        const toggleDrawer = () => {{taskSelectedIds.map(taskId => selectedIds.map(personId =>
            mutate({
            type: 'create',
            resource: 'PMWorks/WOPersonnel',
            payload: {
                data: {
                WOTaskID: taskId,
                PersonnelID: personId,
                WorkDate: taskDate,
                WorkTime: parseInt(taskTime/taskSelectedIds.length),
                }
            }
            })
        ))}; onSuccess()};
    
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


    const PersonnalList = () => {
        return (
        <ResourceContextProvider value="PMWorks/Personnel" >
            <List filterDefaultValues={{ PersonnelNetCode__isempty: false, PersonnelNetCode__isnull: false }} basePath="PMWorks/Personnel" bulkActionButtons={<PersonnelBulkActionButtons />} filters={<PersonnelFilter />} exporter={false} actions={false} >
            <Datagrid>
                <TextField label="کد پرسنلی" textAlgin="right" source="PersonnelCode" />
                <TextField label="کد نت" textAlgin="right" source="PersonnelNetCode" />
                <TextField label="نام" textAlgin="right" source="PersonnelName" />
                <TextField label="نام‌خانوادگی" textAlgin="right" source="PersonnelFamily" />
                <ReferenceField label="دپارتمان" textAlgin="right" source="DepartmentID" reference="PMWorks/Department">
                    <TextField source="DepartmentName" />
                </ReferenceField>
            </Datagrid>
            </List>
        </ResourceContextProvider>
        );
    };

    const handleInputValue = (date) => {
        setTaskDate(date.format('YYYY-MM-DD'))
    };

    const Separator = () => <Box pt="0em" />;

    const useStyles = makeStyles({
        fir: { display: 'inline-grid' },
        sec: { display: 'inline-grid', marginRight: 0 },
    });

    const classes = useStyles();

    return (
        <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={true}
        maxWidth={"md"}
        >
                <SimpleForm toolbar={false}>
                    <DateInput formClassName={classes.fir} onChangeValue={handleInputValue} options={{ id: "DateInputEl001" }} isRequired={true} label={"تاریخ"} source={"WRDate"} />
                    <NumberInput formClassName={classes.sec} isRequired={true} label={"زمان (دقیقه)"} source={"SparePartAmount"} value={taskTime} onChange={(e) => setTaskTime(e.target.value)} />
                </SimpleForm>
                <Separator />
                <Divider />
                <PersonnalList />
        </Dialog>
    );
}