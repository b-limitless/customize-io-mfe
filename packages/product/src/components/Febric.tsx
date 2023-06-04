import React from 'react';
import  {mockFebrics} from '../mock-data/febric';
import { Button } from "components/ComponentsApp";
const styles:any = {};

// type Props = {}
//{}: Props
// We can show the table list of febric with some most important details 
// When they click to we can show exactly the way we are showing to from side
// Show the product details popup with the image with popup
// Before you start working with edit you need  to work with add febric

// Some basic details which you can show in the table is
// 5 items you need check choose title, category, price , material, season
export default function Febric() {
  // Loading the febrics for the  users
  return (
    
    <div className="styles febric__container">
      <div className="styles row">
        <div className="styles title">Product Febric - List</div>
        <div className="styles add__new">
          <Button variant="primary" text="Add Febric"/>
        </div>
      </div>
      <div className="styles row">
        <div className="styles filters__container">
          Will add many filters
        </div>
        <div className="styles table__container">
        Table
        </div>
      </div>
    </div>
  )
}