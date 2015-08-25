# Ember-froala

Ember component for FroalaWysiwygEditor

## Installation

ember install ember-froala

copy fonts folder from bower_components/font-awesome and paste it into public folder

## Example

See [demo app source](https://github.com/ajackus/ember-froala/tree/master/tests/dummy/app) for example usage.

* Controller example

    import Ember from 'ember';

    export default Ember.Controller.extend({

        value: 'test',

        froalaEditor: {
            params: {
                inlineMode: true,
                placeholder: 'Enter..',
                allowHTML: true,
                autosave: true,
                autosaveInterval: 10000,
                // For more params refer [this](https://www.froala.com/wysiwyg-editor/docs/options)
            },

            events: {
                'blur' : function() { return alert('focusOut'); },
                'focus' : function() { return alert('focused'); },
                'contentChanged': function() { return alert('contentChanged'); },
                'align': function() { return alert('aligned'); },
                'afterPaste': function() { return alert('content pasted'); }
                // For more events [this](https://www.froala.com/wysiwyg-editor/docs/events)
            }
        }
        
    });

* Template example

    {{froala-editor params=froalaEditor.params value=value events=froalaEditor.events}}
