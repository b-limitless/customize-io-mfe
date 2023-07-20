export function getPrevousComponent(componentEnum: any, selectedComponent: any) {
  const getTheIndexOfSelectedComponent =
    Object.keys(componentEnum).indexOf(selectedComponent);

  return getTheIndexOfSelectedComponent
    ? Object.keys(componentEnum)[getTheIndexOfSelectedComponent - 1]
    : null;
}
