import React, { useState } from 'react'
import {
    Button,
    Input,
    Select,
    Checkbox, 
    InputWithIcon, 
    InputAdornments, 
    MultipleSelectChip, 
    TextArea,
    BasicTable
} from './common/components';
import { SelectChangeEvent } from '@mui/material/Select';
import { BasicTableInterface } from './common/components/table';
import { CheckboxWithLabel } from './common/components/checkbox';
const style = {
    cursor: 'pointer'
}

const showFebricDetailsHandler = () => {

}

const tableData = [{
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
    action: <><a style={style} onClick={() => showFebricDetailsHandler()}>Details</a>{' '}<a>Edit</a></>

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

    action: <><a style={style} onClick={() => showFebricDetailsHandler()}>Details</a>{' '}<a>Edit</a></>
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

    action: <><a style={style} onClick={() => showFebricDetailsHandler()}>Details</a>{' '}<a>Edit</a></>
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

    action: <><a style={style} onClick={() => showFebricDetailsHandler()}>Details</a>{' '}<a>Edit</a></>
}
]

const  tableHeader = ['title', 'type', 'price', 'material', 'season', 'action'];




export default function App() {

    const options = [{
        name: "United Arab Emirates",
        code: "UAE"
    }];

    const names = [
        'Oliver Hansen',
        'Van Henry',
        'April Tucker',
        'Ralph Hubbard',
        'Omar Alexander',
        'Carlos Abbott',
        'Miriam Wagner',
        'Bradley Wilkerson',
        'Virginia Andrews',
        'Kelly Snyder',
    ];
    const [personName, setPersonName] = React.useState<string[]>([]);

    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const [aboutYou, setAboutYou] = useState<string>("");

    // Testing table
    
    
    
    

    return (
        <>
            {/* //variant='secondary' */}
            <Button variant="light" text="Restister" />
            <br />
            <br />
            <br />
            <Input
                label="Required"
                id="tex2434"
                defaultValue="Hello World"
                type="text"
                //  error={true}
                helperText="Incorrect entry."
            />
            <Select options={options}
                value={""}
                label={"hello world"}
                onChange={() => { }}
            />
            <Checkbox />
            <InputWithIcon>
                <span className="input-icon default-font">
                    Show
                </span>
            </InputWithIcon>
            <br />
            <br />
            <InputAdornments label="Confirm password" />
            <br />
            <br />
            <MultipleSelectChip options={names} handleChange={handleChange} label={"Langugaes"} id="languages" value={personName} />
            <TextArea setter={setAboutYou} getter={aboutYou} placeholder="About you" />
            
            <BasicTable showTableHead tableHeader={tableHeader}  tableData={tableData} tableRow={tableData[0]}/>
            <CheckboxWithLabel/>
        </>
    )
}
