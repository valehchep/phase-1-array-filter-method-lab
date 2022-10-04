// Code your solution here
function findMatching(drivernames, fistname){
   const names = drivernames.filter(function(item){
        return item.toLowerCase() === fistname.toLowerCase()


   })
   return names 
}
function fuzzyMatch(drivernames, letters){
   const filteredArray = drivernames.filter(function (name){
        return name.substring(0 ,2) === letters
   })
   return filteredArray
}
function matchName(drivernames, name){
  const filteredArray = drivernames.filter(function(list){
      return list.name === name;
  })
  return filteredArray
}
