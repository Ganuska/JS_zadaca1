const textArea = document.getElementById("longTxt");
const content = document.getElementById("content");
const showRecenice = document.getElementById("receniceShow");

const razbij = (e) => {
  e.preventDefault();

  const recenice = textArea.value
    .split(".")
    .filter((item) => item !== "\n" && item);

  const trimmed = [];
  recenice.forEach((item) => {
    trimmed.push(item.trim());
  });

  console.log(trimmed);
  content.innerHTML = `ukupan broj unesenih znakova je: ${textArea.value.length} <br> 
  ukupan broj recenica je: ${trimmed.length}`;

  showRecenice.innerHTML = `${trimmed
    .map((item, index) => {
      const velikoSlovo = (recenica) => {
        return recenica.trimStart().charAt(0) ===
          trimmed[index].trimStart().charAt(0).toUpperCase() && /^[a-zA-Z]+$/
          ? "<h5>pocinje velikim slovom.</h5>"
          : "<h5>pocinje malim slovom.</h5>";
      };

      return `<h1>recenica ${index + 1}:</h1>  <h3>${item}.</h3> <br>
        ${velikoSlovo(item)} <br>
        `;
    })
    .join("")}`;
  console.log(recenice);
  textArea.value = "";
};

// Na scenu staviti textareu u koju će korisnik upisivati puno recenica.

// Nakon zavrsetka unosa, klikom na "razbij" botun u paragrafu ispod pruzite detaljnu statistiku unesenih recenica.

// npr. Broj znakova koji je unesen, broj recenica koji je unesen, koliko recenica ne pocije s velikim slovom...
