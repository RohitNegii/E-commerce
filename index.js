const arr = [
    {
        id: 1,
        name: 't-shirt1',
        price: 300,
        img:"./images/f1.jpg",
        desc: "this is good",
    },
    {
        id: 2,
        name: 't-shirt2',
        price: 350,
        img:"./images/f2.jpg",
        desc: "this is good",
    },
    {
        id: 3,
        name: 't-shirt3',
        price: 300,
        img:"./images/f3.jpg",
        desc: "this is good",
    },
    {
        id: 4,
        name: 't-shirt4',
        price: 300,
        img:"./images/f4.jpg",
        desc: "this is good",
    },
    {
        id: 5,
        name: 't-shirt5',
        price: 300,
        img:"./images/f5.jpg",
        desc: "this is good",
    },
    {
        id: 6,
        name: 't-shirt6',
        price: 300,
        img:"./images/f6.jpg",
        desc: "this is good",
    },
    {
        id: 7,
        name: 't-shirt5',
        price: 300,
        img:"./images/f7.jpg",
        desc: "this is good",
    }, {
        id: 8,
        name: 't-shirt5',
        price: 300,
        img:"./images/f8.jpg",
        desc: "this is good",
    }, {
        id: 9,
        name: 't-shirt5',
        price: 300,
        img:"./images/n1.jpg",
        desc: "this is good",
    }, {
        id: 10,
        name: 't-shirt5',
        price: 300,
        img:"./images/n2.jpg",
        desc: "this is good",
    }, {
        id: 11,
        name: 't-shirt5',
        price: 300,
        img:"./images/n3.jpg",
        desc: "this is good",
    }, {
        id: 12,
        name: 't-shirt5',
        price: 300,
        img:"./images/n4.jpg",
        desc: "this is good",
    }, {
        id: 13,
        name: 't-shirt5',
        price: 300,
        img:"./images/n5.jpg",
        desc: "this is good",
    }, {
        id: 14,
        name: 't-shirt5',
        price: 300,
        img:"./images/n6.jpg",
        desc: "this is good",
    }, {
        id: 15,
        name: 't-shirt5',
        price: 300,
        img:"./images/n7.jpg",
        desc: "this is good",
    }, {
        id: 16,
        name: 't-shirt5',
        price: 300,
        img:"./images/n8.jpg",
        desc: "this is good",
    },
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
       
          var  m=value.id
            console.log(m)
          var li=document.createElement('li')
         li.setAttribute('class','for-del')
          
          
          li.innerHTML=arr[n].id
          
          li.innerHTML+=arr[n].name
          li.innerHTML+=arr[n].desc
          li.innerHTML+=arr[n].price
          
          cartt.appendChild(li)
          var  div=document.createElement('div')
          var  img=document.createElement('img')
          var  btn=document.createElement('input')
          div.setAttribute('class','run-time')
          temp=value.img
          img.setAttribute('src',temp)
          img.setAttribute('class','run-img')
          btn.setAttribute('class','run-btn')
          btn.setAttribute('type','checkbox')
        //   btn.setAttribute('onclick',dell(event))
          li.appendChild(btn)
          div.appendChild(img)
          li.appendChild(div)
           console.log(arr2)

           

          
           console.log("added")
       
           
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
function dell(){
   let a=document.getElementsByClassName('run-btn')
   for(j=0;j<a.length;j++){
   if(a[j].checked==true){
    document.getElementsByClassName('for-del')[j].style='display:none'
   }
   }
}


