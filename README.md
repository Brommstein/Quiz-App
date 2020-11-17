Creation of the Quiz App for Thinkful

Requirements:
 Home screen w/ start button
 Prompted through series of 5 multiple choice questions
    Asked one at a time
 Cannot skip questions
 Should be able to see what question the user is on and score
    (ie... question 7 of 10, score 5 correct & 2 wrong)
 After submitting an answer, should receive feedback about answer and
    corrected if incorrect
 Display final score at end of quiz (How many correct)
 Be able to start new quiz

Technical Requirements:
 Include a render() function that regens view each time store is updated
 Include single-purpose template generation function
 Include event handler functions
 NOT add additional HTML elements to boiler plate code's index.html
 Render answer choices in a <form>
 Use semantic HTML, along with CSS and jQuery
 Follow a11y best practices
 Be fully usable by keyboard
 Use responsive design

Plans:
 League of Legends based quiz based on 1v1 matches
 Example: Who will win? (Random character vs Random character)
 
    A. Tank
    B. Fighter
    C. Mage
    D. Assassin
    E. Support
    F. Marksman

    Tank beats Assassin & Support
    Fighter beats Tank & Assassin
    Mage beats Fighter & Marksman
    Assassin beats Marksman & Mage
    Support beats Mage & Fighter
    Marksman beats Support & Tank
 