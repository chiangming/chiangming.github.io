var fib = function(N) {
  if (N <= 1) return N

  const cache = []
  cache[0] = 0
  cache[1] = 1

  function memoize(number) {
    if (cache[number] !== undefined) {
      return cache[number]
    }
    cache[number] = memoize(number - 1) + memoize(number - 2)
    return cache[number]
  }

  const result = memoize(N)
  return result
};

console.log(fib(6))