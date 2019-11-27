var allUser = function() {
  var users = [{
      first_name: "Josephine",
      last_name: "Robinson",
      birthday: "1996-09-26",
    },
    {
      first_name: "Dean",
      last_name: "long",
      birthday: "1984-10-23",
    },
    {
      first_name: "Sonia",
      last_name: "Holmes",
      birthday: "1958-06-21",
    },
    {
      first_name: "June",
      last_name: "Mcdonalid",
      birthday: "1960-05-06",
    },
    {
      first_name: "ella",
      last_name: "Lane",
      birthday: "1991-12-11",
    },
    {
      first_name: "Felecia",
      last_name: "Stone",
      birthday: "1958-04-21",
    },
    {
      first_name: "Elmer",
      last_name: "George",
      birthday: "1987-12-10",
    }
  ];


  //Заглавные увеличиваем
  function firstLetterUpper(str) {
    return str[0].toUpperCase() + str.slice(1)
  }


  // Проверка заглавной буквы Е
  function eLetterFirst(str, letter = 'E') {
    if (str[0].toUpperCase === letter) {
      return true;
    }
    return false
  }


  //Проверка веденных данных
  function checkUsers(nameInput, counts = 0) {
    let input;
    do {
      input = firstLetterUpper(prompt(`Enter your name ${nameInput}`));
    } while (typeof input === 'string' && input.length <= counts)
    return input
  }

  //Получение данных и запись в массив
  this.setUsers = function(count) {
    let i = 0,
      name, surname, dateOfBirthday;

    for (i; i < count; i++) {

      name = checkInput('name', 3);
      surname = checkInput('last name', 3);
      dateOfBirthday = prompt('Your dirthday')

      users.push({
        first_name: name,
        last_name: surname,
        birthday: dateOfBirthday
      });

    }

  }

  //выводим массив с пользователями 
  this.getUsers = function() {
    return users;
  }

  //заменяем на заглавную букву
  this.firstLetterUpperInArray = function() {
    let user;

    for (user of users) {
      user.first_name = firstLetterUpper(user.first_name);
      user.last_name = firstLetterUpper(user.last_name);
    }
  }
// Фильтр по букве Е
  this.nameOrLastNameFirstLetterE = function() {

    return users.filter(function(user) {
      if (eLetterFirst(user.first_name) || eLetterFirst(user.last_name)) {
        return user;
      }
    })
  }
}

let users = new allUser();
users.setUsers(2)