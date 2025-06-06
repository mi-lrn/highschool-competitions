const data = [
     { title: "Architecture", description: "Focuses on the art and science of designing and constructing buildings and structures, blending functionality and aesthetics to create spaces that serve human needs.", competitions: [] },
     
     { title: "Art", description: "Focuses on expressing creativity, emotions, and ideas through various mediums to engage the senses and provoke emotional responses.", competitions: [] },
          
     { title: "Biology", description: "Focuses on living organisms, their structures, functions, interactions, and the processes that sustain life.", competitions: [] },
     
     { title: "Business & Finance", description: "Focuses on applying business strategies, financial analysis, and decision-making skills to solve real-world challenges, often involving presentations and simulations of corporate environments.", competitions: [] },
     
     { title: "Chemistry", description: "Focuses on the scientific study of matter, including its composition, structure, properties, and the interactions that occur at atomic and molecular levels.", competitions: [] },
     
     { title: "Civics Knowledge & Engagement", description: "Focuses on knowledge of government, political processes, history, and problem-solving related to civic duties and responsibilities.", competitions: [] },

     { title: "Computer Science", description: "Focuses on algorithms, data structures, and the principles of computation with tasks including software development, app development, and problem solving.", competitions: [] },
     
     { title: "Cybersecurity", description: "Focuses on skills in protecting systems, networks, and data, by identifying vulnerabilities, defending against attacks, and solving real-world security problems.", competitions: [] },
     
     { title: "Economics", description: "Focuses on analyzing economic principles, solving real-world financial problems, and applying critical thinking to topics such as markets, policy, and decision-making.", competitions: [] },
     
     { title: "Fashion", description: "Focuses on the design, creation, and expression of clothing and style, reflecting cultural trends, personal identity, and artistic innovation.", competitions: [] },
     
     { title: "Film", description: "Focuses on showcasing creativity, storytelling, and technical skills through the production of original films, encouraging participants to craft compelling visuals within a set theme.", competitions: [] },
     
     { title: "Foreign Language & Linguistics", description: "Focuses on testing knowledge of grammar, vocabulary, translation, cultural context, and the structure and use of communication systems across different languages and regions.", competitions: [] },
     
     { title: "General", description: "Category for competitions that may encompass more than one subject.", competitions: [] },

     { title: "History", description: "Focuses on past events, people, and societies to understand their impact on the present and shape future decisions.", competitions: [] },
     
     { title: "Math", description: "Focuses on the study of numbers, shapes, patterns, and structures, using logical reasoning and quantitative methods to solve problems and describe relationships.", competitions: [] },

     { title: "Music & Audio", description: "Focuses on creating and organizing sound through rhythm, melody, and harmony to evoke emotions, communicate ideas, and provide artistic or cultural expression.", competitions: [] },
     
     { title: "Nature, Horticulture, & Environmental Science", description: "Focuses on natural ecosystems, wildlife, and the impact of human activity on the planet, with an emphasis on sustainability and conservation.", competitions: [] },

     { title: "Photography", description: "Focuses on capturing moments, scenes, and perspectives to convey emotion, meaning, or aesthetic value.", competitions: [] },
     
     { title: "Physics", description: "Focuses on understanding the fundamental laws of nature, matter, energy, space, and time through observation, experimentation, and mathematical analysis.", competitions: [] },
          
     { title: "Psychology", description: "Focuses on the study of human behavior, mental processes, and emotional experiences to understand individuals and groups through various theories, research methods, and applications.", competitions: [] },

     { title: "Robotics", description: "Focuses on designing, building, and programming machines that can perform tasks autonomously or semi-autonomously.", competitions: [] },

     { title: "Space", description: "Focuses on the universe and everything in it, including stars, planets, galaxies, and the empty space that surrounds them.", competitions: [] },

     { title: "STEM Research", description: "Focuses on research projects that involve science, technology, engineering, and mathematics, encouraging students to apply their knowledge and creativity in these areas.", competitions: [] },
     
     { title: "Theater & Playwriting", description: "Focuses on telling stories and conveying emotions through live performances, combining acting, dialogue, music, and stagecraft to engage and captivate an audience.", competitions: [] },
     
     { title: "Writing", description: "Focuses on language, literature, and composition, specifically reading and writing to understand and communicate ideas effectively.", competitions: [] },
     
     { title: "Volunteering & Community Service", description: "Focuses on helping others and contributing to the community through charitable work and volunteer efforts.", competitions: [] },
];
async function fetchCompetitions(dictionaries) {
    const response = await fetch('competitions.json');
    const competitionsData = await response.json();
    dictionaries.forEach(dictionary => {
        try {
            dictionary.competitions = competitionsData.competitions[dictionary.title];
        } catch {
            // Do Nothing
        }
    });
}
function filterResults() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const resultsContainer = document.getElementById('results');
    const competitionsContainer = document.getElementById('competitions');
    resultsContainer.innerHTML = '';
    competitionsContainer.innerHTML = '';
    if (query) {
        const filteredData = data.filter(item => item.title.toLowerCase().includes(query));
        filteredData.forEach(item => {
            const resultBox = document.createElement('div');
            resultBox.className = 'result-box';
            resultBox.innerHTML = `
                <div class="result-title">${item.title}</div>
                <div class="result-description">${item.description}</div>
            `;
            resultBox.onclick = () => {
                showCompetitions(item.competitions);
                resultsContainer.style.display = 'none';
            };
            resultsContainer.appendChild(resultBox);
        });
        resultsContainer.style.display = resultsContainer.childElementCount > 0 ? 'block' : 'none';
    } else {
        resultsContainer.style.display = 'none';
        showAllCompetitions();
    }
}
function showCompetitions(competitions) {
    const competitionsContainer = document.getElementById('competitions');
    competitionsContainer.innerHTML = '<strong>Competitions:</strong><br>';  
    competitions.forEach(competition => {
        const competitionItem = document.createElement('div');
        competitionItem.className = 'competition-card';
        const colonIndex = competition.indexOf(':');
        const name = competition.substring(0, colonIndex).trim();
        const description = competition.substring(colonIndex + 1).trim();
        const urlIndex = description.indexOf('http');
        let descriptionBeforeUrl = description;
        let url = '';
        if (urlIndex !== -1) {
            descriptionBeforeUrl = description.substring(0, urlIndex).trim();
            url = description.substring(urlIndex).trim();
        }
        competitionItem.innerHTML = `
            <h3 class="competition-title">${name}</h3>
            <p class="competition-description">${descriptionBeforeUrl}</p>
            ${url ? `<a href="${url}" class="competition-link" target="_blank">Link: ${url}</a>` : ''}
        `;
        competitionsContainer.appendChild(competitionItem);
    });
}
function showAllCompetitions() {
    const competitionsContainer = document.getElementById('competitions');
    competitionsContainer.innerHTML = '<strong>All Competitions:</strong><br>'; 
    const allCompetitions = new Set();
    data.forEach(item => {
        item.competitions.forEach(competition => {
            allCompetitions.add(competition);
        });
    });
    var names = [];
    allCompetitions.forEach(competition => {
        const colonIndex = competition.indexOf(':');
        const name = competition.substring(0, colonIndex).trim();
        if (!names.includes(name)) {
            names.push(name);
            const competitionItem = document.createElement('div');
            competitionItem.className = 'competition-card';
            const description = competition.substring(colonIndex + 1).trim();
            const urlIndex = description.indexOf('http');
            let descriptionBeforeUrl = description;
            let url = '';
            if (urlIndex !== -1) {
                descriptionBeforeUrl = description.substring(0, urlIndex).trim();
                url = description.substring(urlIndex).trim();
            }
            competitionItem.innerHTML = `
                <h3 class="competition-title">${name}</h3>
                <p class="competition-description">${descriptionBeforeUrl}</p>
                ${url ? `<a href="${url}" class="competition-link" target="_blank">Link: ${url}</a>` : ''}
            `;
            competitionsContainer.appendChild(competitionItem);
        }
    });
}
window.addEventListener('load', async () => {
    await fetchCompetitions(data);
    showAllCompetitions();
});
