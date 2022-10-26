import * as React from "react";


const SparePartTitle = ({ record }) => {
    return <span> {record ? `"${record.SparePartName}"` : ''}</span>;
};

export default SparePartTitle;
