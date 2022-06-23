# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![download](https://user-images.githubusercontent.com/65790714/175286988-cf213109-e79a-4644-b73c-1cfe1838ea8e.jpg)

### Links

- Solution URL: [https://github.com/Mudi-Igbinoba/intro-component-with-signup-form/](https://github.com/Mudi-Igbinoba/intro-component-with-signup-form/)
- Live Site URL: [https://mudi-igbinoba.github.io/intro-component-with-signup-form/](https://mudi-igbinoba.github.io/intro-component-with-signup-form/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- The DOM
- Javascript Events

### What I learned

I learned how to use the validity object, typeMismatch and valueMissing property on input elements. A snippet of how it was used in this project is shown below:

```js
function checkValidity(name, index, text) {
    if (name.validity.typeMismatch) {
        isInvalid(name, index);
        name.style.color = 'hsl(0, 100%, 74%)';
        error[index].textContent = `Looks like this is not an email`;
    } else if (name.validity.valueMissing) {
        isInvalid(name, index);
        error[index].textContent = `${text} cannot be empty`;
    } else {
        isValid(name, index, text);
    }
}
```
### Continued development

I want to work more on maintainig a mobile-first workflow. I also want to become more comfortable carrying out Javascript form validation.

### Useful resources

- [MDN](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation) - MDN really helped me in figuring out how to carry out client-side form validation using Javascript.


## Author

- Website - [Mudi Igbinoba](https://www.mudee.netlify.app)
- Frontend Mentor - [@mudi-igbinoba](https://www.frontendmentor.io/profile/mudi-igbinoba)
- Twitter - [@Mudi_Igbinoba](https://www.twitter.com/mudi_igbinoba)
- Github - [@mudi-igbinoba](https://github.com/mudi-igbinoba)
- LinkedIn - [Osamudiame Igbinoba](https://www.linkedin.com/in/osamudiame-igbinoba/)



