const { expect } = require('@jest/globals')
const greet=require('./tdd_hf')


it('Should greet Bob correctly', () => { 

  expect(greet(value='Bob', value2='', value3='')).toBe('Hello, Bob!') 
})

it('Should greet anonymous correctly', () =>{

  expect(greet(value='')).toBe('Hello, my friend!')
})

it('Should greet multiple people correctly', () =>{

  expect(greet(value='Alice',value2='Bob',value3='Jerry')).toBe('Hello, Alice, Bob, and Jerry!')
})

it('Should greet barry as ,,HELLO BARRY,,', () =>{

  expect(greet(value='BARRY')).toBe("HELLO BARRY")
})
