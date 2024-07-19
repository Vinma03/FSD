//sample job data
const jobListings=[
    {
        title:'Web Developer' ,type:'Full Time',location:'Coimbatore',salary:60000    
    },
    {
        title:'Web Developer' ,type:'Part Time',location:'Coimbatore',salary:30000    
    },
    {
        title:'Software Developer' ,type:'Part Time',location:'Chennai',salary:25000    
    },
    {
        title:'Software Developer' ,type:'Full Time',location:'Chennai',salary:50000    
    },
    { title: 'UX Designer', type: 'All', location: 'Bangalore  ', salary: 50000},
    { title: 'Software Developer', type: 'All', location: 'Bangalore  ', salary: 80000},
    {
        title:'Junior Software Developer' ,type:'Part Time',location:'Kochi',salary:40000    
    },
    {
        title:'Junior Software Developer' ,type:'Full Time',location:'Kochi',salary:80000    
    },
    {
        title:'Frontend Developer' ,type:'Full Time',location:'Delhi',salary:90000    
    },
    {
        title:'Frontend Developer' ,type:'All',location:'Delhi',salary:70000    
    },
    { title: 'Backend Developer', type: 'All', location: 'Pune', salary: 35000},
    { title: 'Backend Developer', type: 'Full Time', location: 'Punjab', salary: 60000},
    { title: 'Backend Developer', type: 'Part Time', location: 'Pune', salary: 40000}
// Add more job listings as needed
];
document.addEventListener('DOMContentLoaded', function () {
    const jobTypeFilter = document.getElementById('jobType');
    const locationFilter = document.getElementById('location');
    const salaryFilter = document.getElementById('salary');
    const salaryValue = document.getElementById('salaryValue');
    const filterBtn = document.getElementById('filterBtn');
    const jobListingsContainer = document.getElementById('jobListings');

// Populate the location dropdown with unique locations
populateLocationDropdown();

// Initial render with all job listings
renderJobListings(jobListings);

// Add event listener to the filter button
filterBtn.addEventListener('click', function() {
    filterJobListings();
});

// Update salary value display when the range input changes 

salaryFilter.addEventListener('input', function() { 
    salaryValue.textContent = salaryFilter.value;
});

// Function to render job listings 
function renderJobListings(jobs){
    jobListingsContainer.innerHTML ='';
    jobs.forEach(job => {
        const listingDiv = document.createElement('div');
        listingDiv.innerHTML =`<h3>${job.title}</h3><p>Type: ${job.type}</p><p>Location: ${job.location}</p><p>Salary: $${job.salary}</p>`; 
        jobListingsContainer.appendChild(listingDiv);
});
}

// Function to filter job listings based on user input

function filterJobListings() {
    const jobType = jobTypeFilter.value;
    const location = locationFilter.value.toLowerCase();
    const salary = parseInt(salaryFilter.value);
    const filteredJobs=jobListings.filter(job => {
        return (jobType === 'all' || job.type === jobType) &&
        (location === 'all' || job.location.toLowerCase() === location) &&(job.salary >= salary);
});
    renderJobListings(filteredJobs);
}
// Function to populate the location dropdown
function populateLocationDropdown() {
    const uniqueLocations = [...new Set(jobListings.map(job => job.location))];
    uniqueLocations.forEach(location => {
        const option = document.createElement('option');
        option.value = location;
        option.textContent = location;
        locationFilter.appendChild(option);
    });
}
});