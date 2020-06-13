module.exports = {
  plugins: {
    'css-mqpacker':{},
    'postcss-preset-env':
		{
		  stage: 3,
		  features: {
		    'custom-properties': false
		  }
		},
    'cssnano': {
      'preset':[
        'default',
        { "discardComments": { "removeAll":true }}
      ]
    }
  }
}

