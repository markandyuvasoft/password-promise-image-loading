let showImg = document.getElementById("img")

let pass = document.getElementById("pass")

let btn = document.getElementById("btn")

btn.addEventListener("click", showDetails)


let actual_pass = 1234


function showDetails() {


    setTimeout(function(){

        if(actual_pass == pass.value || actual_pass!= pass.value) {

            showImg.src = "https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_%28wobbly%29.gif"
        }

    }, 1000)



    setTimeout(function(){

        let promise = new Promise((res, rej) => {
            
            if (actual_pass == pass.value) {
                res("success")
            }
            else {
                rej("reject")
            }
        })

        .then((res) => {

            showImg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYFsUWdDpiwGqTjg1-Tpz7MNM6acHXvL-fOA&s"
        })
        
        .catch((rej) => {
            showImg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLS5WrlQ8kqawE8acZqj4LWDm4Tw6b8sQ9Ww&s"
            
        })
    }, 2000)
}


