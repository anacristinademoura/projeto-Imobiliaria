window.addEventListener('scroll', function () {
    var seta = document.getElementsByClassName('seta');

    for (var i = 0; i < seta.length; i++) {
        if (window.scrollY > 0) {
            seta[i].style.display = 'block';
        } else {
            seta[i].style.display = 'none';
        }
    }
});