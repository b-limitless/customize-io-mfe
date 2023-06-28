import React, { useState } from "react";
import { DataTable, Chip } from "@pasal/cio-component-library";
import orderMockData from "../../../../mock/order.json";
import { OrderStatusEnum } from "../../../../enums&Types/order";
import { firstLetterUpperCase } from "@pasal/common-functions";
import styles from "./list.module.scss";
import OrderSideModel from "../../SideModel";

type Props = {}




export default function ListOrder({ }: Props) {

  const [showModel, setShowModel] = useState<boolean>(false);

  const tableHeader = ["orderId", "customerId", "orderData", "price", "orderStatus", "paymentStatus", "action"];

  orderMockData.map((item: any) => {
    if (item.orderStatus === OrderStatusEnum.canceled) {
      item.orderStatus = <Chip label={firstLetterUpperCase(item.orderStatus)} chipVariant="lightred" />
    }
    if (item.orderStatus === OrderStatusEnum.completed) {
      item.orderStatus = <Chip label={firstLetterUpperCase(item.orderStatus)} chipVariant="green" />
    }
    if (item.orderStatus === OrderStatusEnum.inProgress) {
      item.orderStatus = <Chip label={firstLetterUpperCase(item.orderStatus)} chipVariant="lightbrown" />
    }
    if (item.orderStatus === OrderStatusEnum.pending) {
      item.orderStatus = <Chip label={firstLetterUpperCase(item.orderStatus)} chipVariant="skyblue" />
    }
  });

  // Updating table data based on the factor that we need to show chip 
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
          tableData={orderMockData.slice(0, 20)}
          showFebricModels={false}
          detailsComponents={null}
          showDetailReactNode={"Edit"}
          tableTitle={"Order"}
          showToLeftButton={false}
          setShowSelectRowId={() => { }}
        />
      </div>

    </>


  )
}