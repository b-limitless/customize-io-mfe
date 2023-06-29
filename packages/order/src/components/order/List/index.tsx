import React, { useEffect, useRef, useState } from "react";
import { DataTable, Chip, camelCaseToNormal } from "@pasal/cio-component-library";
import orderMockData from "../../../../mock/order.json";
import { OrderStatus, OrderStatusEnum } from "../../../../enums&Types/order";

import styles from "./list.module.scss";
import OrderSideModel from "../../SideModel";
import { SelectChangeEvent } from "@mui/material";
import { paymentStatus } from "../../../../enums&Types/paymenStatus";
import {colorsForPaymentStatus, normalizeDataForVisual} from "./normolizeData";
import { colorsForTableFields } from "./normolizeData";
type Props = {}

const filterData = [
  {
    label: "Order Status",
    data:  OrderStatus.map(item => camelCaseToNormal(item, true)),
    id: "orderStatus"
  },
  // {
  //   label: "Payment Status",
  //   data: paymentStatus,
  //   id: "paymentStatus"
  // },
];
const count = 10;
export default function ListOrder({ }: Props) {

  const [showModel, setShowModel] = useState<boolean>(false);
  const [filters, setFilters] = React.useState<any>({ orderStatus: [], paymentStatus: [] });
  const [page, setPage] = useState<number>(1);
 
  const tableHeader = ["orderId", "customerId", "orderData", "price", "orderStatus", "paymentStatus", "action"];



  // orderMockData.map((item: any) => {

  //   if (item.orderStatus === OrderStatusEnum.canceled) {
  //     // item.orderStatusRaw = item.orderStatus;
  //     item.orderStatus = <Chip label={camelCaseToNormal(item.orderStatus, true)} chipVariant="lightred" />
  //   }
  //   if (item.orderStatus === OrderStatusEnum.completed) {
  //     // item.orderStatusRaw = item.orderStatus;
  //     item.orderStatus = <Chip label={camelCaseToNormal(item.orderStatus, true)} chipVariant="green" />
  //   }
  //   if (item.orderStatus === OrderStatusEnum.inProgress) {
  //     // item.orderStatusRaw = item.orderStatus;
  //     item.orderStatus = <Chip label={camelCaseToNormal(item.orderStatus, true)} chipVariant="lightbrown" />
  //   }
  //   if (item.orderStatus === OrderStatusEnum.pending) {
  //     // item.orderStatusRaw = item.orderStatus;
  //     item.orderStatus = <Chip label={camelCaseToNormal(item.orderStatus, true)} chipVariant="skyblue" />
  //   }
  //   if (item.orderStatus === OrderStatusEnum.onHold) {
  //     // item.orderStatusRaw = item.orderStatus;
  //     item.orderStatus = <Chip label={camelCaseToNormal(item.orderStatus, true)} chipVariant="skyblue" />
  //   }

  //   if (item.orderStatus === OrderStatusEnum.pendingVerification) {
  //     // item.orderStatusRaw = item.orderStatus;
  //     item.orderStatus = <Chip label={camelCaseToNormal(item.orderStatus, true)} chipVariant="green" />
  //   }

  //   //  For the payment status

  // })

  normalizeDataForVisual(orderMockData, "orderStatus", colorsForTableFields);
  normalizeDataForVisual(orderMockData, "paymentStatus", colorsForPaymentStatus);

 

  return (
    <>
      <OrderSideModel
        showModel={showModel}
        setShowModel={setShowModel}
      />
      <div className={styles.dataTableContainer}>
        <DataTable
          setShowModel={setShowModel}
          tableHeader={tableHeader}
          tableData={orderMockData.slice(page * count, count + (page * count))}
          showFebricModels={false}
          detailsComponents={null}
          showDetailReactNode={"Edit"}
          tableTitle={"Order"}
          showToLeftButton={false}
          setShowSelectRowId={() => { }}
          filterData={filterData}
          filters={filters} 
          setFilters={setFilters}
          paginate={true}
          page={page}
          setPage={setPage}
          count={count}
        />
      </div>

    </>


  )
}