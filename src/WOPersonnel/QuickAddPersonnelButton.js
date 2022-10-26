import React, { useState } from 'react';
import { useForm } from 'react-final-form';
import {
    required,
    Button,
    SaveButton,
    TextInput,
    useCreate,
    useNotify,
    FormWithRedirect
} from 'react-admin';
import IconContentAdd from '@material-ui/icons/Add';
import IconCancel from '@material-ui/icons/Cancel';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

import DepartmentRefrenceInput from '../Personnel/DepartmentRefrenceInput';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    but: { fontFamily: 'inherit',
           marginBottom: '16px'
    }
});

function QuickAddPersonnelButton({ onChange }) {
    const [showDialog, setShowDialog] = useState(false);
    const [create, { loading }] = useCreate('PMWorks/Personnel');
    const notify = useNotify();
    const form = useForm();
    const classes = useStyles();

    const handleClick = () => {
        setShowDialog(true);
    };

    const handleCloseClick = () => {
        setShowDialog(false);
    };

    const handleSubmit = async values => {
        create(
            { payload: { data: values } },
            {
                onSuccess: ({ data }) => {
                    setShowDialog(false);
                    // Update the comment form to target the newly created post
                    // Updating the ReferenceInput value will force it to reload the available posts
                    form.change('PersonnelID', data.id);
                    onChange();
                },
                onFailure: ({ error }) => {
                    notify(error.message, 'error');
                }
            }
        );
    };

    return (
        <>
            <Button className={classes.but} onClick={handleClick} label="ra.action.create">
                <IconContentAdd />
            </Button>
            <Dialog
                fullWidth
                open={showDialog}
                onClose={handleCloseClick}
                aria-label="ایجاد پرسنل"
            >
                <DialogTitle>ایجاد پرسنل</DialogTitle>

                <FormWithRedirect
                    resource="PMWorks/Personnel"
                    save={handleSubmit}
                    render={({
                        handleSubmitWithRedirect,
                        pristine,
                        saving
                    }) => (
                        <>
                            <DialogContent>
                                <TextInput label="کد پرسنل" textAlgin="right" source="PersonnelCode" validate={required()} fullWidth/>
                                <TextInput label="کد نت پرسنل" textAlgin="right" source="PersonnelNetCode" validate={required()} fullWidth/>
                                <TextInput label="نام پرسنل" textAlgin="right" source="PersonnelName" validate={required()} fullWidth/>
                                <TextInput label="فامیل پرسنل" textAlgin="right" source="PersonnelFamily" validate={required()} fullWidth/>
                                <TextInput label="شماره پرسنل" textAlgin="right" source="PersonnelMobile" validate={required()} fullWidth/>
                                <DepartmentRefrenceInput label="دپارتمان" textAlgin="right" source="DepartmentID" reference="PMWorks/Department" perPage={10000} validate={required()} fullWidth/>
                            </DialogContent>
                            <DialogActions>
                                <Button
                                    label="ra.action.cancel"
                                    onClick={handleCloseClick}
                                    disabled={loading}
                                >
                                    <IconCancel />
                                </Button>
                                <SaveButton
                                    handleSubmitWithRedirect={
                                        handleSubmitWithRedirect
                                    }
                                    pristine={pristine}
                                    saving={saving}
                                    disabled={loading}
                                />
                            </DialogActions>
                        </>
                    )}
                />
            </Dialog>
        </>
    );
}

export default QuickAddPersonnelButton;
