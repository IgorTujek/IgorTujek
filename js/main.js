var div1 = document.querySelector('#example1')
var div2 = document.querySelector('#example2')
var div3 = document.querySelector('#example3')
var div4 = document.querySelector('#example4')

function content(divname) {
    var contentdiv = document.querySelector('#content')
    var text1 = 'ToType1'
    var text2 = 'TOtype2'
    var text3 = 'TOtype3'
    var text4 = 'TOtype4'
    if (divname == 'div1') {
        div1.style.color = 'yellow'
        div2.style.color = 'white'
        div3.style.color = 'white'
        div4.style.color = 'white'
        contentdiv.innerHTML = text1
    }
    if (divname == 'div2') {
        div1.style.color = 'white'
        div2.style.color = 'yellow'
        div3.style.color = 'white'
        div4.style.color = 'white'
        contentdiv.innerHTML = text2
    }
    if (divname == 'div3') {
        div1.style.color = 'white'
        div2.style.color = 'white'
        div3.style.color = 'yellow'
        div4.style.color = 'white'
        contentdiv.innerHTML = text3
    }
    if (divname == 'div4') {
        div1.style.color = 'white'
        div2.style.color = 'white'
        div3.style.color = 'white'
        div4.style.color = 'yellow'
        contentdiv.innerHTML = text4
    }
}

div1.addEventListener('mouseover', function () {
    content('div1')
}
)
div2.addEventListener('mouseover', function () {
    content('div2')
}
)
div3.addEventListener('mouseover', function () {
    content('div3')
}
)
div4.addEventListener('mouseover', function () {
    content('div4')
}
)
