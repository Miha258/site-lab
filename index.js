document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('contactModal');
    const btns = document.querySelectorAll('.contact-btn');
    const span = document.getElementsByClassName('close')[0];
    const form = document.getElementById('contactForm');

    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            modal.style.display = 'flex';
        });
    });

    span.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Дані відправлено! З вами скоро зв\'яжуться.');
        modal.style.display = 'none';
    });
});
