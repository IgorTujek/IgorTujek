// Selecting the divs that we want to trigger the content on hover
var selectableDivs = document.querySelectorAll('#example1, #example2, #example3, #example4')
// The div that shows the text
var contentdiv = document.querySelector('#content')
// Texts to be shown 
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
var text4 = `After a month of internships at Infor,
            I gained valuable hands-on experience in the field of 
            technology and software solutions. I had the opportunity to work alongside experienced
            professionals, learning about the company's systems, processes, and tools. Throughout 
            the month, I developed practical skills, enhanced my problem-solving abilities, and 
            contributed to real projects, which gave me a deeper understanding of how the industry
            operates. It was a rewarding experience that broadened my knowledge 
            and prepared me for future career opportunities.`

var texts = [text1, text2, text3, text4]

function content(index) { //0,1,2,3 
    selectableDivs.forEach((div, selectableDivsIndex) => { //0,1,2,3 
        //this has to be yellow if it's the selected div or white if it's not
        div.style.color = index === selectableDivsIndex ? 'yellow' : 'white'

    })
    contentdiv.innerHTML = texts[index]
}

selectableDivs.forEach((div, index) => {
    div.addEventListener('mouseover', function () {
        content(index)
    })
})