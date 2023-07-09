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
  {
    label: "Payment Status",
    data: paymentStatus,
    id: "paymentStatus"
  },
];
const count = 8;
export default function ListOrder({ }: Props) {

  const [showModel, setShowModel] = useState<boolean>(false);
  const [filters, setFilters] = React.useState<any>({ orderStatus: [], paymentStatus: [] });
  const [page, setPage] = useState<number>(1);
 
  const tableHeader = ["orderId", "customerId", "orderData", "price", "orderStatus", "paymentStatus", "action"];

  normalizeDataForVisual(orderMockData, "orderStatus", colorsForTableFields);
  normalizeDataForVisual(orderMockData, "paymentStatus", colorsForPaymentStatus);

 
  useEffect(() => {

    // You can implement filter approache in one of many way
    // data structure for the filter would for for this instance is { orderStatus: [], paymentStatus: [] }
    // Just monitor in filters status is changing or not 
    // Check each value it should not be difficult to implement after ward
    // Close this and moving toward another part
  }, [])

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
          tableData={orderMockData.slice(0, 8)}
          showFebricModels={false}
          detailsComponents={null}
          showDetailReactNode={"Edit"}
          tableTitle={"Order"}
          showToLeftButton={null}
          setShowSelectRowId={() => { }}
          filterData={filterData}
          filters={filters} 
          setFilters={setFilters}
          paginate={true}
          page={page}
          setPage={setPage}
          count={count}
          loading={false}
        />
      </div>

    </>


  )
}