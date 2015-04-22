define(function(require) {
    var dust = require('dustjs-component');
    var text = require('text');
    var tests = require('text!tests.dust');
    require('stencil-spec/spec.template');

    // Load and compile this component’s dust templates:
    require('../../input-inline-btn.template');

    // Define any context required for the tests:
    var context = {
        repo: 'https://github.com/mobify/stencil-input-inline-btn',
        input: {
            buttonText: 'Click Me',
            type: 'text'
        }
    };

    // Render
    dust.renderSource(tests, context, function(err, out) {
        if (!err) {
            document.querySelector('body').innerHTML = out;
        } else {
            console.log(err);
        }
    });
});
