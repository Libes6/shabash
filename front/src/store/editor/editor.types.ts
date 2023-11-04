import { OutputData } from '@editorjs/editorjs';

export enum EDITOR_STATUS {
  EDIT = 'edit',
  NEW = 'new',
  VIEWING = 'viewing',
}
export interface IEditorInitial {
  header: string;
  status: EDITOR_STATUS;
  editorDate: OutputData;
  coverImageUrl: string;
}
