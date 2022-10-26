import * as React from "react";


const SupplierSpecificDataTitle = ({ record }) => {
    return <span> {record ? `"${record.SupplierID}"` : ''}</span>;
};

export default SupplierSpecificDataTitle;
