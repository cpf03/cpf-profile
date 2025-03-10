var funFacts = [
    "I love the beach, but the idea of swimming in the open sea? Nope!",
    "I've lost count of how many times I've rewatched The Big Bang Theory.",
    "I've read the Harry Potter books and watched the movies more than twice... okay more than twice.",
    "Hot coffee is a must... yes, even in the middle of summer.",
    "I can solve a Rubik's Cube in less than two minutes... most of the time.",
    "I somehow manage to watch TV and scroll through my phone at the same time.",       
    "There's always a new pair of running shoes on my wishlist!",
    "Being an astronaut has always been my greatest dream, and honestly, it still is.",
    "I'm still holding onto hope that GRRM will finish A Song of Ice and Fire... someday"
];

function showfunFact() {
    var randomfunFact = Math.floor(Math.random()*(funFacts.length));
    document.getElementById('pfunfact').innerHTML = funFacts[randomfunFact];
    document.getElementById('pfunfact').style.display = "block";

    clearTimeout(window.hideFunFact);

    window.hideFunFact = setTimeout(function() {
        document.getElementById('pfunfact').style.display = "none";
    }, 4800);
}