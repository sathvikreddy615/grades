const scores = [98, 55, 93, 90, 97, 92, 86, 69, 71, 62, 71, 74, 80, 96, 74, 84];
const grades = {
    F: 0,
    D: 0,
    C: 0,
    B: 0,
    A: 0
}

// https://github.com/nashville-software-school/client-side-mastery/blob/master/book-2-the-novice/chapters/JS_LOGIC_PRACTICE.md

// 1. Total Count of Each Grade

const totalOfEachGrade = () => {
    for (let i in scores) {
        if (scores[i] >= 90) {
            grades.A++;
        } else if (scores[i] >= 80 && scores[i] <= 89) {
            grades.B++;
        } else if (scores[i] >= 70 && scores[i] <= 79) {
            grades.C++;
        } else if (scores[i] >= 60 && scores[i] <= 69) {
            grades.D++;
        } else {
            grades.F++;
        }
    }

    console.log(`Total A's = ${grades.A}`);
    console.log(`Total B's = ${grades.B}`);
    console.log(`Total C's = ${grades.C}`);
    console.log(`Total D's = ${grades.D}`);
    console.log(`Total F's = ${grades.F}`);
}

totalOfEachGrade();

// 2. Lowest Score

const lowestScore = lowest => {
    let lowScore = Math.min.apply(null, lowest);
    console.log(`Lowest Score: ${lowScore}`);
}

lowestScore(scores);

// 3. Highest Score

const highestScore = highest => {
    let highScore = Math.max.apply(null, highest);
    console.log(`Highest Score: ${highScore}`);
}

highestScore(scores);

// 4. Most Grade Acheived

let currentGradeCount = 0;

// 5. Least Grade Achieved