import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';

import IconImageEye from '@material-ui/icons/RemoveRedEye';
import IconKeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { Button, SimpleShowLayout, TextField, useGetOne, ReferenceField } from 'react-admin';

const useStyles = makeStyles({
    field: {
        // These styles will ensure our drawer don't fully cover our
        // application when teaser or title are very long
        '& span': {
            display: 'inline-block',
            maxWidth: '20em'
        }
    },
    but: { fontFamily: 'inherit',
           marginBottom: '30px'
    }
});

const QuickPreviewLocationButton = ({ id }) => {
    const [showPanel, setShowPanel] = useState(false);
    const classes = useStyles();
    const { data } = useGetOne('PMWorks/Location', id);

    const handleClick = () => {
        setShowPanel(true);
    };

    const handleCloseClick = () => {
        setShowPanel(false);
    };

    return (
        <>
            <Button className={classes.but} onClick={handleClick} label="ra.action.show">
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
                    basePath="/PMWorks/Location"
                    resource="PMWorks/Location"
                >
                    <TextField source="id" />
                    <TextField label="کد مکان" textAlgin="right" source="LocationCode" className={classes.field}/>
                    <TextField label="نام مکان" textAlgin="right" source="LocationName" className={classes.field}/>
                    <ReferenceField label="مکان پدر" textAlgin="right" source="LocationFatherID" reference="PMWorks/Location" className={classes.field}>
                        <TextField source="LocationName" />
                    </ReferenceField>
                </SimpleShowLayout>
            </Drawer>
        </>
    );
};

export default QuickPreviewLocationButton;
