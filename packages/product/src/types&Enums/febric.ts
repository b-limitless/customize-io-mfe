export enum addFebricSteps {
    one = "one",
    two="two",
    three="three", 
    four="four",
    five="five", 
    six="six", 
    seven="seven",
    eight="eight"
}

export type addFebricType = `${addFebricSteps}`;

export const addFebricStepsArray = Object.values(addFebricSteps);
