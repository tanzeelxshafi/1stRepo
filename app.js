// const req=new XMLHttpRequest();

// req.onload=function(){
// console.log("CONNECTION IS ON!!");
// const data =JSON.parse(this.responseText);
// console.log(data.name, data.height);
// }

// req.onerror=function(){
// console.log("OOOPS Error!");
// const data =JSON.parse(this.responseText);
// console.log(data);
// }

// req.open("GET","https://swapi.dev/api/people/1/");
// req.send();

//new js method of fetch:
// fetch("https://swapi.dev/api/people/1/")
// .then(res=>{
//     console.log ("First request fetched !",res);
//     return res.json();
// })
// .then ((data)=>{
//     console.log(data);
//     return fetch("https://swapi.dev/api/people/2/");
// })
// .then((res)=>{
//     console.log("Second request fetched !");
//     return res.json();
// })
// .then((data)=>{
//     console.log(data);
// })


// .catch(e=>{
//     console.log("Error!",e);
// })

//3-ASYNRONOUS (Callback)

// 
// const colorChange=(newColor,delay,doNext)=>{
//     setTimeout(()=>{
//         document.body.style.backgroundColor=newColor;
//         doNext();
//     },delay)
// }

// colorChange('olive',2000,()=>{
//     colorChange('red',2000,()=>{
//         colorChange('yellow',2000,()=>{
//             colorChange('orange',2000,()=>{
//                 colorChange('green',2000,()=>{
//                 })
//             })
//         })
//     })
// });



//this is nested call back
// const fakeRequestCallback = (url, success, failure) => {
//     const delay = Math.floor(Math.random() * 4500) + 500;
//     setTimeout(() => {
//         if (delay > 4000) {
//             failure('Connection timeout')
//         } else {
//             success(`Here is your Fake data from ${url}`)
//         }
//     }, delay)
// }

// fakeRequestCallback('book.com',
//     function (response) {
//         console.log("IT WORKED !!")
//         console.log(response)
//         fakeRequestCallback('books.com/page2',
//             function (response) {
//                 console.log("IT WORKED FOR PAGE 2", response)
//                 fakeRequestCallback('books.com/page3',
//                     function (response) {
//                         console.log("IT WORKED FOR PAGE 3", response)
//                     }, function (err) {
//                         console.log("ERROR FROM PAGE 3!!")
//                         console.log(err)
//                     })
//             }, function (err) {
//                 console.log("ERROR FROM PAGE 2!!")
//                 console.log(err)
//             })
//     },
//     function (err) {
//         console.log("Error!!", err)
//         //    console.log(err)
//     }
//     )

//Working with PROMISES:
const FakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay>2000) {
                reject('Connection Timeout:(')
            } else {
                resolve(`here is your fake data from ${url}`)
            }
        }, delay)
    })
}
//Regular method nested promise
// FakeRequestPromise('yelp.camp/api/1')
//     .then(() => {
//         console.log('PROMISE 1 RESOLVED')
//         FakeRequestPromise('url of 2nd page')
//             .then(() => {
//                 console.log("PROMISE 2 RESOLVED")
//                 FakeRequestPromise('url of 3nd page')
//                     .then(() => {
//                         console.log("PROMISE 3 RESOLVED")
//                     })
//                     .catch(() => {
//                         console.log('PROMISE 3 REJECTED')
//                     })
//             })
//             .catch(() => {
//                 console.log('PROMISE 2 REJECTED')
//             })
//     })
//     .catch(() => {
//         console.log('PROMISE 1 REJECTED')
//     })

//Another method of promise shorter syntex
// FakeRequestPromise('firsturl.com')
// .then((data)=>{
//     console.log('It worked for 1st request')
//     console.log (data)
//     return FakeRequestPromise('2nd url.com')
// })
// .then((data)=>{
//     console.log('It worked for 2nd request')
//     console.log (data)
//     return FakeRequestPromise('3rd url.com')
// })
// .then((data)=>{
//     console.log('It worked for 3rd request')
//     console.log (data)
// })
// .catch((err)=>{
//     console.log('Ohh Noo! Phatt gya bhai!!')
//     console.log (err)
// })

//Creating own Promises
// const fakeRequest=(url)=>{
// return new Promise((resolve,reject)=>{
//     const ran=Math.random();
// setTimeout(()=>{
//     if(ran>0.7){
//         resolve(`Your Fake data is: ${url}`)
//     }else{
//         reject('Request failed!!')
//     }

// },2000)
// })
// }
// fakeRequest('1stUrL.com')
// .then((data)=>{
//     console.log('!st request Resolved')
//     console.log('data is:',data)
// })
// .catch((err)=>{
//     console.log("OHH NOO! ERROR")
//     console.log(err)
// })

//ASYNC Function

//promise resolved via return keyword in async
//n reject if throws keyword mentioned
// const sing= async()=>{
//     throw ('OH HO RQST REJECTED')
//     //return 'lalala'   
// }

// const login=async (user,pass)=>{
//     if(!user||!pass) throw 'Missing Credentials'
//     if(pass==='tanzeel') return 'WELCOME PARTNER'
//     throw 'Invalid pswrd'
// }
// login('vdd')
// .then(data=>{
// console.log ("LOGGED IN!")
// console.log(data)
// })
// .catch(err=>{
// console.log("ERROR!")
// console.log(err)
// })

// ASYNC N AWAIT EXM
const delaycolor = (NewColor, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = NewColor;
            resolve();
        }, delay)
    })

}

// delaycolor('pink', 2000)
// .then(()=>delaycolor('yellow',2000))
// .then(()=>delaycolor('green',2000))
// .then(()=>delaycolor('red',2000))
// .then(()=>delaycolor('olive',2000))

// async function rainbow(){
//     await delaycolor('yellow',2000)
//     await delaycolor('Blue',2000)
//     await delaycolor('green',2000)
//     await delaycolor('red',2000)
//     return 'All done'
// }

// async function Endf(){
//     await rainbow();
//     console.log ('Rainbow Ended')
// }

async function ErrorHandle(){
    try{
    let data1=await FakeRequestPromise('FakeRequestURL.com')
    console.log(data1)
}catch(err){
    console.log('Caught an error')
    console.log('THE ERROR IS:',err);
}
}

const h = document.getElementById('new');
h.style.color = "blue";
// h.backgroundColor="BLACK";
