// var names = ["lior","daniel","eldad","dawit","shimon"]
// console.log(names[2])
// for (var i =0 ; i > names.length;i++){
//   console.log(names)
// }


// var numbers = [100,200,300,400,500,600,700]
// // console.log(numbers[3])
// for (var i = 0; i<numbers.length;i++){

//   console.log(numbers[i])
// }

// var numbers = [10,13,44,32,24,46,39,27,37,18]
// for (var i = 0 ;i<numbers.length;i++){
//   if(numbers[i]%2==0){ 
//     console.log(numbers[i])
//   } 
// }

// var myArray = ["hello",2,"world","jacob",6,7,"bye",98]
// for (var i = 0 ; i<myArray.length;i++){
//   if (myArray[i]*1 != myArray[i]){
//     console.log(myArray[i])
//   }
// }

// var array = []
// array.push(9)
// console.log(array)
// for (var i = 0 ; i <10 ;i++){
//   array.push(i)
// }
// console.log(array)

// var sum = 0
// var numArray = [5,3,7,8,11]
// for (var i = 0 ; i<numArray.length;i++){
//    sum += numArray[i]
  
//   }
//   console.log(sum/i)
//   console.log(sum)

// var namesArrays = ["lior","lior","eldad","shimon","malada"]
// for(var i = 0; i<namesArrays;i++){
// }
// console.log(namesArrays)

// function getNum(even){
//   var save = 0
//   for(var i = 0 ; i < even.length;i++){
//     if(even[i]%2==0){
//       save++
//     }
//   }
//   console.log(save)
// }
// getNum([2,1,3,6,21423,34,64,67,78,69,789,5683,9])

// function getArray (num1,num2){
//   for(var i = 0 ; i<num1.length;i++){
//     if (num1[i]==num2){
//       return true
//     }
//   }
//   return false

// }

// console.log(getArray([12,23,44,53,76,54,],88))

// function getEven(x,y){
//   for (var i = 0 ; i<x.length ; i++){
//     if(x.length==y.length){
//       x=y
//       console.log(x)
//       return true
//     }
//     return false
//   } 
// }
// console.log(getEven([123,23,43],[234,123,345]))

// function getMin (x){
//   var max = 0
//   for(var i = 0 ; i < x.length;i++){
//     if(x[i]>= max){
//       max = x[i]

//     }
//   }
//   return max
// }
// console.log(getMin([23,452,1,3,543,56,232,554]))

// function getMin(x){
//   var min = x[0]
//   var minIndex = min[i]
//   for (var i= 0 ; i<=x.length ; i++){
//     if (x[i]<= min ){
//       min = x[i]
//     }
//   }
//   return minIndex
// }
// console.log(getMin([423,3546,6553,2,23,34,54,5]))

// function getSum(x){
//   var sum = 0
//   for(var i = 0 ; i < x.length ; i++){
//     sum+=x[i]
  
    
//   }
//   console.log(sum)
// }
// getSum([1,2,3,4])

// function array(x){
//   var max = 0
//   var min = x[0]
//   for(var i = 0 ;i<x.length;i++){
//     if(max<x[i]){
//       max = x[i]
//     }
//     if(min>x[i]){
//       min = x[i]
//     }
//   }
//   console.log(max*min)
// }
// array([10,3,5,6,7,2])

// function getArray(array){
//   var even = 0
//   var max = 0
//   for (var i = 0;i<array.length;i++){
//     if (array[i]%2==0){
//       even = array[i]
//       max = i
//     }
   
//   }
//   console.log(even,max)
// }
// getArray([2,12,5,18])

// function array(odd){
//   var num = 0
//   for(var i = 0 ; i < odd.length;i++){
//     if (odd[i]%2==1){
//       num += odd[i]
     
//     }

//   }
//   console.log(num)
// }
// array([1,2,3,4])

// function array(names,last){

// }
// array("david"["lior","eldad","malada"])




// 34.	כתבו פונקציה אשר קולטת מספר מהמשתמש ומדפיסה את ספרותיו. לדוגמא, אם המשתמש הכניס 673, אז התכנית תדפיס 3 אח"כ 7, אח"כ 6  (לצורך עיגול לעטוף את המספר ב-parseInt).
// // 
// function myArray(){
// var array = ["hello",1,"world",2,"lior",3]
// for(var i = 0 ; i<array.length;i++){
//   if(array[i]/array[i]!=1){
    
//     array[i]="not a number"
//   }
  
// }
// console.log(array)
// }
// myArray()

// function getWord(word){
//   for(var i = 0 ; i < word.length;i++){
//     console.log(word[i])
//   }
// }
// getWord("hello motherfucker")


// function getNum(text){
//   var word= "hello"
//   var newWord = ""
//   for(var i = 0;i<text.length;i++){
//   newWord+=text[i]+i
// }
// return newWord
// }
// getNum()



// כתוב פונקציה ב-JS המקבלת מחרוזת ומחזירה uppercase שלה

// function getString(someString){
//   var someString = "hello senior dawit"
//   var newString = someString.toUpperCase()
//   return newString
// }
// console.log(getString())

// כתוב פונקציה ב-JS המקבלת מחרוזת עם מספרים מופרדים בעזרת פסיק ומחזירה מערך של המספרים.
// לדוגמא עבור "12,3,455" יוחזר מערך עם המספרים 12,3,455

// function fullNum(str){
//   var str = "12,3,455"
//   var newStr = [];
//   newStr.push(str)
//   return newStr
// }
// console.log(fullNum())

// צרו פונקציה המקבלת סטרינג ובמידה והוא ארוך מ5 תווים היא מחזירה "long" אחרת "short"

// function someName(str){
//   var str = "hello motherFucker"
//   if(str.length>5){
//     return "long"
//   }
//   else{
//     return "short"
//   }
// }
// console.log(someName())

// צרו פונקציה המקבלת סטרינג, במידה והסטרינג מכיל את התו "a", היא מחזירה את המיקום של התו אחרת היא מחזירה את ההודעה "not found"

// function getString(str){
// for (var i = 0 ; i< str.length;i++){
//   if (str[i]=="a"){
//    return i ;
//   }
  
  
// }
// return "not Found"
// }
// console.log(getString("wakanda for ever"))

// צרו פונקציה המקבלת סטרינג, במידה והסטרינג מכיל את התו "r", היא מחזירה true אחרת היא מחזירה false

// function someString(str){
//   for (var i = 0 ; i<str.length;i++){
//     if (str[i]=="r"){
//   return true;
// }
//  } return false;


// }
// console.log(someString("qswfehrkfe"))
// 
// צרו פונקציה המקבלת סטרינג ותו, במידה והסטרינג מכיל את התו, היא מחזירה true אחרת היא מחזירה false
// function someFunc(str,crh){
//   for(var i = 0 ; i< str.length;i++){
//     if(str[i]==crh){
//       return true ; 
//     }
//   }
//   return false;
// }
// console.log(someFunc("hello","l"))

// צרו פונקציה המקבלת סטרינג ותו, במידה והסטרינג מכיל את התו, היא מדפיסה את האינדקס בסטרינג מורכב אחרת היא מדפיסה הודעה שאין את התו בסטרינג. יש להשתמש ב-lastIndex

function someString(str,chr){
  for(var i = 0 ; i<str.length;i++){
    if(str.lastIndexof())=={

    }

  }

}