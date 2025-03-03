document.querySelectorAll(".faq-question").forEach((question) => {
    question.addEventListener("click", function () {
        let parent = this.parentElement;
        
        // Close other open FAQs
        document.querySelectorAll(".faq-item").forEach((item) => {
            if (item !== parent) {
                item.classList.remove("active");
            }
        });

        // Toggle the selected FAQ
        parent.classList.toggle("active");
    });
});

function sharePage(platform) {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("Check out this amazing profile of Saurabh Kumar! 🚀");

    let shareUrl = "";
    switch (platform) {
        case "facebook":
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
            break;
        case "twitter":
            shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
            break;
        case "linkedin":
            shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
            break;
        case "whatsapp":
            shareUrl = `https://api.whatsapp.com/send?text=${text} ${url}`;
            break;
    }
    
    window.open(shareUrl, "_blank");
}
