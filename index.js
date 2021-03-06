/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-froala',
  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/FroalaWysiwygEditor/css/froala_style.min.css');
    app.import(app.bowerDirectory + '/FroalaWysiwygEditor/css/froala_editor.min.css');
    app.import(app.bowerDirectory + '/FroalaWysiwygEditor/js/froala_editor.min.js');
    app.import(app.bowerDirectory + '/font-awesome/css/font-awesome.css');
  }
};
