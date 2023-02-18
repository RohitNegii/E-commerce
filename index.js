const arr = [
    {
        id: 1,
        name: 't-shirt1',
        price: 300,
        img:"./images/shirt1.jpg",
        desc: "this is good",
    },
    {
        id: 2,
        name: 't-shirt2',
        price: 350,
        desc: "this is good",
    },
    {
        id: 3,
        name: 't-shirt3',
        price: 300,
        desc: "this is good",
    },
    {
        id: 4,
        name: 't-shirt4',
        price: 300,
        desc: "this is good",
    },
    {
        id: 5,
        name: 't-shirt5',
        price: 300,
        desc: "this is good",
    },
    {
        id: 6,
        name: 't-shirt6',
        price: 300,
        desc: "this is good",
    }
]
// var cart = []
// function add(n) {
//     if (cart.some((arr) => arr.id === n)) {
//         alert("product already added")
//     }
//     else {
//         const item = arr.find((arr) => arr.id === n);
//         cart.push(item)
//         console.log(cart[0].id);
        
//     }
// }

//    dat =cart[0].id
//    console.log(dat)
// document.getElementsByClassName('show')[0].innerHTML=dat
var arr2=[]
function add(n){
    arr.map((value)=>{
        if(value.id==n){
           arr2.push(value)
          cartt= document.getElementsByClassName('cart')[0]
        //   for(k=0;k<arr2.id;k++){
            m=value.id
            console.log(m)
           li=document.createElement('li')
           img=document.createElement('img')

           li.innerHTML=arr[n].id
          
           li.innerHTML+=arr[n].name
           li.innerHTML+=arr[n].desc
           li.innerHTML+=arr[n].price

           cartt.appendChild(li)
           console.log(arr2)

           

          
           console.log("added")
        //   }
           
        }
    })
}
function show(){
   if( document.getElementsByClassName('cart')[0].style="visibility:hidden"){
    document.getElementsByClassName('cart')[0].style="visibility:visible"
   }
   else{
    document.getElementsByClassName('cart')[0].style="visibility:hidden"
    console.log('cl')
   }
  
}


