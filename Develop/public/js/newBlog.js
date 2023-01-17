const newBlogSubmit = async (event) => {
  event.preventDefault();

  const blogTitle = document.querySelector("#blog-title").value.trim();
  const blogMessage = document.querySelector("#blog-message").value.trim();

  if (blogTitle && blogMessage) {
    const response = await fetch(`/api/blogs`, {
      method: "POST",
      body: JSON.stringify({ blogTitle, blogMessage }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
      alert('Blog Created')
    } else {
      alert("Failed to create project");
    }
  }
};

document.querySelector(".new-blog").addEventListener("submit", newBlogSubmit);
