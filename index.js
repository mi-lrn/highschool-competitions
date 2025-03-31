const data = [
     { title: "Biology", description: "Focuses on living organisms, their structures, functions, interactions, and the processes that sustain life.", competitions: ["BioGENEius Challenge: Conduct innovative research in biotechnology, covering fields like healthcare, agriculture, and environmental sustainability. Students present their research to industry leaders and compete at national and international levels. Open to grades 9-12 https://biotechinstitute.org/biogeneius/", "Brain Bee: Neuroscience competition that tests knowledge of the brain, nervous system, and neurological diseases. Aims to inspire students to pursue careers in neuroscience and medicine through competitive experiences. Open to grades 9-12 https://www.thebrainbee.org/", "International Genetically Engineered Machine (iGEM): Global synthetic biology competition where teams design and build innovative biological systems using genetic engineering. Fosters collaboration, research, and problem-solving to address real-world challenges in healthcare, sustainability, and technology. Open to grades 9-12 https://competition.igem.org/", "USA Biology Olympiad (USABO): Challenges students on advanced biological concepts through rigorous exams, with top students advancing to represent the US at the International Biology Olympiad. Open to grades 9-12 https://www.usabo-trc.org/"] },
     { title: "Chemistry", description: "Focuses on the scientific study of matter, including its composition, structure, properties, and the interactions that occur at atomic and molecular levels.", competitions: ["USA National Chemistry Olympiad: Challenges students with advanced chemistry concepts through rigorous exams, with top performers advancing to represent the US at the International Chemistry Olympiad. Open to grades 9-12 https://www.acs.org/education/olympiad.html"] },
     { title: "Civics Knowledge & Engagement", description: "Focuses on knowledge of government, political processes, history, and problem-solving related to civic duties and responsibilities.", competitions: ["Bill of Rights Institute MyImpact Challenge: Encourages students to design and implement projects that create positive change in their communities, reflecting the principles of the Constitution and civic responsibility. Open to ages 13-19 https://www.billofrightsinstitute.org/my-impact-challenge", "C-SPAN’s StudentCam Documentary Competition: Annual documentary competition where students create short films on a political or civic issue, exploring its impact on their lives and our nation. Open to grades 6-12 https://www.studentcam.org/rules/", "National High School Mock Trial Championship: Nationwide competition where teams simulate courtroom trials, applying legal principles and presenting cases in front of real judges and attorneys. Open to grades 9-12 https://www.nationalmocktrial.org/", "Ninth Circuit Civics Contest: Invites students submit an essay or video on topics related to the US Constitution and the justice system, encouraging civic engagement and understanding of constitutional principles. Open to grades 9-12 in the western US or Pacific Islands https://www.ca9.uscourts.gov/civicscontest/", "Sandra Day O'Connor Civics Challenge: Challenges students to express their civics knowledge of the US government and US Constitution through essays, videos, music, and poetry. Open to grades 6-12 https://oconnorinstitute.org/cc/", "VFW Voice of Democracy Program: Provides students with the unique opportunity to express themselves in regards to a democratic and patriotic-themed recorded essay based on this year's theme. Open to grades 9-12 https://www.vfw.org/community/youth-and-education/youth-scholarships", "We The Students Scholarship Contest: Challenges students to write about a current event or issue related to the U.S. Constitution and their rights as citizens. Open to grades 8-12 (ages 14-19) https://studentscholarships.org/scholarship/9432/we-the-students-scholarship-contest"] },
     { title: "English", description: "Focuses on language, literature, and composition, specifically reading and writing to understand and communicate ideas effectively.", competitions: ["AFSA National High School Essay Contest", "Jane Austen Society Essay Contest", " John Locke Institute Essay Competition", "National Scholastic Art & Writing Awards", "Princeton Leonard L. Milberg ’53 High School Poetry Prize", "Princeton University Ten-Minute Play Contest", "SPJ/JEA High School Essay Contest", "The Bennington Young Writers Awards"] },
     { title: "History", description: "Focuses on past events, people, and societies to understand their impact on the present and shape future decisions.", competitions: ["Profile in Courage Essay Contest by JFK Presidential Library", "World Historian Student Essay Competition: Address how a historical topic relates to you personally and to World History Open to grades K-12 https://www.thewha.org/wha-awards/world-historian-student-essay-competition/#!"] },
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
        nameSpan.style.fontWeight = 'bold';
        nameSpan.style.display = 'block';
        const descriptionSpan = document.createElement('span');
        descriptionSpan.textContent = "Description: " + descriptionBeforeUrl + " ";
        descriptionSpan.style.fontStyle = 'italic';
        descriptionSpan.style.display = 'block';
        var urlLink;
        if (url) {
            urlLink = document.createElement('a');
            urlLink.href = url;
            urlLink.textContent = "Link: " + url;
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
        nameSpan.style.fontWeight = 'bold';
        nameSpan.style.display = 'block';
        const descriptionSpan = document.createElement('span');
        descriptionSpan.textContent = "Description: " + descriptionBeforeUrl + " ";
        descriptionSpan.style.fontStyle = 'italic';
        descriptionSpan.style.display = 'block';
        var urlLink;
        if (url) {
            urlLink = document.createElement('a');
            urlLink.href = url;
            urlLink.textContent = "Link: " + url;
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
