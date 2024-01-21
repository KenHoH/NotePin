const liat = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show1');
        }
    });
});
const hidden = document.querySelectorAll('.hidden1');
hidden.forEach((el) => liat.observe(el));