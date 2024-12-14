// Sample question pools
const sets = {
    A: [
        "https://drive.google.com/file/d/1bU5Nv2KKnQj4F4R51eB4lVv3Y6Ad8wL3/view?usp=sharing",
    ],
    B: [
        "https://drive.google.com/file/d/1SsAt-rNvaHYyUStuOatt-Sjn_iRfv2B8/view?usp=sharing",
    ],
};

// Roll number to set mapping for divisions
const rollNumberToSet = {
    CS1: {
        "1": "B",
        "2": "B",
        "3": "B",
        "4": "A",
        "5": "A",
        "6": "B",
        "7": "B",
        "8": "A",
        "9": "B",
        "10": "B",
        "11": "A",
        "12": "B",
        "13": "B",
        "14": "A",
        "15": "B",
        "16": "B",
        "17": "B",
        "18": "B",
        "19": "A",
        "20": "A",
        "21": "A",
        "22": "A",
        "23": "A",
        "24": "A",
        "25": "B",
        "26": "B",
        "27": "A",
        "28": "A",
        "29": "A",
        "30": "A",
        "31": "A",
        "32": "B",
        "33": "A",
        "34": "B",
        "35": "A",
        "36": "A",
        "37": "A",
        "38": "A",
        "39": "B",
        "40": "A",
        "41": "A",
        "42": "B",
        "43": "B",
        "44": "B",
        "45": "B",
        "46": "B",
        "47": "A",
        "48": "A",
        "49": "A",
        "50": "A",
        "51": "A",
        "52": "B",
        "53": "A",
        "54": "B",
        "55": "B",
        "56": "B",
        "57": "B",
        "58": "B",
        "59": "B",
        "60": "B",
        "61": "B",
        "62": "A",
        "63": "A",
        "64": "B",
        "65": "A",
        "66": "B",
        "67": "B",
        "68": "B",
        "69": "A",
        "70": "A",
        "71": "B",
        "72": "A",
        "73": "A",
        "74": "A",
        "75": "A",
        "76": "A",
        "77": "B",
        "78": "A",
        "79": "B",
        "80": "B",
        "81": "B",
        "82": "A",
        "83": "A",
        "84": "A",
        "85": "A",
        "86": "A",
        "87": "A",
        "88": "A",
    },
    ME: {
        "1": "B",
        "2": "B",
        "3": "B",
        "4": "B",
        "5": "A",
        "6": "A",
        "7": "A",
        "8": "A",
        "9": "B",
        "10": "B",
        "11": "A",
        "12": "B",
        "13": "A",
        "14": "B",
        "15": "A",
        "16": "B",
        "17": "A",
        "18": "B",
        "19": "B",
        "20": "A",
        "21": "B",
        "22": "A",
        "23": "B",
        "24": "B",
        "25": "B",
        "26": "B",
        "27": "A",
        "28": "B",
        "29": "B",
        "30": "A",
        "31": "B",
        "32": "A",
        "33": "B",
        "34": "A",
        "35": "A",
        "36": "B",
        "37": "B",
        "38": "A",
        "39": "B",
        "40": "B",
        "41": "B",
        "42": "B",
        "43": "B",
        "44": "A",
        "45": "A",
        "46": "B",
        "47": "A",
        "48": "B",
        "49": "B",
        "50": "B",
        "51": "A",
        "52": "A",
        "53": "A",
        "54": "A",
        "55": "A",
        "56": "B",
        "57": "B",
        "58": "A",
        "59": "A",
        "60": "A",
        "61": "A",
        "62": "B",
        "63": "A",
        "64": "B",
        "65": "B",
        "66": "B",
        "67": "B",
        "68": "A",
        "69": "B",
        "70": "A",
        "71": "A",
        "72": "B",
        "73": "A",
        "74": "B",
        "75": "A",
        "76": "B",
        "77": "B",
        "78": "B",
        "79": "B",
        "80": "A",
        "81": "A",
        "82": "B",
        "83": "B",
        "84": "B",
        "85": "B",
        "86": "A",
        "87": "A",
        "88": "B",
        "89": "A",
        "90": "A",
        "91": "A",
        "92": "A",
    },
};

// Function to get questions for a specific division and roll number
function getQuestionsForDivisionAndRollNumber(division, rollNumber) {
    const divisionData = rollNumberToSet[division];
    if (!divisionData) {
        return ["Invalid Division"];
    }
    const setKey = divisionData[rollNumber];
    if (!setKey) {
        return ["Invalid Roll Number"];
    }
    return sets[setKey] || [];
}

// Event listener for form submission
document.getElementById('quiz-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const division = document.getElementById('division').value.trim();
    const rollNumber = document.getElementById('rollNumber').value.trim();
    const quizContainer = document.getElementById('quiz-container');
    const questionsList = document.getElementById('questions-list');

    // Clear any previous questions
    questionsList.innerHTML = '';

    // Get the questions for the division and roll number
    const studentQuestions = getQuestionsForDivisionAndRollNumber(division, rollNumber);

    // Display the questions as clickable links
    studentQuestions.forEach((question, index) => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = question;
        link.textContent = `Question Set ${index + 1}`;
        link.target = '_blank'; // Open the link in a new tab
        listItem.appendChild(link);
        questionsList.appendChild(listItem);
    });

    // Show the quiz container
    quizContainer.style.display = 'block';
});
