import React, { useState } from 'react';
import { useForm } from 'react-final-form';
import {
    required,
    Button,
    SaveButton,
    TextInput,
    useCreate,
    useNotify,
    FormWithRedirect,    
} from 'react-admin';
import IconContentAdd from '@material-ui/icons/Add';
import IconCancel from '@material-ui/icons/Cancel';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

import AssetPriorityRefrenceInput from '../Asset/AssetPriorityRefrenceInput';
import LocationRefrenceInput from '../Asset/LocationRefrenceInput';
import AssetClassRefrenceInput from '../Asset/AssetClassRefrenceInput';
import {JalaliInput} from 'ra-hichestan-datetime';

function QuickAddAssetButton({ onChange }) {
    const [showDialog, setShowDialog] = useState(false);
    const [create, { loading }] = useCreate('PMWorks/Asset');
    const notify = useNotify();
    const form = useForm();

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
                    form.change('AssetID', data.id);
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
            <Button onClick={handleClick} label="ra.action.create">
                <IconContentAdd />
            </Button>
            <Dialog
                fullWidth
                open={showDialog}
                onClose={handleCloseClick}
                aria-label="ایجاد تجهیز"
            >
                <DialogTitle>ایجاد تجهیز</DialogTitle>

                <FormWithRedirect
                    resource="PMWorks/Asset"
                    save={handleSubmit}
                    render={({
                        handleSubmitWithRedirect,
                        pristine,
                        saving
                    }) => (
                        <>
                            <DialogContent>
                                <TextInput label="کد تجهیز" textAlgin="right" source="AssetCode" />
                                <TextInput label="نام تجهیز" textAlgin="right" source="AssetName" />
                                <JalaliInput label="تاریخ نصب" source="InstallationDate" />
                                <AssetPriorityRefrenceInput label="اولویت" textAlgin="right" source="AssetPriorityID" reference="PMWorks/AssetPriority" allowEmpty validate={required()} perPage={10000} />
                                <LocationRefrenceInput label="مکان" textAlgin="right" source="LocationID" reference="PMWorks/Location" allowEmpty validate={required()} perPage={10000} />
                                <AssetClassRefrenceInput label="کلاس تجهیز" textAlgin="right" source="AssetClassID" reference="PMWorks/AssetClass" allowEmpty validate={required()} perPage={10000} />
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

export default QuickAddAssetButton;
