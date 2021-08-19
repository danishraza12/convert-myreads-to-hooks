# MyReads Project

This project was created as part of Xord's Summer Blockship Program. I went through all the provided resources and also learned other things such as routing by myself from online platforms such as YouTube. 

It is a book categorization app which allows users to categorize books in three shelves namely; Currently Reading, Want To Read and Read. The users can move the books to different shelves and also remove them from shelves. An add button is also provided which allows the users to move to the search page via routing where they can search for books and add them to their desired shelves. The user can move back to the homepage by clicking the back button at the top left which consists of a link to the home page where they will find the books in their respective shelves as they were added/updated by them on the search page.

# Home Page

![Home](https://user-images.githubusercontent.com/60378949/130049808-dc6fe2cc-6303-4296-ab4f-59f831508f1c.PNG)

# Search Page

![Search](https://user-images.githubusercontent.com/60378949/130049852-f0f6fb0b-a5ac-4b8e-8b0f-94f0b42db502.PNG)

## TL;DR

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── components # Consists of all the component created in the project
    │    ├── BookContent.js # Used to render the books after being searched
    │    ├── BookShelf..js # This will be used to render each single shelves
    │    ├── BookShelves.js # This will render all the shelves
    │    ├── ChangeShelf.js # This file component will be used to change the shelves of the books according to the users needs and will update the BooksAPI
    │    ├── DisplaySearches.js # As the name suggests it will be used to display the book fetched after a user searches them by entering a term on the search bar 
    │    ├── GetBooks.js # This component will be used to render the books that the users currently has in their shelves
    │    └── Header.js # A simple component created for the header with an assumption that menus might be added in the future
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
