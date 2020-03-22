
exports.min = function min (ar) {
    if (ar == undefined || ar.length == 0) return 0;
    return ar.reduce( (prev, current) => Math.min(prev, current) );
  }
  
  exports.max = function max (ar) {
    if (ar == undefined || ar.length == 0) return 0;
    return ar.reduce( (prev, current) => Math.max(prev, current) );
  }
  
  exports.avg = function avg (ar) {
    if (ar == undefined || ar.length == 0) return 0;
    return ar.reduce( (sum, i) => sum + i ) / ar.length;
  }
  
