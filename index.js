const list = document.querySelectorAll(".list");

      const accueil = document.querySelector(".accueil");
      const profile = document.querySelector(".profile");
      const portfolio = document.querySelector(".portfolio");
      const contact = document.querySelector(".contact");

      const one = document.querySelector(".one");
      const two = document.querySelector(".two");
      const three = document.querySelector(".three");
      const four = document.querySelector(".four");

      function handleObserver(entries) {
        entries.map((entry) => {
          if (entry.intersectionRatio >= 0.51) {
            setVisible(entry.target);
          }
        });
      }

      const observer = new IntersectionObserver(handleObserver, {
        threshold: [0.51],
      });

      one && observer.observe(one);
      two && observer.observe(two);
      three && observer.observe(three);
      four && observer.observe(four);

      function setVisible(item) {
        list.forEach((obj) => {
          obj.classList.remove("active");
        });
        if (item === one) {
          accueil.classList.add("active");
        } 
        else if (item === two) {
          profile.classList.add("active");
        } 
        else if (item === three) {
          portfolio.classList.add("active");
        } 
        else if (item === four) {
          contact.classList.add("active");
        }
        console.log(item);
      }