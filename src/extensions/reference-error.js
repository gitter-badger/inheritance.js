import { extendObjectDef } from '../extend-object-def';



ReferenceError.extend = function(childDefAttrs) {
  return extendObjectDef(ReferenceError, childDefAttrs);
};
