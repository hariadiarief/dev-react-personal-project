# Questions :

> 1.  Explain how Object Oriented Programming works with a thorough understanding of the keyword this and the new keyword
> 2.  What is the new class syntax and how to create instance methods, class methods?
> 3.  Give an example of how to implement inheritance in ES2015 using extends and super
> 4.  Imagine refactoring an ES5 application to use ES2015, how would you go about it?
> 5.  Give an example of how you structure applications with design patterns using closure and modules
> 6.  What are your preferred ways of testing your web application?
> 7.  Which web server do you use? Why? Explain pros and cons of your choice.
> 8.  What is your preferred production deployment process?
> 9.  Give an example of clean README.md documentation.

# Answer :

## 1. Explain how Object Oriented Programming works with a thorough understanding of the keyword this and the new keyword

-   `new` for createing new object
-   `this` :

    -   In a method: this refers to the owner object.

    ```
    fullName : function() {
        return this.firstName + " " + this.lastName;
    }
    ```

    -   Alone / In a function, this refers to the global object.

    ```
    let x = this;

    fullName : function() {
        return this.firstName + " " + this.lastName;
    }
    ```

## 2. What is the new class syntax and how to create instance methods, class methods?

```js
class Human {
    constructor(fullName, hobby) {
        this.fullName = fullName
        this.hobby = hobby
    }

    greeting() {
        console.log('My Name is ' + this.fullName + ', my hobby is ' + this.hobby)
    }
}

const hariadi = new Human('Masagus Hariadi Arief', 'programming')
hariadi.greeting()
```

## 3. Give an example of how to implement inheritance in ES2015 using extends and super

```js
class Human {
    constructor(fullName) {
        this.fullName = fullName
    }
    greeting() {
        return 'My Name is ' + this.fullName
    }
}

class Programmer extends Human {
    constructor(fullName, programmingLang) {
        super(fullName)
        this.programmingLang = programmingLang
    }
    showOff() {
        return this.greeting() + ', and I can make an Apps with ' + this.programmingLang
    }
}

let adi = new Programmer('Masagus Hariadi Arief', 'JavaScript')
console.log(adi.showOff())
```

## 4. Imagine refactoring an ES5 application to use ES2015, how would you go about it?

make test cases first, and implement unit-testing to ensure new apps will be running well after refactored

## 5. Give an example of how you structure applications with design patterns using closure and modules

-

## 6. What are your preferred ways of testing your web application?

using Jest

## 7. Which web server do you use? Why? Explain pros and cons of your choice.

-

## 8. What is your preferred production deployment process?

with [Trunk Based Development](https://trunkbaseddevelopment.com/)

## 9. Give an example of clean README.md documentation.

-   I made this section with .MD so you can rate this
-   [or you also can rate this](https://github.com/hariadiarief/pokeapp/blob/main/README.md)