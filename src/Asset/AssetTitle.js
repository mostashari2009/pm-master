import * as React from "react";


const AssetTitle = ({ record }) => {
    return <span> {record ? `"${record.AssetName}"` : ''}</span>;
};

export default AssetTitle;
