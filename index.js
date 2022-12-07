const textArea = document.getElementById("longTxt");
const content = document.getElementById("content");
const showRecenice = document.getElementById("receniceShow");

const razbij = (e) => {
  e.preventDefault();

  const recenice = textArea.value
    .split(
      "."
    ) /* deklarirao varijablu i inicijalizirao ju tako da joj je vrijednost tipa "array" tako da je sve ono sto smo unjeli u texarea razdvojeno pomocu metode .split()  --(zbog metode split postaje array)  na komade kod svake tocke  */
    .filter(
      (item) => item !== "\n" && item
    ); /* filtriran array tako da na prelazak u novi red ne ocitava novi unos i stavi ga u array  */

  const trimmed =
    []; /*  deklarirao prazan array koji cu kasnije puniti sa podatcima koji su pripremljeni za kasnije koristenje */
  recenice.forEach((item) => {
    /* na ranije deklarirani array "recenice" primjenjujem metodu forEach koja prolazi "iterira" kroz array (kroz svaki index arraya)  */
    trimmed.push(
      item.trim()
    ); /* kako prolazim kroz array "recenice" tako svaki "item" koji se nalazi u arrayu sa metodom push() "guram" u ranije definirani array "trimmed" ali vracam njegovu trim() varijantu a to znaci da ce vratiti samo vrijednosti koje nemaju "whitespace na pocetku i na kraju "   */
  });

  const trimmedFiltered = trimmed.filter((item) => item && item);
  /* deklariram novi array "trimmedFiltered" koji sam ranije napunio podatcima bez "whitespacea" i filtriram sve podatke koji su prazan string   */
  /* to radim iz razloga sto nakon trim() metode i razlicitih unosa od strane korisnika se moze pojaviti prazan string te ce mi ga kasnije brojati kao novu recenicu, a ovako sam odma to maknuo  */
  /* item && item  je isto kao if (item===true){return item} sto znaci da mi "vraca" item samo u slucaju da nije falsy a posto za prazan string vraca falsy nece vratiti prazne stringove */
  content.innerHTML = `ukupan broj unesenih znakova je: ${textArea.value.length} <br> 
  ukupan broj recenica je: ${trimmedFiltered.length}`;
  /* koristeci backtick postavljam innerHtml odabranog html elementa na vrijednost u kojoj prikazujem koliko je znakova uneseno ukljucujuci whitespace  */
  /* i koliko ima recenica tako sto provjeravam koliko elemenata ima u arrayu u koje sam spremio recenice  */

  showRecenice.innerHTML = `${trimmedFiltered /* postavljam innerHtml elementa tako da prikazujem dali pocinje velikim ili malim slovom recenica */
    .map((item, index) => {
      /* koristim metodu .map() koja se koristi na arrayu kako bi prolazila preko svakog njegovog elementa i vracala nesto odredjeno za svaki element u arrayu  */
      /* metoda map() kao argument prima callBack funkciju koja prima u ovom slucaju 2 argumenta a to su svaki element arraya nad kojim zovemo metodu u ovom slucaju "trimmedFiltered" arraya i */
      /* drugi parametar je index tog istog elementa u arrayu nad kojim pozivamo metodu u ovom slucaju "trimmedFiltered" */
      const velikoSlovo = (recenica) => {
        /* definiram funkciju "velikoSlovo" koja prima jedan argument a to ce biti "recenica" - recenica je ime koje sam ja zadao moze biti bilo sto ali logika nalaze da ce biti recenica */
        return recenica.trimStart().charAt(0) ===
          trimmedFiltered[index].trimStart().charAt(0).toUpperCase()
          ? "<h5>pocinje velikim slovom.</h5>"
          : "<h5>pocinje malim slovom.</h5>";
        /* kao povrat funkcije ili "return" vracam ovisno o uvijetu koji sam postavio jedan od elemenata h5 sa odredenom izjavom  */
        /* sintaksa ? :  se moze isto pisati i kao if else znaci gore napisano se moze napisati kao 
          if(recenica.trimStart().charAt(0) ===trimmedFiltered[index].trimStart().charAt(0).toUpperCase()){
            
            return "<h5>pocinje velikim slovom.</h5>"
          
          }else
          
          {
            return "<h5>pocinje malim slovom.</h5>"
          }
      */
        /* u if statementu sam koristio trimStart() koji u ovom slucaju nije potreban jer sam to odradio ranije ali kako sam pisao kod  */
        /* tako sam naknadno promjenio ideju po kojoj cu dobiti funkcionalnost a nisam obrisao nepotrebno- ne to raditi ha ha ha  */
      };

      return `<h1>recenica ${index + 1}:</h1>  <h3>${item}.</h3> <br>
        ${velikoSlovo(item)} <br>
        `;
    })
    .join("")}`;
  textArea.value = "";
};
/* i tek ovdje iza "return" napokon postavljam sto ce se prikazivati kao innerHtml a to h1 tag u kojemu je redni broj recenice  */
/* koji sam dobio tako da sam iskoristio onaj index koji sam dao kao argument u .map() metodi (to je ranije definirani argument od strane JS-a) */
/* a tako sam oduzevsi 1 od njega dobio koja je to recenica po redu a oduzimam 1 jer su array indeksirani od nule to je ne krecu se brojati elementi od 1 nego od 0 */
/* te sam u h3 tag stavio taj "item" preko kojeg metoda map() prolazi */
/* i u sljedecem redu sam pozvao funkciju velikoSlovo() koja vraca ono sto sam ranije objasnio i tako dobijem da se pozove ta funkcija za svaku "recenicu"- (citaj "item")  */
/* i ovisno o zadovoljenosti uvjeta vrati ili dali je recenica sa ili bez velikog pocetnog slova */
/* .join("") metoda je u ovom slucaju portrebna zato sto .map() metoda vraca array a array kada pokusamo prikazati u browseru prikaze svaki njegov element */
/* odvojen zarezima, a sa metodom join("") i argumentom ("") mu zadajemo da ga "vrati" tako sto ga spoji praznim stringom */

/* ispod je zadatak sa padleta */

// Na scenu staviti textareu u koju će korisnik upisivati puno recenica.

// Nakon zavrsetka unosa, klikom na "razbij" botun u paragrafu ispod pruzite detaljnu statistiku unesenih recenica.

// npr. Broj znakova koji je unesen, broj recenica koji je unesen, koliko recenica ne pocije s velikim slovom...
