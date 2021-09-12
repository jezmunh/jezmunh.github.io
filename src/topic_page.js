const URLhome = "localhost:3000"
async function GetCategories() {
    // отправляет запрос и получаем ответ
    const response = await fetch("/api/topic", {
        method: "GET",
        headers: { "Accept": "application/json" }
    });
    // если запрос прошел нормально
    if (response.ok === true) {
        // получаем данные
        const forums = await response.json();
        //let rows = document.querySelector("tbody"); 
        forums.forEach(user => {
            // добавляем полученные элементы в таблицу
           //console.log(user)
            //document.write('<style>a{text-decoration:none; color:blue;}body{background-color:lightblue;}</style>')
           
            //forums_div.innerHTML = JSON.stringify(user);
            //console.log(user.name)
            document.write(user.name+"</br>"+"Author:"+user.author)
            //content.innerHTML = "<img src='"+user.image+"'>"+"<a href='"+user.link+"'>"+user.name+"</a><br>&emsp;&emsp;&emsp;"+user.description+"<br>"
            //document.write("<img src='"+user.image+"'>"+"<a target='_top' href='"+user.link+" '>"+user.name+"</a><br>&emsp;&emsp;&emsp;"+user.description+"<br>")
           
            
            
        });
    }
}
// Получение одного пользователя
// async function GetCategories(id) {
//     //console.log(id)
//     const response = await fetch("/api/forum/" + id, {
//         method: "GET",
//         headers: { "Accept": "application/json" }
//     });
//     if (response.ok === true) {
//         const user = await response.json();
//         const form = document.forms["userForm"];
//         form.elements["id"].value = user._id;
//         form.elements["name"].value = user.name;
//         form.elements["description"].value = user.description;
//         form.elements["link"].value = user.link;
//         form.elements["image"].value = user.image;
//     }
// }
// Добавление пользователя
async function CreateUser(userName, userDescription, userImage, userLink) {

    const response = await fetch("/api/topic", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
            name: userName,
            description: userDescription,
            image: userImage,
            link: userLink
        })
    });
    if (response.ok === true) {
        const forum = await response.json();
        reset();
        // document.querySelector("tbody").append(row(user));
        console.log('Okayjjj')
    }
}
// Изменение пользователя
async function EditCategories(userId, userName, userAuthor,userLink) {
    const response = await fetch("/api/topic", {
        method: "PUT",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
            id: userId,
            name: userName,
            author: userAuthor,
            link: userLink
            
            
        })
    });
    if (response.ok === true) {
        const forum = await response.json();
        reset();
        //document.querySelector("tr[data-rowid='" + user._id + "']").replaceWith(row(user));
        console.log('Tokajjjaj')
    }
}
// Удаление пользователя
async function DeleteCategories(id) {
    const response = await fetch("/api/topic/" + id, {
        method: "DELETE",
        headers: { "Accept": "application/json" }
    });
    if (response.ok === true) {
        const forum = await response.json();
        //document.querySelector("tr[data-rowid='" + user._id + "']").remove();
        console.log('afaffafaf')
    }
}

// сброс формы
function reset() {
    const form = document.forms["TopicForm"];
    form.reset();
    form.elements["id"].value = 0;
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  }
// создание строки для таблицы
function row(user) {
    

    const tr = document.createElement("tr");
    tr.setAttribute("data-rowid", user._id);

    
   

    // const ageTd = document.createElement("td");
    // ageTd.append(user.message)
    
    // tr.append(ageTd);
    
    // const linksTd = document.createElement("td");

    
    
    

    // const editLink = document.createElement("a");
    // editLink.setAttribute("data-id", user._id);
    // editLink.setAttribute("style", "cursor:pointer;padding:15px;");
    // editLink.append("Изменить");
    // editLink.addEventListener("click", e => {

    //     e.preventDefault();
    //     GetUser(user._id);
    // });
    // linksTd.append(editLink);

    // const removeLink = document.createElement("a");
    // removeLink.setAttribute("data-id", user._id);
    // removeLink.setAttribute("style", "cursor:pointer;padding:15px;");
    // removeLink.append("Удалить");
    // removeLink.addEventListener("click", e => {

    //     e.preventDefault();
    //     DeleteUser(user._id);
    // });

    // linksTd.append(removeLink);
    // tr.appendChild(linksTd);

    return tr;
}
// сброс значений формы


document.forms["TopicForm"].addEventListener("submit", e => {
    e.preventDefault();
    const form = document.forms["TopicForm"];
    const id = form.elements["id"].value;
    const name = form.elements["name"].value;
    const link = "http://"+URLhome+"/topic/"+getRandomInt(100, 10000)
    
    const author = "user"
    if (id == 0)
        CreateUser(name, author, link);
    else
        EditUser(id, name, author, link);
});

// загрузка пользователей
