import { useState } from 'react';

function usePostDocument() {
  const [isLoading, setIsLoading] = useState(false);

  const postDocument = async (document: { title: string; text: string }) => {
    setIsLoading(true);
    await fetch('https://json-server.machens.dev/docs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(document),
    });
    setIsLoading(false);
  };

  return { isLoading, postDocument };
}

export default usePostDocument;
