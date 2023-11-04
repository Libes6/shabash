import { useTypedSelector } from '@/hooks/useTypedSelector';

export const useEditorAll = () =>
  useTypedSelector((state) => state.editor);
export const useEditorHeader = () =>
  useTypedSelector((state) => state.editor.header);
export const useEditorCover = () =>
  useTypedSelector((state) => state.editor.coverImageUrl);
export const useEditorData = () =>
  useTypedSelector((state) => state.editor.editorDate);
