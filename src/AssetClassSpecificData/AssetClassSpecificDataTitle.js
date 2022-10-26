import * as React from "react";


const AssetClassSpecificDataTitle = ({ record }) => {
    return <span> {record ? `"${record.AssetClassID}"` : ''}</span>;
};

export default AssetClassSpecificDataTitle;
