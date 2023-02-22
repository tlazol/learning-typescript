const interUseCase = (params) => {
  return params
}

const params = {
  a: 1,
  b: true,
  c: 'hello',
  d: [1, 2, 3],
  e: {
    aa: 2,
    bb: [1, 2, 3],
    cc: [
      {
        aaa: 1,
        bbb: 'hello'
      },
      {
        aaa: 2,
        bbb: 'world'
      }
    ]
  }
}

const interUseCaseItems = interUseCase(params)

console.log(interUseCaseItems)