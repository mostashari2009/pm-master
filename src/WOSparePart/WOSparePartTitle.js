import * as React from "react";


const WOSparePartTitle = ({ record }) => {
    return <span> {record ? `"${record.SparePartID}"` : ''}</span>;
};

export default WOSparePartTitle;
