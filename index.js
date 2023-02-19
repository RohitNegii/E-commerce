const arr = [
    {
        id: 1,
        name: 't-shirt',
        price: 300 ,
        img: "./images/f1.jpg",
        desc: "4star ",
    },
    {
        id: 2,
        name: 't-shirt',
        price: 350,
        img: "./images/f2.jpg",
        desc: "3star ",
    },
    {
        id: 3,
        name: 't-shirt',
        price: 400,
        img: "./images/f3.jpg",
        desc: "5star ",
    },
    {
        id: 4,
        name: 't-shirt',
        price: 700,
        img: "./images/f4.jpg",
        desc: "5star ",
    },
    {
        id: 5,
        name: 't-shirt',
        price: 800,
        img: "./images/f5.jpg",
        desc: "4star ",
    },
    {
        id: 6,
        name: 't-shirt',
        price: 100,
        img: "./images/f6.jpg",
        desc: " 5star ",
    },
    {
        id: 7,
        name: 't-shirt',
        price: 900,
        img: "./images/f7.jpg",
        desc: "2star ",
    }, {
        id: 8,
        name: 't-shirt',
        price: 500,
        img: "./images/f8.jpg",
        desc: "1star ",
    }, {
        id: 9,
        name: 't-shirt',
        price: 400,
        img: "./images/n1.jpg",
        desc: "5star ",
    }, {
        id: 10,
        name: 't-shirt',
        price: 600,
        img: "./images/n2.jpg",
        desc: "1star ",
    }, {
        id: 11,
        name: 't-shirt',
        price: 900,
        img: "./images/n3.jpg",
        desc: "3star ",
    }, {
        id: 12,
        name: 't-shirt',
        price: 100,
        img: "./images/n4.jpg",
        desc: "4star ",
    }, {
        id: 13,
        name: 't-shirt',
        price: 700,
        img: "./images/n5.jpg",
        desc: "4star ",
    }, {
        id: 14,
        name: 't-shirt',
        price: 800,
        img: "./images/n6.jpg",
        desc: "2star ",
    }, {
        id: 15,
        name: 't-shirt',
        price: 600,
        img: "./images/n7.jpg ",
        desc: "5star ",
    }, {
        id: 16,
        name: 't-shirt',
        price: 200,
        img: "./images/n8.jpg",
        desc: "3star ",
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
var arr2 = []
function add(n) {
    arr.map((value) => {
        if (value.id == n )
             {
              
            arr2.push(value)
            cartt = document.getElementsByClassName('cart')[0]
           
            var m = value.id
            console.log(m)
            var li = document.createElement('li')
            li.setAttribute('class', 'for-del')


            // li.innerHTML = arr[n].id

            li.innerHTML += arr[n].name
            li.innerHTML += arr[n].desc
            li.innerHTML += arr[n].price

            cartt.appendChild(li)
            var div = document.createElement('div')
            var img = document.createElement('img')
            var btn = document.createElement('button')
            btn.addEventListener("click",(e)=> {
                parent=e.target.parentNode
                cartt.removeChild(parent)
            })
            div.setAttribute('class', 'run-time')
            temp = value.img
            img.setAttribute('src', temp)
            img.setAttribute('class', 'run-img')
            btn.setAttribute('class', 'btn btn-danger')
            btn.innerText="DELETE"
            // btn.setAttribute('type', 'checkbox')
            //   btn.setAttribute('onclick',dell(event))
            li.appendChild(btn)
            div.appendChild(img)
            li.appendChild(div)
            console.log(arr2)




            console.log("added")
            }

        


       
    })
}


// var flag= document.getElementsByClassName('cart')

function show() {
   
   if(document.getElementsByClassName("cart")[0].style="display:none"){
    document.getElementsByClassName("cart")[0].style="display:block"
    console.log('clik')
   }
   else {
    
    document.getElementsByClassName("cart")[0].style="opacity:0"
    console.log("chls")
   }

    

}
// function dell(ev) {
//     // let a = document.getElementsByClassName('run-btn')
//     // for (j = 0; j < a.length; j++) {
//     //     if (a[j].checked == true) {
//     //         document.getElementsByClassName('for-del')[j].style = 'display:none'
//     //     }
//     // }
//     parent=ev.target.parentNode
//     cartt.removeChild(parent)
// }


