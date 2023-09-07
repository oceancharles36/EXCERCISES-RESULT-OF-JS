
// Program a function that return a cut  text according to numbers of characters indicate

let charac = 'My name is Charles'

const d = (a,b)=>{
    return console.log(c.slice(a,b))  //  My name
}

d(0,7)

//2. Program a function that returned a string, return an array with separate text 
// with a certain caracter



let c = 'My name is Charles'
const gs = c.split('')

ambar = (ch)=>{
    return [(gs.join(ch))]
}

const a1 = ambar('*')
console.log(a1)  //  [ 'M*y* *n*a*m*e* *i*s* *C*h*a*r*l*e*s' ]



// 3. Program a function that repeat a text X times, 


let a = 'hello world  '

const g = function(number){
    return console.log(a.repeat(number))  //  hello world  hello world  hello world  
}

g(3)

// 4. Program a function that inverts the word of a text string


const rev = 'this is my world'

const r = (rev.split(''))

const h = (r.reverse())

console.log(h.join(''))  // dlrow ym si siht



// 5. Write a function to count the number of times a sentence is repeated.
// word in a long text, eg. myFunction("hello world bye world", "world") will return 2.


const countWord = (text='', word='') => {
    let count = 0
    const Div = text.split(' ');
        
        for(i=0; i <= Div.length; i++)
            if(Div[i] === word){
                count++
            }
    return console.log(`the number fo ocurrences of the word '${word}', is: ${count}`)  //  the number fo ocurrences of the word 'charles', is: 3
}

countWord('My name is charles charles charles','charles')

// 6. Write a function that checks if a given word or phrase is a palindrome
// (which reads the same in one sense as in another), eg. myfunction("Rooms") will return true.



const Text = (text='')=>{
    if (!text) return console.warn('please, get input a text')
    const r = (text.split(''))
    const j = r.reverse()
    const h = j.join('')
    if (text===h){
        return console.log(true)
    }else{
        return console.log(false)  // false
    }
}
Text('Lal')



// 7. Write a function that removes a certain pattern of characters from a given text,
// eg. myFunction("xyz1, xyz2, xyz3, xyz4 and xyz5", "xyz") will return "1, 2, 3, 4 and 5.


const cut = (text='', cut='')=>{
    return console.log(text.replace(new RegExp(cut, 'g'), ''))  //  1, 2, 3, 4 y 5
}

cut('xyz1, xyz2, xyz3, xyz4 y xyz5','xyz')




// 8. write a function that gets a number
//random between 501 and 600.

const funcRam = (min, max) =>{
    return console.log(Math.floor((Math.random()*(max-min)+min)))  // 591
}

funcRam(501, 601)


// 9. Program a function that receives a number and
//evaluate if it is palindromic or not (which reads the same in
//one sense than another), e.g. myFunction(2002) will return true.

const capicua = (number)=>{
    if(!number) return console.warn(`you don't entered number`)
   
    let stri = number.toString()
   
    let reverse = stri.split('').reverse().join('')

    return (stri === reverse)
        ? console.info(`yes, the number ${number} is palindromic`)
        : console.info(`Not, the number ${number} is not palindromic`)  //  Not, the number 555551 is not palindromic

}

capicua(555551)


// 10. Program a function that calculates the factorial
//of a number (The factorial of a positive integer n,
//is defined as the product of all integers
//positive from 1 to n), eg. myFunction(5) will return 120.

const fact = (number)=>{
    if(!number) return console.warn(`you don't entered number`)
    const numbers = []
    for(i=1; i<= number; i++){ 
    numbers.push(i)    
}
console.log(numbers.reduce((a,b)=>a*b,1))  //120
}
fact(5)



//  11.  Write a function that determines if
//a number is prime (one that is only divisible by itself and 1)
// or not, eg myFunction(7) will return true.

const Prime = (number)=>{
   if(number === undefined) return console.warn(`you don't entered number`)
   if(number < 0) return console.warn(`please enter only positive numbers`)
   if(number === 0 || number === 1) return console.warn(`0,1 this not valid parameters`)
   for(let i=2; i<number; i++){
   div = number%i 
      if (div===0){
       console.info(`the number '${number}' IS NOT prime`)
       break
   }else console.info(`the number '${number}' Is a prime`)  // the number '107' Is a prime
       break
}
}

Prime(107)


// 12. Write a function that determines if a number is even or odd.
// pe. myFunction(29) will return Odd.


const  ParoIm= (number)=>{
    if(number === undefined) return console.warn(`you don't entered number`)
    if(typeof number !== 'number') return console.error(`the value ${number} entered, its not a number`)
        div1 = number%2
        if (div1 === 0){
            console.info(`the number '${number}' is pair`)  // the number '100' is pair
        }else  console.info(`the number '${number}' is odd`)
    }

    ParoIm(100)



// 13. Program a function to convert degrees Celsius to
//Fahrenheit and vice versa, ex.. myFunction(0,"C") will return 32°F.
     
    
    
    const Temperature = (degrees, C='') => {
        if (C === 'F'){
            Celcius = (degrees -32)*(5/9); return console.info(`${degrees} degrees Farenheit equals to ${Celcius} Celcius`)
        }else Farenheit = 32 + ((9*(degrees))/5); return console.info(`${degrees} degrees Celcius equals to ${Farenheit} Farenheit`)
    }
    //  0 degrees Celcius equals to 32 Farenheit

    Temperature(0, 'C')


// 14.  Program a function to convert numbers from binary base to decimal and vice versa,
// ex. myFunction(100,2)
 // will return 4 base 10.
   
   const binDec = (number, base)=>{
       if(number === undefined) return console.warn(`you don't entered a number`) 
       if(base === undefined) return console.warn(`you don't entered a base`) 
       if(typeof number !== 'number') return console.error(`the value ${number} that you entered its not a number`)
       let pattern = /^[01]+$/
       if( base===2 && pattern.test(number)){
           let array1 = Array.from(String(number), Number)
         
              
               let array2=[]
               for(let i= array1.length; i>0; i--){
                array2.push(i-1)
               }
           
               let numdec=[]
               for(let i = 0; i<array1.length; i++){
                   result=array1[i]*Math.pow(2,array2[i])
                   numdec.push(result)
                  
               }
   
               let sum = numdec.reduce((acc,curr)=>{
                   return acc+curr
               },0)
             
               console.info(`the number binary ${number} correspond to:  ${sum} in base 10`)
   
               }else{
                   a=(Math.floor(number/2))
                   b=number%2
                   let bin=[]
                   while(a>=1){
                       
                       bin.push(b)
                       b=a%2   
                       a=(Math.floor(a/2))   
                       
    
               } 
               
               const add1 = bin.push(1)
               const rev=bin.reverse()
               numbin=(rev.join(''))
               console.info(`the number ${number} corresponds to this binary number:  ${numbin} in base 2`)
   }}
          
   
   binDec(114,10)   // the number 114 corresponds to this binary number:  1110010 in base 2


// 15. Program a function that given a string
//of text count the number of vowels and consonants,pe. myFunction("Hello World") returns Vowels: 4, Consonants: 5.
     
   const wordCount = (text)=>{
       const patterns = /[aeiouAEIOU]/g
       const matches = text.match(patterns)
       const count = matches.length
           const consonants = /[^aeiouAEIOU\s\d]/g
           const matConsonants = text.match(consonants)
           const countC = matConsonants.length
   
           console.info(`the text : ${text} has ${count} vowels and ${countC} consonants`)
       
   }
   
   wordCount('The quick Brown Fox 5652')   //  the text : The quick Brown Fox 5652 has 5 vowels and 11 consonants

