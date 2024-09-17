var div1 = document.querySelector('#example1')
var div2 = document.querySelector('#example2')
var div3 = document.querySelector('#example3')
var div4 = document.querySelector('#example4')

function content(divname) {
    var contentdiv = document.querySelector('#content')
    var text1 = '8 years of basic education wit side projects. (feedback)'
    var text2 = `The Destination Imagination (DI) Poland 2019 Creativity Olympiad was 
     a vibrant event that brought together students from across the country
      to solve complex challenges through creativity, teamwork, and innovation.
       Participants worked on various projects, focusing on fields such as science,
        technology, engineering, and the arts. The event encouraged out-of-the-box thinking
         and fostered skills like problem-solving, collaboration, and leadership. The DI 2019 
         in Poland was part of a global initiative aimed at empowering young minds to unleash their
          creative potential in fun, educational, and competitive environments.  `
    var text3 = `My first year at TEB Technikum in Wrocław was a great experience filled 
    with new challenges and opportunities. I gained both theoretical knowledge and practical
     skills in my chosen field, while also meeting new people and working on various group projects.
      The school's modern approach to education, combining traditional subjects with 
      industry-relevant learning, helped me develop a strong foundation for future 
      studies and career growth. Overall, it was an exciting and productive year
       that motivated me to continue learning and improving. `
    var text4 = `   After a month of internships at Infor,
     I gained valuable hands-on experience in the field of 
     technology and software solutions. I had the opportunity to work alongside experienced
      professionals, learning about the company's systems, processes, and tools. Throughout 
      the month, I developed practical skills, enhanced my problem-solving abilities, and 
      contributed to real projects, which gave me a deeper understanding of how the industry
       operates. It was a rewarding experience that broadened my knowledge 
       and prepared me for future career opportunities.  `
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
