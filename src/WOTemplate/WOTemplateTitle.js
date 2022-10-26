import * as React from "react";


const WOTemplateTitle = ({ record }) => {
    return <span> {record ? `"${record.WOTemplateName}"` : ''}</span>;
};

export default WOTemplateTitle;
