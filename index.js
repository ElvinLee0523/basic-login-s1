let dbUsers = [
    {
        username: "Soo",
        password: "password",
        name: "Soo Yew Guan",
        email: "soo@utem.edu.my"
    },
    {
        username: "Ali",
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

function register(newusername,newpassword,newname,newemail)
{
    // TODO: Check if username exist
    let matched = dbUsers.find (element =>
        element.username == newusername)

        if (matched)
        {
            return "Username has been used, cannot be register"
        }
        else
        {
            dbUsers.push(
                {
                    username : newusername,
                    password : newpassword,
                    name : newname,
                    email : newemail
                }
            )

        }
}
console.log(register("Ali", "0000", "fkekk", "fkekk@utem.edu.my"))

//console.log(login("utem","0000"))
//try to login
//console.log(login("Soo","password"))
//login("Ali","123")