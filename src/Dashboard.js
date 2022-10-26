import * as React  from "react";
//import { useMemo, CSSProperties } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title ,useGetList  } from 'react-admin';
import WorkOrderCount from "./dashboardComponent/WorkOrderCount";

export default () => (
    <Card>
        <Title title="داشبورد نرم‌افزار نگهداری و تعمیرات آویژه" />
        <WorkOrderCount />
    </Card>
)
