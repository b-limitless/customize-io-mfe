import React from 'react';
import { mockFebrics } from '../../mock-data/febric';
import { Button, BasicTable } from "components/ComponentsApp";
import styles from "./febric-style.module.scss";
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
  const customStyle = {
    cursor: 'pointer'
  }

  const tableHeader = ['title', 'type', 'price', 'material', 'season', 'action'];

  const showFebricDetailsHandler = (i:number) => {
    console.log(`$show the detail for the febric index ${i}`)
  }
  let tableData:any = [{
    title: "Hello World",
    price: 123,
    delivery_time: "days in time",
    image_link: "Url of the image",
    excellence: "in 5 rating star",
    warmth: "5 rating start",
    weight: "300 gr/m^2",
    yarn: "",
    composition: " - 78% Terylene & 18% Rayon & 4% Spandex",
    season: "Year round",
    thread_style: "Twill",
    brightness: "",
    super_shiny: 0,
    material: "Cotton",
    tone: " - Navy Blue",
    thread_count: "",
    opacity: "",
    waterproof: true,
    stretchy_text: "Stretchy",
    stretchy: "",
    mis: ["new", "eco", "easy iron", "none iron"],
    type: ["shirt", "pants", "suits"],
    

  },
  {
    title: "Hello World",
    price: 123,
    delivery_time: "days in time",
    image_link: "Url of the image",
    excellence: "in 5 rating star",
    warmth: "5 rating start",
    weight: "300 gr/m^2",
    yarn: "",
    composition: " - 78% Terylene & 18% Rayon & 4% Spandex",
    season: "Year round",
    thread_style: "Twill",
    brightness: "",
    super_shiny: 0,
    material: "Cotton",
    tone: " - Navy Blue",
    thread_count: "",
    opacity: "",
    waterproof: true,
    stretchy_text: "Stretchy",
    stretchy: "",
    mis: ["new", "eco", "easy iron", "none iron"],
    type: ["shirt", "pants", "suits"],

    
  },
  {
    title: "Hello World",
    price: 123,
    delivery_time: "days in time",
    image_link: "Url of the image",
    excellence: "in 5 rating star",
    warmth: "5 rating start",
    weight: "300 gr/m^2",
    yarn: "",
    composition: " - 78% Terylene & 18% Rayon & 4% Spandex",
    season: "Year round",
    thread_style: "Twill",
    brightness: "",
    super_shiny: 0,
    material: "Cotton",
    tone: " - Navy Blue",
    thread_count: "",
    opacity: "",
    waterproof: true,
    stretchy_text: "Stretchy",
    stretchy: "",
    mis: ["new", "eco", "easy iron", "none iron"],
    type: ["shirt", "pants", "suits"],

    
  },
  {
    title: "Hello World",
    price: 123,
    delivery_time: "days in time",
    image_link: "Url of the image",
    excellence: "in 5 rating star",
    warmth: "5 rating start",
    weight: "300 gr/m^2",
    yarn: "",
    composition: " - 78% Terylene & 18% Rayon & 4% Spandex",
    season: "Year round",
    thread_style: "Twill",
    brightness: "",
    super_shiny: 0,
    material: "Cotton",
    tone: " - Navy Blue",
    thread_count: "",
    opacity: "",
    waterproof: true,
    stretchy_text: "Stretchy",
    stretchy: "",
    mis: ["new", "eco", "easy iron", "none iron"],
    type: ["shirt", "pants", "suits"],

    
  }
  ]

  tableData = tableData.map((row:any, i:number) => {
    row.action = <><a style={customStyle} onClick={() => showFebricDetailsHandler(i)}>Details</a>{' '}<a>Edit</a></>;
    return row;
  });

  return (
    <div className={styles.febric__container}>
      <div className={styles.row}>
        <div className={styles.title}>Product Febric - List</div>
        <div className={styles.add__new}>
          <Button variant="primary" text="Add Febric" />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.table__container}>
          <div className={styles.filters}>
            <div>Filter Will be shown</div>
          </div>
          <div className={styles.table}>
              <BasicTable tableHeader={tableHeader} tableData={tableData} tableRow={tableData[0]} />
          </div>
          <div className={styles.pagination}>
            <div>Pagination</div>
          </div>
        </div>
      </div>
    </div>
  )
}