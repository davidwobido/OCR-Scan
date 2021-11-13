import React from 'react';
import styles from './DocPreview.module.css';

export type DocPreviewProps = {
  id?: number;
  title: string;
  text: string;
};

function DocPreview({ id, title, text }: DocPreviewProps): JSX.Element {
  return (
    <article className={styles.wrapper}>
      <h2 className={styles.title}>
        {id} {title}
      </h2>
      <p className={styles.text}>{text}</p>
    </article>
  );
}

export default DocPreview;
