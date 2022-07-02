function revealPassword() {
	let psw1 = document.getElementById("psw1")
	let psw2 = document.getElementById("psw2")

	psw1.type = (psw1.type === "password") ? "text" : "password"
	psw2.type = (psw2.type === "password") ? "text" : "password"
}

function validateField() {
	let success = true
	let psw1 = document.getElementById("psw1")
	let psw2 = document.getElementById("psw2")

	if (psw1.value !== psw2.value) {
		alert("Password are not the same")
		success = false
	}

	let x = document.getElementsByClassName("firstInputs")

	for (let i = 0; i< 3; i++) {
		if (!x[i].value) {
			alert("Empty field")
			success = false
			break
		}
	}

	if (success)
		alert('Dang ki thanh cong')
	else
		alert('Dang ki that bai')
}