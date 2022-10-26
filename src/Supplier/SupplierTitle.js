import * as React from "react";


const SupplierTitle = ({ record }) => {
    return <span> {record ? `"${record.SupplierName}"` : ''}</span>;
};

export default SupplierTitle;
