import { OutputData } from '@editorjs/editorjs';

export interface IEditorProps {
  data?: OutputData;
  onChange(val: OutputData): void;
  holder: string;
}
