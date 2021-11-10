import React, { useState } from 'react';
import ImageInput from '../../Components/ImageInput/ImageInput';
import styles from './Scan.module.css';

function Scan() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  return (
    <div className={styles.wrapper}>
      <h1>OCR Scan</h1>
      <div className={styles.uploadwrapper}>
        {imageUrl ? (
          <img src={imageUrl} className={styles.image} />
        ) : (
          <img src="src/lib/Upload_icon.svg" />
        )}
        {/* Show the image as soon a new one is uploaded */}
        <ImageInput onUpload={setImageUrl} />
      </div>
      {/* This will be an extra component: */}
      <section className={styles.menubar}>
        <button disabled={imageUrl === null}>Scan</button>
        <button className={styles.button__inactive}>Docs</button>
      </section>
    </div>
  );
}
export default Scan;
