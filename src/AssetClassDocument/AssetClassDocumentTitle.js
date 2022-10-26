import * as React from "react";


const AssetClassDocumentTitle = ({ record }) => {
    return <span> {record ? `"${record.AssetClassID}"` : ''}</span>;
};

export default AssetClassDocumentTitle;
