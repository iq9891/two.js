(function(Two) {

  var Path = Two.Path, TWO_PI = Math.PI * 2, cos = Math.cos, sin = Math.sin;
  var _ = Two.Utils._;

  var Ellipse = Two.Ellipse = function(ox, oy, rx, ry) {

    if (!_.isNumber(ry)) {
      ry = rx;
    }

    var amount = Two.Resolution;

    var points = _.map(_.range(amount), function(i) {
      var pct = i / amount;
      var theta = pct * TWO_PI;
      var x = rx * cos(theta);
      var y = ry * sin(theta);
      return new Two.Anchor(x, y);
    }, this);

    Path.call(this, points, true, true);
    this.translation.set(ox, oy);

  };

  _.extend(Ellipse.prototype, Path.prototype);

  Path.MakeObservable(Ellipse.prototype);

})(this.Two);
