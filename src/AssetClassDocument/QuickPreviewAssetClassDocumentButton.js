import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';

import IconImageEye from '@material-ui/icons/RemoveRedEye';
import IconKeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { Button, SimpleShowLayout, TextField, useGetOne, FileField, RichTextField } from 'react-admin';

const useStyles = makeStyles({
    field: {
        // These styles will ensure our drawer don't fully cover our
        // application when teaser or title are very long
        '& span': {
            display: 'inline-block',
            maxWidth: '20em'
        }
    }
});

const QuickPreviewAssetClassDocumentButton = ({ id }) => {
    const [showPanel, setShowPanel] = useState(false);
    const classes = useStyles();
    const { data } = useGetOne('PMWorks/Document', id);

    const handleClick = () => {
        setShowPanel(true);
    };

    const handleCloseClick = () => {
        setShowPanel(false);
    };

    return (
        <>
            <Button onClick={handleClick} label="ra.action.show">
                <IconImageEye />
            </Button>
            <Drawer anchor="right" open={showPanel} onClose={handleCloseClick}>
                <div>
                    <Button label="Close" onClick={handleCloseClick}>
                        <IconKeyboardArrowRight />
                    </Button>
                </div>
                <SimpleShowLayout
                    record={data}
                    basePath="/PMWorks/Document"
                    resource="PMWorks/Document"
                >
                    <TextField source="id" />
                    <TextField label="کد فایل" textAlgin="right" source="DocumentCode" className={classes.field}/>
                    <TextField label="نام فایل" textAlgin="right" source="DocumentName" className={classes.field}/>
                    <RichTextField label="توضیحات سند" textAlgin="right" source="DocumentDescription" className={classes.field}/>
                    <FileField source="FileAddress" src="url" title="desc" className={classes.field}/>
                </SimpleShowLayout>
            </Drawer>
        </>
    );
};

export default QuickPreviewAssetClassDocumentButton;
