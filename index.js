const messagesAndPatterns = {
  firstname: {
    errorMessage: 'First Name cannot be empty',
    pattern: '^\\w+$',
  },
  lastname: { errorMessage: 'Last Name cannot be empty', pattern: '^\\w+.*$' },
  emailaddress: {
    errorMessage: 'Looks this is not an email',
    pattern: '^[a-z]\\w*@[a-z]\\w*[.][a-z]+$',
  },
  password: {
    errorMessage: 'password need to be at least 3 characters',
    pattern: '^[^\\s]{3,}$',
  },
}

// elements
const formSign = document.querySelector('.form-sign')
const formSignLabels = document.querySelectorAll('.form-sign label')
const submitBtn = document.querySelector('.submit-btn')
// form input is shown as entered by the keyboard and not depend on the css visual on the page
formSign.addEventListener('submit', (e) => {
  // disabled e.preventDefault() if you want Netlify forms to work
  e.preventDefault()
  const formData = new FormData(formSign)
  //  hidden input of Netlify with the name="form-name" (key) appear also when online
  const formItems = [...formData.entries()]
  let inputFieldsLength = formSignLabels.length
  let howManyFieldsAreValid = 0
  formItems.forEach((formInput) => {
    console.log(formItems, formInput)
    const [fieldName, fieldInput] = formInput
    fieldInput
    const fieldNameKey = fieldName.replaceAll(/-/g, '')
    // const patternToCheck = new RegExp(messagesAndPatterns[fieldNameKey].pattern)
    const isValidInput = fieldInput.length > 0
    const labelElement = formSign.querySelector(`[for=${fieldName}]`)
    const inputElement = labelElement.firstElementChild

    console.log('inputElement: ', inputElement)
    if (!isValidInput) {
      // add error message in label ::after
      labelElement.dataset.inputError =
        messagesAndPatterns[fieldNameKey].errorMessage
      console.log(labelElement, messagesAndPatterns[fieldNameKey])
      inputElement.classList.add('icon-error')
      labelElement.classList.add('input-error')
      inputElement.removeAttribute('placeholder')
      inputElement.addEventListener('focus', () => {
        inputElement.classList.remove('icon-error')
      })
      // adding red icon to input
    } else {
      delete labelElement.dataset.inputError
      labelElement.classList.remove('input-error')
      inputElement.classList.remove('icon-error')
      howManyFieldsAreValid++
    }
  })
  console.log(inputFieldsLength, howManyFieldsAreValid)
  if (inputFieldsLength === howManyFieldsAreValid) {
    setTimeout(() => {
      console.log('you are sign in 👍')
    }, 100)
  }
})
