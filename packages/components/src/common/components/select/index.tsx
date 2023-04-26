import React from 'react';
import {Button } from '@mui/material';

interface SelectInterface {
  test: string;
}

export default function Select({ test }: SelectInterface) {
  return (
    <>
      {/* <Button>{test} - Hello World</Button> */}
      <Button>Hello World buttondf</Button>
    </>

  )
}