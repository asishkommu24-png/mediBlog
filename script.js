const posts = [
    {
        id: 1,
        title: "Iron Deficiency Anemia",
        content: "Iron deficiency anemia is the most common nutritional deficiency worldwide. It results from inadequate dietary intake, increased physiological demand, malabsorption, or chronic blood loss."
    },
    {
        id: 2,
        title: "Hypertension – Iceberg Phenomenon",
        content: "Hypertension is a classical example of the iceberg phenomenon in Community Medicine, where a large proportion of affected individuals remain asymptomatic and undiagnosed."
    }
];

// Homepage logic
if (document.getElementById("blog-container")) {
    const container = document.getElementById("blog-container");

    posts.forEach(post => {
        const div = document.createElement("div");
        div.className = "blog-card";
        div.innerHTML = `
            <h2>${post.title}</h2>
            <a href="post.html?id=${post.id}">Read More</a>
        `;
        container.appendChild(div);
    });
}

// Single post logic
if (document.getElementById("post-content")) {
    const params = new URLSearchParams(window.location.search);
    const postId = params.get("id");

    const post = posts.find(p => p.id == postId);

    document.getElementById("post-content").innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.content}</p>
    `;
}
