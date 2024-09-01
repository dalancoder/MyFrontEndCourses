import JS from "../images/js.png";
import Bootstrap from "../images/bootstrap.png";
import React from "../images/react.png";
import HtmlCss from "../images/html-css.png";

const data = [
    {
      id: 1,
      title: "HTML ve CSS",
      image: HtmlCss, // Resim dosya yolu burada olacak
      description: "HTML (HyperText Markup Language), web sayfalarının yapısını oluşturmak için kullanılır. CSS (Cascading Style Sheets) ise bu sayfalara stil vermek için kullanılır. HTML, sayfa elemanlarını belirlerken, CSS bu elemanların görünümünü ve düzenini kontrol eder."
    },
    {
      id: 2,
      title: "Bootstrap",
      image:Bootstrap, // Resim dosya yolu burada olacak
      description: "Bootstrap, mobil uyumlu ve duyarlı web siteleri oluşturmak için kullanılan popüler bir CSS çerçevesidir. Hazır stil sınıfları ve bileşenler sayesinde hızlı ve etkili bir şekilde modern tasarımlar yapmanıza olanak tanır."
    },
    {
      id: 3,
      title: "JavaScript",
      image: JS, // Resim dosya yolu burada olacak
      description: "JavaScript, web sayfalarına etkileşim ve dinamiklik kazandıran bir programlama dilidir. Tarayıcı üzerinde çalışan bu dil, kullanıcı ile etkileşime geçebilen, veri işleyebilen ve sayfa davranışını değiştirebilen kodlar yazmanıza olanak sağlar."
    },
    {
      id: 4,
      title: "React",
      image: React, // Resim dosya yolu burada olacak
      description: "React, kullanıcı arayüzleri oluşturmak için kullanılan popüler bir JavaScript kütüphanesidir. Bileşen tabanlı yaklaşımı ve sanal DOM kullanımı sayesinde büyük ve karmaşık uygulamaları daha yönetilebilir hale getirir."
    }
  ];
  
  export default data;
  