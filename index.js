const data = [
     { title: "Biology", description: "Focuses on living organisms, their structures, functions, interactions, and the processes that sustain life.", competitions: ["BioGENEius Challenge", "Brain Bee", "International Genetically Engineered Machine (iGEM)", "USA Biology Olympiad (USABO)"] },
     { title: "Chemistry", description: "Focuses on the scientific study of matter, including its composition, structure, properties, and the interactions that occur at atomic and molecular levels.", competitions: ["International Chemistry Quiz", "USA National Chemistry Olympiad"] },
     { title: "Civics Knowledge & Engagement", description: "Focuses on knowledge of government, political processes, history, and problem-solving related to civic duties and responsibilities.", competitions: ["Bill of Rights Institute MyImpact Challenge", "C-SPAN’s StudentCam Documentary Competition", "National High School Mock Trial Championship", "Ninth Circuit Civics Contest", "Sandra Day O'Connor Civics Challenge", "VFW Voice of Democracy Program", "We The Students Scholarship Contest"] },
     { title: "English", description: "Focuses on language, literature, and composition, specifically reading and writing to understand and communicate ideas effectively.", competitions: ["AFSA National High School Essay Contest", "Jane Austen Society Essay Contest", " John Locke Institute Essay Competition", "National Scholastic Art & Writing Awards", "Princeton Leonard L. Milberg ’53 High School Poetry Prize", "Princeton University Ten-Minute Play Contest", "SPJ/JEA High School Essay Contest", "The Bennington Young Writers Awards"] },
     { title: "History", description: "Focuses on past events, people, and societies to understand their impact on the present and shape future decisions.", competitions: ["Profile in Courage Essay Contest by JFK Presidential Library", "World Historian Student Essay Competition: Address how a historical topic relates to you personally and to World History, Open to all K-12 students, https://www.thewha.org/wha-awards/world-historian-student-essay-competition/#!"] },
     { title: "Math", description: "Focuses on the study of numbers, shapes, patterns, and structures, using logical reasoning and quantitative methods to solve problems and describe relationships", competitions: ["American Invitiational Mathematics Examination (AIME)", "American Mathematics Competition 10 (AMC 10)", "American Mathematics Competition 12 (AMC 12)","COMAP's High School Mathematical Contest in Modeling (HiMCM)", "Math Kangaroo Competition", "Math League", "Mathworks Math Modeling Challenge (M3)", "Purple Comet! Math Meet!"] },
     { title: "Nature & Environment", description: "Focuses on natural ecosystems, wildlife, and the impact of human activity on the planet, with an emphasis on sustainability and conservation.", competitions: ["Rachel Carson Intergenerational Sense of Wonder/Sense of the Wild Contest"] },
     { title: "Science", description: "Focuses on the structure and behavior of the physical and natural world, through observation and experimentation.", competitions: ["Disney Dreamers", "National Science Bowl", "Science Olympiad"] },
     { title: "STEM Research", description: "Focuses on research projects that involve science, technology, engineering, and mathematics, encouraging students to apply their knowledge and creativity in these areas.", competitions: ["Conrad Challenge", "Engineer Girl Annual Essay Contest", "Junior Science and Humanities Symposium", "Plant the Moon Challenge", "Regeneron International Science and Engineering Fair", "Regeneron Science Talent Search", "Stockholm Junior Water Prize"] },
 ];
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
         if (resultsContainer.childElementCount > 0) {
             resultsContainer.style.display = 'block';
         } else {
             resultsContainer.style.display = 'none';
         }
     } else {
         showAllCompetitions();
     }
 }
 function showCompetitions(competitions) {
     const competitionsContainer = document.getElementById('competitions');
     competitionsContainer.innerHTML = '<strong>Competitions:</strong><br>';  
     competitions.forEach(competition => {
        const competitionItem = document.createElement('div');
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
        const nameSpan = document.createElement('span');
        nameSpan.textContent = name + ': ';
        const descriptionSpan = document.createElement('span');
        descriptionSpan.textContent = descriptionBeforeUrl + " ";
        descriptionSpan.style.fontStyle = 'italic';
        var urlLink;
        if (url) {
            urlLink = document.createElement('a');
            urlLink.href = url;
            urlLink.textContent = url;
        }
        competitionItem.appendChild(nameSpan);
        competitionItem.appendChild(descriptionSpan);
        if (urlLink) {
            competitionItem.appendChild(urlLink);
        }
        competitionsContainer.appendChild(document.createElement('br'));
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
     allCompetitions.forEach(competition => {
        const competitionItem = document.createElement('div');
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
        const nameSpan = document.createElement('span');
        nameSpan.textContent = name + ': ';
        const descriptionSpan = document.createElement('span');
        descriptionSpan.textContent = descriptionBeforeUrl + " ";
        descriptionSpan.style.fontStyle = 'italic';
        var urlLink;
        if (url) {
            urlLink = document.createElement('a');
            urlLink.href = url;
            urlLink.textContent = url;
        }
        competitionItem.appendChild(nameSpan);
        competitionItem.appendChild(descriptionSpan);
        if (urlLink) {
            competitionItem.appendChild(urlLink);
        }
        competitionsContainer.appendChild(document.createElement('br'));
        competitionsContainer.appendChild(competitionItem);
     });
 }
 window.addEventListener('load', showAllCompetitions);
