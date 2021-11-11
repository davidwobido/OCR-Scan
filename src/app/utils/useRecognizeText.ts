import { useState } from 'react';
import { RecognizeProgress, recognizeText } from './ocr';

function useRecognizeText() {
  const [text, setText] = useState<string | null>(null);
  const [progress, setProgress] = useState<RecognizeProgress | null>(null);

  const recognize = (imageUrl: string) => {
    recognizeText(imageUrl, setProgress).then(setText);
  };
  return { text, progress, recognize };
}
export default useRecognizeText;
