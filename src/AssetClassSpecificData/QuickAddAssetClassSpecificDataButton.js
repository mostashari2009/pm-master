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
import CodeInput from '../Components/CodeInput';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    but: { fontFamily: 'inherit',
           marginBottom: '16px'
    }
});

function QuickAddAssetClassSpecificDataButton(props, { onChange }) {
    const [showDialog, setShowDialog] = useState(false);
    const [create, { loading }] = useCreate('PMWorks/SpecificData');
    const notify = useNotify();
    const form = useForm();
    const [Value, setValue] = useState('');
    const {source, ...rest} = props;
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
                    form.change('SpecificDataID', data.id);
                    onChange();
                },
                onFailure: ({ error }) => {
                    notify(error.message, 'error');
                }
            }
        );
    };
    const validateError = (values) => {
        const errors = {};
        if (!values.SpecificDataCode) {
            errors.SpecificDataCode = 'کد را وارد کنید';
        }
        if (!values.SpecificDataName) {
            errors.SpecificDataName = 'نام را وارد کنید';
        }
        return errors
    };
    return (
        <>
            <Button className={classes.but} onClick={handleClick} label="ra.action.create">
                <IconContentAdd />
            </Button>
            <Dialog
                fullWidth
                validate={validateError}
                open={showDialog}
                onClose={handleCloseClick}
                aria-label="ایجاد ویژگی"
            >
                <DialogTitle>ایجاد ویژگی</DialogTitle>

                <FormWithRedirect
                    resource="PMWorks/SpecificData"
                    save={handleSubmit}
                    validate={validateError}
                    render={({
                        handleSubmitWithRedirect,
                        pristine,
                        saving
                    }) => (                        
                        <>
                            <DialogContent>
                                <CodeInput value={Value}  onChange={event => { let val = event.target.value;
                                                        val = val.replace(/[^\x00-\x7F]/ig, "");
                                                        setValue(val)
                                                        }}
                                                        label="کد ویژگی"
                                                        source="SpecificDataCode"
                                                        validate={required('کد را وارد کنید')} {...rest}/>
                                <TextInput
                                    label="نام ویژگی"
                                    textAlgin="right"
                                    source="SpecificDataName"
                                    validate={required('نام را وارد کنید')}
                                />
                                <TextInput label="واحد اندازه گیری" textAlgin="right" source="Measurment"  validate={required()}/>
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
                                    validate={validateError}
                                />
                            </DialogActions>
                        </>
                    )}
                />
            </Dialog>
        </>
    );
}

export default QuickAddAssetClassSpecificDataButton;
