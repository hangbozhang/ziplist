let list1 = ['a', 'b', 'c'];
let list2 = [1, 2, 3];

function zipList(list1, list2) {
  let returnList = [];
  for(let i = 0; i < list1.length; i++ ) {
    returnList.push(list1[i], list2[i]);
  }
  return returnList;
}

console.log(zipList(list1, list2));

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipListTheSimpleWay(list1, list2));
