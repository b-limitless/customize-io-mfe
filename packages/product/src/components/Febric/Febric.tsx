import React, {useState} from 'react';
import { mockFebrics } from '../../mock-data/febric';
import { Button, BasicTable } from "components/ComponentsApp";
import styles from "./febric-style.module.scss";
import FebricDetails from './FebricDetails';
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
  const [showFebricDetailsModel, setShowFebricDetailsModel] = useState<number>(-1);

  const showModelHandler = (i:number) => {
    setShowFebricDetailsModel(i);
  }

  tableData = tableData.map((row:any, i:number) => {
    row.action = <><a style={customStyle} onClick={() => showModelHandler(i)}>Details</a>{' '}<a>Edit</a></>;
    return row;
  });

  
  

  return (
    <>
    {showFebricDetailsModel !== -1 && <FebricDetails setShowFebricDetailsModel = {setShowFebricDetailsModel} showFebricDetailsModel={showFebricDetailsModel}/>}
    
    <div className={styles.febric__wrapper}>
    <div className={styles.febric__container}>
      <div className={styles.row}>
        <div className={styles.title}>Product Febric - List</div>
        <div className={styles.add__new}>
          <a href="/product/febric/add"><Button variant="primary" text="Add Febric" /></a>
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
    </div>
    
    </>
    
  )
}