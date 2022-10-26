import * as React from "react";


const WOTemplateTypeTitle = ({ record }) => {
    return <span> {record ? `"${record.WOTemplateTypeName}"` : ''}</span>;
};

export default WOTemplateTypeTitle;
