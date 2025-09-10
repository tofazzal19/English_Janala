

const loadLevelWord=(id)=> {

    const ulr = `https://openapi.programming-hero.com/api/level/${id}`;
    fetch(ulr)
    .then((res) =>res.json())
    .then((data) => displayLevelWord(data.data) )
}

const displayLevelWord = (words) => {
    const wordContainer = document.getElementById('word-container');
    wordContainer.innerHTML = '';
    if(words.length == 0){
       wordContainer.innerHTML =`
       
  <div class="text-center  col-span-full rounded-xl py-10 space-y-6 font-bangla">
    <img class="mx-auto" src="./images/alert-error.png"/>
  <p class="text-xl font-medium text-gray-500 py-10 space-y-6">এখনো কোন
     Lesson যুক্ত করা হয়নি
    </p>
    <h2 class="font-bold text-4xl">নেক্সট Lesson এ যান
     </h2>
  </div>`
    }
//     {
//     "id": 50,
//     "level": 5,
//     "word": "Zephyr",
//     "meaning": "মৃদু বাতাস / হালকা হাওয়া",
//     "pronunciation": "জেফার"
// }

    words.forEach((word) => {
        const card = document.createElement('div');
        card.innerHTML =`
        <div class="bg-white rounded-xl drop-shadow-sm text-center py-10 px-5 space-y-4">
      <h2 class="font-bold text-2xl">${word.word ? word : 'শব্দ পাওয়া যায়নি'}</h2>
      <p class="font-semibold">Meaning /Pronounciation</p>

      <div class="font-medium text-2xl font-bangla ">"${word.meaning ? word.meaning : 'অর্থ পাওয়া যায়নি'} /
       ${word.pronunciation ? word.pronunciation : 'pronunciation পাওয়া যায়নি'}"</div>  
      <div class="flex justify-between items-center">
      <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-circle-info"></i></button>
       <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-volume-high"></i></button>
       </div>
    </div>`;
    wordContainer.append(card);
         
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