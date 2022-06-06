document.querySelector("form").addEventListener("submit",myFucntion)


function myFucntion(){
    var userData = JSON.parse(localStorage.getItem("user")) || []
        event.preventDefault()

    var userObj= {
     name :document.querySelector("#name").value,
     email : document.querySelector("#email").value,
     address : document.querySelector("#address").value,
     amount : document.querySelector("#amount").value
    }
    userData.push(userObj)
    localStorage.setItem("user",JSON.stringify(userData))
     window.location.reload()
}