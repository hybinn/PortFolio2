class User {
  constructor(username, password) {
    this.username = username
    this.password = password
  }

  isValid() {
    return this.username.trim() && this.password.trim()
  }
}

document.getElementById('btnLogin').addEventListener('click', function () {
  const uid = document.getElementById('uid').value
  const upw = document.getElementById('upw').value

  const user = new User(uid, upw)

  if (user.isValid()) {
    alert('로그인 성공!')
    window.location.href = 'index.html'
  } else {
    alert('로그인 실패')
  }
})
