import * as React from "react";


const LocationTitle = ({ record }) => {
    return <span> {record ? `"${record.LocationName}"` : ''}</span>;
};

export default LocationTitle;
