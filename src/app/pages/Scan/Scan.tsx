import React, { useState } from 'react';
import ImageInput from '../../Components/ImageInput/ImageInput';
import styles from './Scan.module.css';
import Progress from '../../Components/Progress/Progress';
import AddDocumentForm from '../../Components/AddDocumentForm/AddDocumentForm';
import useRecognizeText from '../../utils/useRecognizeText';

function Scan() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const { text, progress, recognize } = useRecognizeText();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>OCR Scan</h1>
      {text ? (
        <p>{text}</p>
      ) : (
        <div className={styles.uploadwrapper}>
          {imageUrl ? (
            <img src={imageUrl} className={styles.image} />
          ) : (
            <ImageInput onUpload={setImageUrl} />
          )}
        </div>
      )}

      {!text && progress && (
        <Progress progress={progress.progress * 100} status={progress.status} />
      )}

      {text && <AddDocumentForm text={text} />}

      {!progress && (
        <button
          className={styles.button__scan}
          disabled={imageUrl === null}
          onClick={() => {
            if (imageUrl) {
              recognize(imageUrl);
            }
          }}
        >
          Scan
        </button>
      )}

      <section className={styles.menubar}>
        <button className={styles.button__inactive}>Home</button>
        <button className={styles.button__inactive}>Docs</button>
      </section>
    </div>
  );
}
export default Scan;
