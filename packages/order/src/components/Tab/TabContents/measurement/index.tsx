import React from "react";
import styles from "./measurement.module.scss"

type Props = {}

const measurementDataStructure = [
  {"title": "neck", "value": 15.5},
  {"title": "chest", "value": 40.0},
  {"title": "waist", "value": 34.5},
  {"title": "hips", "value": 40.5},
  {"title": "shoulder", "value": 18.0},
  {"title": "sleeve", "value": 34.0},
  {"title": "shirt", "value": 29.5},
  {"title": "inseam", "value": 32.0}
]

export default function Measurement({}: Props) {
  return (
    <div className={styles.container}>
      {measurementDataStructure.map((measurement, i) => <div key={`measurement-${i}`} className={styles.item}>
        <div className={styles.title}>{measurement.title} </div>
        <div className={styles.value}>{measurement.value}</div>
      </div>)}
      
      {/* <div className={styles.item}>
        <div className={styles.title}>HEllo </div>
        <div className={styles.value}>Word</div>
      </div> */}
    </div>
  )
}