import * as React from "react";


const AssetPriorityTitle = ({ record }) => {
    return <span> {record ? `"${record.AssetPriorityName}"` : ''}</span>;
};

export default AssetPriorityTitle;
