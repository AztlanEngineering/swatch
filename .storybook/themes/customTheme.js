import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  colorPrimary: '#000000',
	colorSecondary: '#FF7F00',

  // UI
  appBg: '#FFFFFF',
  //appContentBg: 'silver',
  //appBorderColor: 'grey',
  appBorderRadius: 0,

  // Typography
  fontBase: '"Helvetica Neue", "Helvetica", "Arial", sans-serif',
	fontCode: 'monospace',

  // Text colors
  textColor: '#0c090a',
  //textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'silver',
	//barSelectedColor: 'crimson',
  //barBg: 'hotpink',

  // Form colors
	/*
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,
	*/


  brandTitle: 'Swatch SCSS',
  brandUrl: 'https://swatch.fwrlines.com',
  brandImage: 'https://demo.swatch.fwrlines.com/logo.png',
});
