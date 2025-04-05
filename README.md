# An Open Source Search Engine For High School Competitions (Beta)
https://mi-lrn.github.io/highschool-competitions/

#### Purpose: Allow U.S. students to explore high school opportunities in all categories and difficulties

## Usage:

- To search for competitions by subject category, simply type in the subject in the search bar, and click on the subject you want to view.
- We will be adding other ways to filter soon. Don't see your favorite subject? Check contribution section below.
- To search for specific competitions, simply ctr/cmd f and search for the competition by name.
- Don't see your favorite competition? Check contribution section below.

- Like this repository? --> Please leave us a ★

## What does everything mean?

### Difficulties
- Difficulties are provided to competitions that are easy to judge. If a competition you have participated in does not have a difficulty yet, and you have one in mind, check the contribution section below.
- Lowest Difficulty: ★☆☆☆☆
- Highest Difficulty: ★★★★★
- Difficulty is normally proportional to prestige, but not always.
### Descriptions
- Descriptions provide a brief overview of the competition.
- Descriptions may include age requirements, grade requirements, and prize rewards.
- Right below the description, there will be a link to the competition homepage, so you can verify dates, requirements, and continuity.
- We are planning on expanding descriptions in the future to contain more information. If you would like to modify a description, please check the contribution section below.

## Contributions
### Thank you for considering a contribution to this project; all help is appreciated.

### Adding New Competitions
- To start, please double check that the competition does not already exist before opening a pull request.
- Next, go to the competitions.json file and navigate to the correct section(s) the new competition would fall under.
- DISCLAIMER: A competition can fall under more than one category. If you think your new entry falls under more than one, repeat these steps for the other category.
- Then fork the project and add your competition entry in so that each list remains in alphabetical order (do not forget commas when necessary).
- Your competition entry should look like this:

#### "[Name of Competition] (Optional) => [(Difficulty [Stars]): [Description (Normally ends with age/grade eligibility)] [Homepage]"

#### Ex. "Wharton Global High School Investment Competition (Difficulty ★★★★☆): Teams manage a virtual portfolio, making investment decisions based on market conditions and economic factors. Teams compete for the best portfolio performance while gaining valuable experience in financial analysis and decision-making. Open to grades 9-12 https://globalyouth.wharton.upenn.edu/competitions/investment-competition/"

#### Ex. "USA National Chemistry Olympiad: Challenges students with advanced chemistry concepts through rigorous exams, with top performers advancing to represent the US at the International Chemistry Olympiad. Open to grades 9-12 https://www.acs.org/education/olympiad.html"

- Once you're done, make sure to make a new pull request on this repository, requesting to merge your main branch with this repository's main branch. Mantainers should be allowed to make edits to the pull request in case there is a basic error.

### Adding New Categories
- To start, please double check that the cateogry does not already exist before opening a pull request.
- Make sure to fork the repository.
- Next, go to the index.js file and create a new dictionary in the correct place, so the list of dictionaries remains in alphabetical order with regards to the title. Do not forget to add a comma after it if necessary.
- Your new entry should look like this:

#### { title: [title], description: [description], competitions: [] }

#### Ex. { title: "Biology", description: "Focuses on living organisms, their structures, functions, interactions, and the processes that sustain life.", competitions: [] }

- Then, navigate to the competitions.json file in your forked repository.
- Find where your new entry is supposed to go alphabetically. Then add in your entry following this template (using commas where necessary):

#### "[Category title from the index.js file]": [
#### ]

#### Ex. "Biology": [
#### ]

- IMPORTANT: After completing this step, you must add something inside of your category, or the website will break.
- You must add at least one competition in your new category before creating a pull request.
- Follow the steps in the Adding New Competitions section if you are confused about how to do this.
- Once all these steps have been completed, please make a new pull request on this repository, requesting to merge your main branch with this repository's main branch. Mantainers should be allowed to make edits to the pull request in case there is a basic error.

### Difficulties & Descriptions

- These changes are pretty self explanatory, just refer to other entries in the competition.json file and follow the same format.
- After you add the necessary changes to your forked repository, please make a new pull request on this repository, requesting to merge your main branch with this repository's main branch. Mantainers should be allowed to make edits to the pull request in case there is a basic error.

### I Have No Clue What You're Talking About

- That's fine, if you don't understand the instructions above, you can still contribute.
- Create a new Issue in the Issues tab describing a feature request, competition request, or category request, and provide as much information as possible.

### Other Contributions

- If you would like to contribute to another part of this project (that isn't self explanatory or directly addressed in this doc), you may do so.
- Make sure in your pull request/issue you are clear about what changes you are making/want to make.
- If you are submitting a pull request, make sure the code runs without errors, we will also test it to make sure.
