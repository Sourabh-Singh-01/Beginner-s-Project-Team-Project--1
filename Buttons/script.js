const button = document.querySelector('.follow-button');
const text = document.querySelector('.follow-button span');

button.addEventListener('mousemove', (e) => {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y - rect.height / 2) / 3;
    const rotateY = (x - rect.width / 2) / 3;

    button.style.transform = `translateZ(30px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    
    text.style.transform = `translate(${(x - rect.width / 2) / 6}px, ${(y - rect.height / 2) / 6}px)`;
});

button.addEventListener('mouseleave', () => {
    button.style.transform = 'translateZ(0) rotateX(0) rotateY(0)';
    text.style.transform = 'translate(0, 0)';
});
 