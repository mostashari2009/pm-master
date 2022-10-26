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

import SparePartCategoryRefrenceInput from '../SparePart/SparePartCategoryRefrenceInput';
import SparePartDimensionRefrenceInput from '../SparePart/SparePartDimensionRefrenceInput';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    but: { fontFamily: 'inherit',
           marginBottom: '16px'
    }
});

function QuickAddSparePartButton({ onChange }) {
    const [showDialog, setShowDialog] = useState(false);
    const [create, { loading }] = useCreate('PMWorks/SparePart');
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
                    form.change('SparePartID', data.id);
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
                aria-label="ایجاد قطعه"
            >
                <DialogTitle>ایجاد قطعه</DialogTitle>

                <FormWithRedirect
                    resource="PMWorks/SparePart"
                    save={handleSubmit}
                    render={({
                        handleSubmitWithRedirect,
                        pristine,
                        saving
                    }) => (
                        <>
                            <DialogContent>
                                <TextInput label="کد قطعه" textAlgin="right" source="SparePartCode" validate={required()} fullWidth/>
                                <TextInput label="نام قطعه" textAlgin="right" source="SparePartName" validate={required()} fullWidth/>
                                <SparePartCategoryRefrenceInput label="خانواده قطعه" textAlgin="right" source="SparePartCategoryID" reference="PMWorks/SparePartCategory" perPage={10000} validate={required()} fullWidth/>
                                <SparePartDimensionRefrenceInput label="سطح قطعه" textAlgin="right" source="SparePartDimensionID" reference="PMWorks/SparePartDimension" perPage={10000} validate={required()} fullWidth/>
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

export default QuickAddSparePartButton;
