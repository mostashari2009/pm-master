import * as React from "react";


const WOTemplateSchualingTitle = ({ record }) => {
    return <span> {record ? `"${record.id}"` : ''}</span>;
};

export default WOTemplateSchualingTitle;
