/**
 * Loader for the component’s  Dust templates
 */
define(function(require) {
    var dust = require('dustjs-component');
    var text = require('text');
    var inputInlineBtn = require('text!./input-inline-btn.dust');

    dust.loadSource(dust.compileComponent(inputInlineBtn, 'input-inline-btn'));
});
