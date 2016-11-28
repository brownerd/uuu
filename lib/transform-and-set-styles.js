'use babel';

export default (str, path) => str.split(';\n')
  .filter(sassvar => sassvar)
  .map(item => item
    .slice(1)
    .split(': ')
    .map(i => {
      if (i.indexOf('-') === 0) {
        return i;
      }
      else {
        return i.split('-');
      }
    })
  ).reduce((p, c) => {
    //return p.concat({sassvar: c[0].join('.'), value: c[1]})
    return p.concat({node: `urawsm-${path}.${c[0].join('.')}`, value: c[1].toString()})
  }, []).forEach(item => {
    atom.config.set(item.node, item.value)
  });

// .split string on the ':\n' into an array of strings
// .filter items in array for truthy items only
// .map over items
//    .slice off the @ from the beginning of each string
//    .split each item on the ': ' into a sub-array or strings
//    .map over each of these string in the sub-array
//      if 'i' has a - at the beginning of the string, simply return it
//      else .split each 'i' that has a '-' into another sub-array
//    .reduce the 3D subarray of strings into a 1D array of objects
//      .join the left side of the sub-array to form the string we need
// .forEach over the array to run the function to update the new styles
