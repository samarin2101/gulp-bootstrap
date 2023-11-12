// Форма отправки сообщений

// window.addEventListener('DOMContentLoaded', function () {
// 	var modalForms = document.querySelectorAll('.modal__form')

// 	modalForms.forEach(function (form) {
// 		form.addEventListener('submit', function (event) {
// 			event.preventDefault()

// 			let th = this
// 			let xhr = new XMLHttpRequest()

// 			xhr.open('POST', 'mail.php')
// 			xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')

// 			xhr.onreadystatechange = function () {
// 				if (xhr.readyState === 4 && xhr.status === 200) {
// 					th.querySelector('.modal-success').classList.add('visible')

// 					setTimeout(function () {
// 						th.querySelector('.modal-success').classList.remove('visible')
// 						th.reset()
// 					}, 5000)
// 				}
// 			}

// 			xhr.send(new URLSearchParams(new FormData(th)).toString())
// 		})
// 	})
// })




