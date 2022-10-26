import * as React from "react";


const AssetSpecificDataTitle = ({ record }) => {
    return <span> {record ? `"${record.AssetSubdivisionID}"` : ''}</span>;
};

export default AssetSpecificDataTitle;
