// Highlight menu item on scroll
const sections = document.querySelectorAll('.section');
const menuLinks = document.querySelectorAll('.menu li a');
const contentWrapper = document.querySelector('.content-wrapper');

contentWrapper.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (contentWrapper.scrollTop >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    menuLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// PDF download functionality using jsPDF
document.getElementById('downloadBtn').addEventListener('click', () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const stepsContent = document.getElementById('steps').innerText;
    doc.setFontSize(12);
    doc.text(stepsContent, 10, 10, { maxWidth: 190 });
    doc.save('MOMO_Preparation_Steps.pdf');
});
