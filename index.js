const emptyInputMessages = {
  firstname: 'First Name cannot be empty',
  lastname: 'Last Name cannot be empty',
  email: 'Looks this is not an email',
  password: 'password cannot be empty',
}
// patterns for input
const namePattern = /.+/

// elements
const formSign = document.querySelector('.form-sign')
const submitBtn = document.querySelector('.submit-btn')
// form input is as entered by the keyboard and not depend on the css visual on the page
formSign.addEventListener('submit', (e) => {
  e.preventDefault()
  const formData = new FormData(formSign)
  const formItems = [...formData]
  formItems.forEach((formInput) => {
    console.log(formInput)
  })
})
