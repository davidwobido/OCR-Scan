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
    </section>
  );
}

export default DocList;
