const data = [
     { title: "Biology", description: "Focuses on living organisms, their structures, functions, interactions, and the processes that sustain life.", competitions: ["BioGENEius Challenge", "Brain Bee", "International Genetically Engineered Machine (iGEM)", "USA Biology Olympiad (USABO)"] },
     { title: "Chemistry", description: "Focuses on the scientific study of matter, including its composition, structure, properties, and the interactions that occur at atomic and molecular levels.", competitions: ["International Chemistry Quiz", "USA National Chemistry Olympiad"] },
     { title: "Science", description: "Focuses on the structure and behavior of the physical and natural world, through observation and experimentation.", competitions: ["Disney Dreamers", "National Science Bowl", "Science Olympiad"] },
     { title: "STEM Research", description: "Focuses on research projects that involve science, technology, engineering, and mathematics, encouraging students to apply their knowledge and creativity in these areas.", competitions: ["Conrad Challenge", "Disney Dreamers", "Junior Science and Humanities Symposium", "National Science Bowl", "Plant the Moon Challenge", "Regeneron International Science and Engineering Fair", "Regeneron Science Talent Search", "Science Olympiad"] },
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
         competitionItem.textContent = competition;
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
         competitionItem.textContent = competition;
         competitionsContainer.appendChild(competitionItem);
     });
 }
 window.addEventListener('load', showAllCompetitions);
