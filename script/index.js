

const loadLevelWord=(id)=> {

    const ulr = `https://openapi.programming-hero.com/api/word/${id}`;
    fetch(ulr)
    .then((res) =>res.json())
    .then((data) => displayLevelWord(data.data) )
}

const displayLevelWord = (words) => {
    const wordContainer = document.getElementById('word-container');
    wordContainer.innerHTML = '';

    words.forEach((word) => {
        console.log(word);
    });
}

const loadLessons = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all") //Promise of response
    .then((res) => res.json()) // promise of json data
    .then((json) =>  displayLesson(json.data));
};

function displayLesson(lessons) {
    // 1. get the container & empty
    const levelContainer = document.getElementById('level-container');
    levelContainer.innerHTML = '';
    // 2. get into every lessons
    for (let lesson of lessons) {
        // create element 
        const btnDiv = document.createElement('div');
        btnDiv.innerHTML = `<button onclick='loadLevelWord(${lesson.level_no})' class="btn btn-outline btn-primary">
                              <i class="fa-solid fa-book-open"></i> Lesson - ${lesson.level_no}
                              </button> `;
        // Append into container
        levelContainer.append(btnDiv);
    }
}
loadLessons();