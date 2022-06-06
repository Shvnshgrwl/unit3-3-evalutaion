// document.querySelector("wallet_balance").textContent = localStorage.getItem("amount")
  let id;



   

   async function getData(){
       try{
           let res = await fetch( `https://masai-vouchers-api.herokuapp.com/api/vouchers`)

           let data = await res.json()

           
            //append(voucher)
        //    console.log(api.vouchers.data)
   
         const vouchers = data.results
         return vouchers
       }
       catch (err){
           console.log(err)
       }
}
getData()

function append(data){
    // document.querySelector("#voucher_list").innerHTML = null
    let vouchers = document.getElementById("vouchers")
    data.forEach(function(elem){
        // let div = document.createElement("div")

        let image = document.createElement("img")
        image.src = elem.image

        let name = document.createElement("name")
        name.innerText = elem.name
        
        let price = document.createElement("price")
        price.innerText = elem.price

        let btn = docum.createElement("button")
        btn.innerText = "BUY"
        // btn.setAttribute("class",buy_voucher)

        btn.addEventListener("click",function(){
            // let arr = []
            buy(elem)

            // localStorage.setItem("voucher",JSON.stringify(arr))

        })
        let div = document.createElement("div")

        div.append(image,name,btn,price)
        // document.querySelector("voucher_list").append(div)
        vouchers.append(div)
    })
}

async function main(){
    let data = await  getData()

    if(data === undefined){
        document.querySelector("#voucher_list").innerHTML = null
        return false
    }
    appendVouchers(data)
}
