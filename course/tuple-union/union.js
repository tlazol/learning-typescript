const union = (param) => {
  if (typeof param === 'string') {
    return param
  } else if (typeof param === 'number') {
    return param
  }
  return null
}

const unionImtes1 = union('hello')
const unionImtes2 = union(12345)
const unionImtes3 = union(true)

console.log(unionImtes1, unionImtes2, unionImtes3)