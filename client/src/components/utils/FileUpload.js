import React, {useState} from "react";
import Dropzone from "react-dropzone";
import {Icon} from "antd";
import axios from 'axios';


function FileUpload(props) {
    const [images, setImages] = useState([]);


    const onDrop = (files) => {
        let formData = new FormData();
        const config = {
            header: {'content-type': 'multipart/form-data'}
        }
        formData.append("file", files[0]);
        axios.post('/api/product/uploadImage', formData, config)
            .then(response => {
                if(response.data.success){
                    setImages([...images, response.data.image]);
                    props.refreshFunction([...images, response.data.image]);
                } else {
                    alert('Failed to save the Image in Server')
                }
            })
    }

    return (
        <div>
            <Dropzone onDrop={onDrop} multiple={false} maxSize={800000000}>
                {({getRootProps, getInputProps}) => (
                    <div  {...getRootProps()} style={{width: '300px', height: '240px', border: '1px solid lightgray', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>

                        <input {...getInputProps()}/>
                        <Icon type="plus" style={{fontSize: '3rem'}} />
                    </div>
                )}
            </Dropzone>
                <div style={{display: 'flex', width:'350px', height: '240px', overflowX: 'scroll'}}>
                    <div onClick>
                    <img src="" alt=""/>
                    </div>
                </div>

        </div>
    )
}

export default FileUpload