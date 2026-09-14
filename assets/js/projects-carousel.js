document.addEventListener("DOMContentLoaded", () => {

    const grid = document.getElementById("projects-grid");
    const prevButton = document.getElementById("projects-prev");
    const nextButton = document.getElementById("projects-next");
    const indicators = document.querySelectorAll(".project-indicator");
    const categoryLabel = document.querySelector(".project-carousel-label");
    const categoryDescription = document.querySelector(".project-carousel-description");

    if (!grid || !prevButton || !nextButton) {
        return;
    }

const categories = [
    {
        id: "featured",
        label: "FEATURED",
        description: "Selected work that best represents my current focus and profile."
    },
    {
        id: "recent",
        label: "RECENT",
        description: "Recent work and projects currently in development."
    },
    {
        id: "technical",
        label: "TECHNICAL DEPTH",
        description: "Projects that explore deeper technical and engineering challenges."
    }
];

    let currentIndex = 0;

    const projects = Array.from(
        grid.querySelectorAll(".project-card")
    );


function showCategory(index) {

    currentIndex = index;

    const category = categories[currentIndex];


    // Get projects belonging to this category

    const categoryProjects = projects.filter(project => {

        const projectCategories =
            project.dataset.projectCategories
                .split(" ");

        return projectCategories.includes(category.id);

    });


    // Sort projects according to the category-specific order

categoryProjects.sort((a, b) => {

    const orderA =
        parseInt(a.dataset[`${category.id}Order`] || "999");

    const orderB =
        parseInt(b.dataset[`${category.id}Order`] || "999");

    return orderA - orderB;

});


categoryProjects.forEach(project => {
    grid.appendChild(project);
});


    // Hide all projects

    projects.forEach(project => {
        project.style.display = "none";
    });


    // Show only the first three projects

    categoryProjects
        .slice(0, 3)
        .forEach(project => {
            project.style.display = "";
        });


    // Update category title

    if (categoryLabel) {
        categoryLabel.textContent = category.label;
    }

    if (categoryDescription) {
    categoryDescription.textContent = category.description;
}


    // Update indicators

    indicators.forEach((indicator, indicatorIndex) => {

        indicator.classList.toggle(
            "active",
            indicatorIndex === currentIndex
        );

    });

}


    // Previous

    prevButton.addEventListener("click", () => {

        const newIndex =
            (currentIndex - 1 + categories.length)
            % categories.length;

        showCategory(newIndex);

    });


    // Next

    nextButton.addEventListener("click", () => {

        const newIndex =
            (currentIndex + 1)
            % categories.length;

        showCategory(newIndex);

    });


    // Indicators

    indicators.forEach((indicator, index) => {

        indicator.addEventListener("click", () => {
            showCategory(index);
        });

    });


    // Initial state

    showCategory(0);

});