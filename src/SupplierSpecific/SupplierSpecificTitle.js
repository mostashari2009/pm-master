import * as React from "react";


const SupplierSpecificTitle = ({ record }) => {
    return <span> {record ? `"${record.SupplierSpecificName}"` : ''}</span>;
};

export default SupplierSpecificTitle;
