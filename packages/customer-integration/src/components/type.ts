export enum componentEnum  {
    welcome='welcome',
    agents='agents', 
    bookAnAppointment='bookAnAppointment', 
    makeACall='makeACall'
  }
  
export type componentType = `${componentEnum}`; 

export type commonTypes = {
  selectedComponent:componentType
  setSeletedComponent: Function;
}