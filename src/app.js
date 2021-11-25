"use strict";
var element = this.document.getElementById("content");
var User = /** @class */ (function () {
    function User(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    return User;
}());
var den = new User("Den", 28, "man");
element.innerHTML = "\u0418\u043C\u044F: ".concat(den.name, " \u0432\u043E\u0437\u0440\u0430\u0441\u0442: ").concat(den.age, " \u043F\u043E\u043B: ").concat(den.gender);
