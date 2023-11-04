import { FilesService } from '@/services/files/files.service';
import { PostService } from '@/services/post/post.service';

const Embed = require('@editorjs/embed');
const Table = require('@editorjs/table');
const List = require('@editorjs/list');
const Warning = require('@editorjs/warning');
const LinkTool = require('@editorjs/link');
const Image = require('@editorjs/image');
const Raw = require('@editorjs/raw');
const Header = require('@editorjs/header');
const Quote = require('@editorjs/quote');
const Marker = require('@editorjs/marker');
const CheckList = require('@editorjs/checklist');
const Delimiter = require('@editorjs/delimiter');
const SimpleImage = require('@editorjs/simple-image');
const InlineCode = require('@editorjs/inline-code');
const Code = require('@editorjs/code');

export const EDITOR_JS_TOOLS = {
  embed: Embed,
  table: Table,
  marker: Marker,
  list: List,
  warning: Warning,
  code: Code,
  linkTool: LinkTool,
  image: {
    class: Image,
    config: {
      uploader: {
        async uploadByFile(file: any) {
          return await FilesService.upload(file).then(
            (data) => {
              console.log(data);
              return {
                success: 1,
                file: {
                  url: data.data.file.url,
                },
              };
            },
          );
        },

        // uploadByUrl(url: string) {
        //   return FilesService.getUrl(url).then((data) => {
        //     return data.data;
        //   });
        // },
      },
    },
  },
  raw: Raw,
  header: Header,
  quote: Quote,
  checklist: CheckList,
  delimiter: Delimiter,
  inlineCode: InlineCode,
  simpleImage: SimpleImage,
};
