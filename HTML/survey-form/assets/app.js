function submitForm() {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const dob = document.getElementById("dob").value;
  const country = document.getElementById("country").value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const profession = document.getElementById("profession").value;
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;
  const newuser = document.querySelector('input[name="newuser"]:checked');
  const suggest = document.querySelector('input[name="suggest"]:checked');
  const feedback = document.querySelector('input[name="feedback"]:checked');
  const suggestion = document.getElementById("suggestion");

  console.log(gender, newuser, suggest, feedback, suggestion);

  if (
    !firstName ||
    !lastName ||
    !dob ||
    !gender ||
    !country ||
    !profession ||
    !email ||
    !mobile ||
    !newuser ||
    !suggest ||
    !feedback ||
    !suggestion
  ) {
    alert("Please fill all the information.");
    return;
  }

  let resultText = `First Name: ${firstName}\n\n`;
  resultText += `Last Name: ${lastName}\n\n`;
  resultText += `Date of Birth: ${dob}\n\n`;
  resultText += `Country: ${country}\n\n`;
  resultText += `Gender: ${gender.value}\n\n`;
  resultText += `Profession: ${profession}\n\n`;
  resultText += `Email: ${email}\n\n`;
  resultText += `Mobile Number: ${mobile}\n\n`;
  resultText += `First time using product or service? ${newuser.value}\n\n`;
  resultText += `Will suggest to friends/ family? ${suggest.value}\n\n`;
  resultText += `Satisfaction: ${feedback.value}\n\n`;
  resultText += `Suggestion: ${suggestion.value}`;

  document.getElementById("popupContent").textContent = resultText;
  document.getElementById("resultPopup").style.display = "block";

  document.getElementById("surveyForm").reset();
}

function resetForm() {
  document.getElementById("surveyForm").reset();
}

function closePopup() {
  document.getElementById("resultPopup").style.display = "none";
}
