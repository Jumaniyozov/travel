import React, {useState} from 'react';
import {Typography, Button, Form, message, Input, Icon, Select} from "antd";
import FileUpload from "../../utils/FileUpload.js";

const {Title} = Typography;
const {TextArea} = Input;
const {Option} = Select;

const Continents = [
    {key: 1, value: 'Africa'},
    {key: 2, value: 'North America'},
    {key: 3, value: 'South America'},
    {key: 4, value: 'Asia'},
    {key: 5, value: 'Europe'},
    {key: 6, value: 'Australia'},
]

function UploadProductPage() {
    const [titleValue, setTitleValue] = useState("");
    const [descriptionValue, setDescriptionValue] = useState("");
    const [priceValue, setPriceValue] = useState("");
    const [continentValue, setSelectValue] = useState(Continents[0].value);
    const [images, setImages] = useState([]);

    const onTitleChange = (event) => {
        setTitleValue(event.currentTarget.value);
    }

    const onDescriptionChange = (event) => {
        setDescriptionValue(event.currentTarget.value);
    }

    const onPriceChange = (event) => {
        setPriceValue(event.currentTarget.value);
    }

    const onSelectChange = (value) => {
        setSelectValue(value);
    }

    const updateImages = (newImages) => {
        setImages(newImages);
    }

    return (
        <div style={{maxWidth: '700px', margin: '2rem auto'}}>
            <div style={{textAlign: 'center', marginBottom: '2rem'}}>
                <Title level={2}>Upload Travel Product</Title>
            </div>
            <Form>

                <FileUpload refreshFunction={updateImages} />

                <br/>
                <br/>
                <label>Title</label>
                <Input onChange={onTitleChange} value={titleValue}/>
                <br/>
                <br/>
                <label>Description</label>
                <Input onChange={onDescriptionChange} value={descriptionValue}/>
                <br/>
                <br/>
                <label>Price($)</label>
                <TextArea value={priceValue} onChange={onPriceChange} type="number"/>
                <br/>
                <br/>
                <Select defaultValue={continentValue} onChange={onSelectChange}>
                    {Continents.map(item => (
                        <Option value={item.value}>{item.value}</Option>
                    ))}
                </Select>
                <br/>
                <br/>
                <Button>
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default UploadProductPage