var sum_to_n_a = function(n) {
  // Using loop
  let res = 0;

  for (let i = 0; i <= n; i++){
    res += i;
  }

  return res;
};

var sum_to_n_b = function(n) {
  // Using recursion
  if(n === 1){
    return 1;
  }

  return n + sum_to_n_b(n - 1);
};

var sum_to_n_c = function(n) {
  // Using arithmetic progression

  return ((n + 1) / 2)*n
};