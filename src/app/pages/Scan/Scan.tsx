import React, { useState } from 'react';
import ImageInput from '../../Components/ImageInput/ImageInput';
import styles from './Scan.module.css';
import Tesseract from 'tesseract.js';

function Scan() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [recognizedText, setRecognizedText] = useState<string | null>(null);
  const [progress, setProgress] = useState<number | null>(null);
  const [status, setStatus] = useState<string | null>(null);

  return (
    <div className={styles.wrapper}>
      <h1>OCR Scan</h1>
      {recognizedText ? (
        <p>{recognizedText}</p>
      ) : (
        <div className={styles.uploadwrapper}>
          {imageUrl ? (
            <img src={imageUrl} className={styles.image} />
          ) : (
            <img src="src/lib/Upload_icon.svg" />
          )}{' '}
          <ImageInput onUpload={setImageUrl} />
        </div>
      )}
      <div className={styles.progress}>
        {progress ? <p>{progress * 100}%</p> : null}{' '}
        {status ? <p>: {status}</p> : null}
      </div>

      <section className={styles.menubar}>
        <button
          disabled={imageUrl === null}
          onClick={() => {
            if (imageUrl) {
              Tesseract.recognize(imageUrl, 'eng', {
                logger: (message) => {
                  console.log(message);
                  setStatus(message.status);
                  setProgress(message.progress);
                },
              }).then((result) => {
                const text = result.data.text;
                setRecognizedText(text);
              });
            }
          }}
        >
          Scan
        </button>
        <button className={styles.button__inactive}>Docs</button>
      </section>
    </div>
  );
}
export default Scan;
