const blogs = [
    {
    id: 1,
    title: "My Achievement In First Semester ",
    date: "April 6, 2026",
    category: "Technology",
    tags: ["Mechine-Learning",],
    excerpt: "How I built my very first Mechine Learning Model In Uet.",
    content: `
        <h1>Python and My First Logical Steps</h1>
        <p class="date">April 6, 2026 • Technology</p>
        
        <p>Stepping into the first semester of my Computer Engineering degree felt like entering a whole new world. The highlight was undoubtedly diving into Python. What started as learning basic syntax quickly evolved into building logic-driven projects. I began with the fundamentals, creating a Simple Bank System and a Calculator—tasks that taught me how to handle user input and manage data flow effectively.</p>

        <h3>The Mechine Learning</h3>
        <p>Living in Faisalabad, I realized that many local businesses didn't have a digital presence. I decided that my first project shouldn't just be a tutorial clone—it should be something real. I spent 48 hours straight (fueled by plenty of Chai) learning how CSS Flexbox actually works.</p>

        <h3>The Tech Stack</h3>
        <p>However, the real excitement began when I explored Machine Learning. I developed a predictive model to analyze Walmart sales data, specifically focusing on how seasonal holidays influence consumer behavior. It was fascinating to see how historical data can predict future trends, and this experience solidified my interest in data science and its practical applications in the real world.</p>
        
        <blockquote>
            "The best way to learn is to build something that breaks, and then figure out why."
        </blockquote>

        <h3>Major Challenges</h3>
        <p>The hardest part wasn't the code: it was the logic building.</p>

        <h3>What I Learnt</h3>
        <p>From mastering the logic of code to navigating the challenges of global disruption, this journey has taught me that true engineering is about adapting skills to solve problems in any environment.</p>
    `
},
    {
    id: 2,
    title: "Building Full-Stack Solutions with SQL",
    date: "Aprial 06, 2026",
    category: "Develepement",
    tags: ["database"],
    excerpt: "How I complete The Project Of Database",
    content: `
        <h1>Building Full-Stack Solutions with SQL</h1>
        <p class="date">Aprial 06, 2026 • Lifestyle</p>

        <p>In my second semester, the focus shifted from standalone scripts to interconnected systems. I mastered SQL and database management, which allowed me to understand how information is stored and retrieved at scale. This knowledge was put to the test when I built a Printing Management System website.</p>

        <h3>The 'What Is The Main Idea Of My Project?</h3>
        <p>This project was a complete end-to-end solution: I designed a database where users could upload their files, which I then processed and printed. Building this taught me the importance of backend stability and user experience. Seeing a digital file transition into a physical document through a system I built from scratch was incredibly rewarding and showed me the power of web development in solving everyday campus challenges.</p>
        
        <blockquote>
            "Productivity isn't about doing more things; it's about doing the right things consistently."
        </blockquote>

        <h3>Tools I Use</h3>
        <p>To keep my life from falling apart, I rely on a very small set of tools:</p>
        <ul>
            <li><strong>Notion:</strong> For my university timetable and project roadmap.</li>
            <li><strong>Google Calendar:</strong> To block out study sessions.</li>
            <li><strong>VS Code:</strong> Obviously!</li>
        </ul>

        <h3>Advice for Fellow Students</h3>
        <p>Don't wait for the semester break to start your portfolio. Build 15 minutes a day if you have to. Those small commits add up to a career-ready GitHub profile by the time you graduate.</p>
    `
},
    {
    id: 3,
    title: "Education Under Shadow – The Impact of Global Conflict",
    date: "April 6, 2026",
    category: "Technology",
    tags: ["War"],
    excerpt: "What is the effect of war on education.",
    content: `
        <h1>US,Isrial and Iran War Effects </h1>
        <p class="date">April 6, 2026 • Technology</p>

        <p>My third blog entry is more somber, focusing on how global geopolitics directly affect our local lives. The escalating conflict involving the US, Israel, and Iran has sent ripples far beyond their borders, reaching even our lecture halls here in Pakistan. Due to the resulting regional instability and security concerns, our university was forced to close for 20 days.</p>

        <h3>Effect Of War On Practical Education</h3>
        <p>These closures have had a significant impact on our academic progress, particularly regarding practical study. In engineering, hands-on lab work is irreplaceable; losing weeks of access to equipment and collaborative environments stalls the momentum of learning. It is a stark reminder that as students, we do not live in a vacuum—global events have a tangible, often disruptive, effect on our education and our future.</p>
 `
},
];

// Render blogs function
function renderBlogs(blogsToShow, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = "";

    if (blogsToShow.length === 0) {
        container.innerHTML = `<p style="grid-column:1/-1;text-align:center;padding:3rem;color:#94a3b8;">No blogs found. Try different keywords.</p>`;
        return;
    }

    blogsToShow.forEach(blog => {
        const card = document.createElement("div");
        card.className = "blog-card";
        card.innerHTML = `
            <div class="blog-content">
                <p style="color:#64748b;font-size:0.9rem;">${blog.date} • ${blog.category}</p>
                <h3>${blog.title}</h3>
                <p class="excerpt">${blog.excerpt}</p>
                <div class="tags">
                    ${blog.tags.map(tag => `<span class="tag">#${tag}</span>`).join("")}
                </div>
                 <div class="see-full"  onclick="event.stopImmediatePropagation(); openBlogModal(${blog.id})">
                    See Full Story →
                </div>
            </div>
        `;
        card.onclick = () => openBlogModal(blog.id);
        container.appendChild(card);
    });
}

window.openBlogModal = function(id) {
    const blog = blogs.find(b => b.id === id);
    if (!blog) return;
    const modal = document.getElementById("blog-modal");
    const modalBody = document.getElementById("modal-body");
    modalBody.innerHTML = blog.content;
    modal.style.display = "flex";
};

function setupModal() {
    const modal = document.getElementById("blog-modal");
    const closeBtn = document.getElementById("modal-close");
    if (closeBtn) closeBtn.onclick = () => modal.style.display = "none";
    modal.onclick = (e) => { if (e.target === modal) modal.style.display = "none"; };
}

function setupSearch() {
    const globalSearch = document.getElementById("global-search");
    const categorySearch = document.getElementById("category-search");
    const dropdown = document.getElementById("search-results");

    function handleSearch(input, isGlobal = false) {
        input.addEventListener("input", () => {
            const term = input.value.toLowerCase().trim();
            if (term.length < 1) {
                if (dropdown) dropdown.style.display = "none";
                return;
            }

            const filtered = blogs.filter(b =>
                b.title.toLowerCase().includes(term) ||
                b.excerpt.toLowerCase().includes(term) ||
                b.tags.some(t => t.toLowerCase().includes(term))
            );

            if (isGlobal && dropdown) {
                let html = "";
                filtered.forEach(b => html += `<div onclick="openBlogModal(${b.id}); document.getElementById('global-search').value='';">${b.title}</div>`);
                dropdown.innerHTML = html || `<div style="padding:16px;opacity:0.6;">No results found</div>`;
                dropdown.style.display = "block";
            } else if (!isGlobal) {
                renderBlogs(filtered, "categories-grid");
            }
        });
    }

    if (globalSearch) handleSearch(globalSearch, true);
    if (categorySearch) handleSearch(categorySearch, false);
}

function setupContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = form.querySelector('button');
        const originalText = submitBtn.textContent;

        submitBtn.textContent = "Message Sent ✓";
        submitBtn.style.background = "#22c55e";
        submitBtn.disabled = true;

        setTimeout(() => {
            form.reset();
            submitBtn.textContent = originalText;
            submitBtn.style.background = "";
            submitBtn.disabled = false;
        }, 2000);
    });
}

function loadTagsPage() {
    const cloud = document.getElementById("tags-cloud");
    if (!cloud) return;

    const allTags = [...new Set(blogs.flatMap(b => b.tags))];
    cloud.innerHTML = allTags.map(tag => `
        <span class="tag-chip" onclick="filterByTag('${tag}')">#${tag}</span>
    `).join("");
}

window.filterByTag = function(tag) {
    const filtered = blogs.filter(b => b.tags.includes(tag));
    renderBlogs(filtered, "tags-grid");
};

function init() {
    setupModal();
    setupSearch();
    setupContactForm();

    // Home page
    if (document.getElementById("featured-grid")) {
        renderBlogs(blogs, "featured-grid");
    }

    // Categories page - Show ALL blogs by default
    if (document.getElementById("categories-grid")) {
        renderBlogs(blogs, "categories-grid");   // This ensures all blogs appear immediately
    }

    // Tags page
   // Tags page
if (document.getElementById("tags-cloud")) {
    loadTagsPage();
}

    // Burger menu
    const burger = document.getElementById("burger");
    const mobileMenu = document.getElementById("mobile-menu");
    if (burger && mobileMenu) {
        burger.addEventListener("click", () => mobileMenu.classList.toggle("active"));
    }
}

window.onload = init;
