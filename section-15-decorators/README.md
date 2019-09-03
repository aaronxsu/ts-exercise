- Decorators:

  - Functions that can be used to modify/change/anything different properties/methods in the classs
  - Not the same as Javascript decorators
  - Used inside/on classes only
  - Understanding the order in which decorators are ran are the key to understanding them
  - Experimental

- Decorators on a property, method, accessor
  - First argument is the prototype of the object
  - Second argument is the key of the property/method/accessor the decorator is applied to
  - Third argument is the property descriptor
  - Decorators are applied when the code for this class is ran (not when an instance is created) (when the class is defined)
