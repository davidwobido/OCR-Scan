import React, { ChangeEvent } from 'react';
import styles from './ImageInput.module.css';

// type of imageinput props is a string like the url
type ImageInputProps = {
  onUpload: (url: string) => void;
};

function ImageInput({ onUpload }: ImageInputProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) {
      return;
    }
    const file = event.target.files[0]; // File is chosen
    const newImageUrl = URL.createObjectURL(file); // Url created
    onUpload(newImageUrl); // url is in onUpload. as soon as it happens, scan.tsx knows
  };

  return (
    <label className={styles.wrapper}>
      <input
        type="file"
        accept="image/*"
        onChange={handleChange}
        className={styles.uploadImage}
      />{' '}
      <p>Upload an image</p>
    </label>
  );
}
export default ImageInput;
