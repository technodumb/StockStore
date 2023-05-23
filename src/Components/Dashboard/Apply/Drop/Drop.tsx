import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import './Drop.scss'

import {AiOutlineUpload} from 'react-icons/ai'

export default function Drop() {
  const onDrop = useCallback((acceptedFiles:any) => {
        console.log(acceptedFiles)
        setFilename(
            acceptedFiles
            .map((file:any)=>file.path)
            .join(','))
  }, [])

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
  const [filename,setFilename]=useState('')
  return (
    <div className='Drop'       {...getRootProps()}>
      <input {...getInputProps()} />
      <AiOutlineUpload size={'10rem'}/>
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
    <br />
    {filename?<p>Uploaded:{filename}</p>:''}
    </div>

  )
}