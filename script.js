const copyButton = document.getElementById('copyButton');

  // แสดง toast แทน alert
  function showToast(message) {
    let toast = document.getElementById('toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast';
      toast.style.position = 'fixed';
      toast.style.bottom = '20px';
      toast.style.left = '20px';
      toast.style.background = 'black';
      toast.style.color = '#fff';
      toast.style.padding = '12px 20px';
      toast.style.borderRadius = '5px';
      toast.style.zIndex = '9999';
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.25s ease';
      document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.style.opacity = '1';

    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => {
      toast.style.opacity = '0';
    }, 1000);
  }

  // ผูกแค่ครั้งเดียว
  copyButton.addEventListener('click', () => {
    const text = copyHistoryInput.value;
    const lang = document.documentElement.lang || 'en';

    navigator.clipboard.writeText(text).then(() => {
      showToast(lang === 'th' ? 'คัดลอกแล้ว: ' + text : 'Copied: ' + text);
    }).catch(err => {
      showToast(lang === 'th' ? 'ผิดพลาด: ' + err : 'Error: ' + err);
    });
  });

  // เปลี่ยนภาษา
  function changeLanguage(language) {
    document.documentElement.lang = language;

    document.querySelectorAll('[data-' + language + ']').forEach(function(element) {
      element.textContent = element.getAttribute('data-' + language);
    });
  }

  // เรียกใช้งานเริ่มต้น
  changeLanguage('en');

// theme
const themeToggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const prismTheme = document.getElementById('prism-theme');

// ตรวจสอบธีมที่บันทึกไว้
let savedTheme = localStorage.getItem('theme');

if (savedTheme === 'light') {
  document.body.classList.add('light');
  document.body.classList.remove('dark');
  themeIcon.src = 'sun-icon.png'; // ไอคอนพระอาทิตย์ (สว่าง)
} else {
  document.body.classList.add('dark');
  document.body.classList.remove('light');
  themeIcon.src = 'moon-icon.png'; // ไอคอนพระจันทร์ (มืด)
}

// ฟังก์ชันเปลี่ยนธีม
themeToggleButton.addEventListener('click', () => {
  const isLight = document.body.classList.toggle('light');
  document.body.classList.toggle('dark', !isLight);

  if (isLight) {
    localStorage.setItem('theme', 'light');
    themeIcon.src = 'sun-icon.png'; 
  } else {
    localStorage.setItem('theme', 'dark');
    themeIcon.src = 'moon-icon.png'; 
  }
});

//gotop
const gotop = document.querySelector('.gotop');
gotop.addEventListener('click',function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});


//text
const char = {
  a: 'Æ æ Å å Ǻ ǻ Ḁ ḁ ẚ Ă ă Ặ ặ Ắ ắ Ằ ằ Ẳ ẳ Ẵ ẵ Ȃ ȃ Â â Ậ ậ Ấ ấ Ầ ầ Ẫ ẫ Ẩ ẩ Ả ả Ǎ ǎ Ⱥ ⱥ Ȧ ȧ Ǡ ǡ Ạ ạ Ä ä Ǟ ǟ À à Ȁ ȁ Á á Ā ā Ā̀ ā̀ Ã ã Ą ą Ą́ ą́ Ą̃ ą̃ Ꞻ ꞻ A̲ a̲ ᶏ Ɑ ɑ ᶐ Ɐ ɐ Λ ʌ Ɒ ɒ ᶛ ᴀ A a ᵄ @ ₳ 𐤀 α Ⲁ ⲁ 𐌀 𐌰 𐌻',
  btod: '𐤁 Ƀ ƀ Ḃ ḃ Ḅ ḅ Ḇ ḇ Ɓ ɓ ᵬ ᶀ ᛒ β ⲃ Б б ƃ 𐌁 𐌱 Ꞗ ꞗ ␢ ฿ ₿ ♭ ᴃ ᴯ B b ɞ ẞ ß Ꟗ ꟗ ʗ ɕ ᶜ ᶝ Ꞔ ꞔ Ć ć Ĉ ĉ Č č Ċ ċ Ḉ ḉ Ƈ ƈ C̈ c̈ Ȼ ȼ Ç ç Ꞔ ꞔ Ꞓ ꞓ Ↄ ↄ Ꜿ ꜿ © ¢ ₡ ₢ ₵ ₠ ℭ ℃ ꬿ Ɖ ɖ ð đ Ꟈ ꟈ Ɗ ɗ Ḋ ḋ Ḍ ḍ Ḑ ḑ Ḓ ḓ Ď ď Ḏ ḏ ɗ ᴅ ᴰ ᵈ ȡ ᵭ ᶁ ᶑ Ƌ ƌ Ꝺ ꝺ 𐤃 Δ δ Ⲇ ⲇ Д д 𐌃 ᛞ ᚦ ₫ ⅆ ∂',
  e: 'Ĕ ĕ Ḝ ḝ Ȇ ȇ Ê ê Ê̄ ê̄ Ê̌ ê̌ Ề ề Ế ế Ể ể Ễ ễ Ệ ệ Ẻ ẻ Ḙ ḙ Ě ě Ɇ ɇ Ė ė Ė́ ė́ Ė̃ ė̃ Ẹ ẹ Ë ë È è È̩ è̩ Ȅ ȅ É é É̩ Ē ē Ḕ ḕ Ḗ ḗ Ẽ ẽ Ḛ ḛ Ę ę Ę́ ę́ Ę̃ ę̃ Ȩ ȩ E̩ e̩ ᶒ ⱸ Ɛ ɛ ᶓ Ɜ ɜ ɝ ᶔ ᶟ Ə ə Ǝ ɘ 𐞎 ᴇ ᴈ ᴱ ᴲ ᵉ ᵋ ᵌ ⱻ e ꬲ ꬳ ꬴ 𐤄 𐌄 Є є Э э Ⲉ ⲉ 𐌴 € ℮ ∃ ∈ 𝑒 Σ ᛊ Ξ ξ',
  ftoh: 'Ƒ ƒ Ḟ ḟ ᵮ ᶂ Ꞙ ꞙ f ꜰ ꟳ Ꝼ ꝼ ꟻ Ⅎ ⅎ Ⅎ Ϝ ϝ 𐌅 ᚨ 𐤉 ₣ ℉ ẛ ſ ẜ ẝ ∫ Ǵ ǵ Ǥ ǥ Ĝ ĝ Ǧ ǧ Ğ ğ Ģ ģ Ɠ ɠ Ġ ġ Ḡ ḡ Ꞡ ꞡ ᶃ ᶢ 𝼁 ᵷ 𝼂 Ȝ ȝ Ᵹ ᵹ Ꝿ ꝿ Ꟑ ꟑ ɢ ʛ ᴳ ᵍ ꬶ ₲ Ĥ ĥ Ȟ ȟ Ħ ħ Ḩ ḩ Ⱨ ⱨ ẖ ẖ Ḥ ḥ Ḣ ḣ Ḧ ḧ Ḫ ḫ ꞕ Ꜧ ꜧ ʜ ɦ ʰ ʱ ɥ ᶣ ɧ ꟸ ᴴ ₕ ʮ ʯ Ƕ ƕ Ⱶ ⱶ Ꟶ ꟶ 𐤇 𐌇 η ᚺ ᚻ Һ һ И и 𐌷 h ℏ',
  i: 'Ị ị Ĭ ĭ Î î Ǐ ǐ Ɨ ɨ Ï ï Ḯ ḯ Í í Ì ì Ȉ ȉ Į į Į́ Į̃ Ī ī Ī̀ ī̀ ᶖ Ỉ ỉ Ȋ ȋ Ĩ ĩ Ḭ ḭ İ i I ı ɪ ɨ ᴵ ᵢ ᴉ ᵎ ᵻ ᶤ ᶦ ᶧ i Ꞽ ꞽ Ɪ ɪ ꟾ ꟷ Ι ι Ⲓ 𐌹 ᛁ 𐌆',
  jtol: 'J́ j́ Ĵ ĵ J̌ ǰ Ɉ ɉ J̃ j̇̃ ȷ ᶡ ᶨ ʝ ɟ ʲ ʄ ᴊ ᴶ ⱼ 𐌳 Ƙ ƙ Ꝁ ꝁ Ḱ ḱ Ǩ ǩ Ḳ ḳ Ķ ķ ᶄ Ⱪ ⱪ Ḵ ḵ 𐤊 κ ϰ К к Ꞣ ꞣ ᴷ ᴋ ᵏ ₖ Ʞ ʞ 𝼃 ₭ Ꝃ ꝃ Ꝅ ꝅ 𐤂 𐤋 Ĺ ĺ Ł ł Ľ ľ Ḹ ḹ L̃ l̃ Ļ ļ Ŀ ŀ Ḷ ḷ Ḻ ḻ Ḽ ḽ Ƚ ƚ Ⱡ ⱡ Γ ʟ ɫ ɬ ɭ ɺ ɮ ꞎ ˡ 𝼄 ᴌ ᴸ ₗ ȴ Ꞁ ꞁ Ꝇ ꝇ ꬷ ꬸ ꬹ ꭝ ꭞ ℒ 𝓁 ℓ £ Ꝉ ꝉ Ł ł 𐌋 ᛚ',
  mton: 'Ḿ ḿ Ṁ ṁ Ṃ ṃ M̃ m̃ ᵯ Ɱ ɱ ɰ ᴍ ᴟ ᴹ ᵐ ᵚ ₘ ꟺ ꬺ ᶆ ᶬ ᶭ Ɯ ɯ ꟽ ꟿ ℳ 𐤌 𐌌 Ⲙ ⲙ м ᛗ 𐌼 ₥ Պ պ ꭑ ᛖ ™ ℠ Ń ń Ñ ñ Ň ň Ǹ ǹ Ṅ ṅ Ṇ ṇ Ņ ņ Ṉ ṉ Ṋ ṋ Ꞥ ꞥ ᵰ ᶇ Ŋ ŋ Ɲ ɲ n Ƞ ƞ ɳ ᶯ ᶮ ɴ ᶰ ᴎ ᴺ ᴻ ᵑ n ȵ Ꞑ ꞑ 𐤍 𐌍 ⲛ 𐌽 ₦ Л л 𐍀 П п Ꞃ ꞃ',
  o: 'Œ œ Ø ø Ǿ ǿ Ö ö Ȫ ȫ Ó ó Ò ò Ô ô Ố ố Ồ ồ Ổ ổ Ỗ ỗ Ộ ộ Ǒ ǒ Ő ő Ŏ ŏ Ȏ ȏ Ȯ ȯ Ȱ ȱ Ọ ọ Ɵ ɵ ᶱ Ơ ơ Ớ ớ Ờ ờ Ỡ ỡ Ợ ợ Ở ở Ỏ ỏ Ō ō Ṓ ṓ Ṑ ṑ Õ õ Ȭ ȭ Ṍ ṍ Ṏ ṏ Ǫ ǫ Ȍ ȍ O̩ o̩ Ó̩ ó̩ Ò̩ ò̩ Ǭ ǭ O͍ o͍ Ꝍ ꝍ Ꟁ ꟁ ⱺ ᴼ ᵒ ᴑ ᴓ ᴖ ᴗ ᵔ ᵕ ꬽ ꬾ ꭃ ꭄ o Ꝋ ꝋ ∅ º 𝒪 𝓸 𐤏 Ω',
  ptor: 'Ṕ ṕ Ṗ ṗ Ᵽ ᵽ Ƥ ƥ ᵱ ᶈ 𐤐 𐌐 ᴘ ᴾ ᵖ p ₱ 𝒫𝓅 ℘ ℗ ♇ ꟼ Ꝑ ꝑ Ꝓ ꝓ Ꝕ ꝕ ρ 𐤓 𐌓 ʠ Ɋ ɋ q̃ 𐞥 Ƣ ƣ 𐤒 Ϙ ϙ 𐌒 ℺ Ꝗ ꝗ Ꝙ ꝙ Ŕ ŕ Ɍ ɍ Ř ř Ŗ ŗ Ṙ ṙ Ȑ ȑ Ȓ ȓ Ṛ ṛ Ṝ ṝ Ṟ ṟ Ꞧ ꞧ Ɽ ɽ R̃ r̃ ᵲ ꭨ ᵳ ᶉ ɹ ɺ ɾ ɻ ɽ ʀ ʁ ʶ ɿ ᴙ ᴚ ᴿ ᵣ ꭅ ꭆ ꭈ ꭉ ꭊ ꭇ ꭋ ꭌ ⱹ Ꝛ ꝛ ᚱ 𐍂 ℟ ℞ ® ₹ Ꞅ ꞅ',
  stot: 'Ś ś Ṡ ṡ Ṩ ṩ Ṥ ṥ Ṣ ṣ S̩ s̩ Ꞩ ꞩ Ꟊ ꟊ Ŝ ŝ Ṧ ṧ Š š Ş ş Ș ș S̈ s̈ ᶊ Ȿ ȿ ᵴ ᶳ ₛ ˢ Ʂ ʂ Ƨ ƨ Ꟙ ꟙ $ ₷ § ℠ 𐌔 ᛋ 𐍃 Ť ť Ṫ ṫ ẗ Ţ ţ Ṭ ṭ Ʈ ʈ Ț ț ƫ Ṱ ṱ Ṯ ṯ Ŧ ŧ Ⱦ ⱦ Ƭ ƭ ᵵ ᶵ Ꞇ ꞇ ʇ ᴛ ᵀ ᵗ ẗ ₜ ȶ Ʇ ʇ τ 𐍄 ᛏ ፐ ተ ™ ₮ ₸ ৳',
  u: 'Ŭ ŭ Ʉ ʉ ᵾ ᶶ Ꞹ ꞹ Ụ ụ Ü ü Ǜ ǜ Ǘ ǘ Ǚ ǚ Ǖ ǖ Ṳ ṳ Ú ú Ù ù Û û Ṷ ṷ Ǔ ǔ Ȗ ȗ Ű ű Ŭ ŭ Ư ư Ứ ứ Ừ ừ Ử ử Ự ự Ữ Ữ Ủ ủ Ū ū Ū̀ ū̀ Ū́ ū́ Ṻ ṻ Ū̃ ū̃ Ũ ũ Ṹ ṹ Ṵ ṵ ᶙ Ų ų Ų́ ų́ Ų̃ ų̃ Ȕ ȕ Ů ů Ꞿ ꞿ υ Ա μ Ս ᴜ ᵁ ᵘ ᵤ ᴝ ᴞ ᵙ ꭎ ꭏ ꭒ ꭟ ᶸ Ꞹ ∪ ∩',
  vtox: 'Ỽ Ṽ ṽ Ṿ ṿ Ʋ ʋ ᶌ ⱱ ʋ ᶹ Ʌ ʌ ᶺ ⱴ ᴠ ᵛ ᵥ ⱽ Ѵ ѵ ℣ Ꝟ ꝟ Ѵ ѵ Ẃ ẃ Ẁ ẁ Ŵ ŵ Ẅ ẅ Ẇ ẇ Ẉ ẉ ẘ Ⱳ ⱳ Ꝡ ꝡ Ꟃ ꟃ ʍ ʷ ꭩ ₩ ω Ẍ ẍ Ẋ ẋ X̂ x̂ ᶍ χ ꭖ ꭗ ꭘ ꭙ Ⲭ ⲭ 𐍇 𐌗 ᚷ',
  ytoz: 'У ү Ɣ ɣ Ý ý Ỳ ỳ Ŷ ŷ Ÿ ÿ Ỹ ỹ Ẏ ẏ Ỵ ỵ ẙ Ỷ ỷ Ȳ ȳ Ɏ ɏ Ƴ ƴ ʎ ʏ ꭚ ʸ Ỿ ỿ Ⲩ ⲩ 𐍅 Ұ ұ ¥ λ Ź ź Ẑ ẑ Ž ž Ż ż Ẓ ẓ Ẕ ẕ Ƶ ƶ ᵶ Ᶎ ᶎ Ⱬ ⱬ Ȥ ȥ Ɀ ɀ Ʒ ʒ Ꝣ ꝣ ʒ ʑ ʐ ɮ ᶻ ᶼ ᶽ ζ 𐌶 З з Ⲍ ⲍ',
  gotoso: 'ก ກ ក ្ក ∩ ∏ Ω Ռ ח ი п л π ந ர ମ ௫ ೧ റ ข ฃ ខ ្ខ ຂ থ श ४ ရျ ဈ ૪ ค ฅ ฆ ຄ គ ្គ の め ꢍ ঋ 乳 ឃ ្ឃ ง ງ ង ្ង ஜ এ ঐ ও ঞ ଏ ၅ פ J ق ს ل ७ و Ꮽ จ ຈ ច ្ច す ㅋ ऩ न ब ন ল ম অ ज त्र જિ ને નૈ ල ꢛ タ ヌ ダ ฉ ឆ ្ឆ પિ વિ યિ યે યૈ સિ ષિ ช ซ ជ ្ជ ຊ Ճ Ծ ರ જ ಶ খ ଅ',
  chotono: 'ฌ ณ ญ ឈ ្ឈ ញ ្ញ ណ ្ណ ભુ ભ ൮ ഖ വ ல ₪ ฎ ฏ ฐ ฑ ฒ ដ ្ដ ឋ ្ឋ ឌ ្ឌ ឍ ្ឍ ด ດ இ ெ ஞ ஏ ௭ ๑ ໑ ต ຕ ្ត ត ๓ ന თ ள ღ ო რ တ დ ꢙ ถ ຖ ្ថ ថ ଋ ઢી ଣ ท ທ ទ ្ទ מ и n ŋ η и ธ ធ ្ធ চ ຽ ꢜ น ນ ន ្ន ゆ Ա Њ њ थ થ યૃ य ਪ u ʨ',
  botowo: 'บ ป ប ្ប ບ ປ ひ び U ப υ ച ผ ฝ ផ ្ផ ຜ ຝ ಛ ಟ ය చ ట ຜ ඩ ධ ඨ พ ព ្ព ພ W w Ш ш ա ய ω ധ ဃ ਘ ಬ బ ฟ ຟ ௰ ௰ ಚ ಭ ඩ ภ ភ ្ភ ग ກ சி ໞ ม ມ ម ្ម தூ து ଐ ஆ ௮ ঝ ఖ ಖ み ย ຍ ຢ ໟ យ ្យ غ ઈ ㄠ € £ չ ξ छ ઘ છ ঘ ध ধ ؏ ಲ ᤎ ร ຣ រ ្រ 丂 Տ န ई ş ട ಽ ی ડ ১ ਙ ล ລ ល ្ល බ તિ તે તૈ લિ લે લૈ त ढ द ट ਫ਼ ᤒ ఎ ઢ ว ວ វ ្វ Ձ ठे ಞ Չ ੨ ꣀ ワ',
  sotoho: 'ศ ឝ ្ឝ ぬ ษ ឞ ਖ ្ឞ ส ສ ស ្ស さ ざ ನ స ढे ৯ द ห ຫ ហ ្ហ ㄨ Ҩ භ യ ೫ ம ण א X ϰ サ ໜ ໝ ฬ ឡ ಚ ಭ ឯ ង อ ฮ ອ ຮ អ ្អ ට વિ ਹ Ο Ø ಲ Ә ∂ Ꭷ ခ 0 ර ਹੇ',
  inlVow: 'ะ ະ : ะ း ៈ ั ັ ົ ຼ ຽ ๆ ໆ ៗ ฯ ຯ ៘ ៕ า າ ា ำ ຳ ๅ প গ ণ ך ד ﾌ ク ワ โ ໂ ि ∫ ไ ໄ ी ौ ो Գ て ใ ໃ Գ 9 เ แ េ ເ ແ と ど し じ ζ ხ L Ꮣ ɕ ℓ լ ւ ᱔ ȶ ∫ I 6 ើ ឿ ៀ ែ ៃ ោ ៅ ฤ ฦ ឥ ឦ ឧ ឨ ឩ ឪ ឫ ឬ ឭ ឮ ឯ ឰ ឱ ឲ ឳ ៚ ៙ ៖',
  hiloVow: 'ิ ี ึ ื ุ ู ິ ີ ຶ ື ຸ ູ ិ ី ឹ ឺ ុ ូ ួ ่ ้ ๊ ๋ ็ ั ์ ํ ່ ້ ໊ ໋ ໌ ໍ ់ ៌ ៍ ៎ ៏ ័ ៑ ំ ៉ ៊ ុ',
  num: '๑ ๒ ๓ ๔ ๕ ๖ ๗ ๘ ๙ ๐ ໑ ໒ ໓ ໔ ໕ ໖ ໗ ໘ ໙ ០ ១ ២ ៣ ៤ ៥ ៦ ៧ ៨ ៩',
  chi: '㊊ ㊋ ㊌ ㊍ ㊎ ㊏ ㊐ ㊑ ㊒ ㊓ ㊔ ㊕ ㊖ ㊗ ㊘ ㊙ ㊚ ㊛ ㊜ ㊝ ㊞ ㊟ ㊠ ㊡ ㊢ ㊣ ㊤ ㊥ ㊦ ㊧ ㊨ ㊩ ㊪ ㊮ ㊯ ㊰ ㊀ ㊁ ㊂ ㊃ ㊄ ㊅ ㊆ ㊇ ㊈ ㊉ ㇀ ㇁ ㇂ ㇃ ㇄ ㇅ ㇆ ㇇ ㇈ ㇉ ㇊ ㇋ ㇌ ㇍ ㇎ ㇏ ㇐ ㇑ ㇒ ㇓ ㇔ ㇕ ㇖ ㇗ ㇘ ㇙ ㇚ ㇛ ㇜ ㇝ ㇞ ㇟ ㇠ ㇡ ㇢ ㇣ ㄅ ㄆ ㄇ ㄈ ㄉ ㄊ ㄋ ㄌ ㄍ ㄎ ㄏ ㄐ ㄑ ㄒ ㄓ ㄔ ㄕ ㄖ ㄗ ㄘ ㄙ ㄚ ㄛ ㄜ ㄝ ㄞ ㄟ ㄠ ㄡ ㄢ ㄣ ㄤ ㄥ ㄦ ㄧ ㄨ ㄩ ㄪ ㄫ ㄬ ㄭ ̄ ́ ̌ ̀',
  jap: 'ぁ あ ぃ い ぅ う ゔ ぇ え ぉ お か が ゕ き ぎ く ぐ け ゖ げ こ ご さ ざ し じ す ず せ ぜ そ ぞ た だ ち ぢ っ つ づ て で と ど な に ぬ ね の は ば ぱ ひ び ぴ ふ ぶ ぷ へ べ ぺ ほ ぼ ぽ ま み む め も ゃ や ゅ ゆ ょ よ ら り る れ ろ ゎ わ ゐ ゑ を ん ゝ ゞ ァ ア ィ イ ゥ ウ ヴ ェ エ ォ オ カ ガ ヵ キ ギ ク グ ケ ヶ ゲ コ ゴ サ ザ シ ジ ス ズ セ ゼ ソ ゾ タ ダ チ ヂ ッ ツ ヅ テ デ ト ド ナ ニ ヌ ネ ノ ハ バ パ ヒ ビ ピ フ ブ プ ヘ ベ ペ ホ ボ ポ マ ミ ム メ モ ャ ヤ ュ ユ ョ ヨ ラ リ ル レ ロ ヮ ワ ヰ ヱ ヲ ン ヽ ヾ ｧ ｱ ｨ ｲ ｩ ｳ ｪ ｴ ｫ ｵ ｶ ｷ ｸ ｹ ｺ ｻ ｼ ｽ ｾ ｿ ﾀ ﾁ ｯ ﾂ ﾃ ﾄ ﾅ ﾆ ﾇ ﾈ ﾉ ﾊ ﾋ ﾌ ﾍ ﾎ ﾏ ﾐ ﾑ ﾒ ﾓ ｬ ﾔ ｭ ﾕ ｮ ﾖ ﾗ ﾘ ﾙ ﾚ ﾛ ﾜ ｦ ﾝ ㋐ ㋑ ㋒ ㋓ ㋔ ㋕ ㋖ ㋗ ㋘ ㋙ ㋚ ㋛ ㋜ ㋝ ㋞ ㋟ ㋠ ㋡ ㋢ ㋣ ㋤ ㋥ ㋦ ㋧ ㋨ ㋩ ㋪ ㋫ ㋬ ㋭ ㋮ ㋯ ㋰ ㋱ ㋲ ㋳ ㋴ ㋵ ㋶ ㋷ ㋸ ㋹ ㋺ ㋻ ㋼ ㋽ ㋾ ゛ ゜ ・ ー ヿ ㍐ ㍿ 々 〒 〜 〃 ※ 〆 ゟ',
  kor: 'ㄱ ㄴ ㄷ ㄹ ㅁ ㅂ ㅅ ㅇ ㅈ ㅊ ㅋ ㅌ ㅍ ㅎ ㄲ ㄸ ㅃ ㅆ ㅉ ㄳ ㄵ ㄶ ㄺ ㄻ ㄼ ㄽ ㄾ ㄿ ㅀ ㅄ ㅏ ㅑ ㅓ ㅕ ㅗ ㅛ ㅜ ㅠ ㅡ ㅣ ㅐ ㅒ ㅔ ㅖ ㅘ ㅙ ㅚ ㅝ ㅞ ㅟ ㅢ ㅿ ㆁ ㆆ ㈀ ㈁ ㈂ ㈃ ㈄ ㈅ ㈆ ㈇ ㈈ ㈉ ㈊ ㈋ ㈌ ㈍ ㈎ ㈏ ㈐ ㈑ ㈒ ㈓ ㈔ ㈕ ㈖ ㈗ ㈘ ㈙ ㈚ ㈛ ㈜ ㈝ ㈞ ㉠ ㉡ ㉢ ㉣ ㉤ ㉥ ㉦ ㉧ ㉨ ㉩ ㉪ ㉫ ㉬ ㉭ ㉮ ㉯ ㉰ ㉱ ㉲ ㉳ ㉴ ㉵ ㉶ ㉷ ㉸ ㉹ ㉺ ㉻ ㉼ ㉽ ㉾ ﾡ ﾢ ﾣ ﾤ ﾥ ﾦ ﾧ ﾨ ﾩ ﾪ ﾫ ﾬ ﾭ ﾮ ﾯ ﾰ ﾱ ﾲ ﾳ ﾴ ﾵ ﾶ ﾷ ﾸ ﾹ ﾺ ﾻ ﾼ ﾽ ﾾ ￂ ￃ ￄ ￅ ￆ ￇ ￊ ￋ ￌ ￍ ￎ ￏ ￒ ￓ ￔ ￕ ￖ ￗ ￚ ￛ ￜ',
};

const copyHistoryInput = document.getElementById('copyHistory');
let copyHistory = '';

Object.entries(char).forEach(([category, chars]) => {
  const container = document.getElementById(category); // ดึง div ตาม id เช่น 'letters'
  const specialCharacters = chars.split(' ');

  specialCharacters.forEach(character => {
    const button = document.createElement('button');
    button.textContent = character;

    button.classList.add('keyboard-button');

    button.addEventListener('click', () => {
      copyHistoryInput.value += character;

      // คัดลอกตัวอักษรนั้น
      const input = document.createElement("input");
      input.value = character;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
    });

    container.appendChild(button);
  });
});

//label
window.addEventListener("scroll", function () {
  const label = document.getElementById("textToCopy"); // label ที่เป็นจุดอ้างอิง
  const input = document.getElementById("copyHistory"); // input ที่จะ fixed
  const copyButton = document.getElementById("copyButton");

  const labelRect = label.getBoundingClientRect();
  const copyButtonRect = copyButton.getBoundingClientRect();
  
  if (labelRect.bottom <= 0) {
    input.classList.add("fixed");
    copyButton.classList.add("fixed");
  } else {
    input.classList.remove("fixed");
    copyButton.classList.remove("fixed");
  }
});

