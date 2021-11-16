import React, { useEffect, useState } from 'react';
import DocPreview, {
  DocPreviewProps,
} from '../../Components/DocPreview/DocPreview';
import getDocuments from '../../utils/getDocuments';
import SearchInput from '../../Components/SearchBar/SearchBar';
import styles from './DocList.module.css';

function DocList(): JSX.Element {
  const [documents, setDocuments] = useState<DocPreviewProps[]>([]);
  const [search, setSearch] = useState('');

  const filteredDocuments = documents?.filter((document) =>
    document.title.toLowerCase().includes(search.toLowerCase())
  );

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
      <SearchInput onSearch={setSearch} />
      <section className={styles.content}>
        {!filteredDocuments && <span>Loading ...</span>}
        {filteredDocuments?.length === 0 && <span>No documents found</span>}
        <div className={styles.previewList}>
          {filteredDocuments?.map((document) => (
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
