import React, { useEffect, useState } from 'react';
import DocPreview, {
  DocPreviewProps,
} from '../../Components/DocPreview/DocPreview';
import styles from './DocList.module.css';

function DocList(): JSX.Element {
  const [documents, setDocuments] = useState<DocPreviewProps[]>([]);

  useEffect(() => {
    async function fetchDocuments() {
      const response = await fetch('https://json-server.machens.dev/docs');
      console.log(response);
      const newDocuments = await response.json();
      setDocuments(newDocuments);
    }

    fetchDocuments();
  }, []);

  return (
    <section className={styles.wrapper}>
      <h1 className={styles.pageTitle}>All Documents</h1>
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
  );
}

export default DocList;
