(function () {
  
  Revolver.setSelectorEngine(function(selector, root) {
    if (root === void 0) {
      root = document;
    }
    return Slick.search(root, selector);
  });
  
  var METHOD = 'revolver';

  Element.implement(METHOD, function(options) {
    var inst;
    if (!(inst = this.retrieve(METHOD))) {
      inst = new Revolver({container:this});
      this.store(METHOD, inst);
    }
    inst.setOptions(options);
    return this;
  });

  Elements.implement(METHOD, function (options) {
    return this.invoke(METHOD, options);
  });
})();
