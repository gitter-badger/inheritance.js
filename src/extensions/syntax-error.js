import { extendObjectDef } from '../extend-object-def';



SyntaxError.extend = function(childDefAttrs) {
  return extendObjectDef(SyntaxError, childDefAttrs);
};
