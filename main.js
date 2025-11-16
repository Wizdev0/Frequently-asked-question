/* CHATGPT */

/* document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-items");

  faqItems.forEach(item => {
    item.addEventListener("click", () => {
      // Close any other open FAQ
      faqItems.forEach(other => {
        if (other !== item) {
          other.classList.remove("active");
        }
      });

      // Toggle current one
      item.classList.toggle("active");

      // Handle smooth height animation manually
      const answer = item.querySelector(".faq-answer");
      if (item.classList.contains("active")) {
        answer.style.maxHeight = answer.scrollHeight + "px";
      } else {
        answer.style.maxHeight = null;
      }
    });
  });
});
 */

/* MINE */


const change = document.querySelectorAll(".faq-items");

change.forEach((item) => {
  item.addEventListener("click", (e) =>{

    e.stopPropagation();
    
    change.forEach((other) => {
      if (other !== item) {
        other.classList.remove("active");
      }
    });

    item.classList.toggle("active");


    const answer = document.querySelector(".first-ans");
    if(item.classList.contains("active")) {
      answer.classList.toggle("active");
    } else {
      answer.classList.remove("active");
    }
  

  }); 
});



document.addEventListener("click", () => {
  change.forEach((item) => {
    item.classList.remove("active");
  });      

});




/* 
change.addEventListener("click", () => {
  change.classList.toggle("active");
}); */
/* answer.addEventListener("click", () => {
  answer.classList.toggle("active");
});
 */

