import React, { ChangeEvent, useState } from 'react';
import styles from './ImageInput.module.css';

// Was passiert hier?
type ImageInputProps = {
  onUpload: (url: string) => void;
};

function ImageInput({ onUpload }: ImageInputProps) {
  // Was sind die ImageInputProps?
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) {
      return;
    }
    const file = event.target.files[0]; //datei wird ausgwählt
    const newImageUrl = URL.createObjectURL(file); //url wird erstellt
    setImageUrl(newImageUrl); // Url wird in usestate geschrieben
    onUpload(newImageUrl); // Url wird in onUpload geschrieben. sobald das passiert weiß die scan.tsx bescheid
  };

  return (
    <label className={styles.wrapper}>
      <img src="src/lib/Upload_icon.svg" />
      <input
        type="file"
        accept="image/*"
        onChange={handleChange}
        className={styles.uploadImage}
      />{' '}
      <p>Upload an image</p>
      {imageUrl && <img src={imageUrl} />}
    </label>
  );
}
export default ImageInput;
