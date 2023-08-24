import { useRef, useState } from 'react';
import styles from './Form.module.css';
import {storage} from '../database/firebase';
import { v4 } from 'uuid';
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage';

const Form = () => {
    const imageRef = useRef();
    const [name,setName] = useState("");
    const [productImage, setProductImage] = useState(null);
    const [id, setId] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [imageLink, setImageLink] = useState("");
    const [uploadDone, setUploadDone]= useState(false);
    let showSubmitButton = false;

    const nameChangeHandler = event => {
        setName(event.target.value);
    }

    const imageChangeHandler = event => {
         setProductImage(event.target.files[0]);
    }

    const descriptionChangeHandler = event => {
        setDescription(event.target.value);
    }

    const priceChangeHandler = event => {
        setPrice(event.target.value);
    }
    
    const idChangeHandler = event => {
        setId(event.target.value);
    }

    
    const uploadFile = async () => {
        const imageRef = await ref(storage,`images/${productImage.name + v4()}`);
        const upload = await uploadBytes(imageRef, productImage);
        console.log(upload)
        const downloadURL = await getDownloadURL(upload.ref);
        return downloadURL;
        

    }
    console.log(imageLink);

    const imageUploadHandler =async ()  => {
       const link = await uploadFile();
       setImageLink(link);
       setUploadDone(true);
      
    }
    if(name && id && description && price && imageLink){
        showSubmitButton = true;
    }

    const submitProduct = async () => {
        console.log(imageLink)
        const response = await fetch("https://reactshopone-default-rtdb.firebaseio.com/product.json",{
            method: 'POST',
            body: JSON.stringify({
                name,
                id,
                description,
                price,
                imageLink: imageLink,
            })
        })
        if(!response.ok){
            throw new Error('sending data failed');
        }
    }

    

    const submitFormHandler = async (event) => {
        event.preventDefault();
        console.log('submitformhandler rendered')
        try{
            await submitProduct();
            //set form default value after submission
        imageRef.current.value = '';
        setName('');
        setId('');
        setDescription('');
        setPrice('');
        setImageLink('');
        setProductImage(null);
        setUploadDone(false);

        } catch (err){
            console.log(err);
        }
        

        
        
    }

    return (
    
        <div className={styles.form} >
            
            <div>
                <div>
                    <label htmlFor='name'>Name</label>
                </div>
                <div>
                    <input id='name' type='text' value={name} onChange={nameChangeHandler}></input>
                </div>
            </div>
                
            
            <div>
                <div>
                    <label htmlFor='id'>ID</label>
                </div>
                <div>
                    <input id='id' type='text' value={id} onChange={idChangeHandler}></input>
                </div>
                
            </div>
            <div>
                <div>
                    <label htmlFor='description'>Description</label>
                </div>
                <div>
                    <textarea cols={50} rows={4} value={description} id='description' type='text' onChange={descriptionChangeHandler}></textarea>
                </div>
                
            </div>
            <div>
                <div>
                    <label htmlFor='price'>Price</label>
                </div>
                <div>
                    <input id='price' pattern="[0-9]*" type='number' value={price} onChange={priceChangeHandler}></input>
                </div>
                
            </div>
            <div className={styles.imageContainer}>
                <div>
                    <label htmlFor='productImage'>Image</label>
                </div>
                <div>
                    <input id='productImage' ref={imageRef} type='file' onChange={imageChangeHandler}></input>
                    
                </div>
                <div>
                <button onClick={imageUploadHandler}>upload Image</button>
                </div>
                {uploadDone && <p>Image upload Done</p>}
                
            </div>
            <div>
                <button type='submit' disabled={!showSubmitButton} onClick={submitFormHandler}>Submit</button>
            </div>
            
           
            
        </div>

        
        
    )
}

 export default Form;