import debounce from 'lodash.debounce';
import React, {
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import { useActions } from '@/hooks/useActions';
import { useEditorAll } from '@/hooks/useEditor';

export const useTextTitleField = () => {
  const textAreaRef = useRef<HTMLTextAreaElement | null>(
    null,
  );
  const { header } = useEditorAll();
  const [headerText, setHeaderText] = useState(header);

  const { setHeader } = useActions();

  const textAreaResizeHeight = () => {
    if (textAreaRef.current !== null) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height =
        textAreaRef.current.scrollHeight +
        textAreaRef.current?.style.lineHeight +
        'px';
    }
  };

  useLayoutEffect(() => {
    textAreaResizeHeight();
  }, []);
  const onResize = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      textAreaResizeHeight();
    },
    [],
  );

  const onChangeText = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    onResize(event);
    setHeaderText(event.target.value);
    onChangeDebounce(event);
  };
  const onChangeDebounce = React.useCallback(
    debounce(
      (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        onResize(event);
        setHeader(event.target.value);
      },
      160,
    ),
    [],
  );

  return { textAreaRef, headerText, onChangeText };
};
