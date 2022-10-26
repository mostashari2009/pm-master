import * as React from "react";


const AssetSubdivisionTitle = ({ record }) => {
    return <span> {record ? `"${record.AssetName}"` : ''}</span>;
};

export default AssetSubdivisionTitle;
