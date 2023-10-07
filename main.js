const quizData = [
    {
        question: "P. f(x) is continuous for all real values of x,  Q. f(x) is differentiable for all real values of x ",
        options: ["P is true and Q is false.", "P is false and Qis true.", "Both P and Q are true ", "Both P and Q are false"],
        correctAnswer: "P is true and Q is false.",
    },
    {
        question: "Let S be a set of nelements. The number of ordered pairs in the largest and the smallest equivalence relations on S are",
        options: ["n and n", "n^2 and n", "n^2 and 0", "n and 1"],
        correctAnswer: "n^2 and n",
    },
    {
        question: "What is the maximum number of different Boolean functions involving n Boolean variables?",
        options: ["n^2", "2^n", "2^2n", "2^(n^2)"],
        correctAnswer: "2^2n",
    },
    {
        question: "Let G be the non-planar graph with the minimum possible number of edges. Then G has",
        options: ["10 edges and 6 vertices", "10 edges and 5 vertices ", "9 edges and 6 vertices", "9 edges and 5 vertices "],
        correctAnswer: "9 edges and 6 vertices ",
    },
    {
        question: "Which of the following problems is undecidable? ",
        options: ["Membership problem for CFGs ", "Ambiguity problem for CFGs. ", "Finiteness problem for FSAs. ", "Equivalence problem for FSAs. "],
        correctAnswer: "Ambiguity problem for CFGs. ",
    },
    {
        question: "Which of the following is TRUE?",
        options: ["Every subset of a regular set is regular.", "Every finite subset of a non-regular set is regular. ", "The union of two non-regular sets is not regular. ", "Infinite union of finite sets is regular. "],
        correctAnswer: "Every finite subset of a non-regular set is regular.",
    },
    {
        question: "How many 3-to-8 line decoders with an enable input are needed to construct a 6-to-64 line decoder without using any other logic gates?",
        options: ["7", "8", "9", "10"],
        correctAnswer: "9",
    },
    {
        question: "Consider the following Boolean function of four variables: f(w,x,y,z) = ∑(1,3,4,6,9,11,12,14) The function is:",
        options: ["independent of one variables.", "independent of two variables. ", "independent of three variables. ", "dependent on all the variables."],
        correctAnswer: "independent of two variables.",
    },
    {
        question: "Consider a 4-way set associative cache consisting of 128 lines with a line size of 64 words. The CPU generates a 20-bit address of a word in main memory. The number of bits in the TAG, LINE and WORD fields arerespectively:",
        options: ["9,6,5 ", "7, 7, 6 ", "7, 5, 8 ", "9, 5, 6"],
        correctAnswer: "9,5,6",
    },
    {
        question: "Consider a disk pack with 16 surfaces, 128 tracks per surface and 256 sectors per track. 512 bytes of data are stored in a bit serial manner in a sector. The capacity of the disk pack and the number of bits required to specify a particular sector in the disk are respectively:",
        options: ["256 Mbyte, 19 bits ", "256 Mbyte, 28 bits", "512 Mbyte, 20 bits ", "64 Gbyte, 28 bit  "],
        correctAnswer: "256 Mbyte, 19 bits ",
    },
    {
        question: "The height of a binary tree is the maximum number of edges in any root to leaf path. The maximum number of nodes in a binary tree of height h is:",
        options: ["2^(h)−1", "2^(h−1) -1", "2^(h+1)-1", "2^(h)+1"],
        correctAnswer: "2^(h+1)-1",
    },
    {
        question: "The maximum number of binary trees that can be formed with three unlabeled nodes is:",
        options: ["1", "5", "4", "3"],
        correctAnswer: "5",
    },
    {
        question: "Which of the following sorting algorithms has the lowest worst-case complexity?",
        options: ["Merge sort", "Bubble Sort", "Quick Sort", "Selection Sort"],
        correctAnswer: "Merge sort",
    },
    {
        question: "Consider the following segment of C-code: int j, n;  j = 1; while (j <= n) j = j*2;  The number of comparisons made in the execution of the loop for any n > 0 is: Base of Log is 2 in all options.",
        options: ["CEIL(logn) + 2", "n", "CEIL(logn)", "FLOOR(logn) + 2"],
        correctAnswer: "FLOOR(logn) + 2",
    },
    {
        question: "Consider the following statements about user level threads and kernel level threads. Which one of the following statement is FALSE?",
        options: ["Context switch time is longer for kernel level threads than for user level threads.", "User level threads do not need any hardware support.", "Related kernel level threads can be scheduled on different processors in a multi-processor system. ", "Blocking one kernel level thread blocks all related threads."],
        correctAnswer: "Blocking one kernel level thread blocks all related threads.",
    },
    {
        question: "Which one of the following is a top-down parser?",
        options: ["Recursive descent parser.", "Operator precedence parser. ", "An LR(k) parser.", "An LALR(k) parser"],
        correctAnswer: "Recursive descent parser.",
    },
    {
        question: "In Ethernet when Manchester encoding is used, the bit rate is:",
        options: ["Half the baud rate.", "Twice the baud rate. ", "Same as the baud rate.", "None of the above "],
        correctAnswer: "Half the baud rate.",
    },
    {
        question: "Which one of the following uses UDP as the transport protocol?",
        options: ["HTTP", "Telnet", "DNS", "SMTP"],
        correctAnswer: "DNS",
    },
    {
        question: "How many different non-isomorphic Abelian groups of order 4 are there ",
        options: ["2", "3", "4", "5"],
        correctAnswer: "2",
    },
    {
        question: "Which of the following graphs has an Eulerian circuit? ",
        options: ["The complement of a cycle on 25 vertices", "A complete graph on 90 vertices ", "Any k-regular graph where kis an even number. ", "None of the above"],
        correctAnswer: "The complement of a cycle on 25 vertices",
    },
    {
        question: "Suppose we uniformly and randomly select a permutation from the 20! Permutations of 1, 2, 3 ,…..,20. What is the probability that 2 appears at an earlier position than any other even number in the selected permutation?",
        options: ["1/2", "1/10", "9!/20!", "None of the above "],
        correctAnswer: "1/10",
    },
    
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const questionTextElement = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const scoreContainer = document.getElementById("score-container");
const scoreElement = document.getElementById("score");
const nextButton = document.getElementById("next-button");


function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.innerText = `Question ${currentQuestion + 1}`;
    questionTextElement.innerText = currentQuizData.question;

    // Clear radio button selection
    const options = document.querySelectorAll("input[name='answer']");
    options.forEach((option) => {
        option.checked = false;
    });

    // Load answer options
    for (let i = 0; i < options.length; i++) {
        options[i].value = currentQuizData.options[i];
        options[i].nextElementSibling.innerText = `${String.fromCharCode(65 + i)}. ${currentQuizData.options[i]}`;
    }
}

function checkAnswer() {
    const selectedOption = document.querySelector("input[name='answer']:checked");
    if (!selectedOption) return;

    const userAnswer = selectedOption.value;
    const currentQuizData = quizData[currentQuestion];

    if (userAnswer === currentQuizData.correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        // Display quiz results
        scoreContainer.classList.remove("hidden");
        questionElement.innerText = "Quiz Completed";
        scoreElement.innerText = score;
        optionsContainer.style.display = "none";
        nextButton.style.display = "none";
    }
}

loadQuestion();

nextButton.addEventListener("click", function () {
    checkAnswer();
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        nextButton.disabled = true;
    }
});
