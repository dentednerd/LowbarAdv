var _ = {};
// identity
_.identity = function(x) {
   return x;
};

// first
_.first = function(array,num) {
  if (num === undefined) {
  return array[0];
}
else {
  return array.slice(0,num);
}

};

// last
_.last = function(array,num) {
  if (num === undefined) {
    return array[array.length - 1];
  }
  if (array.length < num) {
    return array;
  }
  else {
    return array.slice(array.length - num,array.length);
  }

};

// each
_.each = function(list, func) {
  if (list[0]) {
    var result = list.map(func);
    return result;
  }
  else {
    var res = [];
    for (var key in list) {
      res.push(func(list[key]));
    }
    return res;
  }
};


if (typeof module !== 'undefined') {
  module.exports = _;
}
