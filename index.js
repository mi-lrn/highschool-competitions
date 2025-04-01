const data = [
     { title: "Art", description: "Focuses on expressing creativity, emotions, and ideas through various mediums to engage the senses and provoke emotional responses.", competitions: [] },
     
     { title: "Biology", description: "Focuses on living organisms, their structures, functions, interactions, and the processes that sustain life.", competitions: [] },
     
     { title: "Business & Finance", description: "Focuses on applying business strategies, financial analysis, and decision-making skills to solve real-world challenges, often involving presentations and simulations of corporate environments.", competitions: [] },
     
     { title: "Chemistry", description: "Focuses on the scientific study of matter, including its composition, structure, properties, and the interactions that occur at atomic and molecular levels.", competitions: [] },
     
     { title: "Civics Knowledge & Engagement", description: "Focuses on knowledge of government, political processes, history, and problem-solving related to civic duties and responsibilities.", competitions: [] },
     
     { title: "Cybersecurity", description: "Focuses on skills in protecting systems, networks, and data, by identifying vulnerabilities, defending against attacks, and solving real-world security problems.", competitions: [] },
     
     { title: "Economics", description: "Focuses on analyzing economic principles, solving real-world financial problems, and applying critical thinking to topics such as markets, policy, and decision-making.", competitions: [] },
     
     { title: "Film", description: "Focuses on showcasing creativity, storytelling, and technical skills through the production of original films, encouraging participants to craft compelling visuals within a set theme.", competitions: [] },
     
     { title: "History", description: "Focuses on past events, people, and societies to understand their impact on the present and shape future decisions.", competitions: [] },
     
     { title: "Math", description: "Focuses on the study of numbers, shapes, patterns, and structures, using logical reasoning and quantitative methods to solve problems and describe relationships", competitions: [] },
     
     { title: "Nature & Environment", description: "Focuses on natural ecosystems, wildlife, and the impact of human activity on the planet, with an emphasis on sustainability and conservation.", competitions: [] },
     
     { title: "Science", description: "Focuses on the structure and behavior of the physical and natural world, through observation and experimentation.", competitions: ["Disney Dreamers Academy: Empowers students to explore their dreams and career aspirations through mentorship, workshops, and networking opportunities. Participants gain hands-on experience and inspiration in various fields, preparing them for future success. Open to grades 9-12 https://www.disneydreamersacademy.com/", "National Science Bowl: Tests students’ knowledge in a competition where teams face-off in a fast-paced Q&A format, involving scientific topics such as biology, chemistry, earth science, physics, energy, and math. Open to grades 6-12 https://www.energy.gov/topics/national-science-bowl", "Science Olympiad: Challenges students in teams to compete in a series of events covering scientific topics such as biology, chemistry, physics, engineering, and earth science. The event fosters teamwork and problem-solving skills, with students participating in both written and build challenges. Open to grades 6-12 https://www.soinc.org/"] },
     
     { title: "STEM Research", description: "Focuses on research projects that involve science, technology, engineering, and mathematics, encouraging students to apply their knowledge and creativity in these areas.", competitions: ["Conrad Challenge: Entrepreneurship competition that encourages high school students to develop creative solutions to global challenges. Participants work in teams to design, research, and present their ideas, gaining mentorship and the opportunity to bring their ideas into fruition. Open to ages 13-18 https://www.conradchallenge.org/", "Engineer Girl Annual Essay Contest: Encourages students to explore engineering's impact on society by researching and writing about real-world engineering challenges. Open to grades 3-12 https://www.engineergirl.org/154382/2025-Writing-Contest-Innovating-Smarter", "Junior Science and Humanities Symposium: Students conduct original scientific research in STEM fields and present their findings to a panel of experts. Participants compete at regional and national levels, with opportunities for scholarships and recognition. Open to grades 9-12 https://www.competitionsciences.org/competitions/junior-science-and-humanities-symposium/", "Plant the Moon Challenge: Students experiment with lunar soil simulant to develop plant growth strategies for future space missions. Participants conduct research, analyze data, and present their findings to help advance space agriculture. Open to grades 9-12 and college https://plantthemoon.com/home/", "Regeneron International Science and Engineering Fair (ISEF): World's largest pre-college STEM research competition, where high school students present groundbreaking independent research across various scientific categories. Open to grades 9-12 and requires qualification from local and state fairs https://www.societyforscience.org/isef/", "Regeneron Science Talent Search: Nation’s most prestigious science and math competition for high school seniors, recognizing outstanding independent research. Open to only grade 12 https://www.societyforscience.org/regeneron-sts/", "Stockholm Junior Water Prize: International competition that challenges high school students to conduct research on water-related issues, including water quality, resource management, and sustainability. Open to ages 15-20 https://siwi.org/stockholm-junior-water-prize/"] },
     
     { title: "Theater", description: "Focuses on telling stories and conveying emotions through live performances, combining acting, dialogue, music, and stagecraft to engage and captivate an audience.", competitions: ["Princeton University Ten-Minute Play Contest: Invites students to submit original short plays, encouraging creativity in young playwrights to explore unique narratives and compelling dialogue. Open to only grade 11 https://arts.princeton.edu/about/opportunities/high-school-contests/ten-minute-play-contest/", "YoungArts: Encourages young artists to submit work in various categories, including visual arts, writing, film, and theater. Selected winners receive scholarships, mentorship, and performance opportunities along with the chance to participate in exclusive workshops. Open to grades 10-12 (ages 15-18) https://youngarts.org/?_vsrefdom=adwords&gad_source=1&gclid=CjwKCAjw-qi_BhBxEiwAkxvbkJViu0csW5Dopt7AbpU2r82tIZKVaPiZmEEORevJRb5DW6ha3IMV8RoCfWIQAvD_BwE"] },
     
     { title: "Writing", description: "Focuses on language, literature, and composition, specifically reading and writing to understand and communicate ideas effectively.", competitions: ["Jane Austen Society Essay Contest: Invites students to analyze and write about themes, characters, and historical contexts in Jane Austen’s works, fostering a deeper appreciation for her literature. Open to grades 9-12 https://jasna.org/programs/essay-contest/", "John Locke Institute Essay Competition: Encourages students to develop the characteristics that create into great writers: independent thought, depth of knowledge, clear reasoning, critical analysis and persuasive style while exploring a wide range of interesting questions. Open to ages 15-18 https://www.johnlockeinstitute.com/essay-competition", "National Scholastic Art & Writing Awards: Recognizes creative excellence in writing, offering students opportunities for scholarships and national recognition. Open to grades 7-12 https://www.artandwriting.org/awards/how-to-enter/", "Princeton Leonard L. Milberg ’53 High School Poetry Prize: Recognizes outstanding work by student writers, encouraging students to showcase their talent and creativity through the power of poetry. Open to only grade 11 https://arts.princeton.edu/about/opportunities/high-school-contests/poetry-contest/", "SPJ/JEA High School Essay Contest: Prompts students to explore the importance of journalism and the First Amendment by writing essays on a given prompt related to freedom of the press and ethics. Open to grades 9-12 https://jea.org/awards/spj-jea-high-school-essay-contest/", "The Bennington Young Writers Awards: Invites students to submit original poetry, fiction, and nonfiction works, providing an opportunity for young writers to showcase their creativity and literary talent. Open to grades 9-12 https://www.bennington.edu/events/young-writers-awards", "YoungArts: Encourages young artists to submit work in various categories, including visual arts, writing, film, and theater. Selected winners receive scholarships, mentorship, and performance opportunities along with the chance to participate in exclusive workshops. Open to grades 10-12 (ages 15-18) https://youngarts.org/?_vsrefdom=adwords&gad_source=1&gclid=CjwKCAjw-qi_BhBxEiwAkxvbkJViu0csW5Dopt7AbpU2r82tIZKVaPiZmEEORevJRb5DW6ha3IMV8RoCfWIQAvD_BwE"] },
 ];
 async function fetchCompetitions(dictionaries) {
    const response = await fetch('competitions.json');
    const competitionsData = await response.json();
    dictionaries.forEach(dictionary => {
         try {
         dictionary.competitions = competitionsData.competitions[dictionary.title];
         } catch {
         //Do Nothing
         };
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
         if (resultsContainer.childElementCount > 0) {
             resultsContainer.style.display = 'block';
         } else {
             resultsContainer.style.display = 'none';
         }
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
        nameSpan.classList.add('SpaceGrotesk-Bold');
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
     var names = [];
     allCompetitions.forEach(competition => {
        const colonIndex = competition.indexOf(':');
        const name = competition.substring(0, colonIndex).trim();
        if (!names.includes(name)) {
        names.push(name)
        const competitionItem = document.createElement('div');
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
        nameSpan.classList.add('SpaceGrotesk-Bold');
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
        }
     });
 }
 window.addEventListener('load', async () => {
    await fetchCompetitions(data);
    showAllCompetitions();
 });
