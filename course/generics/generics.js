const random = (v1, v2) => {
  return Math.random() <= 0.5 ? v1 : v2
}

console.log(random('A', 'B'), random(1, 2), random(true, false))