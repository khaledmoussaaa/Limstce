const navigate = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
        const { top } = section.getBoundingClientRect();
        window.scrollTo({ top: window.pageYOffset + top, behavior: 'smooth' });
    }
};

export default navigate;