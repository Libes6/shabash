import EditorJS from '@editorjs/editorjs';
import { useEffect, useRef } from 'react';

import { EDITOR_JS_TOOLS } from '@/components/ui/editor/editorTools';
import { IEditorProps } from '@/components/ui/editor/interface/IEditor';

const DragDrop = require('editorjs-drag-drop');

interface useEditorProps {}
export const useEditor: (props: IEditorProps) => any = ({
  holder,
  data,
  onChange,
}) => {
  const ref = useRef<EditorJS>();

  useEffect(() => {
    if (window && !ref.current) {
      const editor = new EditorJS({
        holder: holder,
        placeholder: 'Напишите пост!',
        tools: EDITOR_JS_TOOLS,
        data,
        onReady: () => {
          new DragDrop(editor);
        },

        async onChange(api, event) {
          const data = await api.saver.save();
          onChange(data);
        },
      });
      ref.current = editor;

      return () => {
        if (ref.current && ref.current.destroy) {
          ref.current.destroy();
        }
      };
    }
  }, []);

  return { holder };
};
