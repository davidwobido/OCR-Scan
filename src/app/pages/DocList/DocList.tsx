import React, { useEffect, useState } from 'react';
import DocPreview, {
  DocPreviewProps,
} from '../../Components/DocPreview/DocPreview';
import styles from './DocList.module.css';
import getDocuments from '../../utils/getDocuments';

function DocList(): JSX.Element {
  const [documents, setDocuments] = useState<DocPreviewProps[]>([]);

  useEffect(() => {
    async function load() {
      const newDocuments = await getDocuments();
      setDocuments(newDocuments);
    }
    load();
  }, []);

  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}>All Documents</h1>
      <section className={styles.searchBar}>search</section>
      <section className={styles.content}>
        {documents === null && <span>Loading …</span>}
        {!documents && <span>No documents</span>}
        <div className={styles.previewList}>
          {documents.map((document) => (
            <DocPreview
              key={document.id}
              title={document.title}
              text={document.text}
            />
          ))}
        </div>
      </section>
      <section className={styles.menubar}>
        <button className={styles.button__inactive}>Home</button>
        <button className={styles.button__inactive}>Docs</button>
      </section>
    </section>
  );
}

export default DocList;
