window.onload = function() {
    loadHeroes();
    var list = document.getElementById('list');
    var addBtn = document.getElementById('addBtn');
    addBtn.addEventListener('click', addHero);

    function loadHeroes()
    {
        $.ajax({
            url: 'https://us-central1-itfighters-hero.cloudfunctions.net/api/hero'
        })
        .done(function(res) {
            for (i = 0; i < res.length; i++) {
                var nextHero = document.createElement('li');
                nextHero.innerHTML = res[i].superhero+": " +res[i].publisher;
                list.appendChild(nextHero);
            }
        });
    }
    function addHero() {
        var superhero = document.getElementById('superheroInput');
        var publisher = document.getElementById('publisherInput');
        $.post('https://us-central1-itfighters-hero.cloudfunctions.net/api/hero', {
            superhero: superhero.value, 
            publisher: publisher.value
        })
        .done(()=>{
            loadHeroes()
        });  
    }
}