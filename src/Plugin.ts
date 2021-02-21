import { Editor, TinyMCE } from 'tinymce';
import { setupReactApp } from './application/App';

declare const tinymce: TinyMCE;

const setup = (editor: Editor) => {
  editor.on('load', () => {
    const menu = document.querySelector('.tox-menubar');
    setupReactApp(menu);
  });
};

export default () => {
  tinymce.PluginManager.add('script-dropdown', setup);
};
