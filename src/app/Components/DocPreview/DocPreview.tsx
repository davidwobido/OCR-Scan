import React from 'react';
import styles from './DocPreview.module.css';

type DocPreviewProps = {
  title: string;
  text: string;
};

function DocPreview({ title, text }: DocPreviewProps): JSX.Element {
  return (
    <article className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{text}</p>
    </article>
  );
}

export default DocPreview;
