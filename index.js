// 1. შევქმნათ ფრომისი. იმის შანსი რომ ფრომისი ან დარეზოლვდება ან დარეჯექთდება უნდა იყოს 50/50.
//    ანუ ზოგიერთ გამოძახებაზე უნდა დარეჯექთდეს.

// 2. დავწეროთ ფუნქცია რომელიც წამოიღებს მონაცემებს https://jsonplaceholder.typicode.com/users დან 
//    და დაბრუნებს ამ მონაცემებს

// 3. დავწეროთ ფუნქცია რომელიც ეცდება წამოიღოს მონაცემები 
// https://jsonplaceholde.typicode.com (ლინკი სპეციალურად რასწორია) დან.
// წარუმატებელი რექუესთის შემთხვევაში ხელახლა ცადოს წამოღება 5_ჯერ 

// 4. დავწეროთ ფუნქცია რომელიც ეცდება წმოიღოს მონაცემები https://dummyjson.com/users დან და https://jsonplaceholder.typicode.com/users დან.
//    ფუნქციამ უნდა დაგვიბრუნოს ის ლისთი რომელის ცატვირთვაც უფრო მალე მოხდება.
// */
// 1)
// function random(){
//  randomNumbers=Math.random();
//  return new Promise((resolve, reject) => {
//     if(randomNumbers<0.5){
//       resolve("darezolvda")
//     }else{
//       reject("darejektda")
//     }
//   })
// }

// random().then(res=>{
//   console.log(res)
// }).catch(err=>{
//   console.log(err)
// })

// 2) 
//  async function fetchData(){
//   let response=await fetch("https://jsonplaceholder.typicode.com/users");
//   let data=await response.text();
//   console.log(data)
//  }

//  fetchData()

// 3)
// let count=0;
// let maxTry=5;
// function fetchData(){
//     count++
//     fetch("https://jsonplaceholde.typicode.com")
//     .then((response)=>response.json())
//     .then((data)=>console.log("data", data))
//     .catch(()=>{
//         console.log("errrorr")
//         if(count<maxTry){
//             fetchData()
//         }
//     })
// }
// fetchData()

// 4)

let firstLink="https://dummyjson.com/users";
let secondLink="https://jsonplaceholder.typicode.com/users";


function fetchData(){

    let firtsPromise=fetch(firstLink)
    let secondPromise=fetch(secondLink)

    Promise.race([firtsPromise,secondPromise])
    .then((response)=>response.json())
    .then((data)=>console.log(data))
    .catch(()=>console.log("error"))
}

fetchData()