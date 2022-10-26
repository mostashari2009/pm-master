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
    FileInput,
    FileField
} from 'react-admin';
import IconContentAdd from '@material-ui/icons/Add';
import IconCancel from '@material-ui/icons/Cancel';
import RichTextInput from 'ra-input-rich-text';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

function QuickAddAssetClassDocumentButton({ onChange }) {
    const [showDialog, setShowDialog] = useState(false);
    const [create, { loading }] = useCreate('PMWorks/Document');
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
                    form.change('DocumentID', data.id);
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
                aria-label="ایجاد سند"
            >
                <DialogTitle>ایجاد سند</DialogTitle>

                <FormWithRedirect
                    resource="PMWorks/Document"
                    save={handleSubmit}
                    render={({
                        handleSubmitWithRedirect,
                        pristine,
                        saving
                    }) => (
                        <>
                            <DialogContent>
                                
                                <TextInput label="کد سند" textAlgin="right" source="DocumentCode" validate={required()} fullWidth />
                                <TextInput label="نام سند" textAlgin="right" source="DocumentName" validate={required()} fullWidth />
                                <RichTextInput label="توضیحات سند" textAlgin="right" source="DocumentDescription" toolbar={[ ['bold', 'italic', 'underline', 'link'] ]} validate={required()} fullWidth />
                                <FileInput source="FileAddress" label="فایل سند" accept=".pdf" placeholder={<p>فایل خود را در اینجا بکشید و رها کنید</p>} validate={required()} fullWidth >
                                    <FileField source="src" title="title" />
                                </FileInput>

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

export default QuickAddAssetClassDocumentButton;
