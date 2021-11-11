import React, { FormEvent, useState } from 'react';
import usePostDocument from '../../utils/usePostDocument';

import styles from './AddDocumentForm.module.css';

type AddDocumentFormProps = {
  text: string;
};

function AddDocumentForm({ text }: AddDocumentFormProps): JSX.Element {
  const [title, setTitle] = useState('');
  const { isLoading, postDocument } = usePostDocument();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const document = {
      title,
      text,
    };
    await postDocument(document);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div>
        <input
          className={styles.form__text}
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="submit"
          className={styles.form__submit}
          disabled={!title || isLoading}
        />
      </div>
    </form>
  );
}

export default AddDocumentForm;
