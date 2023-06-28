import React, { useState } from 'react';
import { SideModel } from '@pasal/cio-component-library';
import OrderTabs from '../Tab';

export interface OrderSideModel {
  showModel: boolean;
  setShowModel: Function;
}

export default function OrderSideModel({ showModel, setShowModel }: OrderSideModel) {

  return (
    <SideModel
      showModel={showModel}
      setShowModel={setShowModel}
    >
      <OrderTabs/>
    </SideModel>
  )
}