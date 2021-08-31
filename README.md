
![Back To The Top](#TODOS_APP)
---

### Table of Contents

- [Description](#description)
- [How To Use](#how-to-use)
- [References](#references)
- [License](#license)
- [Author Info](#author-info)

---

## Description

TODOS application is a simple application that allows you to create and list all of yours TODOS,
by creating a user and creating individually each of yours TODOS. 

#### Technologies

- NODE.js
- JavaScript

[Back To The Top](#TODOS_APP)

---

## How To Use
-create a new user w/ name and username

-create a new TODO: POST /todos 
  - pass the username through headers
  - create a new TODO w/ title and deadline

-list all user TODOS: GET /todos
  - pass the username through headers

-finish a already created TODO: PUT /todos/:id
  - pass the TODO ID through route params 
  - pass the username through headers
  - pass the title and deadline through body



---

## References

- Template: https://github.com/rocketseat-education/ignite-template-conceitos-do-nodejs

[Back To The Top](#TODOS_APP)

---

## License

MIT License

Copyright (c) [2021] [Gabriel Matias]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[Back To The Top](#TODOS_APP)

---

## Author Info

- Github: https://github.com/gaabMatias
- linkedIn: https://www.linkedin.com/in/gabriel-matiascorrea/

[Back To The Top](#TODOS_APP)
