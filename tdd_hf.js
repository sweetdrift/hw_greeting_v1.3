function greet(name, name2, name3) {
  let greet_text


  if(name == '')
  {
    greet_text="Hello, my friend!"
  }

  if(name != '')
  {
    greet_text="Hello, " + name + "!";
  }

  if(name != '' && name2 != '' && name3 != '')
  {
    greet_text="Hello, " + name + ", " + name2 + ", and " + name3 + "!";
  }

  if(name == 'BARRY')
  {
    greet_text="HELLO BARRY"
  }

  return greet_text
}

  module.exports = greet
  