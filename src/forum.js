async function GetUsers() {
    // отправляет запрос и получаем ответ
    const response = await fetch("/topic/", {
        method: "GET",
        headers: { "Accept": "application/json" }
    });
    // если запрос прошел нормально
    if (response.ok === true) {
        // получаем данные
        const users = await response.json();
        let rows = document.querySelector("tbody"); 
        users.forEach(user => {
            // добавляем полученные элементы в таблицу
            rows.append(row(user));
        });
    }
}
// Получение одного пользователя
async function GetUser(id) {
    const response = await fetch("/api/users/" + id, {
        method: "GET",
        headers: { "Accept": "application/json" }
    });
    if (response.ok === true) {
        const user = await response.json();
        const form = document.forms["userForm"];
        form.elements["id"].value = user._id;
        form.elements["name"].value = user.name;
        form.elements["message"].value = user.message;
    }
}
// Добавление пользователя
async function CreateUser(userName, userMessage) {

    const response = await fetch("/api/users", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
            name: userName,
            message: userMessage
        })
    });
    if (response.ok === true) {
        const user = await response.json();
        reset();
        document.querySelector("tbody").append(row(user));
    }
}
// Изменение пользователя
async function EditUser(userId, userName, userMessage) {
    const response = await fetch("/api/users", {
        method: "PUT",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
            id: userId,
            name: userName,
            message: userMessage,
        })
    });
    if (response.ok === true) {
        const user = await response.json();
        reset();
        document.querySelector("tr[data-rowid='" + user._id + "']").replaceWith(row(user));
    }
}
// Удаление пользователя
async function DeleteUser(id) {
    const response = await fetch("/api/users/" + id, {
        method: "DELETE",
        headers: { "Accept": "application/json" }
    });
    if (response.ok === true) {
        const user = await response.json();
        document.querySelector("tr[data-rowid='" + user._id + "']").remove();
    }
}

// сброс формы
function reset() {
    const form = document.forms["userForm"];
    form.reset();
    form.elements["id"].value = 0;
}
// создание строки для таблицы
function row(user) {
    const SMILES_MAP = {
        ':grin:': '<img src="http://www.kolobok.us/smiles/standart/grin.gif">',
        ':derisive:': '<img src="http://www.kolobok.us/smiles/standart/derisive.gif">',
        ':good:':'<img src="http://www.kolobok.us/smiles/standart/good.gif">',
        ':dirol:':'<img src="http://www.kolobok.us/smiles/standart/dirol.gif">',
        ':laugh:':'<img src="http://www.kolobok.us/smiles/standart/laugh3.gif">',
        ':sarcasm:':'<img src="http://www.kolobok.us/smiles/standart/sarcasm.gif">',
        ':cry:':'<img src="http://www.kolobok.us/smiles/standart/cray2.gif">',
        ':victory:':'<img src="http://www.kolobok.us/smiles/standart/victory.gif">',
        ':wacko:':'<img src="http://www.kolobok.us/smiles/madhouse/wacko2.gif">',
        ':help:':'<img src="http://www.kolobok.us/smiles/light_skin/help.gif">',
        ':sun:':'<img src="http://www.kolobok.us/smiles/light_skin/sun_bespectacled.gif">'
      };
      function buildMessage(message) {
        let smiles = Object.keys(SMILES_MAP);
        smiles.forEach(smile => message = message.toString().replace(smile, SMILES_MAP[smile]));
        return message;
      }

    const tr = document.createElement("tr");
    tr.setAttribute("data-rowid", user._id);

    // const idTd = document.createElement("td");
    // idTd.append(user._id);
    // tr.append(idTd);

    const nameTd = document.createElement("td");
    const H1Tag = document.createElement("h1")
    nameTd.append(H1Tag+user.name+H1Tag);
    nameTd.innerHTML = "<div class='box-name'><strong>"+user.name+"</strong>"+"</br>"+"</br>"+"Твинейджер"+"</br>"+"</br>"+"<a href='#'>Моя страничка</a>"+"</div>"
    tr.append(nameTd);

    const ageTd = document.createElement("td");
    ageTd.append(user.message)
    ageTd.innerHTML = buildMessage(user.message)
    tr.append(ageTd);
    
    const linksTd = document.createElement("td");

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
// document.getElementById("reset").click(function (e) {

//     e.preventDefault();
//     reset();
// })

// отправка формы
document.forms["userForm"].addEventListener("submit", e => {
    e.preventDefault();
    const form = document.forms["userForm"];
    const id = form.elements["id"].value;
    const name = form.elements["name"].value;
    const message = form.elements["message"].value;
    if (id == 0)
        CreateUser(name, message);
    else
        EditUser(id, name, message);
});

// загрузка пользователей
GetUsers();
