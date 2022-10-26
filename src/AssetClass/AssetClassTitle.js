import * as React from "react";


const AssetClassTitle = ({ record }) => {
    return <span> {record ? `"${record.AssetClassName}"` : ''}</span>;
};

export default AssetClassTitle;
