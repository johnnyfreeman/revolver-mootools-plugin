(function () {
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