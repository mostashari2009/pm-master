import * as React from "react";


const AssetClassSubdivisionTitle = ({ record }) => {
    return <span> {record ? `"${record.AssetClassFatherID}"` : ''}ایجاد زیرکلاس برای </span>;
};

export default AssetClassSubdivisionTitle;
