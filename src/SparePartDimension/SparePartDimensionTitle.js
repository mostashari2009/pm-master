import * as React from "react";


const SparePartDimensionTitle = ({ record }) => {
    return <span> {record ? `"${record.SparePartDimensionName}"` : ''}</span>;
};

export default SparePartDimensionTitle;
