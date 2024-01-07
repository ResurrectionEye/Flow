document.addEventListener("DOMContentLoaded", () => {
  // 2023 ResurrectionEye --- All Right Reserved ; Don't steal it

  const url = String(window.location);
  const match = url.match(/\?.+/);

  if (!match) {
    console.log("no data");

    document.body.innerHTML += `
    <section class="no-clip">
      <h1>404</h1>
      <p>Uhh, where's a key...</p>
      <a href="../">Say hi to dungeon dragon... RIP</a>
    </section>
  `;
  } else {
    const data = match[0].replace("?", "");
    const books = {
      ws: {
        align: "int",
        pageCount: 6,
        // audio: 'https://drive.usercontent.google.com/download?id=1jd4rTaIp7wMmT-oG7dz6JnGg4DTkZElu&export=download&authuser=0&confirm=t&uuid=3686b751-48dd-48ef-bb83-a3bf83499fbd&at=APZUnTWgpEYV88REqFzFFuBqOJqW:1704632452527',
        0: {
          fill: null,
          text: `
      `,
          title: [
            "White Space",
            '"The world has no limits, only reality does."',
          ],
          license: "GitHub --- ResurrectionEye",
        },
        1: {
          text: `
      The realm of the white space was an enigmatic and infinite entity that existed beyond the confines of reality. It was a vast and boundless canvas of nothingness that stretched out endlessly into infinity. Although it was devoid of color, sound, and form, it was not empty. Instead, it was brimming with potential and the possibility of everything and nothing simultaneously.<br><br>

The white space was a place where the laws of physics and logic were irrelevant. Within the white space, there were no limits, no rules, no boundaries. It was a realm where reality had no grip and where the impossible could become possible. It was a place of absolute freedom, where one could be anything and do anything their heart desired.<br><br>

The white space was a place where anything was possible but nothing was guaranteed. It was a world where the impossible was possible, and the unimaginable was imaginable. It was a place of infinite potential where anything was possible but nothing was guaranteed. The white space was a place that was both terrifying and exhilarating at the same time.<br><br>

It was a place where the impossible became possible, where the unimaginable became imaginable, and where the inconceivable became conceivable. It was a world of infinite potential and endless possibilities. The white space was a place of infinite possibility, where anything and everything was possible.<br><br>

The white space was a world that was both familiar and strange at the same time. It was a place where the laws of physics and logic were irrelevant. It was a place where the impossible became possible and where the unimaginable became imaginable. It was a place of infinite potential where anything was possible but nothing was guaranteed.
      `,
        },
        2: {
          text: `
      The white space was an intriguing paradox, a contradiction. It was a realm of nothingness, yet it was everything all at once. It was empty, yet it was full of endless potential. It was silent, yet it was deafeningly loud. It was still, yet it was teeming with endless dynamism.<br><br>

The white space was an enigma, a mystery. It was a challenge to understand, a puzzle for the mind. It was a question without an answer, a riddle without a solution. It was a place that tested the limits of one's imagination and understanding. It was a place that required one to see beyond the limitations of the physical world and embrace the infinite possibilities of the universe.<br><br>

The white space was a dream, a fantasy. It was a vision of the future, a memory of the past. It was a hope, a fear, a joy, and a sorrow all at once. It was a place of infinite possibility, where anything and everything was possible. It was a place of endless potential where one could be anyone and do anything.<br><br>

The white space was a manifestation of the limitless, a world beyond reality. It was a place where the only limit was the lack of limits. It was a world of infinite potential and endless possibilities. It was a place where one could explore the depths of their imagination and the limits of their creativity.<br><br>

The white space was a place of freedom, where one could be anything and do anything. It was a place of infinite potential where one could create anything and everything. It was a world of infinite possibilities where one could explore the depths of their imagination and the limits of their creativity.
      `,
        },
        3: {
          text: `
      The white space was a paradox, a contradiction, a mystery, an enigma, and a dream all at once. It was a place of infinite potential and endless possibilities. It was a place where the impossible became possible and where the unimaginable became imaginable. It was a world of infinite potential where anything was possible but nothing was guaranteed.<br><br>
The realm of the white space was an enigmatic and boundless entity that existed beyond the confines of reality. It was an immense and unbounded canvas of nothingness that extended out infinitely into the cosmos. Although it was devoid of hue, resonance, and configuration, it was not barren. Instead, it was overflowing with potential and the possibility of everything and nothing simultaneously.<br><br>

The white space was where the laws of physics and rationale were irrelevant. Within the white space, there were no boundaries, no regulations, no limitations. It was a domain where reality had no sway, and where impossibilities could become possible. It was a place of complete autonomy, where one could be anything and do anything their heart desired.<br><br>

The white space was a place where anything was feasible but nothing was guaranteed. It was a world where the impossible was achievable, and the unimaginable was conceivable. It was a place of infinite potentiality where anything was feasible but nothing was secure. The white space was a place that was both distressing and thrilling at the same time.<br><br>

It was a domain where the impossible became possible, where the unimaginable became conceivable, and where the inconceivable became perceivable. It was a world of boundless potentiality and infinite possibilities. The white space was a place of infinite possibility, where anything and everything was feasible.<br><br>
      `,
        },
        4: {
          text: `
      The white space was a world that was both familiar and foreign at the same time. It was a place where the laws of physics and rationale were irrelevant. It was a place where the impossible became possible and where the unimaginable became conceivable. It was a place of infinite potentiality where anything was feasible but nothing was secure.<br></br>

      The white space was an intriguing paradox, a contradiction. It was a realm of naught, yet it was everything all at once. It was empty, yet it was full of boundless potentiality. It was silent, yet it was deafeningly loud. It was still, yet it was teeming with boundless dynamism.<br></br>
      
      The white space was an enigma, a mystery. It was a challenge to apprehend, a puzzle for the mind. It was a question without an answer, a riddle without a solution. It was a place that tested the limits of one's imagination and comprehension. It was a place that necessitated one to perceive beyond the limitations of the physical world and to embrace the infinite possibilities of the universe.<br></br>
      
      The white space was a reverie, a fantasy. It was a vision of the future, a recollection of the past. It was a hope, a trepidation, a rapture, and a despondency all at once. It was a place of boundless potentiality, where anything and everything was feasible. It was a place of infinite potentiality where one could be anyone and do anything.<br></br>
      
      The white space was a manifestation of the limitless, a world beyond reality. It was a place where the only limit was the lack of limits. It was a world of infinite potentiality and boundless possibilities. It was a place where one could explore the profundities of their imagination and the limits of their creativity.<br></br>
      `,
        },
        5: {
          text: `
      The white space was a place of autonomy, where one could be anything and do anything. It was a place of infinite potentiality where one could create anything and everything. It was a world of boundless potentiality where one could explore the profundities of their imagination and the limits of their creativity.<br><br>

The white space was a paradox, a contradiction, a mystery, an enigma, and a reverie all at once. It was a place of boundless potentiality and infinite possibilities. It was a place where the impossible became possible and where the unimaginable became conceivable. It was a world of infinite potentiality where anything was feasible but nothing was secure.
      `,
          align: "static-bottom",
        },
      },
    };

    if (books[data] === undefined || books[data] === "undefined") {
      document.body.innerHTML += `
    <section class="no-clip">
      <h1>404</h1>
      <p>Uhh, where's a key...</p>
      <a href="../">Say hi to dungeon dragon... RIP</a>
    </section>
  `;
    } else {
      const defaultColor = String(books[data].default);

      if (books[data].align === null) {
        document.body.innerHTML += `
    <style>
      section:nth-child(2n) {
        background-position: right;
      }

      section:nth-child(2n) > div {
        margin-right: 0;
        margin-left: auto;
      }
    </style>
  `;
      } else if (books[data].align === "right") {
        document.body.innerHTML += `
    <style>
      section {
        background-position: right;
      }

      section > div {
        margin-right: 0;
        margin-left: auto;
      }
    </style>
  `;
      } else if (books[data].align === "int") {
        document.body.innerHTML += `
    <style>
      section:nth-child(2n) {
        background-position: right;
      }

      section > div {
        margin-right: 0;
        margin-left: auto;
      }

      section:nth-child(2n) > div {
        margin-right: auto;
        margin-left: 0;
      }
    </style>
  `;
      }

      for (let i = 0; i < books[data].pageCount; i++) {
        const section = document.createElement("section");
        section.style.backgroundImage = `url(./${data}/image-${i}.svg)`;
        const dword = document.createElement("div");

        if (
          books[data][i] !== undefined &&
          books[data][i] !== "undefined" &&
          books[data][i].text !== undefined &&
          books[data][i].text !== "undefined"
        ) {
          if (
            books[data][i].title !== undefined &&
            books[data][i].title !== "undefined"
          ) {
            document.title = books[data][i].title[0];
            dword.innerHTML = `
      ${
        books[data][i].title[0]
          ? `<h1 style="display: block; width: 100%; text-align: center; font-size: xx-large; margin: 0; margin-top: 2.5rem">${books[data][i].title[0]}</h1>`
          : ""
      }
      
      ${
        books[data][i].title[1]
          ? `<span style="display: block; width: 100%; text-align: center; font-size: medium; opacity: .75; margin: 0; margin-bottom: 1rem">${books[data][i].title[1]}</span>`
          : ""
      }
    `;
          }

          // books[data][i].text = String(books[data][i].text).replace('\n', '<br>');
          dword.innerHTML += `<p>${books[data][i].text}</p>`;

          if (
            books[data][i].align !== undefined ||
            books[data][i].align !== "undefined"
          ) {
            // console.log(books[data][i].align);
            if (books[data][i].align === "static-bottom") {
              section.classList.add("secure-bottom");
            }
          }

          if (
            books[data][i].license !== undefined &&
            books[data][i].license !== "undefined"
          ) {
            dword.innerHTML += `
      ${
        books[data][i].title[0]
          ? `<span style="display: block; width: 100%; text-align: center; font-size: small; margin-top: 2.5rem;">${books[data][i].license}</span>`
          : ""
      }
    `;
          }
        }

        section.appendChild(dword);
        document.body.appendChild(section);

        if (
          books[data][i] !== undefined &&
          books[data][i] !== "undefined" &&
          books[data][i].size !== undefined &&
          books[data][i].size !== "undefined"
        ) {
          section.style.backgroundSize = `${books[data][i].size} !important`;
        }

        // console.log(i, `./${data}/image-${i}.svg`);
      }

      document.querySelectorAll("section > div").forEach((div) => {
        div.style.background = books[data].default;
      });

      // if (
      //   books[data].audio !== undefined &&
      //   books[data].audio !== "undefined"
      // ) {
      //   document.body.innerHTML += `
      //   <audio src="" type="audio/mpeg" style="display: none;" autoplay id="AUDIO_AUPLAY" loop="true">
      // `;

      // document.getElementById("AUDIO_AUPLAY").addEventListener('play', function() {
      //   document.getElementById("AUDIO_AUPLAY").style.display = 'none';
      // });

      // if (document.getElementById("AUDIO_AUPLAY").paused) {
      //   document.getElementById('AUDIO_AUPLAY').style.display = 'block';
      //   document.getElementById("AUDIO_AUPLAY").setAttribute('controls', 'true');
      // }
      // }

      document.body.innerHTML += `<div class="scrolldown scroll">
<svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
</div><div class="scrollup scroll">
<svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>
</div>`;

      function findNearestSection() {
        var windowHeight = window.innerHeight;
        var sections = document.querySelectorAll("section");

        var minDistance = Number.MAX_VALUE;
        var nearestSection = null;

        sections.forEach(function (section, INDEX) {
          var rect = section.getBoundingClientRect();
          var distance = Math.abs(rect.top);

          if (distance < minDistance) {
            minDistance = distance;
            nearestSection = section;
            trueIndex = INDEX;
          }
        });

        return nearestSection;
      }

      function scrollToNearestSection() {
        var nearestSection = findNearestSection();

        if (nearestSection) {
          nearestSection.scrollIntoView({
            behavior: "smooth",
          });
        }
      }

      window.addEventListener("resize", function () {
        scrollToNearestSection();
      });

      window.addEventListener("load", function () {
        scrollToNearestSection();
      });

      // if ((document.documentElement.scrollTop || window.scrollY) / window.innerHeight) {

      // }

      let INDEX = parseInt(localStorage.getItem(`${data}-f`)) || 0;
      // console.log(INDEX);

      document.querySelectorAll("section")[INDEX].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      if (INDEX === 0) {
        document.querySelector(".scrollup").style.display = "none";
      } else if (INDEX === document.querySelectorAll("section").length - 1) {
        document.querySelector(".scrolldown").style.display = "none";
      } else {
        document.querySelectorAll(".scroll").forEach((scroller) => {
          scroller.style.display = "inline-block";
        });
      }

      function SCROLLER_FIX() {
        if (INDEX === 0) {
          document.querySelector(".scrollup").style.display = "none";
        } else if (INDEX === document.querySelectorAll("section").length - 1) {
          document.querySelector(".scrolldown").style.display = "none";
        } else {
          document.querySelectorAll(".scroll").forEach((scroller) => {
            scroller.style.display = "inline-block";
          });
        }
      }

      SCROLLER_FIX();

      document.body.innerHTML += `
  <div class="theme_">
    <!-- Your theme switcher content goes here -->
  </div>
`;

      function checkTheme() {
        if (localStorage.getItem("theme") === "dark") {
          document.body.classList.add("dark");
        }
      }

      document.body.addEventListener("click", function (event) {
        const themeToggle = document.querySelector(".theme_");

        if (event.target === themeToggle) {
          event.stopPropagation();
          document.body.classList.toggle("dark");
          localStorage.setItem(
            "theme",
            document.body.classList.contains("dark") ? "dark" : ""
          );
        }
      });

      checkTheme();

      document.querySelector(".scrolldown").addEventListener("click", () => {
        INDEX++;

        localStorage.setItem(`${data}-f`, INDEX);

        SCROLLER_FIX();

        document.querySelectorAll("section")[INDEX].scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });

      document.querySelector(".scrollup").addEventListener("click", () => {
        INDEX--;

        localStorage.setItem(`${data}-f`, INDEX);

        SCROLLER_FIX();

        document.querySelectorAll("section")[INDEX].scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  }
});
