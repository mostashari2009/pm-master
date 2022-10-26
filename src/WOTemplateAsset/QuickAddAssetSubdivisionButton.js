import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';

import IconImageEye from '@material-ui/icons/RemoveRedEye';
import IconKeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { Button, SimpleShowLayout, TextField, useGetOne, ReferenceField } from 'react-admin';

const useStyles = makeStyles({
    field: {
        // These styles will ensure our drawer don't fully cover our
        // appliSubdivisionion when teaser or title are very long
        '& span': {
            display: 'inline-block',
            maxWidth: '20em'
        }
    },
    but: { fontFamily: 'inherit',
           marginBottom: '16px'
    }
});

const QuickPreviewAssetSubdivisionButton = ({ id }) => {
    const [showPanel, setShowPanel] = useState(false);
    const classes = useStyles();
    const { data } = useGetOne('PMWorks/AssetSubdivision', id);

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
                    basePath="/PMWorks/AssetSubdivision"
                    resource="PMWorks/AssetSubdivision"
                >
                    <TextField source="id" />
                    <TextField label="کد تجهیز" textAlgin="right" source="AssetCode"/>
                    <TextField label="نام تجهیز" textAlgin="right" source="AssetName"/>
                    <ReferenceField label="کلاس تجهیز" textAlgin="right" source="AssetChildID" reference="PMWorks/AssetClass">
                        <TextField source="AssetClassName" />
                    </ReferenceField>
                </SimpleShowLayout>
            </Drawer>
        </>
    );
};

export default QuickPreviewAssetSubdivisionButton;
