// function xlongestName() {
//   var getNames = prompt("Enter 3 names separated by spaces:") ;
//   var names = getNames.split(" ");
//   var nameLength = 0;
//   var longestNames = [];  
//   names.forEach(function(name) {
//       if (nameLength === name.length) {
//         longestName = `${longestName} and ${name}`;
//       } else if (nameLength < name.length) {
//           nameLength = name.length;
//           longestName = name;
//       }
//   });
//   return longestName;
// }

function longestName() {
  const name1 = prompt("Enter a name");
  const name2 = prompt("Enter a name");
  const name3 = prompt("Enter a name");

  const names = [name1, name2, name3];
  let longestNameLength = 0;
  let longestName = "";

  names.forEach(function(name) {
    if (name.length === longestNameLength) {
      longestName = `${longestName} ${name}`;
    } else if (name.length > longestNameLength) {
      longestNameLength = name.length;
      longestName = name;
    }
  })

  const computedNames = longestName.split(" ");

  if (computedNames.length === 3) {
    return `All three names, ${computedNames[0]}, ${computedNames[1]},
    and ${computedNames[2]}, are the same length`
  } else if (computedNames.length === 2) {
    return `${computedNames[0]} and ${computedNames[1]} tie for the longest
    names.`
  } else {
    return `The longest name is ${computedNames[0]}.`
  }
}

console.log(longestName())


