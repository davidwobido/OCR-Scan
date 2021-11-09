import React, { useState } from 'react';
import ImageInput from '../../Components/ImageInput/ImageInput';
import styles from './Scan.module.css';

function Scan() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  return (
    <div className={styles.wrapper}>
      <ImageInput onUpload={setImageUrl} />
      {/* This will be a single component  */}
      <section className={styles.menubar}>
        <button disabled={imageUrl === null}>Scan</button>
        <a href="#" className={styles.button__inactive}>
          Docs
        </a>
      </section>
    </div>
  );
}
export default Scan;
