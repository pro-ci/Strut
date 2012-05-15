
		define(["vendor/Handlebars"], function(Handlebars) {
			return {
		
"ComponentContainer": Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {  helpers = helpers || Handlebars.helpers;  var buffer = "", stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;function program1(depth0,data) {    var buffer = "", stack1;  buffer += "rotate(";  foundHelper = helpers.rotate;  stack1 = foundHelper || depth0.rotate;  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "rotate", { hash: {} }); }  buffer += escapeExpression(stack1) + "rad)";  return buffer;}function program3(depth0,data) {    var buffer = "", stack1;  buffer += "skewX(";  foundHelper = helpers.skewX;  stack1 = foundHelper || depth0.skewX;  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "skewX", { hash: {} }); }  buffer += escapeExpression(stack1) + "rad)";  return buffer;}function program5(depth0,data) {    var buffer = "", stack1;  buffer += "skewY(";  foundHelper = helpers.skewY;  stack1 = foundHelper || depth0.skewY;  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "skewY", { hash: {} }); }  buffer += escapeExpression(stack1) + "rad)";  return buffer;}function program7(depth0,data) {    var buffer = "", stack1;  buffer += "scale(";  foundHelper = helpers.scale;  stack1 = foundHelper || depth0.scale;  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "scale", { hash: {} }); }  buffer += escapeExpression(stack1) + ")";  return buffer;}function program9(depth0,data) {    var buffer = "", stack1;  buffer += "rotate(";  foundHelper = helpers.rotate;  stack1 = foundHelper || depth0.rotate;  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "rotate", { hash: {} }); }  buffer += escapeExpression(stack1) + "rad)";  return buffer;}function program11(depth0,data) {    var buffer = "", stack1;  buffer += "skewX(";  foundHelper = helpers.skewX;  stack1 = foundHelper || depth0.skewX;  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "skewX", { hash: {} }); }  buffer += escapeExpression(stack1) + "rad)";  return buffer;}function program13(depth0,data) {    var buffer = "", stack1;  buffer += "skewY(";  foundHelper = helpers.skewY;  stack1 = foundHelper || depth0.skewY;  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "skewY", { hash: {} }); }  buffer += escapeExpression(stack1) + "rad)";  return buffer;}function program15(depth0,data) {    var buffer = "", stack1;  buffer += "scale(";  foundHelper = helpers.scale;  stack1 = foundHelper || depth0.scale;  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "scale", { hash: {} }); }  buffer += escapeExpression(stack1) + ")";  return buffer;}function program17(depth0,data) {    var buffer = "", stack1;  buffer += "rotate(";  foundHelper = helpers.rotate;  stack1 = foundHelper || depth0.rotate;  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "rotate", { hash: {} }); }  buffer += escapeExpression(stack1) + "rad)";  return buffer;}function program19(depth0,data) {    var buffer = "", stack1;  buffer += "skewX(";  foundHelper = helpers.skewX;  stack1 = foundHelper || depth0.skewX;  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "skewX", { hash: {} }); }  buffer += escapeExpression(stack1) + "rad)";  return buffer;}function program21(depth0,data) {    var buffer = "", stack1;  buffer += "skewY(";  foundHelper = helpers.skewY;  stack1 = foundHelper || depth0.skewY;  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "skewY", { hash: {} }); }  buffer += escapeExpression(stack1) + "rad)";  return buffer;}function program23(depth0,data) {    var buffer = "", stack1;  buffer += "scale(";  foundHelper = helpers.scale;  stack1 = foundHelper || depth0.scale;  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "scale", { hash: {} }); }  buffer += escapeExpression(stack1) + ")";  return buffer;}  buffer += "<div style=\"position: absolute; top: ";  foundHelper = helpers['y'];  stack1 = foundHelper || depth0['y'];  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "y", { hash: {} }); }  buffer += escapeExpression(stack1) + "px; left: ";  foundHelper = helpers['x'];  stack1 = foundHelper || depth0['x'];  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "x", { hash: {} }); }  buffer += escapeExpression(stack1) + "px;-webkit-transform: ";  foundHelper = helpers.rotate;  stack1 = foundHelper || depth0.rotate;  stack2 = helpers['if'];  tmp1 = self.program(1, program1, data);  tmp1.hash = {};  tmp1.fn = tmp1;  tmp1.inverse = self.noop;  stack1 = stack2.call(depth0, stack1, tmp1);  if(stack1 || stack1 === 0) { buffer += stack1; }  buffer += " ";  foundHelper = helpers.skewX;  stack1 = foundHelper || depth0.skewX;  stack2 = helpers['if'];  tmp1 = self.program(3, program3, data);  tmp1.hash = {};  tmp1.fn = tmp1;  tmp1.inverse = self.noop;  stack1 = stack2.call(depth0, stack1, tmp1);  if(stack1 || stack1 === 0) { buffer += stack1; }  buffer += " ";  foundHelper = helpers.skewY;  stack1 = foundHelper || depth0.skewY;  stack2 = helpers['if'];  tmp1 = self.program(5, program5, data);  tmp1.hash = {};  tmp1.fn = tmp1;  tmp1.inverse = self.noop;  stack1 = stack2.call(depth0, stack1, tmp1);  if(stack1 || stack1 === 0) { buffer += stack1; }  buffer += " ";  foundHelper = helpers.scale;  stack1 = foundHelper || depth0.scale;  stack2 = helpers['if'];  tmp1 = self.program(7, program7, data);  tmp1.hash = {};  tmp1.fn = tmp1;  tmp1.inverse = self.noop;  stack1 = stack2.call(depth0, stack1, tmp1);  if(stack1 || stack1 === 0) { buffer += stack1; }  buffer += ";-moz-transform: ";  foundHelper = helpers.rotate;  stack1 = foundHelper || depth0.rotate;  stack2 = helpers['if'];  tmp1 = self.program(9, program9, data);  tmp1.hash = {};  tmp1.fn = tmp1;  tmp1.inverse = self.noop;  stack1 = stack2.call(depth0, stack1, tmp1);  if(stack1 || stack1 === 0) { buffer += stack1; }  buffer += " ";  foundHelper = helpers.skewX;  stack1 = foundHelper || depth0.skewX;  stack2 = helpers['if'];  tmp1 = self.program(11, program11, data);  tmp1.hash = {};  tmp1.fn = tmp1;  tmp1.inverse = self.noop;  stack1 = stack2.call(depth0, stack1, tmp1);  if(stack1 || stack1 === 0) { buffer += stack1; }  buffer += " ";  foundHelper = helpers.skewY;  stack1 = foundHelper || depth0.skewY;  stack2 = helpers['if'];  tmp1 = self.program(13, program13, data);  tmp1.hash = {};  tmp1.fn = tmp1;  tmp1.inverse = self.noop;  stack1 = stack2.call(depth0, stack1, tmp1);  if(stack1 || stack1 === 0) { buffer += stack1; }  buffer += " ";  foundHelper = helpers.scale;  stack1 = foundHelper || depth0.scale;  stack2 = helpers['if'];  tmp1 = self.program(15, program15, data);  tmp1.hash = {};  tmp1.fn = tmp1;  tmp1.inverse = self.noop;  stack1 = stack2.call(depth0, stack1, tmp1);  if(stack1 || stack1 === 0) { buffer += stack1; }  buffer += ";transform: ";  foundHelper = helpers.rotate;  stack1 = foundHelper || depth0.rotate;  stack2 = helpers['if'];  tmp1 = self.program(17, program17, data);  tmp1.hash = {};  tmp1.fn = tmp1;  tmp1.inverse = self.noop;  stack1 = stack2.call(depth0, stack1, tmp1);  if(stack1 || stack1 === 0) { buffer += stack1; }  buffer += " ";  foundHelper = helpers.skewX;  stack1 = foundHelper || depth0.skewX;  stack2 = helpers['if'];  tmp1 = self.program(19, program19, data);  tmp1.hash = {};  tmp1.fn = tmp1;  tmp1.inverse = self.noop;  stack1 = stack2.call(depth0, stack1, tmp1);  if(stack1 || stack1 === 0) { buffer += stack1; }  buffer += " ";  foundHelper = helpers.skewY;  stack1 = foundHelper || depth0.skewY;  stack2 = helpers['if'];  tmp1 = self.program(21, program21, data);  tmp1.hash = {};  tmp1.fn = tmp1;  tmp1.inverse = self.noop;  stack1 = stack2.call(depth0, stack1, tmp1);  if(stack1 || stack1 === 0) { buffer += stack1; }  buffer += " ";  foundHelper = helpers.scale;  stack1 = foundHelper || depth0.scale;  stack2 = helpers['if'];  tmp1 = self.program(23, program23, data);  tmp1.hash = {};  tmp1.fn = tmp1;  tmp1.inverse = self.noop;  stack1 = stack2.call(depth0, stack1, tmp1);  if(stack1 || stack1 === 0) { buffer += stack1; }  buffer += "\">";  return buffer;}),
"Image": Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {  helpers = helpers || Handlebars.helpers; partials = partials || Handlebars.partials;  var buffer = "", stack1, foundHelper, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;  stack1 = depth0;  stack1 = self.invokePartial(partials.ComponentContainer, 'ComponentContainer', stack1, helpers, partials);;  if(stack1 || stack1 === 0) { buffer += stack1; }  buffer += "<img src=\"";  foundHelper = helpers.src;  stack1 = foundHelper || depth0.src;  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "src", { hash: {} }); }  buffer += escapeExpression(stack1) + "\"></img></div>";  return buffer;}),
"ImpressTemplate": Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {  helpers = helpers || Handlebars.helpers;  var buffer = "", stack1, foundHelper, tmp1, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing, helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;function program1(depth0,data) {    var buffer = "", stack1;  buffer += "";  foundHelper = helpers.attributes;  stack1 = foundHelper || depth0.attributes;  tmp1 = self.program(2, program2, data);  tmp1.hash = {};  tmp1.fn = tmp1;  tmp1.inverse = self.noop;  if(foundHelper && typeof stack1 === functionType) { stack1 = stack1.call(depth0, tmp1); }  else { stack1 = blockHelperMissing.call(depth0, stack1, tmp1); }  if(stack1 || stack1 === 0) { buffer += stack1; }  buffer += "</div>";  return buffer;}function program2(depth0,data) {    var buffer = "", stack1, stack2;  buffer += "<div class=\"step\" data-x=\"";  foundHelper = helpers['x'];  stack1 = foundHelper || depth0['x'];  foundHelper = helpers.scaleX;  stack2 = foundHelper || depth0.scaleX;  tmp1 = self.program(3, program3, data);  tmp1.hash = {};  tmp1.fn = tmp1;  tmp1.inverse = self.noop;  if(foundHelper && typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, tmp1); }  else { stack1 = blockHelperMissing.call(depth0, stack2, stack1, tmp1); }  if(stack1 || stack1 === 0) { buffer += stack1; }  buffer += "\" data-y=\"";  foundHelper = helpers['y'];  stack1 = foundHelper || depth0['y'];  foundHelper = helpers.scaleY;  stack2 = foundHelper || depth0.scaleY;  tmp1 = self.program(5, program5, data);  tmp1.hash = {};  tmp1.fn = tmp1;  tmp1.inverse = self.noop;  if(foundHelper && typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, tmp1); }  else { stack1 = blockHelperMissing.call(depth0, stack2, stack1, tmp1); }  if(stack1 || stack1 === 0) { buffer += stack1; }  buffer += "\" ";  foundHelper = helpers.rotateX;  stack1 = foundHelper || depth0.rotateX;  stack2 = helpers['if'];  tmp1 = self.program(7, program7, data);  tmp1.hash = {};  tmp1.fn = tmp1;  tmp1.inverse = self.noop;  stack1 = stack2.call(depth0, stack1, tmp1);  if(stack1 || stack1 === 0) { buffer += stack1; }  buffer += "  ";  foundHelper = helpers.rotateY;  stack1 = foundHelper || depth0.rotateY;  stack2 = helpers['if'];  tmp1 = self.program(10, program10, data);  tmp1.hash = {};  tmp1.fn = tmp1;  tmp1.inverse = self.noop;  stack1 = stack2.call(depth0, stack1, tmp1);  if(stack1 || stack1 === 0) { buffer += stack1; }  buffer += " ";  foundHelper = helpers.rotateZ;  stack1 = foundHelper || depth0.rotateZ;  stack2 = helpers['if'];  tmp1 = self.program(13, program13, data);  tmp1.hash = {};  tmp1.fn = tmp1;  tmp1.inverse = self.noop;  stack1 = stack2.call(depth0, stack1, tmp1);  if(stack1 || stack1 === 0) { buffer += stack1; }  buffer += " ";  foundHelper = helpers['z'];  stack1 = foundHelper || depth0['z'];  stack2 = helpers['if'];  tmp1 = self.program(16, program16, data);  tmp1.hash = {};  tmp1.fn = tmp1;  tmp1.inverse = self.noop;  stack1 = stack2.call(depth0, stack1, tmp1);  if(stack1 || stack1 === 0) { buffer += stack1; }  buffer += " ";  foundHelper = helpers.impScale;  stack1 = foundHelper || depth0.impScale;  stack2 = helpers['if'];  tmp1 = self.program(18, program18, data);  tmp1.hash = {};  tmp1.fn = tmp1;  tmp1.inverse = self.noop;  stack1 = stack2.call(depth0, stack1, tmp1);  if(stack1 || stack1 === 0) { buffer += stack1; }  buffer += "><div style=\"width: 1024px; height: 768px\">";  foundHelper = helpers.components;  stack1 = foundHelper || depth0.components;  tmp1 = self.program(20, program20, data);  tmp1.hash = {};  tmp1.fn = tmp1;  tmp1.inverse = self.noop;  if(foundHelper && typeof stack1 === functionType) { stack1 = stack1.call(depth0, tmp1); }  else { stack1 = blockHelperMissing.call(depth0, stack1, tmp1); }  if(stack1 || stack1 === 0) { buffer += stack1; }  buffer += "</div>";  return buffer;}function program3(depth0,data) {    var buffer = "";  return buffer;}function program5(depth0,data) {    var buffer = "";  return buffer;}function program7(depth0,data) {    var buffer = "", stack1, stack2;  buffer += "data-rotate-x=\"";  foundHelper = helpers.rotateX;  stack1 = foundHelper || depth0.rotateX;  foundHelper = helpers.toDeg;  stack2 = foundHelper || depth0.toDeg;  tmp1 = self.program(8, program8, data);  tmp1.hash = {};  tmp1.fn = tmp1;  tmp1.inverse = self.noop;  if(foundHelper && typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, tmp1); }  else { stack1 = blockHelperMissing.call(depth0, stack2, stack1, tmp1); }  if(stack1 || stack1 === 0) { buffer += stack1; }  buffer += "\"";  return buffer;}function program8(depth0,data) {    var buffer = "";  return buffer;}function program10(depth0,data) {    var buffer = "", stack1, stack2;  buffer += "data-rotate-y=\"";  foundHelper = helpers.rotateY;  stack1 = foundHelper || depth0.rotateY;  foundHelper = helpers.toDeg;  stack2 = foundHelper || depth0.toDeg;  tmp1 = self.program(11, program11, data);  tmp1.hash = {};  tmp1.fn = tmp1;  tmp1.inverse = self.noop;  if(foundHelper && typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, tmp1); }  else { stack1 = blockHelperMissing.call(depth0, stack2, stack1, tmp1); }  if(stack1 || stack1 === 0) { buffer += stack1; }  buffer += "\"";  return buffer;}function program11(depth0,data) {    var buffer = "";  return buffer;}function program13(depth0,data) {    var buffer = "", stack1, stack2;  buffer += "data-rotate-z=\"";  foundHelper = helpers.rotateZ;  stack1 = foundHelper || depth0.rotateZ;  foundHelper = helpers.toDeg;  stack2 = foundHelper || depth0.toDeg;  tmp1 = self.program(14, program14, data);  tmp1.hash = {};  tmp1.fn = tmp1;  tmp1.inverse = self.noop;  if(foundHelper && typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, tmp1); }  else { stack1 = blockHelperMissing.call(depth0, stack2, stack1, tmp1); }  if(stack1 || stack1 === 0) { buffer += stack1; }  buffer += "\"";  return buffer;}function program14(depth0,data) {    var buffer = "";  return buffer;}function program16(depth0,data) {    var buffer = "", stack1;  buffer += "data-z=\"";  foundHelper = helpers['z'];  stack1 = foundHelper || depth0['z'];  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "z", { hash: {} }); }  buffer += escapeExpression(stack1) + "\"";  return buffer;}function program18(depth0,data) {    var buffer = "", stack1;  buffer += "data-scale=\"";  foundHelper = helpers.impScale;  stack1 = foundHelper || depth0.impScale;  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "impScale", { hash: {} }); }  buffer += escapeExpression(stack1) + "\"";  return buffer;}function program20(depth0,data) {    var buffer = "", stack1, stack2;  buffer += "";  stack1 = depth0;  foundHelper = helpers.renderComponent;  stack2 = foundHelper || depth0.renderComponent;  tmp1 = self.program(21, program21, data);  tmp1.hash = {};  tmp1.fn = tmp1;  tmp1.inverse = self.noop;  if(foundHelper && typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, tmp1); }  else { stack1 = blockHelperMissing.call(depth0, stack2, stack1, tmp1); }  if(stack1 || stack1 === 0) { buffer += stack1; }  buffer += "";  return buffer;}function program21(depth0,data) {    var buffer = "";  return buffer;}  buffer += "<!doctype html><html lang=\"en\"><head> <meta charset=\"utf-8\" />    <meta name=\"viewport\" content=\"width=1024\" />    <meta name=\"apple-mobile-web-app-capable\" content=\"yes\" />    <title>Deck Title</title>        <meta name=\"description\" content=\"TODO\" />    <meta name=\"author\" content=\"TODO\" />    <link href=\"http://tantaman.github.com/Showoff/client/web/preview_export/css/main.css\" rel=\"stylesheet\" />        <link rel=\"shortcut icon\" href=\"favicon.png\" />    <link rel=\"apple-touch-icon\" href=\"apple-touch-icon.png\" />    <link href='http://fonts.googleapis.com/css?family=Lato:400,700,700italic|Ubuntu:400,700|Abril+Fatface|Hammersmith+One|Fredoka+One|Gorditas|Press+Start+2P' rel='stylesheet' type='text/css'></head><body class=\"impress-not-supported\"><div class=\"fallback-message\">    <p>Your browser <b>doesn't support the features required</b> by impress.js, so you are presented with a simplified version of this presentation.</p>    <p>For the best experience please use the latest <b>Chrome</b>, <b>Safari</b> or <b>Firefox</b> browser.</p></div><div id=\"impress\">";  foundHelper = helpers.slides;  stack1 = foundHelper || depth0.slides;  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.models);  tmp1 = self.program(1, program1, data);  tmp1.hash = {};  tmp1.fn = tmp1;  tmp1.inverse = self.noop;  if(foundHelper && typeof stack1 === functionType) { stack1 = stack1.call(depth0, tmp1); }  else { stack1 = blockHelperMissing.call(depth0, stack1, tmp1); }  if(stack1 || stack1 === 0) { buffer += stack1; }  buffer += "<div class=\"hint\">    <p>Use a spacebar or arrow keys to navigate</p></div><script>if (\"ontouchstart\" in document.documentElement) {     document.querySelector(\".hint\").innerHTML = \"<p>Tap on the left or right to navigate</p>\";}</script><script src=\"http://tantaman.github.com/Showoff/client/web/preview_export/scripts/impress.js\"></script><script>impress().init();</script></body></html>";  return buffer;}),
"TextBox": Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {  helpers = helpers || Handlebars.helpers; partials = partials || Handlebars.partials;  var buffer = "", stack1, foundHelper, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;  stack1 = depth0;  stack1 = self.invokePartial(partials.ComponentContainer, 'ComponentContainer', stack1, helpers, partials);;  if(stack1 || stack1 === 0) { buffer += stack1; }  buffer += "<div style=\"font-family: ";  foundHelper = helpers.family;  stack1 = foundHelper || depth0.family;  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "family", { hash: {} }); }  buffer += escapeExpression(stack1) + "; font-size: ";  foundHelper = helpers.size;  stack1 = foundHelper || depth0.size;  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "size", { hash: {} }); }  buffer += escapeExpression(stack1) + "px;			font-weight: ";  foundHelper = helpers.weight;  stack1 = foundHelper || depth0.weight;  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "weight", { hash: {} }); }  buffer += escapeExpression(stack1) + "; font-style: ";  foundHelper = helpers.style;  stack1 = foundHelper || depth0.style;  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "style", { hash: {} }); }  buffer += escapeExpression(stack1) + "; color: #";  foundHelper = helpers.color;  stack1 = foundHelper || depth0.color;  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "color", { hash: {} }); }  buffer += escapeExpression(stack1) + ";			text-decoration: ";  foundHelper = helpers.decoration;  stack1 = foundHelper || depth0.decoration;  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "decoration", { hash: {} }); }  buffer += escapeExpression(stack1) + "; text-align: ";  foundHelper = helpers.align;  stack1 = foundHelper || depth0.align;  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "align", { hash: {} }); }  buffer += escapeExpression(stack1) + "\">";  foundHelper = helpers.text;  stack1 = foundHelper || depth0.text;  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "text", { hash: {} }); }  buffer += escapeExpression(stack1) + "</div></div>";  return buffer;})
}});