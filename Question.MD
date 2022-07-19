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

 - make test cases first 
 - add unit-testing to ensure new apps will be running well after refactored
 - dont forget to implement formater and apply code review

## 5. Give an example of how you structure applications with design patterns using closure and modules

Honestly, I am not familiar with closures and modules. I did a little bit of research, and based on what i understand : 
- module pattern would need to be invoked immediately. Module patterns are usually used for code organisation. What you have here instead is an object factory.
- Closures are used by the (revealing) module pattern (and others) to achieve the encapsulation of private state. A closure is created whenever a function is defined. They are a language feature of JavaScript to make working with functions easier.

## 6. What are your preferred ways of testing your web application?

using Jest or React Testing Library

## 7. Which web server do you use? Why? Explain pros and cons of your choice.
Before you decide which hosting service to use, I recommend discussing the details and functionality of your website. Understanding how your website will be developed and how supportive your development firm is will help you decide what hosting firm to use. If you already have a website, discuss with your developer the traffic and bandwidth to understand what you may need for growth. Once you are educated on the type of structure that will be used to build your website or needed to grow your website, you can research the firms recommended by your developer as well as hosts you may already have in mind. You may need to graduate from a shared hosting service, which leads us to looking inward.

## 8. What is your preferred production deployment process?
- before deploying make sure version control / Git Scm alreay mature, we can also implement approach with [Trunk Based Development](https://trunkbaseddevelopment.com/)
- then we can implement CI/CD for implement automation deployment / testing
- and make sure we choose secure server

## 9. Give an example of clean README.md documentation.

-   I made this section with .MD so you can rate this
-   [or you also can rate this](https://github.com/hariadiarief/pokeapp/blob/main/README.md)