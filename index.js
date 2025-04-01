const data = [
     { title: "Art", description: "Focuses on expressing creativity, emotions, and ideas through various mediums to engage the senses and provoke emotional responses.", competitions: ["National Scholastic Art & Writing Awards: Recognizes creative excellence in visual arts and writing, offering students opportunities for scholarships and national recognition. Open to grades 7-12 https://www.artandwriting.org/awards/how-to-enter/", "YoungArts: Encourages young artists to submit work in various categories, including visual arts, writing, film, and theater. Selected winners receive scholarships, mentorship, and performance opportunities along with the chance to participate in exclusive workshops. Open to grades 10-12 (ages 15-18) https://youngarts.org/?_vsrefdom=adwords&gad_source=1&gclid=CjwKCAjw-qi_BhBxEiwAkxvbkJViu0csW5Dopt7AbpU2r82tIZKVaPiZmEEORevJRb5DW6ha3IMV8RoCfWIQAvD_BwE"] },
     
     { title: "Biology", description: "Focuses on living organisms, their structures, functions, interactions, and the processes that sustain life.", competitions: ["AnatoBee (Difficulty ★★★☆☆): Tests students' knowledge of human anatomy, embryology, and histology through a series of challenging questions and interactive activities. Participants engage in online quizzes and exams that assess their understanding of anatomical structures and physiological functions. Open to grades 9-12 https://anatobee.org/", "BioGENEius Challenge: Conduct innovative research in biotechnology, covering fields like healthcare, agriculture, and environmental sustainability. Students present their research to industry leaders and compete at national and international levels. Open to grades 9-12 https://biotechinstitute.org/biogeneius/", "Brain Bee (Difficulty ★★★☆☆): Neuroscience competition that tests knowledge of the brain, nervous system, and neurological diseases. Aims to inspire students to pursue careers in neuroscience and medicine through competitive experiences. Open to grades 9-12 https://www.thebrainbee.org/", "International Genetically Engineered Machine (iGEM): Global synthetic biology competition where teams design and build innovative biological systems using genetic engineering. Fosters collaboration, research, and problem-solving to address real-world challenges in healthcare, sustainability, and technology. Open to grades 9-12 https://competition.igem.org/", "USA Biology Olympiad (USABO) (Difficulty ★★★★☆): Challenges students on advanced biological concepts through rigorous exams, with top students advancing to represent the US at the International Biology Olympiad. Open to grades 9-12 https://www.usabo-trc.org/"] },
     
     { title: "Business & Finance", description: "Focuses on applying business strategies, financial analysis, and decision-making skills to solve real-world challenges, often involving presentations and simulations of corporate environments.", competitions: ["Wharton Global High School Investment Competition (Difficulty ★★★★☆): Teams manage a virtual portfolio, making investment decisions based on market conditions and economic factors. Teams compete for the best portfolio performance while gaining valuable experience in financial analysis and decision-making. Open to grades 9-12 https://globalyouth.wharton.upenn.edu/competitions/investment-competition/"] },
     
     { title: "Chemistry", description: "Focuses on the scientific study of matter, including its composition, structure, properties, and the interactions that occur at atomic and molecular levels.", competitions: ["USA National Chemistry Olympiad: Challenges students with advanced chemistry concepts through rigorous exams, with top performers advancing to represent the US at the International Chemistry Olympiad. Open to grades 9-12 https://www.acs.org/education/olympiad.html"] },
     
     { title: "Civics Knowledge & Engagement", description: "Focuses on knowledge of government, political processes, history, and problem-solving related to civic duties and responsibilities.", competitions: ["Bill of Rights Institute MyImpact Challenge: Encourages students to design and implement projects that create positive change in their communities, reflecting the principles of the Constitution and civic responsibility. Open to ages 13-19 https://www.billofrightsinstitute.org/my-impact-challenge", "National High School Mock Trial Championship: Nationwide competition where teams simulate courtroom trials, applying legal principles and presenting cases in front of real judges and attorneys. Open to grades 9-12 https://www.nationalmocktrial.org/", "Ninth Circuit Civics Contest (Difficulty ★★★☆☆): Invites students submit an essay or video on topics related to the US Constitution and the justice system, encouraging civic engagement and understanding of constitutional principles. Open to grades 9-12 in the western US or Pacific Islands https://www.ca9.uscourts.gov/civicscontest/", "Sandra Day O'Connor Civics Challenge: Challenges students to express their civics knowledge of the US government and US Constitution through essays, videos, music, and poetry. Open to grades 6-12 https://oconnorinstitute.org/cc/", "VFW Voice of Democracy Program: Provides students with the unique opportunity to express themselves in regards to a democratic and patriotic-themed recorded essay based on this year's theme. Open to grades 9-12 https://www.vfw.org/community/youth-and-education/youth-scholarships", "We The Students Scholarship Contest: Challenges students to write about a current event or issue related to the U.S. Constitution and their rights as citizens. Open to grades 8-12 (ages 14-19) https://studentscholarships.org/scholarship/9432/we-the-students-scholarship-contest"] },
     
     { title: "Cybersecurity", description: "Focuses on skills in protecting systems, networks, and data, by identifying vulnerabilities, defending against attacks, and solving real-world security problems.", competitions: ["picoCTF - CMU Cybersecurity Competition (Difficulty ★★★★☆): Participants solve problems through Capture The Flag (CTF) format in cryptography, reverse engineering, web exploitation, and forensics while developing real-world cybersecurity skills. Open to ages 13 and older https://picoctf.org/"] },
     
     { title: "Economics", description: "Focuses on analyzing economic principles, solving real-world financial problems, and applying critical thinking to topics such as markets, policy, and decision-making.", competitions: ["National Economics Challenge: Tests students' knowledge of microeconomics, macroeconomics, and international economics. Teams of students work through multiple-choice questions and critical thinking scenarios, competing at regional and national levels. Open to grades 9-12 https://www.councilforeconed.org/programs/for-students/national-economic-challenge/"] },
     
     { title: "Film", description: "Focuses on showcasing creativity, storytelling, and technical skills through the production of original films, encouraging participants to craft compelling visuals within a set theme.", competitions: ["C-SPAN’s StudentCam Documentary Competition: Annual documentary competition where students create short films on a political or civic issue, exploring its impact on their lives and our nation. Open to grades 6-12 https://www.studentcam.org/rules/", "YoungArts: Encourages young artists to submit work in various categories, including visual arts, writing, film, and theater. Selected winners receive scholarships, mentorship, and performance opportunities along with the chance to participate in exclusive workshops. Open to grades 10-12 (ages 15-18) https://youngarts.org/?_vsrefdom=adwords&gad_source=1&gclid=CjwKCAjw-qi_BhBxEiwAkxvbkJViu0csW5Dopt7AbpU2r82tIZKVaPiZmEEORevJRb5DW6ha3IMV8RoCfWIQAvD_BwE"] },
     
     { title: "History", description: "Focuses on past events, people, and societies to understand their impact on the present and shape future decisions.", competitions: ["AFSA National High School Essay Contest: Challenges students to analyze and write about foreign policy and diplomacy, encouraging a deeper understanding of international affairs. Open to grades 9-12 https://afsa.org/essay-contest", "Profile in Courage Essay Contest by JFK Presidential Library: Invites students to describe and analyze an act of political courage by a US elected official who served during or after 1917, the year JFK was born. Open to grades 9-12 https://www.jfklibrary.org/learn/education/profile-in-courage-essay-contest?gad_source=1&gclid=CjwKCAjw-qi_BhBxEiwAkxvbkHd_073sI-ykVVLbdAL2ikwWhwIJfZFdG-T-6F4gWMeHvnamnmGHXBoC6IoQAvD_BwE", "World Historian Student Essay Competition: Invites students to address how global historical topics leave impacts on the modern world, encouraging deep research and critical thinking. Open to grades K-12 https://www.thewha.org/wha-awards/world-historian-student-essay-competition/#!"] },
     
     { title: "Math", description: "Focuses on the study of numbers, shapes, patterns, and structures, using logical reasoning and quantitative methods to solve problems and describe relationships", competitions: ["American Invitiational Mathematics Examination (AIME) (Difficulty ★★★★☆): Tests students’ problem-solving and mathematical reasoning abilities through 15 multiple-choice questions, and top scorers are eligible for further rounds of competition. Must qualify through AMC 10 or AMC 12 https://artofproblemsolving.com/wiki/index.php/American_Invitational_Mathematics_Examination?srsltid=AfmBOorlJYcG2VXu1xRCTRL5gBoYeQKI5Qwt9NvBxq63rRLlwSRz2-ic", "American Mathematics Competition 10 (AMC 10) (Difficulty ★★☆☆☆): Challenges students by testing their problem-solving skills and mathematical reasoning through 25 multiple-choice questions. Open to grades 10 and under https://maa.org/student-programs/amc/", "American Mathematics Competition 12 (AMC 12) (Difficulty ★★☆☆☆): Challenges students by testing their problem-solving skills and mathematical reasoning through 25 multiple-choice questions. Open to grades 12 and under https://maa.org/student-programs/amc/","COMAP's High School Mathematical Contest in Modeling (HiMCM): Challenges high school students to solve real-world problems using mathematical models. Teams of students collaborate to analyze the problem, create a model, and write a detailed report explaining their solution. Open to grades 12 and under https://www.comap.com/contests/himcm-midmcm", "Math Kangaroo Competition: Promotes mathematical thinking and problem-solving skills, offering students a chance to compete at multiple levels with a variety of engaging and thought-provoking problems. Open to grades 12 and under https://mathkangaroo.org/mks/awards/?gad_source=1&gclid=CjwKCAjw-qi_BhBxEiwAkxvbkPjrUfwBFNQFEcJv6O_MMZgahY27RsiM7UZ46OfFDJU0377nZoTCEBoCAR0QAvD_BwE", "Math League: Enhance students' problem-solving abilities through challenging questions in various mathematical topics such as algebra, geometry, and number theory. Open to grades 3-12 https://www.mathleague.org/", "Mathworks Math Modeling Challenge (M3): Nationwide competition where teams work together to develop mathematical models for solving real-world problems within a limited time frame. Students apply their creativity and mathematical skills to propose solutions and present their findings in a detailed report. Open to grades 11-12 https://m3challenge.siam.org/", "Purple Comet! Math Meet!: Global math competition where teams  work together to solve a series of challenging problems in various mathematical areas, including algebra, geometry, and combinatorics. Open to grades 6-12 https://purplecomet.org/"] },
     
     { title: "Nature & Environment", description: "Focuses on natural ecosystems, wildlife, and the impact of human activity on the planet, with an emphasis on sustainability and conservation.", competitions: ["Rachel Carson Intergenerational Sense of Wonder/Sense of the Wild Contest: Encourages participants to explore and celebrate the natural world through writing, art, or other forms of expression. Aims to foster environmental awareness and appreciation, inspired by the legacy of environmentalist Rachel Carson. Must have an intergenerational team (team with multiple generations of people) https://rachelcarsonlandmarkalliance.org/rachel-carson-intergenerational-sense-of-wonder-sense-of-the-wild-contest-2022/"] },
     
     { title: "Science", description: "Focuses on the structure and behavior of the physical and natural world, through observation and experimentation.", competitions: ["Disney Dreamers Academy: Empowers students to explore their dreams and career aspirations through mentorship, workshops, and networking opportunities. Participants gain hands-on experience and inspiration in various fields, preparing them for future success. Open to grades 9-12 https://www.disneydreamersacademy.com/", "National Science Bowl: Tests students’ knowledge in a competition where teams face-off in a fast-paced Q&A format, involving scientific topics such as biology, chemistry, earth science, physics, energy, and math. Open to grades 6-12 https://www.energy.gov/topics/national-science-bowl", "Science Olympiad: Challenges students in teams to compete in a series of events covering scientific topics such as biology, chemistry, physics, engineering, and earth science. The event fosters teamwork and problem-solving skills, with students participating in both written and build challenges. Open to grades 6-12 https://www.soinc.org/"] },
     
     { title: "STEM Research", description: "Focuses on research projects that involve science, technology, engineering, and mathematics, encouraging students to apply their knowledge and creativity in these areas.", competitions: ["Conrad Challenge: Entrepreneurship competition that encourages high school students to develop creative solutions to global challenges. Participants work in teams to design, research, and present their ideas, gaining mentorship and the opportunity to bring their ideas into fruition. Open to ages 13-18 https://www.conradchallenge.org/", "Engineer Girl Annual Essay Contest: Encourages students to explore engineering's impact on society by researching and writing about real-world engineering challenges. Open to grades 3-12 https://www.engineergirl.org/154382/2025-Writing-Contest-Innovating-Smarter", "Junior Science and Humanities Symposium: Students conduct original scientific research in STEM fields and present their findings to a panel of experts. Participants compete at regional and national levels, with opportunities for scholarships and recognition. Open to grades 9-12 https://www.competitionsciences.org/competitions/junior-science-and-humanities-symposium/", "Plant the Moon Challenge: Students experiment with lunar soil simulant to develop plant growth strategies for future space missions. Participants conduct research, analyze data, and present their findings to help advance space agriculture. Open to grades 9-12 and college https://plantthemoon.com/home/", "Regeneron International Science and Engineering Fair (ISEF): World's largest pre-college STEM research competition, where high school students present groundbreaking independent research across various scientific categories. Open to grades 9-12 and requires qualification from local and state fairs https://www.societyforscience.org/isef/", "Regeneron Science Talent Search: Nation’s most prestigious science and math competition for high school seniors, recognizing outstanding independent research. Open to only grade 12 https://www.societyforscience.org/regeneron-sts/", "Stockholm Junior Water Prize: International competition that challenges high school students to conduct research on water-related issues, including water quality, resource management, and sustainability. Open to ages 15-20 https://siwi.org/stockholm-junior-water-prize/"] },
     
     { title: "Theater", description: "Focuses on telling stories and conveying emotions through live performances, combining acting, dialogue, music, and stagecraft to engage and captivate an audience.", competitions: ["Princeton University Ten-Minute Play Contest: Invites students to submit original short plays, encouraging creativity in young playwrights to explore unique narratives and compelling dialogue. Open to only grade 11 https://arts.princeton.edu/about/opportunities/high-school-contests/ten-minute-play-contest/", "YoungArts: Encourages young artists to submit work in various categories, including visual arts, writing, film, and theater. Selected winners receive scholarships, mentorship, and performance opportunities along with the chance to participate in exclusive workshops. Open to grades 10-12 (ages 15-18) https://youngarts.org/?_vsrefdom=adwords&gad_source=1&gclid=CjwKCAjw-qi_BhBxEiwAkxvbkJViu0csW5Dopt7AbpU2r82tIZKVaPiZmEEORevJRb5DW6ha3IMV8RoCfWIQAvD_BwE"] },
     
     { title: "Writing", description: "Focuses on language, literature, and composition, specifically reading and writing to understand and communicate ideas effectively.", competitions: ["Jane Austen Society Essay Contest: Invites students to analyze and write about themes, characters, and historical contexts in Jane Austen’s works, fostering a deeper appreciation for her literature. Open to grades 9-12 https://jasna.org/programs/essay-contest/", "John Locke Institute Essay Competition: Encourages students to develop the characteristics that create into great writers: independent thought, depth of knowledge, clear reasoning, critical analysis and persuasive style while exploring a wide range of interesting questions. Open to ages 15-18 https://www.johnlockeinstitute.com/essay-competition", "National Scholastic Art & Writing Awards: Recognizes creative excellence in writing, offering students opportunities for scholarships and national recognition. Open to grades 7-12 https://www.artandwriting.org/awards/how-to-enter/", "Princeton Leonard L. Milberg ’53 High School Poetry Prize: Recognizes outstanding work by student writers, encouraging students to showcase their talent and creativity through the power of poetry. Open to only grade 11 https://arts.princeton.edu/about/opportunities/high-school-contests/poetry-contest/", "SPJ/JEA High School Essay Contest: Prompts students to explore the importance of journalism and the First Amendment by writing essays on a given prompt related to freedom of the press and ethics. Open to grades 9-12 https://jea.org/awards/spj-jea-high-school-essay-contest/", "The Bennington Young Writers Awards: Invites students to submit original poetry, fiction, and nonfiction works, providing an opportunity for young writers to showcase their creativity and literary talent. Open to grades 9-12 https://www.bennington.edu/events/young-writers-awards", "YoungArts: Encourages young artists to submit work in various categories, including visual arts, writing, film, and theater. Selected winners receive scholarships, mentorship, and performance opportunities along with the chance to participate in exclusive workshops. Open to grades 10-12 (ages 15-18) https://youngarts.org/?_vsrefdom=adwords&gad_source=1&gclid=CjwKCAjw-qi_BhBxEiwAkxvbkJViu0csW5Dopt7AbpU2r82tIZKVaPiZmEEORevJRb5DW6ha3IMV8RoCfWIQAvD_BwE"] },
 ];
 async function fetchCompetitions(dictionaries) {
    const response = await fetch('competitions.json');
    const competitionsData = await response.json();
    dictionaries.forEach(dictionary => {
         dictionary.competitions = competitionsData.competitions[dictionary.title];
    });
 }
 await fetchCompetitions(data);
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
 window.addEventListener('load', showAllCompetitions);
