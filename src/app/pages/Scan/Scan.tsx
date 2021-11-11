import React, { useState } from 'react';
import ImageInput from '../../Components/ImageInput/ImageInput';
import styles from './Scan.module.css';
import { RecognizeProgress, recognizeText } from '../../utils/ocr';
import Progress from '../../Components/Progress/Progress';
import AddDocumentForm from '../../Components/AddDocumentForm/AddDocumentForm';

function Scan() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [recognizedText, setRecognizedText] = useState<string | null>(null);
  const [recognizeProgress, setRecognizeProgress] =
    useState<RecognizeProgress | null>(null);

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
            <ImageInput onUpload={setImageUrl} />
          )}
        </div>
      )}
      {recognizeProgress && (
        <Progress
          progress={recognizeProgress.progress * 100}
          status={recognizeProgress.status}
        />
      )}
      {recognizedText && <AddDocumentForm text={recognizedText} />}

      <button
        className={styles.button__scan}
        disabled={imageUrl === null}
        onClick={() => {
          if (imageUrl) {
            recognizeText(imageUrl, setRecognizeProgress).then(
              setRecognizedText
            );
          }
        }}
      >
        Scan
      </button>

      <section className={styles.menubar}>
        <button className={styles.button__inactive}>OCR</button>
        <button className={styles.button__inactive}>Docs</button>
      </section>
    </div>
  );
}
export default Scan;

// If imageUrl
//       show button
//       else if
//       recognizedProgress
//       show progress + status
//       else if
//       recognizedText
//       show AddDocumentForm
