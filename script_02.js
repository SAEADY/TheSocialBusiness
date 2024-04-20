document.addEventListener("DOMContentLoaded", function() {
    var icons = document.querySelectorAll('.icon');
    
    setInterval(function() {
        // Reset previous red icons
        icons.forEach(function(icon) {
            icon.classList.remove('red');
        });

        // Randomly select 2 icons and turn them red
        var randomIndexes = getRandomIndexes(icons.length, 2);
        randomIndexes.forEach(function(index) {
            icons[index].classList.add('red');
        });
    }, 5000); // Change the interval as needed (5000ms = 5 seconds)
});

function getRandomIndexes(max, count) {
    var indexes = [];
    while (indexes.length < count) {
        var randomIndex = Math.floor(Math.random() * max);
        if (!indexes.includes(randomIndex)) {
            indexes.push(randomIndex);
        }
    }
    return indexes;
}