---
date: 2022-03-15
slug: /blog/viagem
title: Viagem a Turim
featuredImage: ./featured.jpg
---

## Subheader

```bash
docker run -d -it -p 8080:80 -v $PWD/:/var/www/html lbaw2132/lbaw2132:latest -e DB_USERNAME="lbaw2132" -e DB_PASSWORD="pg!lol!2021"
docker-compose up
```

- `php artisan promote {username}` - Promotes User with given username to Moderator
- `php artisan demote {username}` - Demotes User with given username from Moderator back to User
- `php artisan mods` - Lists all the current Moderators

All these commands will ask for a code once executed, which is: **admin-cli**.

### Moderation

| User email                 | Password | Name          | ID  |
| -------------------------- | -------- | ------------- | --- |
| francisco.friande@fe.up.pt | abcd1234 | fiambre       | 1   |
| francisco.jpg@fe.up.pt     | abcd1234 | kikogoncalves | 2   |
| joao.romao@fe.up.pt        | abcd1234 | jdiogueiro    | 3   |
| miguel.pinto@fe.up.pt      | abcd1234 | mpintarolas   | 4   |

Moderator Area URL: http://lbaw2132.lbaw-prod.fe.up.pt/moderator

### 2.2. User Credentials

| Type         | User email                  | Password     | Name           | ID  |
| ------------ | --------------------------- | ------------ | -------------- | --- |
| Regular User | cmoore4@amazonaws.com       | AxUsJgBEn2Ho | jlo4ever       | 5   |
| Regular User | lwooder5@msu.edu            | 5s4jTtiaIF   | eliseu_goat    | 6   |
| Banned User  | byates9@blogs.com           | uwIj0udAAh1T | LilYatty       | 10  |
| Expert User  | hbetancourtc@altervista.org | 4KdRnq0P     | hakeeeeeeem123 | 13  |

### 3. Application Help

On every page, users can easily access the about page using the side menu, where they can learn more about the concept of the platform and meet the development team. We also introduced basic rules for posting on our website and small tips around the website. Below you can find some examples of help in the application.

| Main page aside                                 | Create question page tip                             | Create question aside                       |
| :---------------------------------------------- | :--------------------------------------------------- | :------------------------------------------ |
| ![](https://i.imgur.com/E9Cawvn.png)            | ![](https://i.imgur.com/7QcZdwM.png)                 | ![](https://i.imgur.com/NYBplid.png)        |
| Provides the main and basic help in the website | Provides recommendation for posting more comfortably | Presents basic posting guidelines to follow |

| FAQ page                             | Contact us / About page                               |
| :----------------------------------- | :---------------------------------------------------- |
| ![](https://i.imgur.com/VsobBx3.png) | ![](https://i.imgur.com/alw0kDD.png)                  |
| Page with Frequently Asked Questions | Page with information about the platform and the team |

### 4. Input Validation

We implemented input validation for the client-side using javascript and server-side by using Laravel validation facilities.

#### Example of server-side validation (create question)

Inside the `QuestionController`, the `create` function performs server-side validation to validate input while creating a question.

```php
$request->validate([
    'title' => ['required', 'max:' . Question::MAX_TITLE_LENGTH],
    'title' => ['required', 'min:' . Question::MIN_TITLE_LENGTH],
    'main' => ['required', 'max:' . Question::MAX_MAIN_LENGTH],
    'main' => ['required', 'min:' . Question::MIN_MAIN_LENGTH],
    'tags' => ['required', function ($attribute, $value, $fail) {
        $tags = explode(',', $value);
        if(count($tags) !== count(array_flip($tags))) {
            $fail('The '.$attribute.' must have unique tags.');
        }
        if(count($tags) < 1 || count($tags) > 5) {
            $fail('The '.$attribute.' must have between 1 and 5 tags.');
        }
    }]
]);
```

This validation will be seen handled later to inform the user about the issues with their input.

```jsx
function createQuestionHandler() {
  if (this.status != 200 && this.status != 201) {
    let responseErrors = JSON.parse(this.response).errors
    let alertArea = document.getElementById('ask-errors')
    let alert = document.createElement('div')
    let alertErrors = document.createElement('ul')
    alert.classList.add('alert', 'alert-danger')

    for (let e in responseErrors) {
      let err = document.createElement('li')
      err.innerHTML = responseErrors[e][0]
      alertErrors.appendChild(err)
    }

    alert.innerHTML = ''
    alertArea.innerHTML = ''

    alert.appendChild(alertErrors)
    alertArea.appendChild(alert)
  } else {
    let response = JSON.parse(this.response)
    window.location = `/question/${response.id}`
  }
}
```

Below is an example result of the code above upon submitting incorrect input.

![](https://i.imgur.com/rrVYp5u.png)

#### Example of client side validation (report post)

Inside the `report.js` file, we created client-side helpful validation functions for reporting content or users.

```jsx
function validate(reportDescription, reportReason) {
  return reportReason != '' && validateTextArea(reportDescription)
}

function validateTextArea(reportDescription) {
  return reportDescription.length >= 10 && reportDescription.length <= 1000
}
```

```jsx
if (!validate(reportDescription, reportReason)) {
  let radioValidation = document.getElementById('user-report-' + userId + '-radio-invalid-feeback')
  triggerWarnings(reportDescriptionTextArea, radioValidation)
  handleFormChanges(radioGroup, reportDescriptionTextArea, radioValidation)
  return
}

function handleFormChanges(radioGroup, textArea, radioValidation) {
  Array.from(radioGroup).forEach(radio => {
    radio.addEventListener('change', function () {
      if (radio.checked) radioValidation.classList.add('d-none')
    })
  })

  textArea.addEventListener('input', function () {
    if (!validateTextArea(textArea.value)) {
      if (textArea.classList.contains('is-valid')) {
        textArea.classList.remove('is-valid')
        textArea.classList.add('is-invalid')
      }
    } else {
      if (textArea.classList.contains('is-invalid')) {
        textArea.classList.remove('is-invalid')
        textArea.classList.add('is-valid')
      }
    }
  })
}

function triggerWarnings(textArea, radioValidation) {
  radioValidation.classList.remove('d-none')
  textArea.classList.add('is-invalid')
}
```

The JS code above will affect elements like the ones below, which provide feedback upon incorrect input.

```html
<!-- user did not choose a reason on report -->
<p class="d-none mt-2 text-red-400" id="report-{{ $content_id }}-radio-invalid-feeback">
  Please select a reason for reporting this content
</p>
```

```html
<!-- user did not input the correct amount of characters in description -->
<div class="invalid-feedback">Please enter a description with &gt; 10 and &lt; 1000 characters.</div>
```

![](https://i.imgur.com/ed68Nvw.png)
