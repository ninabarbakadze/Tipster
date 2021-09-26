import '../App.css';
import React, { useState, useRef } from 'react';
import { Button } from 'react-bootstrap';




export default function ImageUpload({ setFile }) {
  const [url, setUrl] = useState();
  const filePickerRef = useRef();


  function pickedHandler(event) {

    if (event.target.files && event.target.files.length === 1) {
      const pickedFile = event.target.files[0]
      const pickedFileUrl = URL.createObjectURL(pickedFile);
      setUrl(pickedFileUrl)
      setFile(pickedFile)
    }
  }

  function pickedImageHandler() {
    filePickerRef.current.click();
  }

  return (
    <div className="image-container">
      <input ref={filePickerRef} style={{ 'display': 'none' }} type='file' accept='.jpg, .png, .jpeg' onChange={pickedHandler} />
      <div className='image-upload'>
        <div className='image-upload-preview'>
          {url && <img src={url} alt="preview" />}
          {!url && (
            <div className='center'>
              <Button className='upload-button' type='button' onClick={pickedImageHandler}>+</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}