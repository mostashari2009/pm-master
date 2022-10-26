import * as React from "react";


const WOSupplierTitle = ({ record }) => {
    return <span> {record ? `"${record.SupplierID}"` : ''}</span>;
};

export default WOSupplierTitle;
