document.addEventListener('DOMContentLoaded', function () {
  var accordionElements = document.querySelectorAll(
    '#accordionFlushExample .accordion-collapse'
  )

  accordionElements.forEach(function (element) {
    var collapse = new bootstrap.Collapse(element, {
      toggle: false,
    })

    element.addEventListener('show.bs.collapse', function () {
      element.classList.add('show')
    })

    element.addEventListener('hide.bs.collapse', function () {
      element.classList.remove('show')
    })
  })

  // 각 아코디언 아이템의 버튼을 클릭할 때 아코디언을 열고 닫습니다.
  document.querySelectorAll('.accordion-button').forEach(function (button) {
    button.addEventListener('click', function () {
      var target = button.getAttribute('data-bs-target')
      if (target) {
        var collapseElement = document.querySelector(target)
        var collapse = bootstrap.Collapse.getInstance(collapseElement)

        if (collapseElement && collapse) {
          if (collapseElement.classList.contains('show')) {
            collapse.hide() // 아코디언 닫기
          } else {
            collapse.show() // 아코디언 열기
          }
        }
      }
    })
  })
  // 엑스포
  window.addEventListener('scroll', function () {
    var leftMenu = document.getElementById('leftMenu')
    var scrollPosition =
      document.documentElement.scrollTop || document.body.scrollTop
    var initialTop = 60 // 초기 위치

    if (scrollPosition > initialTop) {
      // 스크롤이 초기 위치 이상 내려가면
      leftMenu.style.position = 'fixed'
      leftMenu.style.top = '10px' // 원하는 고정 위치
    } else {
      leftMenu.style.position = 'absolute'
      leftMenu.style.top = initialTop + 'px' // 초기 위치
    }
  })

  // 프로젝트 필터링 기능
  document
    .getElementById('showHtmlCssProjects')
    .addEventListener('click', function () {
      document.querySelectorAll('.project').forEach(function (project) {
        if (project.classList.contains('html-css')) {
          project.classList.remove('hidden')
        } else {
          project.classList.add('hidden')
        }
      })
    })

  document
    .getElementById('showJsProjects')
    .addEventListener('click', function () {
      document.querySelectorAll('.project').forEach(function (project) {
        if (project.classList.contains('js')) {
          project.classList.remove('hidden')
        } else {
          project.classList.add('hidden')
        }
      })
    })
})
