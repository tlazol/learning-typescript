const object = (obj) => {
  return obj
}

// {a: 1, b: 2, c: 3}
// {a: 'あ', b: 'い', c: 'う'}
const objectItems = object({a: 1, b: 2, c: 3})

console.log(objectItems.a, objectItems.b, objectItems.c)