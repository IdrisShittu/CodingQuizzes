function makeTitle(str) {
  return str.split(' ').map(x => {
    const [ first, ...rest ] = x
    return first.toUpperCase() + rest.join('')
  }).join(' ')
}
//capitalize first letter of each word