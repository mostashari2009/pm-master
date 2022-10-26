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
           marginBottom: '16px'
    }
});

const QuickPreviewSparePartButton = ({ id }) => {
    const [showPanel, setShowPanel] = useState(false);
    const classes = useStyles();
    const { data } = useGetOne('PMWorks/SparePart', id);
    console.log(data);
    

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
                    basePath="/PMWorks/SparePart"
                    resource="PMWorks/SparePart"
                >
                    <TextField source="id" />
                    <TextField label="کد قطعه" textAlgin="right" source="SparePartCode" className={classes.field}/>
                    <TextField label="نام قطعه" textAlgin="right" source="SparePartName" className={classes.field}/>
                    <ReferenceField label="خانواده قطعه" textAlgin="right" source="SparePartCategoryID" reference="PMWorks/SparePartCategory" className={classes.field}>
                        <TextField source="SparePartCategoryName" />
                    </ReferenceField>
                    <ReferenceField label="سطح قطعه" textAlgin="right" source="SparePartDimensionID" reference="PMWorks/SparePartDimension" className={classes.field}>
                        <TextField source="SparePartDimensionName" />
                    </ReferenceField>
                </SimpleShowLayout>
            </Drawer>
        </>
    );
};

export default QuickPreviewSparePartButton;
