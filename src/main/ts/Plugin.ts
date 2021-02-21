import { Editor, TinyMCE } from 'tinymce';
import { Dropdown } from './core/components/dropdown';

declare const tinymce: TinyMCE;

const setup = (editor: Editor) => {
  editor.on('load', () => {
    const menu = document.querySelector('.tox-menubar');
    Dropdown(menu);
  });
};

export default () => {
  tinymce.PluginManager.add('script-dropdown', setup);
};
