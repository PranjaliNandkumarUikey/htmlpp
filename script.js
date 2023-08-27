document.addEventListener('DOMContentLoaded', () => {
    const roomContainers = document.querySelectorAll('.container > .Room');
    const shuffleButton = document.getElementById('ShuffleButton');

    // Function to shuffle array
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function shuffleGirls() {
        const allGirlRows = Array.from(document.querySelectorAll('.container table tr:nth-child(n+2)'));
        const girlNames = allGirlRows.map(row => row.querySelector('td:nth-child(2)').textContent.trim());
        const shuffledGirlNames = shuffleArray(girlNames);

        allGirlRows.slice(0, 30).forEach((girlRow, i) => {
            const nameCell = girlRow.querySelector('td:nth-child(2)');
            nameCell.textContent = shuffledGirlNames[i];
        });
    }

    // Initial shuffle on page load
    shuffleGirls();

    // Add click event listener to the shuffle button
    shuffleButton.addEventListener('click', shuffleGirls);
});