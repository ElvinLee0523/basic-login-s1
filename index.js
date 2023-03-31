let dbUsers = [
    {
        username: "Soo",
        password: "password",
        name: "Soo Yew Guan",
        email: "soo@utem.edu.my"
    },
    {
        username: "Soo",
        password: "123",
        name: "Ali",
        email: "ali@utem.edu.my"
    },
  
    {
        username: "Elvin",
        name: "Elvin",
        email: "elvin@utem.edu.my"
    }
]

function login(username, password)
{
    console.log("someone try to login with", username, password)
    let matched = dbUsers.find (element =>
        element.username == username
    )
    if (matched) 
    {
        if (matched.password == password)
        {
            return matched
        }

        else
        {
            return "Password not matched"

        }
    }
    else 
    {
        return "Username not found"

    }

}

//try to login
console.log(login("Soo","password"))
//login("Ali","123")