const output = document.getElementById("output")

function log(text){
    output.textContent += text + "\n"
}

function clearOutput(){
    output.textContent = ""
}

document.getElementById("btnLoadUsers").onclick = loadUsers

async function loadUsers(){

    clearOutput()

    const list = document.getElementById("userList")
    list.innerHTML = ""

    try{

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        )

        // Check if request worked
        if(!response.ok){
            throw new Error("HTTP error: " + response.status)
        }

        const users = await response.json()

        console.log(users) // View in browser console

        users.forEach(function(user){

            const name = user.name
            const email = user.email
            const city = user.address.city

            const text = name + " - " + email + " - " + city

            // Print in <pre>
            log(text)

            // Add to webpage list
            const li = document.createElement("li")
            li.textContent = text
            list.appendChild(li)

        })

    }catch(error){

        log("Error: " + error.message)

    }

}