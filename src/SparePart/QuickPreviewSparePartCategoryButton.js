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

const QuickPreviewSparePartCategoryButton = ({ id }) => {
    const [showPanel, setShowPanel] = useState(false);
    const classes = useStyles();
    const { data } = useGetOne('PMWorks/SparePartCategory', id);

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
                    basePath="/PMWorks/SparePartCategory"
                    resource="PMWorks/SparePartCategory"
                >
                    <TextField source="id" />
                    <TextField label="کد خانواده قطعه" textAlgin="right" source="SparePartCategoryCode" />
                    <TextField label="نام خانواده قطعه" textAlgin="right" source="SparePartCategoryName" />
                    <ReferenceField label="خانواده پدر" textAlgin="right" source="SparePartCategoryFather" reference="PMWorks/SparePartCategory">
                        <TextField source="SparePartCategoryName" />
                    </ReferenceField>
                </SimpleShowLayout>
            </Drawer>
        </>
    );
};

export default QuickPreviewSparePartCategoryButton;
