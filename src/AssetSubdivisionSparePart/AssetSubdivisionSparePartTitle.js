import * as React from "react";


const AssetSubdivisionSparePartTitle = ({ record }) => {
    return <span> {record ? `"${record.AssetSubdivisionID}"` : ''}</span>;
};

export default AssetSubdivisionSparePartTitle;
