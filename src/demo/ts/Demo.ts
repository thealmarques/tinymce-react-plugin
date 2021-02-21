import Plugin from '../../Plugin';

declare let tinymce: any;

Plugin();

tinymce.init({
  selector: 'textarea.tinymce',
  plugins: 'code script-dropdown',
  toolbar: 'script-dropdown'
});
