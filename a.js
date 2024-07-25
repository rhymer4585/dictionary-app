document.addEventListener('DOMContentLoaded', () => {
    const wordInput = document.getElementById('word');
    const form = document.getElementById('a');
    const res = document.getElementById('res');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const wordValue = wordInput.value.trim();
        
        if (!wordValue) {
            res.innerHTML = '<p>Please enter a word</p>';
            return;
        }

        try {
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordValue}`);
            if (!response.ok) {
                throw new Error('Word not found');
            }
            const data = await response.json();

            const word = data[0].word;
            const meaning = data[0].meanings[0].definitions[0].definition;
            const sound = data[0].phonetics[0].audio;

            res.innerHTML = `
            
                <h2><strong>Word:</strong> ${word}</h2>
                <p>${data[0].meanings[0].partOfSpeech}
                <p><strong>Meaning:</strong> ${meaning}</p>


               
                ${sound ? `<audio controls><source src="${sound}" type="audio/mpeg">Your browser does not support the audio element.</audio>` : ''}
            `;
        } catch (error) {
            res.innerHTML = `<p>Error: ${error.message}</p>`;
        }
    });
});
