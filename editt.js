// Function to toggle the visibility of the edit form
function toggleEditForm(formId) {
    const form = document.getElementById(formId);
    form.style.display = (form.style.display === 'none' || form.style.display === '') ? 'block' : 'none';
}

// Function to save the edited experience
function saveExperience(experienceId, index) {
    const title = document.getElementById(`title${index}`).value;
    const company = document.getElementById(`company${index}`).value;
    const startDate = document.getElementById(`startDate${index}`).value;
    const endDate = document.getElementById(`endDate${index}`).value;
    const description = document.getElementById(`description${index}`).value;

    // Update the displayed values
    document.querySelector(`#${experienceId} .resume_box_title`).innerText = title;
    document.querySelector(`#${experienceId} .resume_conpany`).innerText = company;
    document.querySelector(`#${experienceId} .resume_date`).innerText = `${startDate} - ${endDate}`;
    document.querySelector(`#${experienceId} .resume_text`).innerText = description;

    // Hide the edit form
    toggleEditForm(`editForm${index}`);
}

// Function to delete an experience entry
function deleteExperience(experienceId) {
    const experienceBox = document.getElementById(experienceId);
    experienceBox.remove();
}
