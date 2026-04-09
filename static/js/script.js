// === DARK MODE FIXED ===
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

function setDarkMode(isDark) {
    if (isDark) {
        document.documentElement.classList.add('dark');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    } else {
        document.documentElement.classList.remove('dark');
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    }
    localStorage.setItem('darkMode', isDark);
}

// Load saved preference
if (localStorage.getItem('darkMode') === 'true' || 
    (localStorage.getItem('darkMode') === null && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    setDarkMode(true);
} else {
    setDarkMode(false);
}

// Click handler
themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.classList.contains('dark');
    setDarkMode(!isDark);
});

// Mobile Menu
document.getElementById('mobile-btn').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.toggle('hidden');
});

// Skills with animation
const skillsData = [
    {name: "Python", level: 95, color: "yellow"},
    {name: "AI & Machine Learning", level: 85, color: "violet"},
    {name: "Deep Learning", level: 78, color: "blue"},
    {name: "Speech Recognition", level: 88, color: "pink"},
    {name: "Data Analysis (EDA)", level: 90, color: "emerald"},
    {name: "Jupyter Notebook", level: 95, color: "orange"},
    {name: "Cloud Computing", level: 72, color: "sky"},
];

function renderSkills() {
    const container = document.getElementById('skills-grid');
    container.innerHTML = skillsData.map(skill => `
        <div class="bg-white dark:bg-gray-800 p-6 rounded-3xl">
            <div class="flex justify-between mb-3">
                <span class="font-semibold">${skill.name}</span>
                <span class="font-mono">${skill.level}%</span>
            </div>
            <div class="skill-bar bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                <div class="skill-progress h-full bg-gradient-to-r from-${skill.color}-400 to-${skill.color}-600" style="width: 0%"></div>
            </div>
        </div>
    `).join('');

    // Animate when visible
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('.skill-progress').forEach(bar => {
                    bar.style.width = bar.parentElement.nextElementSibling ? bar.parentElement.nextElementSibling.textContent : '90%';
                });
            }
        });
    });
    observer.observe(container);
}

// Projects (MORE projects added from your GitHub)
let allProjects = [
    {id:1, title:"Hangman Game", category:"python", image:"https://picsum.photos/id/1015/800/600", desc:"Interactive Python Hangman game with ASCII art and clean logic.", tags:["Python","Game"], link:"https://github.com/Muntazer72/CodeAlpha_Hangman_Game"},
    {id:2, title:"Intelligent ChatBot", category:"ai", image:"https://picsum.photos/id/1005/800/600", desc:"Smart Python chatbot with conditional responses and fallback handling.", tags:["Python","AI"], link:"https://github.com/Muntazer72/CodeAlpha_Basic_ChatBot"},
    {id:3, title:"Speech-to-Text Converter", category:"ai", image:"https://picsum.photos/id/133/800/600", desc:"Converts audio files to text using Google Speech Recognition API.", tags:["Python","AI"], link:"https://github.com/Muntazer72/speech-to-text-python"},
    {id:4, title:"Smart Student Evaluation System", category:"ai", image:"https://picsum.photos/id/201/800/600", desc:"AI-powered system to evaluate student academic records.", tags:["Python","AI"], link:"https://github.com/Muntazer72/smart-student-evaluation-system"},
    {id:5, title:"Student Record Evaluator", category:"python", image:"https://picsum.photos/id/160/800/600", desc:"Python tool using variables and conditionals to grade students.", tags:["Python"], link:"https://github.com/Muntazer72/student-record-evaluator-python"},
    {id:6, title:"EDA on Liver Disease Dataset", category:"jupyter", image:"https://picsum.photos/id/180/800/600", desc:"Exploratory Data Analysis project using Jupyter Notebook.", tags:["Jupyter","Data"], link:"https://github.com/Muntazer72/Assignment3-EDA-Liver-Dataset"},
];

function renderProjects(filtered) {
    const container = document.getElementById('projects-grid');
    container.innerHTML = filtered.map(p => `
        <div onclick="showProjectModal(${p.id})" class="project-card cursor-pointer bg-white dark:bg-gray-800 rounded-3xl overflow-hidden hover:shadow-2xl transition-all">
            <img src="${p.image}" class="w-full h-48 object-cover">
            <div class="p-6">
                <h3 class="font-semibold text-2xl">${p.title}</h3>
                <p class="text-gray-600 dark:text-gray-400 mt-2 line-clamp-3">${p.desc}</p>
            </div>
        </div>
    `).join('');
}

function filterProjects(cat) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');
    const filtered = cat === 'all' ? allProjects : allProjects.filter(p => p.category === cat);
    renderProjects(filtered);
}

function showProjectModal(id) {
    const project = allProjects.find(p => p.id === id);
    document.getElementById('modal-image').src = project.image;
    document.getElementById('modal-title').innerHTML = project.title;
    document.getElementById('modal-desc').innerHTML = project.desc;
    document.getElementById('modal-link').href = project.link;
    document.getElementById('modal-tags').innerHTML = project.tags.map(t => `<span class="px-4 py-2 text-xs bg-gray-100 dark:bg-gray-700 rounded-3xl">${t}</span>`).join('');
    document.getElementById('project-modal').classList.remove('hidden');
    document.getElementById('project-modal').classList.add('flex');
}

function closeModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

// Init everything
window.onload = () => {
    renderSkills();
    renderProjects(allProjects);
    console.log("✅ Portfolio loaded with FIXED dark mode + professional background");
};