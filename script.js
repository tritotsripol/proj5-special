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

    const isLight = document.body.classList.contains('light');
  
  if (isLight) {
    toast.style.background = '#020617';
    toast.style.color = '#fff';
  } else {
    toast.style.background = '#fff';
    toast.style.color = '#020617';
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
  fanc: '𝔄 𝔅 ℭ 𝔇 𝔈 𝔉 𝔊 ℌ ℑ 𝔍 𝔎 𝔏 𝔐 𝔑 𝔒 𝔓 𝔔 ℜ 𝔖 𝔗 𝔘 𝔙 𝔚 𝔛 𝔜 ℨ 𝔞 𝔟 𝔠 𝔡 𝔢 𝔣 𝔤 𝔥 𝔦 𝔧 𝔨 𝔩 𝔪 𝔫 𝔬 𝔭 𝔮 𝔯 𝔰 𝔱 𝔲 𝔳 𝔴 𝔵 𝔶 𝔷 𝕬 𝕭 𝕮 𝕯 𝕰 𝕱 𝕲 𝕳 𝕴 𝕵 𝕶 𝕷 𝕸 𝕹 𝕺 𝕻 𝕼 𝕽 𝕾 𝕿 𝖀 𝖁 𝖂 𝖃 𝖄 𝖅 𝖆 𝖇 𝖈 𝖉 𝖊 𝖋 𝖌 𝖍 𝖎 𝖏 𝖐 𝖑 𝖒 𝖓 𝖔 𝖕 𝖖 𝖗 𝖘 𝖙 𝖚 𝖛 𝖜 𝖝 𝖞 𝖟 𝔸 𝔹 ℂ 𝔻 𝔼 𝔽 𝔾 ℍ 𝕀 𝕁 𝕂 𝕃 𝕄 ℕ 𝕆 ℙ ℚ ℝ 𝕊 𝕋 𝕌 𝕍 𝕎 𝕏 𝕐 ℤ 𝕒 𝕓 𝕔 𝕕 𝕖 𝕗 𝕘 𝕙 𝕚 𝕛 𝕜 𝕝 𝕞 𝕟 𝕠 𝕡 𝕢 𝕣 𝕤 𝕥 𝕦 𝕧 𝕨 𝕩 𝕪 𝕫 𝒜 ℬ 𝒞 𝒟 ℰ ℱ 𝒢 ℋ ℐ 𝒥 𝒦 ℒ ℳ 𝒩 𝒪 𝒫 𝒬 ℛ 𝒮 𝒯 𝒰 𝒱 𝒲 𝒳 𝒴 𝒵 𝒶 𝒷 𝒸 𝒹 𝑒 𝒻 𝑔 𝒽 𝒾 𝒿 𝓀 𝓁 𝓂 𝓃 𝑜 𝓅 𝓆 𝓇 𝓈 𝓉 𝓊 𝓋 𝓌 𝓍 𝓎 𝓏 𝓐 𝓑 𝓒 𝓓 𝓔 𝓕 𝓖 𝓗 𝓘 𝓙 𝓚 𝓛 𝓜 𝓝 𝓞 𝓟 𝓠 𝓡 𝓢 𝓣 𝓤 𝓥 𝓦 𝓧 𝓨 𝓩 𝓪 𝓫 𝓬 𝓭 𝓮 𝓯 𝓰 𝓱 𝓲 𝓳 𝓴 𝓵 𝓶 𝓷 𝓸 𝓹 𝓺 𝓻 𝓼 𝓽 𝓾 𝓿 𝔀 𝔁 𝔂 𝔃',
  reg: 'ᴀ ʙ ᴄ ᴅ ᴇ ꜰ ɢ ʜ ɪ ᴊ ᴋ ʟ ᴍ ɴ ᴏ ᴘ ǫ ʀ ꜱ ᴛ ᴜ ᴠ ᴡ x ʏ ᴢ 𝐀 𝐁 𝐂 𝐃 𝐄 𝐅 𝐆 𝐇 𝐈 𝐉 𝐊 𝐋 𝐌 𝐍 𝐎 𝐏 𝐐 𝐑 𝐒 𝐓 𝐔 𝐕 𝐖 𝐗 𝐘 𝐙 𝐚 𝐛 𝐜 𝐝 𝐞 𝐟 𝐠 𝐡 𝐢 𝐣 𝐤 𝐥 𝐦 𝐧 𝐨 𝐩 𝐪 𝐫 𝐬 𝐭 𝐮 𝐯 𝐰 𝐱 𝐲 𝐳 𝘼 𝘽 𝘾 𝘿 𝙀 𝙁 𝙂 𝙃 𝙄 𝙅 𝙆 𝙇 𝙈 𝙉 𝙊 𝙋 𝙌 𝙍 𝙎 𝙏 𝙐 𝙑 𝙒 𝙓 𝙔 𝙕 𝙖 𝙗 𝙘 𝙙 𝙚 𝙛 𝙜 𝙝 𝙞 𝙟 𝙠 𝙡 𝙢 𝙣 𝙤 𝙥 𝙦 𝙧 𝙨 𝙩 𝙪 𝙫 𝙬 𝙭 𝙮 𝙯 𝑨 𝑩 𝑪 𝑫 𝑬 𝑭 𝑮 𝑯 𝑰 𝑱 𝑲 𝑳 𝑴 𝑵 𝑶 𝑷 𝑸 𝑹 𝑺 𝑻 𝑼 𝑽 𝑾 𝑿 𝒀 𝒁 𝒂 𝒃 𝒄 𝒅 𝒆 𝒇 𝒈 𝒉 𝒊 𝒋 𝒌 𝒍 𝒎 𝒏 𝒐 𝒑 𝒒 𝒓 𝒔 𝒕 𝒖 𝒗 𝒘 𝒙 𝒚 𝒛 𝘈 𝘉 𝘊 𝘋 𝘌 𝘍 𝘎 𝘏 𝘐 𝘑 𝘒 𝘓 𝘔 𝘕 𝘖 𝘗 𝘘 𝘙 𝘚 𝘛 𝘜 𝘝 𝘞 𝘟 𝘠 𝘡 𝘢 𝘣 𝘤 𝘥 𝘦 𝘧 𝘨 𝘩 𝘪 𝘫 𝘬 𝘭 𝘮 𝘯 𝘰 𝘱 𝘲 𝘳 𝘴 𝘵 𝘶 𝘷 𝘸 𝘹 𝘺 𝘻 𝐴 𝐵 𝐶 𝐷 𝐸 𝐹 𝐺 𝐻 𝐼 𝐽 𝐾 𝐿 𝑀 𝑁 𝑂 𝑃 𝑄 𝑅 𝑆 𝑇 𝑈 𝑉 𝑊 𝑋 𝑌 𝑍 𝑎 𝑏 𝑐 𝑑 𝑒 𝑓 𝑔 ℎ 𝑖 𝑗 𝑘 𝑙 𝑚 𝑛 𝑜 𝑝 𝑞 𝑟 𝑠 𝑡 𝑢 𝑣 𝑤 𝑥 𝑦 𝑧 𝙰 𝙱 𝙲 𝙳 𝙴 𝙵 𝙶 𝙷 𝙸 𝙹 𝙺 𝙻 𝙼 𝙽 𝙾 𝙿 𝚀 𝚁 𝚂 𝚃 𝚄 𝚅 𝚆 𝚇 𝚈 𝚉 𝚊 𝚋 𝚌 𝚍 𝚎 𝚏 𝚐 𝚑 𝚒 𝚓 𝚔 𝚕 𝚖 𝚗 𝚘 𝚙 𝚚 𝚛 𝚜 𝚝 𝚞 𝚟 𝚠 𝚡 𝚢 𝚣',
  cirqua: '🅰 🅱 🅲 🅳 🅴 🅵 🅶 🅷 🅸 🅹 🅺 🅻 🅼 🅽 🅾 🅿 🆀 🆁 🆂 🆃 🆄 🆅 🆆 🆇 🆈 🆉 🅐 🅑 🅒 🅓 🅔 🅕 🅖 🅗 🅘 🅙 🅚 🅛 🅜 🅝 🅞 🅟 🅠 🅡 🅢 🅣 🅤 🅥 🅦 🅧 🅨 🅩 🄰 🄱 🄲 🄳 🄴 🄵 🄶 🄷 🄸 🄹 🄺 🄻 🄼 🄽 🄾 🄿 🅀 🅁 🅂 🅃 🅄 🅅 🅆 🅇 🅈 🅉 Ⓐ Ⓑ Ⓒ Ⓓ Ⓔ Ⓕ Ⓖ Ⓗ Ⓘ Ⓙ Ⓚ Ⓛ Ⓜ Ⓝ Ⓞ Ⓟ Ⓠ Ⓡ Ⓢ Ⓣ Ⓤ Ⓥ Ⓦ Ⓧ Ⓨ Ⓩⓐ ⓑ ⓒ ⓓ ⓔ ⓕ ⓖ ⓗ ⓘ ⓙ ⓚ ⓛ ⓜ ⓝ ⓞ ⓟ ⓠ ⓡ ⓢ ⓣ ⓤ ⓥ ⓦ ⓧ ⓨ ⓩ',
  supt: 'ᴬ ᴮ ᶜ ᴰ ᴱ ᶠ ᴳ ᴴ ᴵ ᴶ ᴷ ᴸ ᴹ ᴺ ᴼ ᴾ ǫ ᴿ ˢ ᵀ ᵁ ⱽ ᵂ ˣ ʸ ᶻ ᵃ ᵇ ᶜ ᵈ ᵉ ᶠ ᵍ ʰ ⁱ ʲ ᵏ ˡ ᵐ ⁿ ᵒ ᵖ ᵠ ʳ ˢ ᵗ ᵘ ᵛ ʷ ˣ ʸ ᶻ',
  
  tamil: 'ஂ ஃ அ ஆ இ ஈ உ ஊ எ ஏ ஐ ஒ ஓ ஔ க ங ச ஜ ஞ ட ண த ந ன ப ம ய ர ற ல ள ழ வ ஶ ஷ ஸ ஹ ா இ ீ உ ூ எ ஏ ஐ ஒ ஓ ௌ ் ௐ ௗ ௦ ௧ ௨ ௩ ௪ ௫ ௬ ௭ ௮ ௯ ௰ ௱ ௲ ௳ ௴ ௵ ௶ ௷ ௸ ௹ ௺',
  malayalam: 'ഀ ഁ ം ഃ ഄ അ ആ ഇ ഈ ഉ ഊ ഋ ഌ എ ഏ ഐ ഒ ഓ ഔ ക ഖ ഗ ഘ ങ ച ഛ ജ ഝ ഞ ട ഠ ഡ ഢ ണ ത ഥ ദ ധ ന ഩ പ ഫ ബ ഭ മ യ ര റ ല ള ഴ വ ശ ഷ സ ഹ ഺ ഻ ഼ ഽ ാ ി ീ ു ൂ ൃ ൄ െ േ ൈ ൊ ോ ൌ ് ൎ ൏ ൔ ൕ ൖ ൗ ൘ ൙ ൚ ൛ ൜ ൝ ൞ ൟ ൠ ൡ ൢ ൣ ൦ ൧ ൨ ൩ ൪ ൫ ൬ ൭ ൮ ൯ ൰ ൱ ൲ ൳ ൴ ൵ ൶ ൷ ൸ ൹ ൺ ൻ ർ ൽ ൾ ൿ',
  saurashtra: 'ꢀ ꢁ ꢂ ꢃ ꢄ ꢅ ꢆ ꢇ ꢈ ꢉ ꢊ ꢋ ꢌ ꢍ ꢎ ꢏ ꢐ ꢑ ꢒ ꢓ ꢔ ꢕ ꢖ ꢗ ꢘ ꢙ ꢚ ꢛ ꢜ ꢝ ꢞ ꢟ ꢠ ꢡ ꢢ ꢣ ꢤ ꢥ ꢦ ꢧ ꢨ ꢩ ꢪ ꢫ ꢬ ꢭ ꢮ ꢯ ꢰ ꢱ ꢲ ꢳ ꢴ ꢵ ꢶ ꢷ ꢸ ꢹ ꢺ ꢻ ꢼ ꢽ ꢾ ꢿ ꣀ ꣁ ꣂ ꣃ ꣄ ꣅ ꣎ ꣏ ꣐ ꣑ ꣒ ꣓ ꣔ ꣕ ꣖ ꣗ ꣘ ꣙ ꣙',
  ahom: '𑜀 𑜁 𑜂 𑜃 𑜄 𑜅 𑜆 𑜇 𑜈 𑜉 𑜊 𑜋 𑜌 𑜍 𑜎 𑜏 𑜐 𑜑 𑜒 𑜓 𑜔 𑜕 𑜖 𑜗 𑜘 𑜙 𑜚 𑜝 𑜞 𑜠 𑜡 𑜢 𑜣 𑜤 𑜥 𑜦 𑜧 𑜨 𑜩 𑜪 𑜫 𑜰 𑜱 𑜲 𑜳 𑜴 𑜵 𑜶 𑜷 𑜸 𑜹 𑜺 𑜻 𑜼 𑜽 𑜾 𑜿',
  sinhala: 'ඁ ං ඃ අ ආ ඇ ඈ ඉ ඊ උ ඌ ඍ ඎ ඏ ඐ එ ඒ ඓ ඔ ඕ ඖ ක ඛ ග ඝ ඞ ඟ ච ඡ ජ ඣ ඤ ඥ ඦ ට ඨ ඩ ඪ ණ ඬ ත ත ද ධ න ඳ ප ඵ බ භ ම ර ය ර ල ව ශ ෂ ස හ ළ ෆ ් ා ෑ ි ී ු ූ ූ ං ේ ෛ ෝ ෞ ෟ ෦ ෧ ෨ ෩ ෪ ෫ ෬ ෭ ෮ ෯ ෲ ෳ ෴',
  kanada: 'ಀ ಁ ಂ ಃ ಄ ಅ ಆ ಇ ಈ ಉ ಊ ಋ ಌ ಎ ಏ ಐ ಒ ಓ ಔ ಕ ಖ ಗ ಘ ಙ ಚ ಛ ಜ ಝ ಞ ಟ ಠ ಡ ಢ ಣ ತ ಥ ದ ಧ ನ ಪ ಫ ಬ ಭ ಮ ಯ ರ ಱ ಲ ಳ ವ ಶ ಷ ಸ ಹ ಼ ಽ ಾ ࿀',
  khmer: 'ក ខ គ ឃ ង ច ឆ ជ ឈ ញ ដ ឋ ឌ ឍ ណ ត ថ ទ ធ ន ប ផ ព ភ ម យ រ ល វ ឝ ឞ ស ហ ល អ ឣ ឤ ឥ ឦ ឧ ឨ ឩ ឪ ឫ ឬ ឭ ឮ ឯ ឰ ឱ ឲ ឳ ា ៉ ៎ ៘ ៙ ៚ ៛ ៜ ៝ ៰ ៱ ៲ ៳ ៴ ៵ ៶ ៷ ៸ ៹',
  cham: 'ꨀ ꨁ ꨂ ꨃ ꨄ ꨅ ꨆ ꨇ ꨈ ꨉ ꨊ ꨋ ꨌ ꨍ ꨎ ꨏ ꨐ ꨑ ꨒ ꨓ ꨔ ꨕ ꨖ ꨗ ꨘ ꨙ ꨚ ꨛ ꨜ ꨝ ꨞ ꨟ ꨠ ꨡ ꨢ ꨣ ꨤ ꨥ ꨦ ꨧ ꨨ ꨩ ꨪ ꨫ ꨬ ꨭ ꨮ ꨯ ꨰ ꨱ ꨲ ꨳ ꨴ ꨵ ꨶ ꩀ ꩁ ꩂ ꩃ ꩄ ꩅ ꩆ ꩇ ꩈ ꩉ ꩊ ꩋ ꩌ ꩍ ꩐ ꩑ ꩒ ꩓ ꩔ ꩕ ꩖ ꩗ ꩘ ꩙ ꩜ ꩝ ꩞ ꩟',
  balinese: 'ᬀ ᬁ ᬂ ᬃ ᬄ ᬅ ᬆ ᬇ ᬈ ᬉ ᬊ ᬋ ᬌ ᬍ ᬎ ᬏ ᬐ ᬑ ᬒ ᬓ ᬔ ᬕ ᬖ ᬗ ᬘ ᬙ ᬚ ᬛ ᬜ ᬝ ᬞ ᬟ ᬠ ᬡ ᬢ ᬣ ᬤ ᬥ ᬦ ᬧ ᬨ ᬩ ᬪ ᬫ ᬬ ᬭ ᬮ ᬯ ᬰ ᬱ ᬲ ᬳ ᬴ ᬵ ᬶ ᬷ ᬸ ᬹ ᬺ ᬻ ᬼ ᬽ ᬾ ᬿ ᭀ ᭁ ᭂ ᭃ ᭄ ᭅ ᭆ ᭇ ᭈ ᭉ ᭊ ᭋ ᭐ ᭑ ᭒ ᭓ ᭔ ᭕ ᭖ ᭗ ᭘ ᭙ ᭚ ᭛ ᭜ ᭝ ᭞ ᭟ ᭠ ᭡ ᭢ ᭣ ᭤ ᭥ ᭦ ᭧ ᭨ ᭩ ᭪ ᭫ ᭬ ᭭ ᭮ ᭯ ᭰ ᭱ ᭲ ᭳ ᭴ ᭵ ᭶ ᭷ ᭸ ᭹ ᭺ ᭻ ᭼',
  batak: 'ᯀ ᯁ ᯂ ᯃ ᯄ ᯅ ᯆ ᯇ ᯈ ᯉ ᯊ ᯋ ᯌ ᯍ ᯎ ᯏ ᯐ ᯑ ᯒ ᯓ ᯔ ᯕ ᯖ ᯗ ᯘ ᯙ ᯚ ᯛ ᯜ ᯝ ᯞ ᯟ ᯠ ᯡ ᯢ ᯣ ᯤ ᯥ ᯦ ᯧ ᯨ ᯩ ᯪ ᯫ ᯬ ᯭ ᯮ ᯯ ᯰ ᯱ ᯲ ᯳ ᯼ ᯽ ᯾ ᯿',
  buhid: 'ᝀ ᝁ ᝂ ᝃ ᝄ ᝅ ᝆ ᝇ ᝈ ᝉ ᝊ ᝋ ᝌ ᝍ ᝎ ᝏ ᝐ ᝑ ᝒ ᝓ',
  hanuno: 'ᜠ ᜡ ᜢ ᜣ ᜤ ᜥ ᜦ ᜧ ᜨ ᜩ ᜪ ᜫ ᜬ ᜭ ᜮ ᜯ ᜰ ᜱ ᜲ ᜳ ᜴ ᜵ ᜶',
  javanese: 'ꦀ ꦁ ꦂ ꦃ ꦄ ꦅ ꦆ ꦇ ꦈ ꦉ ꦊ ꦋ ꦌ ꦍ ꦎ ꦏ ꦐ ꦑ ꦒ ꦓ ꦔ ꦕ ꦖ ꦗ ꦘ ꦙ ꦚ ꦛ ꦜ ꦝ ꦞ ꦟ ꦠ ꦡ ꦢ ꦣ ꦤ ꦥ ꦦ ꦧ ꦨ ꦩ ꦪ ꦫ ꦬ ꦭ ꦮ ꦯ ꦰ ꦱ ꦲ ꦳ ꦴ ꦵ ꦶ ꦷ ꦸ ꦹ ꦺ ꦻ ꦼ ꦽ ꦾ ꦿ ꧀ ꧁ ꧂ ꧃ ꧄ ꧅ ꧆ ꧇ ꧈ ꧉ ꧊ ꧋ ꧌ ꧍ ꧏ ꧐ ꧑ ꧒ ꧓ ꧔ ꧕ ꧖ ꧗ ꧘ ꧙ ꧞ ꧟',
  buginese: 'ᨀ ᨁ ᨂ ᨃ ᨄ ᨅ ᨆ ᨇ ᨈ ᨉ ᨊ ᨋ ᨌ ᨍ ᨎ ᨏ ᨐ ᨑ ᨒ ᨓ ᨔ ᨕ ᨖ ᨊ ᨊᨗ ᨊᨘ ᨊᨙ ᨊᨚ ᨊᨛ ᨞ ᨟',
  sudanese: 'ᮀ ᮁ ᮂ ᮃ ᮄ ᮅ ᮆ ᮇ ᮈ ᮉ ᮊ ᮋ ᮌ ᮍ ᮎ ᮏ ᮐ ᮑ ᮒ ᮓ ᮔ ᮕ ᮖ ᮗ ᮘ ᮙ ᮚ ᮛ ᮜ ᮝ ᮞ ᮟ ᮠ ᮡ ᮢ ᮣ ᮤ ᮥ ᮦ ᮧ ᮨ ᮩ ᮪ ᮫ ᮬ ᮭ ᮮ ᮯ ᮰ ᮱ ᮲ ᮳ ᮴ ᮵ ᮶ ᮷ ᮸ ᮹ ᮺ ᮻ ᮼ ᮽ ᮾ ᮿ ᳀ ᳁ ᳂ ᳃ ᳄ ᳅ ᳆ ᳇',
  miao: '𖼀 𖼁 𖼂 𖼃 𖼄 𖼅 𖼆 𖼇 𖼈 𖼉 𖼊 𖼋 𖼌 𖼍 𖼎 𖼏 𖼐 𖼑 𖼒 𖼓 𖼔 𖼕 𖼖 𖼗 𖼘 𖼙 𖼚 𖼛 𖼜 𖼝 𖼞 𖼟 𖼠 𖼡 𖼢 𖼣 𖼤 𖼥 𖼦 𖼧 𖼨 𖼩 𖼪 𖼫 𖼬 𖼭 𖼮 𖼯 𖼰 𖼱 𖼲 𖼳 𖼴 𖼵 𖼶 𖼷 𖼸 𖼹 𖼺 𖼻 𖼼 𖼽 𖼾 𖼿 𖽀 𖽁 𖽂 𖽃 𖽄 𖽅 𖽆 𖽇 𖽈 𖽉 𖽊 𖽏 𖽐 𖽑 𖽒 𖽓 𖽔 𖽕 𖽖 𖽗 𖽘 𖽙 𖽚 𖽛 𖽜 𖽝 𖽞 𖽟 𖽠 𖽡 𖽢 𖽣 𖽤 𖽥 𖽦 𖽧 𖽨 𖽩 𖽪 𖽫 𖽬 𖽭 𖽮 𖽯 𖽰 𖽱 𖽲 𖽳 𖽴 𖽵 𖽶 𖽷 𖽸 𖽹 𖽺 𖽻 𖽼 𖽽 𖽾 𖽿 𖾀 𖾁 𖾂 𖾃 𖾄 𖾅 𖾆 𖾇 𖾏 𖾐 𖾑 𖾒 𖾓 𖾔 𖾕 𖾖 𖾗 𖾘 𖾙 𖾚 𖾛 𖾜 𖾝 𖾞 𖾟',
  nyia: '𞄀 𞄁 𞄂 𞄃 𞄄 𞄅 𞄆 𞄇 𞄈 𞄉 𞄊 𞄋 𞄌 𞄍 𞄎 𞄏 𞄐 𞄑 𞄒 𞄓 𞄔 𞄕 𞄖 𞄗 𞄘 𞄙 𞄚 𞄛 𞄜 𞄝 𞄞 𞄟 𞄠 𞄡 𞄢 𞄣 𞄤 𞄥 𞄦 𞄧 𞄨 𞄩 𞄪 𞄫 𞄬 𞄰 𞄱 𞄲 𞄳 𞄴 𞄵 𞄶 𞄷 𞄸 𞄹 𞄺 𞄻 𞄼 𞄽 𞅀 𞅁 𞅂 𞅃 𞅄 𞅅 𞅆 𞅇 𞅈 𞅉 𞅎 𞅏',
  thai: 'ก ข ฃ ค ฅ ฆ ง จ ฉ ช ซ ฌ ญ ฎ ฏ ฐ ฑ ฒ ณ ด ต ถ ท ธ น บ ป ผ ฝ พ ฟ ภ ม ย ร ฤ ล ฦ ว ศ ษ ส ห ฬ อ ฮ ฯ ะ ั า ำ ิ ี ึ ื ุ ู ฺ ฿ เ แ โ ใ ไ ๅ ๆ ็ ่ ้ ๋ ๊ ๋ ๎ ๏ ๐ ๑ ๒ ๓ ๔ ๕ ๖ ๗ ๘ ๙ ๚ ๛',
  lao: 'ກ ຂ ຄ ງ ຈ ຊ ຍ ດ ຕ ຖ ທ ນ ບ ປ ຜ ຝ ພ ຟ ມ ຢ ࣣ ລ ວ ສ ຫ ອ ຮ ຯ ເ ແ ໂ ໃ ໄ ໆ ່ ້ ໊ ໋ ໌ ໍ ໐ ໑ ໒ ໓ ໔ ໕ ໖ ໗ ໘ ໙ ໜ ໝ ໞ ໟ',
  burmese: 'က ခ ဂ ဃ င စ ဆ ဇ ဈ ဉ ည ဋ ဌ ဍ ဎ ဏ တ ထ ဒ ဓ န ပ ဖ ဗ ဘ မ ယ ရ လ ဝ သ ဟ ဠ အ ဢ ဣ ဤ ဥ ဦ ဧ ဨ ဩ ဪ ါ ာ ိ ီ ု ူ ေ ဲ ဳ ဴ ဵ ံ ့ း ္ ် ျ ြ ွ ှ ဿ ၀ ၁ ၂ ၃ ၄ ၅ ၆ ၇ ၈ ၉ ၊ ။ ၌ ၍ ၎ ၏ ၐ ၑ ၒ ၓ ၔ ၕ ၖ ၗ ၘ ၙ ၚ ၛ ၜ ၝ ၞ ၟ ၠ ၡ ၢ ၣ ၤ ၥ ၦ ၧ ၨ ၩ ၪ ၫ ၬ ၭ ၮ ၯ ၰ ၱ ၲ ၳ ၴ ၵ ၶ ၷ ၸ ၹ ၺ ၻ ၼ ၽ ၾ ၿ ႀ ႁ ႂ ႃ ႄ ႅ ႆ ႇ ႈ ႉ ႊ ႋ ႌ ႍ ႎ ႏ ႐ ႑ ႒ ႓ ႔ ႕ ႖ ႗ ႘ ႙ ႚ ႛ ႜ ႝ ႞ ႟',
  taile: 'ᥐ ᥑ ᥒ ᥓ ᥔ ᥕ ᥖ ᥗ ᥘ ᥙ ᥚ ᥛ ᥜ ᥝ ᥞ ᥟ ᥠ ᥡ ᥢ ᥣ ᥤ ᥥ ᥦ ᥧ ᥨ ᥩ ᥪ ᥫ ᥬ ᥭ ᥰ ᥱ ᥲ ᥳ ᥴ',
  tailue: 'ᦀ ᦁ ᦂ ᦃ ᦄ ᦅ ᦆ ᦇ ᦈ ᦉ ᦊ ᦋ ᦌ ᦍ ᦎ ᦏ ᦐ ᦑ ᦒ ᦓ ᦔ ᦕ ᦖ ᦗ ᦘ ᦙ ᦚ ᦛ ᦜ ᦝ ᦞ ᦟ ᦠ ᦡ ᦢ ᦣ ᦤ ᦥ ᦦ ᦧ ᦨ ᦩ ᦪ ᦫ ᦰ ᦱ ᦲ ᦳ ᦴ ᦵ ᦶ ᦷ ᦸ ᦹ ᦺ ᦻ ᦼ ᦽ ᦾ ᦿ ᧀ ᧁ ᧂ ᧃ ᧄ ᧅ ᧆ ᧇ ᧈ ᧉ ᧐ ᧑ ᧒ ᧓ ᧔ ᧕ ᧖ ᧗ ᧘ ᧙ ᧚ ᧞ ᧟',
  chakma: '𑄀 𑄁 𑄂 𑄃 𑄄 𑄅 𑄆 𑄇 𑄈 𑄉 𑄊 𑄋 𑄌 𑄍 𑄎 𑄏 𑄐 𑄑 𑄒 𑄓 𑄔 𑄕 𑄖 𑄗 𑄘 𑄙 𑄚 𑄛 𑄜 𑄝 𑄞 𑄟 𑄠 𑄡 𑄢 𑄣 𑄤 𑄥 𑄦 𑄧 𑄨 𑄩 𑄪 𑄫 𑄬 𑄭 𑄮 𑄯 𑄰 𑄱 𑄲 𑄳 𑄴 𑄶 𑄷 𑄸 𑄹 𑄺 𑄻 𑄼 𑄽 𑄾 𑄿 𑅀 𑅁 𑅂 𑅃 𑅄 𑅅 𑅆 𑅇',
  kayahli: '꤀ ꤁ ꤂ ꤃ ꤄ ꤅ ꤆ ꤇ ꤈ ꤉ ꤊ ꤋ ꤌ ꤍ ꤎ ꤏ ꤐ ꤑ ꤒ ꤓ ꤔ ꤕ ꤖ ꤗ ꤘ ꤙ ꤚ ꤛ ꤜ ꤝ ꤞ ꤟ ꤠ ꤡ ꤢ ꤣ ꤤ ꤥ ꤦ ꤧ ꤨ ꤩ ꤪ ꤫ ꤬ ꤭ ꤮ ꤯',
  lisu: 'ꓐ ꓑ ꓒ ꓓ ꓔ ꓕ ꓖ ꓗ ꓘ ꓙ ꓚ ꓛ ꓜ ꓝ ꓞ ꓟ ꓠ ꓡ ꓢ ꓣ ꓤ ꓥ ꓦ ꓧ ꓨ ꓩ ꓪ ꓫ ꓬ ꓭ ꓮ ꓯ ꓰ ꓱ ꓲ ꓳ ꓴ ꓵ ꓶ ꓷ ꓸ ꓹ ꓺ ꓻ ꓼ ꓽ ꓾ ꓿',
  tibetan: 'ༀ ༁ ༂ ༃ ༄ ༅ ༆ ༇ ༈ ༉ ༊ ་ ༌ ། ༎ ༏ ༐ ༑ ༒ ༓ ༔ ༕ ༖ ༗ ༘ ༙ ༚ ༛ ༜ ༝ ༞ ༟ ༠ ༡ ༢ ༣ ༤ ༥ ༦ ༧ ༨ ༩ ༪ ༫ ༬ ༭ ༮ ༯ ༰ ༱ ༲ ༳ ༴ ༵ ༶ ༷ ༸ ༹ ༺ ༻ ༼ ༽ ༾ ༿ ཀ ཁ ག གྷ ང ཅ ཆ ཇ ཉ ཊ ཋ ཌ ཌྷ ཎ ཏ ཐ ད དྷ ན པ ཕ བ བྷ མ ཙ ཚ ཛ ཛྷ ཝ ཞ ཟ འ ཡ ར ལ ཤ ཥ ས ཧ ཨ ཀྵ ཪ ཫ ཬ ཱ ི ཱི ུ ཱུ ྲྀ ཷ ླྀ ཹ ེ ཻ ོ ཽ ཾ ཿ ྀ ཱྀ ྂ ྃ ྄ ྅ ྆ ྇ ྈ ྉ ྊ ྋ ྌ ྍ ྎ ྏ ྐ ྑ ྒ ྒྷ ྔ ྕ ྖ ྗ ྙ ྚ ྛ ྜ ྜྷ ྞ ྟ ྠ ྡ ྡྷ ྣ ྤ ྥ ྦ ྦྷ ྨ ྩ ྪ ྫ ྫྷ ྭ ྮ ྯ ྰ ྱ ྲ ླ ྴ ྵ ྶ ྷ ྸ ྐྵ ྺ ྻ ྼ ྾ ྿ ࿀ ࿁ ࿂ ࿃ ࿄ ࿅ ࿆ ࿇ ࿈ ࿉ ࿊ ࿋ ࿌ ࿎ ࿏',
  yi: 'ꀀ ꀖ ꀸ ꁖ ꁶ ꂑ ꂮ ꃍ ꃢ ꄀ ꄚ ꄶ ꅑ ꅨ ꅽ ꆗ ꆷ ꇚ ꇸ ꈔ ꉆ ꉮ ꀁ ꀗ ꀹ ꁗ ꁷ ꂒ ꂯ ꃎ ꃣ ꄁ ꄛ ꄷ ꅒ ꅩ ꅾ ꆘ ꆸ ꇛ ꇹ ꈕ ꉇ ꀂ ꀘ ꀺ ꁘ ꁸ ꂓ ꂰ ꃏ ꃥ ꄂ ꄜ ꄸ ꅓ ꅪ ꅿ ꆙ ꆹ ꇜ ꇺ ꈖ ꉈ ꀃ ꀙ ꀻ ꁙ ꁹ ꂔ ꂱ ꃐ ꃥ ꄃ ꄝ ꄹ ꅔ ꅫ ꆀ ꆚ ꆺ ꇝ ꇻ ꉉ ꀄ ꀚ ꁚ ꃦ ꅬ ꆻ ꇞ ꉊ ꀅ ꀛ ꀼ ꁛ ꁺ ꂕ ꂲ ꃧ ꄄ ꄞ ꄺ ꅕ ꅭ ꆁ ꆛ ꆼ ꇠ ꇽ ꈘ ꈱ ꉌ ꀆ ꀜ ꀽ ꁜ ꁻ ꂖ ꂳ ꃨ ꄅ ꄟ ꄻ ꅖ ꅮ ꆂ ꆜ ꆽ ꇡ ꇾ ꈙ ꉍ ꉟ ꀇ ꀝ ꀾ ꁝ ꁼ ꂗ ꂴ ꃩ ꄆ ꄠ ꄼ ꅯ ꆃ ꆝ ꆾ ꇀ ꇣ ꈁ ꈛ ꀈ ꀞ ꀿ ꁞ ꁽ ꂙ ꂶ ꃒ ꃫ ꄇ ꄡ ꄾ ꅘ ꅱ ꆞ ꆿ ꇢ ꇿ ꈚ ꈲ ꀉ ꀟ ꁀ ꁟ ꁾ ꂚ ꂷ ꃓ ꃬ ꄊ ꄤ ꅀ ꅴ ꆇ ꆢ ꇄ ꇧ ꈃ ꈟ ꈶ ꉓ ꉥ ꉶ ꀍ ꀣ ꁄ ꁣ ꂝ ꂻ ꄌ ꄧ ꅂ ꅵ ꆈ ꆣ ꇆ ꇩ ꈅ ꈡ ꈸ ꉕ ꉸ ꊆ ꀎ ꀦ ꁇ ꁦ ꂂ ꂛ ꂸ ꃮ ꄍ ꄩ ꅄ ꅛ ꅶ ꆊ ꇇ ꇪ ꈆ ꈢ ꈹ ꀐ ꀦ ꁇ ꁦ ꂂ ꂠ ꂾ ꃕ ꃯ ꄎ ꄪ ꅅ ꅜ ꅷ ꆋ ꆥ ꇈ ꇫ ꈄ ꈠ ꈷ ꉕ ꉸ ꉾ ꀑ ꀧ ꁉ ꁨ ꂄ ꂢ ꃀ ꃗ ꃱ ꄐ ꄬ ꅇ ꅞ ꅸ ꆍ ꆧ ꇊ ꇭ ꈈ ꀒ ꀨ ꁩ ꃁ ꃲ ꄑ ꄭ ꅈ ꅟ ꅹ ꆎ ꆨ ꇋ ꇯ ꈋ ꈧ ꈽ ꉚ ꀔ ꀪ ꁪ ꃂ ꄒ ꄮ ꅉ ꅠ ꅺ ꆏ ꆩ ꇰ ꈌ ꈨ ꈾ ꉛ ꉬ ꉾ ꀕ ꀪ ꁪ ꃂ ꄓ ꄯ ꅊ ꅡ ꅻ ꆐ ꆪ ꇍ ꇱ ꈍ ꈩ ꈿ ꉜ ꀬ ꁊ ꁬ ꂅ ꂣ ꃃ ꃘ ꃴ ꄔ ꄰ ꅋ ꅢ ꅼ ꆑ ꆫ ꇎ ꇲ ꀭ ꁋ ꁭ ꂆ ꂤ ꃄ ꃙ ꃵ ꄕ ꄱ ꅌ ꅣ ꆒ ꆬ ꇏ ꇳ ꈏ',

  brahmi: '𑀀 𑀁 𑀂 𑀃 𑀄 𑀅 𑀆 𑀇 𑀈 𑀉 𑀊 𑀋 𑀌 𑀍 𑀎 𑀏 𑀐 𑀑 𑀒 𑀓 𑀔 𑀕 𑀖 𑀗 𑀘 𑀙 𑀚 𑀛 𑀜 𑀝 𑀞 𑀟 𑀠 𑀡 𑀢 𑀣 𑀤 𑀥 𑀦 𑀧 𑀨 𑀩 𑀪 𑀫 𑀬 𑀭 𑀮 𑀯 𑀰 𑀱 𑀲 𑀳 𑀴 𑀵 𑀶 𑀷 𑀸 𑀹 𑀺 𑀻 𑀼 𑀽 𑀾 𑀿 𑁀 𑁁 𑁂 𑁃 𑁄 𑁅 𑁆 𑁇 𑁈 𑁉 𑁊 𑁋 𑁌 𑁍 𑁒 𑁓 𑁔 𑁕 𑁖 𑁗 𑁘 𑁙 𑁚 𑁛 𑁜 𑁝 𑁞 𑁟 𑁠 𑁡 𑁢 𑁣 𑁤 𑁥 𑁦 𑁧 𑁨 𑁩 𑁪 𑁫 𑁬 𑁭 𑁮 𑁯 𑁰 𑁱 𑁲 𑁳 𑁴 𑁵',
  sharada: '𑆀 𑆁 𑆂 𑆃 𑆄 𑆅 𑆆 𑆇 𑆈 𑆉 𑆊 𑆋 𑆌 𑆍 𑆎 𑆏 𑆐 𑆑 𑆒 𑆓 𑆔 𑆕 𑆖 𑆗 𑆘 𑆙 𑆚 𑆛 𑆜 𑆝 𑆞 𑆟 𑆠 𑆡 𑆢 𑆣 𑆤 𑆥 𑆦 𑆧 𑆨 𑆩 𑆪 𑆫 𑆬 𑆭 𑆮 𑆯 𑆰 𑆱 𑆲 𑆳 𑆴 𑆵 𑆶 𑆷 𑆸 𑆹 𑆺 𑆻 𑆼 𑆽 𑆾 𑆿 𑇀 𑇁 𑇂 𑇃 𑇄 𑇅 𑇆 𑇇 𑇈 𑇉 𑇊 𑇋 𑇌 𑇍 𑇎 𑇏 𑇐 𑇑 𑇒 𑇓 𑇔 𑇕 𑇖 𑇗 𑇘 𑇙 𑇚 𑇛 𑇜 𑇝 𑇞 𑇟',
  gurmukhi: 'ਁ ਂ ਃ ਅ ਆ ਇ ਈ ਉ ਊ ਏ ਐ ਓ ਔ ਕ ਖ ਗ ਘ ਙ ਚ ਛ ਜ ਝ ਞ ਟ ਠ ਡ ਢ ਣ ਤ ਥ ਦ ਧ ਨ ਪ ਫ ਬ ਭ ਮ ਯ ਰ ਲ ਲ਼ ਵ ਸ਼ ਸ ਹ ੳ ੴ ੵ ੶',
  khojki: '𑈀 𑈁 𑈂 𑈃 𑈄 𑈅 𑈆 𑈇 𑈈 𑈉 𑈊 𑈋 𑈌 𑈍 𑈎 𑈏 𑈐 𑈑 𑈓 𑈔 𑈕 𑈖 𑈗 𑈘 𑈙 𑈚 𑈛 𑈜 𑈝 𑈞 𑈟 𑈠 𑈡 𑈢 𑈣 𑈤 𑈥 𑈦 𑈧 𑈨 𑈩 𑈪 𑈫 𑈬 𑈭 𑈮 𑈯 𑈰 𑈱 𑈲 𑈳 𑈴 𑈵 𑈶 𑈷 𑈸 𑈹 𑈺 𑈻 𑈼 𑈽 𑈾',
  khudawadi: '𑊰 𑊱 𑊲 𑊳 𑊴 𑊵 𑊶 𑊷 𑊸 𑊹 𑊺 𑊻 𑊼 𑊽 𑊾 𑊿 𑋀 𑋁 𑋂 𑋃 𑋄 𑋅 𑋆 𑋇 𑋈 𑋉 𑋊 𑋋 𑋌 𑋍 𑋎 𑋏 𑋐 𑋑 𑋒 𑋓 𑋔 𑋕 𑋖 𑋗 𑋘 𑋙 𑋚 𑋛 𑋜 𑋝 𑋞 𑋟 𑋠 𑋡 𑋢 𑋣 𑋤 𑋥 𑋦 𑋧 𑋨 𑋩 𑋪 𑋰 𑋱 𑋲 𑋳 𑋴 𑋵 𑋶 𑋷 𑋸 𑋹',
  mahajani: '𑅐 𑅑 𑅒 𑅓 𑅔 𑅕 𑅖 𑅗 𑅘 𑅙 𑅚 𑅛 𑅜 𑅝 𑅞 𑅟 𑅠 𑅡 𑅢 𑅣 𑅤 𑅥 𑅦 𑅧 𑅨 𑅩 𑅪 𑅫 𑅬 𑅭 𑅮 𑅯 𑅰 𑅱 𑅲 𑅳 𑅴 𑅵 𑅶',
  multani: '𑊀 𑊁 𑊂 𑊃 𑊄 𑊅 𑊆 𑊈 𑊊 𑊋 𑊌 𑊍 𑊏 𑊐 𑊑 𑊒 𑊓 𑊔 𑊕 𑊖 𑊗 𑊘 𑊙 𑊚 𑊛 𑊜 𑊝 𑊟 𑊠 𑊡 𑊢 𑊣 𑊤 𑊥 𑊦 𑊧 𑊨 𑊩',
  takri: '𑚀 𑚁 𑚂 𑚃 𑚄 𑚅 𑚆 𑚇 𑚈 𑚉 𑚊 𑚋 𑚌 𑚍 𑚎 𑚏 𑚐 𑚑 𑚒 𑚓 𑚔 𑚕 𑚖 𑚗 𑚘 𑚙 𑚚 𑚛 𑚜 𑚝 𑚞 𑚟 𑚠 𑚡 𑚢 𑚣 𑚤 𑚥 𑚦 𑚧 𑚨 𑚩 𑚪 𑚫 𑚬 𑚭 𑚮 𑚯 𑚰 𑚱 𑚲 𑚳 𑚴 𑚵 𑚶 𑚷 𑚸 𑛀 𑛁 𑛂 𑛃 𑛄 𑛅 𑛆 𑛇 𑛈 𑛉',
  dogra: '𑠀 𑠁 𑠂 𑠃 𑠄 𑠅 𑠆 𑠇 𑠈 𑠉 𑠊 𑠋 𑠌 𑠍 𑠎 𑠏 𑠐 𑠑 𑠒 𑠓 𑠔 𑠕 𑠖 𑠗 𑠘 𑠙 𑠚 𑠛 𑠜 𑠝 𑠞 𑠟 𑠠 𑠡 𑠢 𑠣 𑠤 𑠥 𑠦 𑠧 𑠨 𑠩 𑠪 𑠫 𑠬 𑠭 𑠮 𑠯 𑠰 𑠱 𑠲 𑠳 𑠴 𑠵 𑠶 𑠷 𑠸 𑠹 𑠺 𑠻',
  devanagari: 'ऀ ँ ं ः ऄ अ आ इ ई उ ऊ ऋ ऌ ऍ ऎ ए ऐ ऑ ऒ ओ औ क ख ग घ ङ च छ ज झ ञ ट ठ ड ढ ण त थ द ध न ऩ प फ ब भ म य र ऱ ल ळ ऴ व श ष स ह ऺ ऻ ़ ऽ ा ि ी ु ू ृ ॄ ॅ ॆ े ै ॉ ॊ ो ौ ् ॎ ॏ ॐ ॑ ॒ ॓ ॔ ॕ ॖ ॗ क़ ख़ ग़ ज़ ड़ ढ़ फ़ य़ ॠ ॡ ॢ ॣ । ॥ ० १ २ ३ ४ ५ ६ ७ ८ ९ ॰ ॱ ॲ ॳ ॴ ॵ ॶ ॷ ॸ ॹ ॺ ॻ ॼ ॽ ॾ ॿ ꣠ ꣡ ꣢ ꣣ ꣤ ꣥ ꣦ ꣧ ꣨ ꣩ ꣪ ꣫ ꣬ ꣭ ꣮ ꣯ ꣰ ꣱ ꣲ ꣳ ꣴ ꣵ ꣶ ꣷ ꣸ ꣹ ꣺ ꣻ ꣼ ꣽ ꣾ ꣿ',
  modi: '𑘀 𑘁 𑘂 𑘃 𑘄 𑘅 𑘆 𑘇 𑘈 𑘉 𑘊 𑘋 𑘌 𑘍 𑘎 𑘏 𑘐 𑘑 𑘒 𑘓 𑘔 𑘕 𑘖 𑘗 𑘘 𑘙 𑘚 𑘛 𑘜 𑘝 𑘞 𑘟 𑘠 𑘡 𑘢 𑘣 𑘤 𑘥 𑘦 𑘧 𑘨 𑘩 𑘪 𑘫 𑘬 𑘭 𑘮 𑘯 𑘰 𑘱 𑘲 𑘳 𑘴 𑘵 𑘶 𑘷 𑘸 𑘹 𑘺 𑘻 𑘼 𑘽 𑘾 𑘿 𑙀 𑙁 𑙂 𑙃 𑙄 𑙐 𑙑 𑙒 𑙓 𑙔 𑙕 𑙖 𑙗 𑙘 𑙙',
  gujarati: 'ઁ ં ઃ અ આ ઇ ઈ ઉ ઊ ઋ ઌ ઍ એ ઐ ઑ ઓ ઔ ક ખ ગ ઘ ઙ ચ છ જ ઝ ઞ ટ ઠ ડ ઢ ણ ત થ દ ધ ન પ ફ બ ભ મ ય ર લ ળ વ શ ષ સ હ ઼ ઽ ા િ ી ુ ૂ ૃ ૄ ૅ ે ૈ ૉ ો ૌ ્ ૐ ૠ ૡ ૢ ૣ ૦ ૧ ૨ ૩ ૪ ૫ ૬ ૭ ૮ ૯ ૰ ૱ ૹ ૺ ૻ ૼ ૽ ૾ ૿',
  kaithi: '𑂀 𑂁 𑂂 𑂃 𑂄 𑂅 𑂆 𑂇 𑂈 𑂉 𑂊 𑂋 𑂌 𑂍 𑂎 𑂏 𑂐 𑂑 𑂒 𑂓 𑂔 𑂕 𑂖 𑂗 𑂘 𑂙 𑂚 𑂛 𑂜 𑂝 𑂞 𑂟 𑂠 𑂡 𑂢 𑂣 𑂤 𑂥 𑂦 𑂧 𑂨 𑂩 𑂪 𑂫 𑂬 𑂭 𑂮 𑂯 𑂰 𑂱 𑂲 𑂳 𑂴 𑂵 𑂶 𑂷 𑂸 𑂹 𑂺 𑂻 𑂼 𑂽 𑂾 𑂿 𑃀 𑃁 𑃍',
  bengali: 'ঀ ঁ ং ঃ অ আ ই ঈ উ ঊ ঋ ঌ এ ঐ ও ঔ ক খ গ ঘ ঙ চ ছ জ ঝ ঞ ট ঠ ড ঢ ণ ত থ দ ধ ন প ফ ব ভ ম য র ল শ ষ স হ ় ঽ া ি ী ু ূ ৃ ৄ েৈ ো ৌ ্ ৎ ৗ ড় ঢ় য় ৠ ৡ ৢ ৣ ০ ১ ২ ৩ ৪ ৫ ৬ ৭ ৮ ৯ ৰ ৱ ৲ ৳ ৴ ৵ ৶ ৷ ৸ ৹ ৺ ৻ ৼ ৽',
  tirhuta: '𑒀 𑒁 𑒂 𑒃 𑒄 𑒅 𑒆 𑒇 𑒈 𑒉 𑒊 𑒋 𑒌 𑒍 𑒎 𑒏 𑒐 𑒑 𑒒 𑒓 𑒔 𑒕 𑒖 𑒗 𑒘 𑒙 𑒚 𑒛 𑒜 𑒝 𑒞 𑒟 𑒠 𑒡 𑒢 𑒣 𑒤 𑒥 𑒦 𑒧 𑒨 𑒩 𑒪 𑒫 𑒬 𑒭 𑒮 𑒯 𑒰 𑒱 𑒲 𑒳 𑒴 𑒵 𑒶 𑒷 𑒸 𑒹 𑒺 𑒻 𑒼 𑒽 𑒾 𑒿 𑓀 𑓁 𑓂 𑓃 𑓄 𑓅 𑓆 𑓇 𑓐 𑓑 𑓒 𑓓 𑓔 𑓕 𑓖 𑓗 𑓘 𑓙',
  oriya: 'ଁ ଂ ଃ ଅ ଆ ଇ ଈ ଉ ଊ ଋ ଌ ଏ ଐ ଓ ଔ କ ଖ ଗ ଘ ଙ ଚ ଛ ଜ ଝ ଞ ଟ ଠ ଡ ଢ ଣ ତ ଥ ଦ ଧ ନ ପ ଫ ବ ଭ ମ ଯ ର ଲ ଳ ଵ ଶ ଷ ସ ହ ଼ ଽ ା ି ୀ ୁ ୂ ୃ ୄ େ ୈ ୋ ୌ ୍ ୕ ୖ ୗ ଡ଼ ଢ଼ ୟ ୠ ୡ ୢ ୣ ୦ ୧ ୨ ୩ ୪ ୫ ୬ ୭ ୮ ୯ ୰ ୱ ୲ ୳ ୴ ୵ ୶ ୷',
  soyombo: '𑩐 𑩑 𑩒 𑩓 𑩔 𑩕 𑩖 𑩗 𑩘 𑩙 𑩚 𑩛 𑩜 𑩝 𑩞 𑩟 𑩠 𑩡 𑩢 𑩣 𑩤 𑩥 𑩦 𑩧 𑩨 𑩩 𑩪 𑩫 𑩬 𑩭 𑩮 𑩯 𑩰 𑩱 𑩲 𑩳 𑩴 𑩵 𑩶 𑩷 𑩸 𑩹 𑩺 𑩻 𑩼 𑩽 𑩾 𑩿 𑪀 𑪁 𑪂 𑪃 𑪄 𑪅 𑪆 𑪇 𑪈 𑪉 𑪊 𑪋 𑪌 𑪍 𑪎 𑪏 𑪐 𑪑 𑪒 𑪓 𑪔 𑪕 𑪖 𑪗 𑪘 𑪙 𑪚 𑪛 𑪜 𑪝 𑪞 𑪟 𑪠 𑪡 𑪢',
  meetei: 'ꯀ ꯁ ꯂ ꯃ ꯄ ꯅ ꯆ ꯇ ꯈ ꯉ ꯊ ꯋ ꯌ ꯍ ꯎ ꯏ ꯐ ꯑ ꯒ ꯓ ꯔ ꯕ ꯖ ꯗ ꯘ ꯙ ꯚ ꯛ ꯜ ꯝ ꯞ ꯟ ꯠ ꯡ ꯢ ꯣ ꯤ ꯥ ꯦ ꯧ ꯨ ꯩ ꯪ ꯫ ꯬ ꯭ ꯰ ꯱ ꯲ ꯳ ꯴ ꯵ ꯶ ꯷ ꯸ ꯹',
  lepcha: 'ᰀ ᰁ ᰂ ᰃ ᰄ ᰅ ᰆ ᰇ ᰈ ᰉ ᰊ ᰋ ᰌ ᰍ ᰎ ᰏ ᰐ ᰑ ᰒ ᰓ ᰔ ᰕ ᰖ ᰗ ᰘ ᰙ ᰚ ᰛ ᰜ ᰝ ᰞ ᰟ ᰠ ᰡ ᰢ ᰣ ᰤ ᰥ ᰦ ᰧ ᰨ ᰩ ᰪ ᰫ ᰬ ᰭ ᰮ ᰯ ᰰ ᰱ ᰲ ᰳ ᰴ ᰵ ᰶ ᰷ ᰻ ᰼ ᰽ ᰾ ᰿ ᱀ ᱁ ᱂ ᱃ ᱄ ᱅ ᱆ ᱇ ᱈ ᱉ ᱍ ᱎ ᱏ',
  limbu: 'ᤀ ᤁ ᤂ ᤃ ᤄ ᤅ ᤆ ᤇ ᤈ ᤉ ᤊ ᤋ ᤌ ᤍ ᤎ ᤏ ᤐ ᤑ ᤒ ᤓ ᤔ ᤕ ᤖ ᤗ ᤘ ᤙ ᤚ ᤛ ᤜ ᤝ ᤞ ᤠ ᤡ ᤢ ᤣ ᤤ ᤥ ᤦ ᤧ ᤨ ᤩ ᤪ ᤫ ᤰ ᤱ ᤲ ᤳ ᤴ ᤵ ᤶ ᤷ ᤸ ᤹ ᤺ ᤻ ᥀ ᥄ ᥅ ᥆ ᥇ ᥈ ᥉ ᥊ ᥋ ᥌ ᥍ ᥎ ᥏',
  phagspa: 'ꡀ ꡁ ꡂ ꡃ ꡄ ꡅ ꡆ ꡇ ꡈ ꡉ ꡊ ꡋ ꡌ ꡍ ꡎ ꡏ ꡐ ꡑ ꡒ ꡓ ꡔ ꡕ ꡖ ꡗ ꡘ ꡙ ꡚ ꡛ ꡜ ꡝ ꡞ ꡟ ꡠ ꡡ ꡢ ꡣ ꡤ ꡥ ꡦ ꡧ ꡨ ꡩ ꡪ ꡫ ꡬ ꡭ ꡮ ꡯ ꡰ ꡱ ꡲ ꡳ ꡴ ꡵ ꡶ ꡷',
  zanabazar: '𑨀 𑨁 𑨂 𑨃 𑨄 𑨅 𑨆 𑨇 𑨈 𑨉 𑨊 𑨋 𑨌 𑨍 𑨎 𑨏 𑨐 𑨑 𑨒 𑨓 𑨔 𑨕 𑨖 𑨗 𑨘 𑨙 𑨚 𑨛 𑨜 𑨝 𑨞 𑨟 𑨠 𑨡 𑨢 𑨣 𑨤 𑨥 𑨦 𑨧 𑨨 𑨩 𑨪 𑨫 𑨬 𑨭 𑨮 𑨯 𑨰 𑨱 𑨲 𑨳 𑨴 𑨵 𑨶 𑨷 𑨸 𑨹 𑨺 𑨻 𑨼 𑨽 𑨾 𑨿 𑩀 𑩁 𑩂 𑩃 𑩄 𑩅 𑩆',

  thaana: 'ހ ށ ނ ރ ބ ޅ ކ އ ވ މ ފ ދ ތ ލ ގ ޏ ސ ޑ ޒ ޓ ޔ ޕ ޖ ޗ ޘ ޙ ޚ ޛ ޜ ޝ ޞ ޟ ޠ ޡ ޢ ޣ ޤ ޥ ަ ާ ި ީ ު ޫ ެ ޭ ޮ ޯ ް ޱ',
  ethiopic: 'ሀ ሁ ሂ ሃ ሄ ህ ሆ ሇ ለ ሉ ሊ ላ ሌ ል ሎ ሏ ሐ ሑ ሒ ሓ ሔ ሕ ሖ ሗ መ ሙ ሚ ማ ሜ ም ሞ ሟ ሠ ሡ ሢ ሣ ሤ ሥ ሦ ሧ ረ ሩ ሪ ራ ሬ ር ሮ ሯ ሰ ሱ ሲ ሳ ሴ ስ ሶ ሷ ሸ ሹ ሺ ሻ ሼ ሽ ሾ ሿ ቀ ቁ ቂ ቃ ቄ ቅ ቆ ቇ ቈ ቊ ቋ ቌ ቍ ቐ ቑ ቒ ቓ ቔ ቕ ቖ ቘ ቚ ቛ ቜ ቝ በ ቡ ቢ ባ ቤ ብ ቦ ቧ ቨ ቩ ቪ ቫ ቬ ቭ ቮ ቯ ተ ቱ ቲ ታ ቴ ት ቶ ቷ ቸ ቹ ቺ ቻ ቼ ች ቾ ቿ ኀ ኁ ኂ ኃ ኄ ኅ ኆ ኇ ኈ ኊ ኋ ኌ ኍ ነ ኑ ኒ ና ኔ ን ኖ ኗ ኘ ኙ ኚ ኛ ኜ ኝ ኞ ኟ አ ኡ ኢ ኣ ኤ እ ኦ ኧ ከ ኩ ኪ ካ ኬ ክ ኮ ኯ ኰ ኲ ኳ ኴ ኵ ኸ ኹ ኺ ኻ ኼ ኽ ኾ ዀ ዂ ዃ ዄ ዅ ወ ዉ ዊ ዋ ዌ ው ዎ ዏ ዐ ዑ ዒ ዓ ዔ ዕ ዖ ዘ ዙ ዚ ዛ ዜ ዝ ዞ ዟ ዠ ዡ ዢ ዣ ዤ ዥ ዦ ዧ የ ዩ ዪ ያ ዬ ይ ዮ ዯ ደ ዱ ዲ ዳ ዴ ድ ዶ ዷ ዸ ዹ ዺ ዻ ዼ ዽ ዾ ዿ ጀ ጁ ጂ ጃ ጄ ጅ ጆ ጇ ገ ጉ ጊ ጋ ጌ ግ ጎ ጏ ጐ ጒ ጓ ጔ ጕ ጘ ጙ ጚ ጛ ጜ ጝ ጞ ጟ ጠ ጡ ጢ ጣ ጤ ጥ ጦ ጧ ጨ ጩ ጪ ጫ ጬ ጭ ጮ ጯ ጰ ጱ ጲ ጳ ጴ ጵ ጶ ጷ ጸ ጹ ጺ ጻ ጼ ጽ ጾ ጿ ፀ ፁ ፂ ፃ ፄ ፅ ፆ ፇ ፈ ፉ ፊ ፋ ፌ ፍ ፎ ፏ ፐ ፑ ፒ ፓ ፔ ፕ ፖ ፗ ፘ ፙ ፚ ፝ ፞ ፟ ፠ ፡ ። ፣ ፤ ፥ ፦ ፧ ፨ ፩ ፪ ፫ ፬ ፭ ፮ ፯ ፰ ፱ ፲ ፳ ፴ ፵ ፶ ፷ ፸ ፹ ፺ ፻ ፼ ᎀ ᎁ ᎂ ᎃ ᎄ ᎅ ᎆ ᎇ ᎈ ᎉ ᎊ ᎋ ᎌ ᎍ ᎎ ᎏ ᎐ ᎑ ᎒ ᎓ ᎔ ᎕ ᎖ ᎗ ᎘ ᎙ ⶀ ⶁ ⶂ ⶃ ⶄ ⶅ ⶆ ⶇ ⶈ ⶉ ⶊ ⶋ ⶌ ⶍ ⶎ ⶏ ⶐ ⶑ ⶒ ⶓ ⶔ ⶕ ⶖ ⶠ ⶡ ⶢ ⶣ ⶤ ⶥ ⶦ ⶨ ⶩ ⶪ ⶫ ⶬ ⶭ ⶮ ⶰ ⶱ ⶲ ⶳ ⶴ ⶵ ⶶ ⶸ ⶹ ⶺ ⶻ ⶼ ⶽ ⶾ ⷀ ⷁ ⷂ ⷃ ⷄ ⷅ ⷆ ⷈ ⷉ ⷊ ⷋ ⷌ ⷍ ⷎ ⷐ ⷑ ⷒ ⷓ ⷔ ⷕ ⷖ ⷘ ⷙ ⷚ ⷛ ⷜ ⷝ ⷞ ꬁ ꬂ ꬃ ꬄ ꬅ ꬆ ꬉ ꬊ ꬋ ꬌ ꬍ ꬎ ꬑ ꬒ ꬓ ꬔ ꬕ ꬖ ꬠ ꬡ ꬢ ꬣ ꬤ ꬥ ꬦ ꬨ ꬩ ꬪ ꬫ ꬬ ꬭ ꬮ',
  canabo: '᐀ ᐁ ᐂ ᐃ ᐄ ᐅ ᐆ ᐇ ᐈ ᐉ ᐊ ᐋ ᐌ ᐍ ᐎ ᐏ ᐐ ᐑ ᐒ ᐓ ᐔ ᐕ ᐖ ᐗ ᐘ ᐙ ᐚ ᐛ ᐜ ᐝ ᐞ ᐟ ᐠ ᐡ ᐢ ᐣ ᐤ ᐥ ᐦ ᐧ ᐨ ᐩ ᐪ ᐫ ᐬ ᐭ ᐮ ᐯ ᐰ ᐱ ᐲ ᐳ ᐴ ᐵ ᐶ ᐷ ᐸ ᐹ ᐺ ᐻ ᐼ ᐽ ᐾ ᐿ ᑀ ᑁ ᑂ ᑃ ᑄ ᑅ ᑆ ᑇ ᑈ ᑉ ᑊ ᑋ ᑌ ᑍ ᑎ ᑏ ᑐ ᑑ ᑒ ᑓ ᑔ ᑕ ᑖ ᑗ ᑘ ᑙ ᑚ ᑛ ᑜ ᑝ ᑞ ᑟ ᑠ ᑡ ᑢ ᑣ ᑤ ᑥ ᑦ ᑧ ᑨ ᑩ ᑪ ᑫ ᑬ ᑭ ᑮ ᑯ ᑰ ᑱ ᑲ ᑳ ᑴ ᑵ ᑶ ᑷ ᑸ ᑹ ᑺ ᑻ ᑼ ᑽ ᑾ ᑿ ᒀ ᒁ ᒂ ᒃ ᒄ ᒅ ᒆ ᒇ ᒈ ᒉ ᒊ ᒋ ᒌ ᒍ ᒎ ᒏ ᒐ ᒑ ᒒ ᒓ ᒔ ᒕ ᒖ ᒗ ᒘ ᒙ ᒚ ᒛ ᒜ ᒝ ᒞ ᒟ ᒠ ᒡ ᒢ ᒣ ᒤ ᒥ ᒦ ᒧ ᒨ ᒩ ᒪ ᒫ ᒬ ᒭ ᒮ ᒯ ᒰ ᒱ ᒲ ᒳ ᒴ ᒵ ᒶ ᒷ ᒸ ᒹ ᒺ ᒻ ᒼ ᒽ ᒾ ᒿ ᓀ ᓁ ᓂ ᓃ ᓄ ᓅ ᓆ ᓇ ᓈ ᓉ ᓊ ᓋ ᓌ ᓍ ᓎ ᓏ ᓐ ᓑ ᓒ ᓓ ᓔ ᓕ ᓖ ᓗ ᓘ ᓙ ᓚ ᓛ ᓜ ᓝ ᓞ ᓟ ᓠ ᓡ ᓢ ᓣ ᓤ ᓥ ᓦ ᓧ ᓨ ᓩ ᓪ ᓫ ᓬ ᓭ ᓮ ᓯ ᓰ ᓱ ᓲ ᓳ ᓴ ᓵ ᓶ ᓷ ᓸ ᓹ ᓺ ᓻ ᓼ ᓽ ᓾ ᓿ ᔀ ᔁ ᔂ ᔃ ᔄ ᔅ ᔆ ᔇ ᔈ ᔉ ᔊ ᔋ ᔌ ᔍ ᔎ ᔏ ᔐ ᔑ ᔒ ᔓ ᔔ ᔕ ᔖ ᔗ ᔘ ᔙ ᔚ ᔛ ᔜ ᔝ ᔞ ᔟ ᔠ ᔡ ᔢ ᔣ ᔤ ᔥ ᔦ ᔧ ᔨ ᔩ ᔪ ᔫ ᔬ ᔭ ᔮ ᔯ ᔰ ᔱ ᔲ ᔳ ᔴ ᔵ ᔶ ᔷ ᔸ ᔹ ᔺ ᔻ ᔼ ᔽ ᔾ ᔿ ᕀ ᕁ ᕂ ᕃ ᕄ ᕅ ᕆ ᕇ ᕈ ᕉ ᕊ ᕋ ᕌ ᕍ ᕎ ᕏ ᕐ ᕑ ᕒ ᕓ ᕔ ᕕ ᕖ ᕗ ᕘ ᕙ ᕚ ᕛ ᕜ ᕝ ᕞ ᕟ ᕠ ᕡ ᕢ ᕣ ᕤ ᕥ ᕦ ᕧ ᕨ ᕩ ᕪ ᕫ ᕬ ᕭ ᕮ ᕯ ᕰ ᕱ ᕲ ᕳ ᕴ ᕵ ᕶ ᕷ ᕸ ᕹ ᕺ ᕻ ᕼ ᕽ ᕾ ᕿ ᖀ ᖁ ᖂ ᖃ ᖄ ᖅ ᖆ ᖇ ᖈ ᖉ ᖊ ᖋ ᖌ ᖍ ᖎ ᖏ ᖐ ᖑ ᖒ ᖓ ᖔ ᖕ ᖖ ᖗ ᖘ ᖙ ᖚ ᖛ ᖜ ᖝ ᖞ ᖟ ᖠ ᖡ ᖢ ᖣ ᖤ ᖥ ᖦ ᖧ ᖨ ᖩ ᖪ ᖫ ᖬ ᖭ ᖮ ᖯ ᖰ ᖱ ᖲ ᖳ ᖴ ᖵ ᖶ ᖷ ᖸ ᖹ ᖺ ᖻ ᖼ ᖽ ᖾ ᖿ ᗀ ᗁ ᗂ ᗃ ᗄ ᗅ ᗆ ᗇ ᗈ ᗉ ᗊ ᗋ ᗌ ᗍ ᗎ ᗏ ᗐ ᗑ ᗒ ᗓ ᗔ ᗕ ᗖ ᗗ ᗘ ᗙ ᗚ ᗛ ᗜ ᗝ ᗞ ᗟ ᗠ ᗡ ᗢ ᗣ ᗤ ᗥ ᗦ ᗧ ᗨ ᗩ ᗪ ᗫ ᗬ ᗭ ᗮ ᗯ ᗰ ᗱ ᗲ ᗳ ᗴ ᗵ ᗶ ᗷ ᗸ ᗹ ᗺ ᗻ ᗼ ᗽ ᗾ ᗿ ᘀ ᘁ ᘂ ᘃ ᘄ ᘅ ᘆ ᘇ ᘈ ᘉ ᘊ ᘋ ᘌ ᘍ ᘎ ᘏ ᘐ ᘑ ᘒ ᘓ ᘔ ᘕ ᘖ ᘗ ᘘ ᘙ ᘚ ᘛ ᘜ ᘝ ᘞ ᘟ ᘠ ᘡ ᘢ ᘣ ᘤ ᘥ ᘦ ᘧ ᘨ ᘩ ᘪ ᘫ ᘬ ᘭ ᘮ ᘯ ᘰ ᘱ ᘲ ᘳ ᘴ ᘵ ᘶ ᘷ ᘸ ᘹ ᘺ ᘻ ᘼ ᘽ ᘾ ᘿ ᙀ ᙁ ᙂ ᙃ ᙄ ᙅ ᙆ ᙇ ᙈ ᙉ ᙊ ᙋ ᙌ ᙍ ᙎ ᙏ ᙐ ᙑ ᙒ ᙓ ᙔ ᙕ ᙖ ᙗ ᙘ ᙙ ᙚ ᙛ ᙜ ᙝ ᙞ ᙟ ᙠ ᙡ ᙢ ᙣ ᙤ ᙥ ᙦ ᙧ ᙨ ᙩ ᙪ ᙫ ᙬ ᙭ ᙮ ᙯ ᙰ ᙱ ᙲ ᙳ ᙴ ᙵ ᙶ ᙷ ᙸ ᙹ ᙺ ᙻ ᙼ ᙽ ᙾ ᙿ ᢰ ᢱ ᢲ ᢳ ᢴ ᢵ ᢶ ᢷ ᢸ ᢹ ᢺ ᢻ ᢼ ᢽ ᢾ ᢿ ᣀ ᣁ ᣂ ᣃ ᣄ ᣅ ᣆ ᣇ ᣈ ᣉ ᣊ ᣋ ᣌ ᣍ ᣎ ᣏ ᣐ ᣑ ᣒ ᣓ ᣔ ᣕ ᣖ ᣗ ᣘ ᣙ ᣚ ᣛ ᣜ ᣝ ᣞ ᣟ ᣠ ᣡ ᣢ ᣣ ᣤ ᣥ ᣦ ᣧ ᣨ ᣩ ᣪ ᣫ ᣬ ᣭ ᣮ ᣯ ᣰ ᣱ ᣲ ᣳ ᣴ ᣵ 𑪰 𑪱 𑪲 𑪳 𑪴 𑪵 𑪶 𑪷 𑪸 𑪹 𑪺 𑪻 𑪼 𑪽 𑪾 𑪿',

  arabic: '؀ ؁ ؂ ؃ ؄ ؅ ؆ ؇ ؈ ؉ ؊ ؋ ، ؍ ؎ ؏ ؐ ؑ ؒ ؓ ؔ ؕ ؖ ؗ ؘ ؙ ؚ ؛ ؞ ؟ ؠ ء آ أ ؤ إ ئ ا ب ة ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ػ ؼ ؽ ؾ ؿ ـ ف ق ك ل م ن ه و ى يً ٌ ٍ َ ُ ِ ّ ْ ٛ ٜ ٝ ٞ ٟ ٠ ١ ٢ ٣ ٤ ٥ ٦ ٧ ٨ ٩ ٪ ٫ ٬ ٭ ٮ ٯ ٰ ٱ ٲ ٳ ٴ ٵ ٶ ٷ ٸ ٹ ٺ ٻ ٹ ٹ پ ٿ ڀ ځ ڂ ڃ څ چ ڇ ڊ ڋ ڌ ڍ ڎ ڈ ڈ ڈ ڑ ڒ ړ ڔ ڕ ږ ڗ ژ ڒ ښ ڛ ڜ ڝ ڞ ڟ ڠ ڡ ڢ ڣ ڤ ڥ ڦ ڧ ڨ ک ڪ ګ ڬ ڭ ڮ گ ڰ ڱ ڲ ڳ ڴ ڵ ڶ ڷ ڸ ڹ ں ڻ ڽ ھ ڿ ڀ ځ ڂ ڃ ڄ څ چ ڇ ڈ ډ ڊ ڋ ڌ ڍ ڎ ې ۑ ے ۓ ۔ ۖ ۗ ۘ ۙ ۚ ۛ ۜ ۝ ۞ ۟ ۠ ۡ ۢ ۣ ۤ ۥ ۦ ۧ ۨ ۩ ۪ ۫ ۬ ۭ ۮ ۯ ۰ ۱ ۲ ۳ ۴ ۵ ۶ ۷ ۸ ۹ ۺ ۻ ۼ ٲ ٳ ٴ ݐ ݑ ݒ ݓ ݔ ݕ ݖ ݗ ݘ ݙ ݚ ݛ ݜ ݝ ݞ ݟ ݠ ݡ ݢ ݣ ݤ ݥ ݦ ݧ ݨ ݩ ݪ ݫ ݬ ݭ ݮ ݯ ݰ ݱ ݲ ݳ ݴ ݵ ݶ ݷ ݸ ݹ ݺ ݻ ݼ ݽ ݾ ݿ ࢠ ࢡ ࢢ ࢣ ࢤ ࢥ ࢦ ࢧ ࢨ ࢩ ࢪ ࢫ ࢬ ࢭ ࢮ ࢯ ࢰ ࢱ ࢲ ࢳ ࢴ ࢶ ࢷ ࢸ ࢹ ࢺ ࢻ ࢼ ࢽ ࣔ ࣕ ࣖ ࣗ ࣘ ࣙ ࣚ ࣛ ࣜ ࣝ ࣞ ࣟ ࣠ ࣡  ࣢ ࣣ ࣤ ࣥ ࣦ ࣧ ࣨ ࣩ ࣪ ࣫ ࣬ ࣭ ࣮ ࣯ ࣰ ࣱ ࣲ ࣳ ࣴ ࣵ ࣶ ࣷ ࣸ ࣹ ࣺ ࣻ ࣼ ࣽ ࣾ ࣿ ﭐ ﭑ ﭒ ﭓ ﭔ ﭕ ﭖ ﭗ ﭘ ﭙ ﭚ ﭛ ﭜ ﭝ ﭞ ﭟ ﭠ ﭡ ﭢ ﭣ ﭤ ﭥ ﭦ ﭧ ﭨ ﭩ ﭪ ﭫ ﭬ ﭭ ﭮ ﭯ ﭰ ﭱ ﭲ ﭳ ﭴ ﭵ ﭶ ﭷ ﭸ ﭹ ﭺ ﭻ ﭼ ﭽ ﭾ ﭿ ﮀ ﮁ ﮂ ﮃ ﮄ ﮅ ﮆ ﮇ ﮈ ﮉ ﮊ ﮋ ﮌ ﮍ ﮎ ﮏ ﮐ ﮑ ﮒ ﮓ ﮔ ﮕ ﮖ ﮗ ﮘ ﮙ ﮚ ﮛ ﮜ ﮝ ﮞ ﮟ ﮠ ﮡ ﮢ ﮣ ﮤ ﮥ ﮦ ﮧ ﮨ ﮩ ﮪ ﮫ ﮬ ﮭ ﮮ ﮯ ﮰ ﮱ ﮲ ﮳ ﮴ ﮵ ﮶ ﮷ ﮸ ﮹ ﮺ ﮻ ﮼ ﮽ ﮾ ﮿ ﯀ ﯁',
  hebrew: '֓ ֔ ֕ ֖ ֗ ֘ ֙ ֚ ֛ ֜ ֝ ֞ ֟ ֠ ֡ ֢ ֣ ֤ ֥ ֦ ֧ ֨ ֩ ֪ ֫ ֬ ֭ ֮ ֯ ְ ֱ ֲ ֳ ִ ֵ ֶ ַ ָ ֹ ֺ ֻ ּ ֽ ־ ֿ ׀ ׁ ׂ ׃ ׄ ׅ ׆ ׇ א ב ג ד ה ו ז ח ט י ך כ ל ם מ ן נ ס ע ף פ ץ צ ק ר ש ת ׯ װ ױ ײ ׳ ״',

  armenian: 'Ա Բ Գ Դ Ե Զ Է Ը Թ Ժ Ի Լ Խ Ծ Կ Հ Ձ Ղ Ճ Մ Յ Ն Շ Ո Չ Պ Ջ Ռ Ս Վ Տ Ւ Փ Ք Օ Ֆ ֊ ֍ ֎ ֏ ﬓ ﬔ ﬕ ﬖ ﬗ',
  cyrillic: 'Ѐ Ё Ђ Ѓ Є Ѕ І Ї Ј Љ Њ Ћ Ќ Ѝ Ў Џ А Б В Г Д Е Ж З И Й К Л М Н О П Р С Т У Ф Х Ц Ч Ш Щ Ъ Ы Ь Э Ю Я а б в г д е ж з и й к л м н о п р с т у ф х ц ч ш щ ъ ы ь э ю я ѐ ё ђ ѓ є ѕ і ї ј љ њ ћ ќ ѝ ў џ Ѡ ѡ Ѣ ѣ Ѥ ѥ Ѧ ѧ Ѩ ѩ Ѫ ѫ Ѭ ѭ Ѯ ѯ Ѱ ѱ Ѳ ѳ Ѵ ѵ Ѷ ѷ Ѹ ѹ Ѻ ѻ Ѽ ѽ Ѿ ѿ Ҁ ҁ ҂ ◌҃ ◌҄ ◌҅ ◌҆ ◌҇ ◌҈ ◌҉ Ҋ ҋ Ҍ ҍ Ҏ ҏ Ґ ґ Ғ ғ Ҕ ҕ Җ җ Ҙ ҙ Қ қ Ҝ ҝ Ҟ ҟ Ҡ ҡ Ң ң Ҥ ҥ Ҧ ҧ Ҩ ҩ Ҫ ҫ Ҭ Ҭ Ү ү Ұ ұ Ҳ ҳ Ҵ ҵ Ҷ ҷ Ҹ ҹ Һ һ Ҽ ҽ Ҿ ҿ Ӏ Ӂ ӂ Ӄ ӄ Ӆ ӆ Ӈ ӈ Ӊ ӊ Ӌ ӌ Ӎ ӎ ӏ Ӑ ӑ Ӓ ӓ Ӕ ӕ Ӗ ӗ Ә ә Ӛ ӛ Ӝ ӝ Ӟ ӟ Ӡ ӡ Ӣiði Ӥ ӥ Ӧ ӧ Ө ө Ӫ ӫ Ӭ ӭ Ӯ ӯ Ӱ ӱ Ӳ ӳ Ӵ ӵ Ӷ ӷ Ӹ ӹ Ӻ ӻ Ӽ ӽ Ӿ ӿ Ԁ ԁ Ԃ ԃ Ԅ ԅ Ԇ ԇ Ԉ ԉ Ԋ ԋ Ԍ ԍ Ԏ ԏ Ԑ ԑ Ԓ ԓ Ԕ ԕ Ԗ ԗ Ԙ ԙ Ԛ ԛ Ԝ ԝ Ԟ ԟ Ԡ ԡ Ԣ ԣ Ԥԥ Ԧ ԧ Ԩ ԩ Ԫ ԫ Ԭ ԭ Ԯ ԯ ⷠ ⷡ ⷢ ⷣ ⷤ ⷥ ⷦ ⷧ ⷨ ⷩ ⷪ ⷫ ⷬ ⷭ ⷮ ⷯ ⷰ ⷱ ⷲ ⷳ ⷴ ⷵ ⷶ ⷷ ⷸ ⷹ ⷺ ⷻ ⷼ ⷽ ⷾ ⷿ Ꙁ ꙁ Ꙃ ꙃ Ꙅ ꙅ Ꙇ ꙇ Ꙉ ꙉ Ꙋ ꙋ Ꙍ ꙍ Ꙏ ꙏ Ꙑ ꙑ Ꙓ ꙓ Ꙕ ꙕ Ꙗ ꙗ Ꙙ ꙙ Ꙛ ꙛ Ꙝ ꙝ Ꙟ ꙟ Ꙡ ꙡ Ꙣ ꙣ Ꙥ ꙥ Ꙧ ꙧ Ꙩ ꙩ Ꙫ ꙫ Ꙭ ꙭ ꙮ ꙯ ꙰ ꙱ ꙲ ꙳ ꙴ ꙵ ꙶ ꙷ ꙸ ꙹ ꙺ ꙻ ꙼ ꙽ ꙾ ꙿ Ꚁ ꚁ Ꚃ ꚃ Ꚅ ꚅ Ꚇ ꚇ Ꚉ ꚉ Ꚋ ꚋ Ꚍ ꚍ Ꚏ ꚏ Ꚑ ꚑ Ꚓ ꚓ Ꚕ ꚕ Ꚗ ꚗ Ꚙ ꚙ Ꚛ ꚛ ꚜ ꚝ ꚞ ꚟ',
  georgian: 'Ⴀ Ⴁ Ⴂ Ⴃ Ⴄ Ⴅ Ⴆ Ⴇ Ⴈ Ⴉ Ⴊ Ⴋ Ⴌ Ⴍ Ⴎ Ⴏ Ⴐ Ⴑ Ⴒ Ⴓ Ⴔ Ⴕ Ⴖ Ⴗ Ⴘ Ⴙ Ⴚ Ⴛ Ⴜ Ⴝ Ⴞ Ⴟ Ⴠ Ⴡ Ⴢ Ⴣ Ⴤ Ⴥ Ⴧ Ⴭ ა ბ გ დ ე ვ ზ თ ი კ ლ მ ნ ო პ ჟ რ ს ტ უ ფ ქ ღ ყ შ ჩ ც ძ წ ჭ ხ ჯ ჰ ჱ ჲ ჳ ჴ ჵ ჶ ჷ ჸ ჹ ჺ ჻ ჼ ჽ ჾ ჿ ⴀ ⴁ ⴂ ⴃ ⴄ ⴅ ⴆ ⴇ ⴈ ⴉ ⴊ ⴋ ⴌ ⴍ ⴎ ⴏ ⴐ ⴑ ⴒ ⴓ ⴔ ⴕ ⴖ ⴗ ⴘ ⴙ ⴚ ⴛ ⴜ ⴝ ⴞ ⴟ ⴠ ⴡ ⴢ ⴣ ⴤ ⴥ ⴧ ⴭ Ა Ბ Გ Დ Ე Ვ Ზ Თ Ი Კ Ლ Მ Ნ Ო Პ Ჟ Რ Ს Ტ Უ Ფ Ქ Ღ Ყ Შ Ჩ Ც Ძ Წ Ჭ Ხ Ჯ Ჰ Ჱ Ჲ Ჳ Ჴ Ჵ Ჶ Ჷ Ჸ Ჹ Ჺ Ჽ Ჾ Ჿ',
  greek: 'Ͱ ͱ Ͳ ͳ ʹ ͵ Ͷ ͷ ͺ ͻ ͼ ͽ ; Ϳ ΄ ΅ Ά · Έ Ή Ί Ό Ύ Ώ Ϊ Ϋ ά έ ή ί ΰ α β γ δ ε ζ η θ ι κ λ μ ν ξ ο π ρ σ τ υ φ χ ψ ω ϊ ü ό ύ ώ Ϗ ϐ ϑ ϒ ϓ ϔ ϕ ϖ ϗ Ϙ ϙ Ϛ ϛ Ϝ ϝ Ϟ ϟ Ϡ ϡ Ϣ ϣ Ϥ ϥ Ϧ ϧ Ϩ ϩ Ϫ ϫ Ϭ ϭ Ϯ ϯ ϰ ϱ ϲ ϳ ϴ ϵ ϶ Ϸ ϸ Ϲ Ϻ ϻ ϼ Ͻ Ͼ Ͽ ἀ ἁ ἂ ἃ ἄ ἅ ἆ ἇ Ἀ Ἁ Ἂ Ἃ Ἄ Ἅ Ἆ Ἇ ἐ ἑ ἒ ἓ ἔ ἕ Ἐ Ἑ Ἒ Ἓ Ἔ Ἕ ἠ ἡ ἢ ἣ ἤ ἥ ἦ ἧ Ἠ Ἡ Ἢ Ἣ Ἤ Ἥ Ἦ Ἧ ἰ ἱ ἲ ἳ ἴ ἵ ἶ ἷ Ἰ Ἱ Ἲ Ἳ Ἴ Ἵ Ἶ Ἷ ὀ ὁ ὂ ὃ ὄ ὅ Ὀ Ὁ Ὂ Ὃ Ὄ Ὅ ὐ ὑ ὒ ὓ ὔ ὕ ὖ ὗ Ὑ Ὓ Ὕ Ὗ ὠ ὡ ὢ ὣ ὤ ὥ ὦ ὧ Ὠ Ὡ Ὢ Ὣ Ὤ Ὥ Ὦ Ὧ ὰ ά ὲ έ ὴ ή ὶ ί ὸ ό ὺ ύ ὼ ώ ᾀ ᾁ ᾂ ᾃ ᾄ ᾅ ᾆ ᾇ ᾈ ᾉ ᾊ ᾋ ᾌ ᾍ ᾎ ᾏ ᾐ ᾑ ᾒ ᾓ ᾔ ᾕ ᾖ ᾗ ᾘ ᾙ ᾚ ᾛ ᾜ ᾝ ᾞ ᾟ ᾠ ᾡ ᾢ ᾣ ᾤ ᾥ ᾦ ᾧ ᾨ ᾩ ᾪ ᾫ ᾬ ᾭ ᾮ ᾯ ᾰ ᾱ ᾲ ᾳ ᾴ ᾶ ᾷ Ᾰ Ᾱ Ὰ Ά ᾼ ᾽ ι ᾿ ῀ ῁ ῂ ῃ ῄ ῆ ῇ Ὲ Έ Ὴ Ή ῌ ῍ ῎ ῏ ῐ ῑ ῒ ΐ ῖ ῗ Ῐ Ῑ Ὶ Ί ῝ ῞ ῟ ῠ ῡ ῢ ΰ ῤ ῥ ῦ ῧ Ῠ Ῡ Ὺ Ύ Ῥ ῭ ΅ ` ῲ ῳ ῴ ῶ ῷ Ὸ Ό Ὼ Ώ ῼ ´ ῾',
  mongolian: '᠀ ᠁ ᠂ ᠃ ᠄ ᠅ ᠆ ᠇ ᠈ ᠉ ᠊ ᠐ ᠑ ᠒ ᠓ ᠔ ᠕ ᠖ ᠗ ᠘ ᠙ ᠠ ᠡ ᠢ ᠣ ᠤ ᠥ ᠦ ᠧ ᠨ ᠩ ᠪ ᠫ ᠬ ᠭ ᠮ ᠯ ᠰ ᠱ ᠲ ᠳ ᠴ ᠵ ᠶ ᠷ ᠸ ᠹ ᠺ ᠻ ᠼ ᠽ ᠾ ᠿ ᡀ ᡁ ᡂ ᡃ ᡄ ᡅ ᡆ ᡇ ᡈ ᡉ ᡊ ᡋ ᡌ ᡍ ᡎ ᡏ ᡐ ᡑ ᡒ ᡓ ᡔ ᡕ ᡖ ᡗ ᡘ ᡙ ᡚ ᡛ ᡜ ᡝ ᡞ ᡟ ᡠ ᡡ ᡢ ᡣ ᡤ ᡥ ᡦ ᡧ ᡨ ᡩ ᡪ ᡫ ᡬ ᡭ ᡮ ᡯ ᡰ ᡱ ᡲ ᡳ ᡴ ᡵ ᡶ ᡷ ᢀ ᢁ ᢂ ᢃ ᢄ ᢅ ᢆ ᢇ ᢈ ᢉ ᢊ ᢋ ᢌ ᢍ ᢎ ᢏ ᢐ ᢑ ᢒ ᢓ ᢔ ᢕ ᢖ ᢗ ᢘ ᢙ ᢚ ᢛ ᢜ ᢝ ᢞ ᢟ ᢠ ᢡ ᢢ ᢣ ᢤ ᢥ ᢦ ᢧ ᢨ ᢩ ᢪ',
  tifinagh: 'ⴰ ⴱ ⴲ ⴳ ⴴ ⴵ ⴶ ⴷ ⴸ ⴹ ⴺ ⴻ ⴼ ⴽ ⴾ ⴿ ⵀ ⵁ ⵂ ⵃ ⵄ ⵅ ⵆ ⵇ ⵈ ⵉ ⵊ ⵋ ⵌ ⵍ ⵎ ⵏ ⵐ ⵑ ⵒ ⵓ ⵔ ⵕ ⵖ ⵗ ⵘ ⵙ ⵚ ⵛ ⵜ ⵝ ⵞ ⵟ ⵠ ⵡ ⵢ ⵣ ⵤ ⵥ ⵦ ⵧ ⵯ ⵰',
  osage: '𐒰 𐒱 𐒲 𐒳 𐒴 𐒵 𐒶 𐒷 𐒸 𐒹 𐒺 𐒻 𐒼 𐒽 𐒾 𐒿 𐓀 𐓁 𐓂 𐓃 𐓄 𐓅 𐓆 𐓇 𐓈 𐓉 𐓊 𐓋 𐓌 𐓍 𐓎 𐓏 𐓐 𐓑 𐓒 𐓓 𐓘 𐓙 𐓚 𐓛 𐓜 𐓝 𐓞 𐓟 𐓠 𐓡 𐓢 𐓣 𐓤 𐓥 𐓦 𐓧 𐓨 𐓩 𐓪 𐓫 𐓬 𐓭 𐓮 𐓯 𐓰 𐓱 𐓲 𐓳 𐓴 𐓵 𐓶 𐓷 𐓸 𐓹 𐓺 𐓻',
  cherokee: 'Ꭰ Ꭱ Ꭲ Ꭳ Ꭴ Ꭵ Ꭶ Ꭷ Ꭸ Ꭹ Ꭺ Ꭻ Ꭼ Ꭽ Ꭾ Ꭿ Ꮀ Ꮁ Ꮂ Ꮃ Ꮄ Ꮅ Ꮆ Ꮇ Ꮈ Ꮉ Ꮊ Ꮋ Ꮌ Ꮍ Ꮎ Ꮏ Ꮐ Ꮑ Ꮒ Ꮓ Ꮔ Ꮕ Ꮖ Ꮗ Ꮘ Ꮙ Ꮚ Ꮛ Ꮜ Ꮝ Ꮞ Ꮟ Ꮠ Ꮡ Ꮢ Ꮣ Ꮤ Ꮥ Ꮦ Ꮧ Ꮨ Ꮩ Ꮪ Ꮫ Ꮬ Ꮭ Ꮮ Ꮯ Ꮰ Ꮱ Ꮲ Ꮳ Ꮴ Ꮵ Ꮶ Ꮷ Ꮸ Ꮹ Ꮺ Ꮻ Ꮼ Ꮽ Ꮾ Ꮿ Ᏸ Ᏹ Ᏺ Ᏻ Ᏼ Ᏽ ᏸ ᏹ ᏺ ᏻ ᏼ ᏽ',

  runic: 'ᚠ ᚡ ᚢ ᚣ ᚤ ᚥ ᚦ ᚧ ᚨ ᚩ ᚪ ᚫ ᚬ ᚭ ᚮ ᚯ ᚰ ᚱ ᚲ ᚳ ᚴ ᚵ ᚶ ᚷ ᚸ ᚹ ᚺ ᚻ ᚼ ᚽ ᚾ ᚿ ᛀ ᛁ ᛂ ᛃ ᛄ ᛅ ᛆ ᛇ ᛈ ᛉ ᛊ ᛋ ᛌ ᛍ ᛎ ᛏ ᛐ ᛑ ᛒ ᛓ ᛔ ᛕ ᛖ ᛗ ᛘ ᛙ ᛚ ᛛ ᛜ ᛝ ᛞ ᛟ ᛠ ᛡ ᛢ ᛣ ᛤ ᛥ ᛦ ᛧ ᛨ ᛩ ᛪ ᛫ ᛬ ᛭ ᛮ ᛯ ᛰ ᛱ ᛲ ᛳ ᛴ ᛵ ᛶ ᛷ ᛸ',
  phoenician: '𐤀 𐤁 𐤂 𐤃 𐤄 𐤅 𐤆 𐤇 𐤈 𐤉 𐤊 𐤋 𐤌 𐤍 𐤎 𐤏 𐤐 𐤑 𐤒 𐤓 𐤔 𐤕 𐤖 𐤗 𐤘 𐤙 𐤚 𐤛',
  egypt: '𓀀 𓀁 𓀂 𓀃 𓀄 𓀅 𓀆 𓀇 𓀈 𓀉 𓀊 𓀋 𓀌 𓀍 𓀎 𓀏 𓀐 𓀑 𓀒 𓀓 𓀔 𓀕 𓀖 𓀗 𓀘 𓀙 𓀚 𓀛 𓀜 𓀝 𓀞 𓀟 𓀠 𓀡 𓀢 𓀣 𓀤 𓀥 𓀦 𓀧 𓀨 𓀩 𓀪 𓀫 𓀬 𓀭 𓀮 𓀯 𓀰 𓀱 𓀲 𓀳 𓀴 𓀵 𓀶 𓀷 𓀸 𓀹 𓀺 𓀻 𓀼 𓀽 𓀾 𓀿 𓁀 𓁁 𓁂 𓁃 𓁄 𓁅 𓁆 𓁇 𓁈 𓁉 𓁊 𓁋 𓁌 𓁍 𓁎 𓁏 𓁐 𓁑 𓁒 𓁓 𓁔 𓁕 𓁖 𓁗 𓁘 𓁙 𓁚 𓁛 𓁜 𓁝 𓁞 𓁟 𓁠 𓁡 𓁢 𓁣 𓁤 𓁥 𓁦 𓁧 𓁨 𓁩 𓁪 𓁫 𓁬 𓁭 𓁮 𓁯 𓁰 𓁱 𓁲 𓁳 𓁴 𓁵 𓁶 𓁷 𓁸 𓁹 𓁺 𓁻 𓁼 𓁽 𓁾 𓁿 𓂀 𓂁 𓂂 𓂃 𓂄 𓂅 𓂆 𓂇 𓂈 𓂉 𓂊 𓂋 𓂌 𓂍 𓂎 𓂏 𓂐 𓂑 𓂒 𓂓 𓂔 𓂕 𓂖 𓂗 𓂘 𓂙 𓂚 𓂛 𓂜 𓂝 𓂞 𓂟 𓂠 𓂡 𓂢 𓂣 𓂤 𓂥 𓂦 𓂧 𓂨 𓂩 𓂪 𓂫 𓂬 𓂭 𓂮 𓂯 𓂰 𓂱 𓂲 𓂳 𓂴 𓂵 𓂶 𓂷 𓂺𓂻 𓂼 𓂽 𓂾 𓂿 𓃀 𓃁 𓃂 𓃃 𓃄 𓃅 𓃆 𓃇 𓃈 𓃉 𓃊 𓃋 𓃌 𓃍 𓃎 𓃏 𓃐 𓃑 𓃒 𓃓 𓃔 𓃕 𓃖 𓃗 𓃘 𓃙 𓃚 𓃛 𓃜 𓃝 𓃞 𓃟 𓃠 𓃡 𓃢 𓃣 𓃤 𓃥 𓃦 𓃧 𓃨 𓃩 𓃪 𓃫 𓃬 𓃭 𓃮 𓃯 𓃰 𓃱 𓃲 𓃳 𓃴 𓃵 𓃶 𓃷 𓃸 𓃹 𓃺 𓃻 𓃼 𓃽 𓃾 𓃿 𓄀 𓄁 𓄂 𓄃 𓄄 𓄅 𓄆 𓄇 𓄈 𓄉 𓄊 𓄋 𓄌 𓄍 𓄎 𓄏 𓄐 𓄑 𓄒 𓄓 𓄔 𓄕 𓄖 𓄗 𓄘 𓄙 𓄚 𓄛 𓄜 𓄝 𓄞 𓄟 𓄠 𓄡 𓄢 𓄣 𓄤 𓄥 𓄦 𓄧 𓄨 𓄩 𓄪 𓄫 𓄬 𓄭 𓄮 𓄯 𓄰 𓄱 𓄲 𓄳 𓄴 𓄵 𓄶 𓄷 𓄸 𓄹 𓄺 𓄻 𓄼 𓄽 𓄾 𓄿 𓅀 𓅁 𓅂 𓅃 𓅄 𓅅 𓅆 𓅇 𓅈 𓅉 𓅊 𓅋 𓅌 𓅍 𓅎 𓅏 𓅐 𓅑 𓅒 𓅓 𓅔 𓅕 𓅖 𓅗 𓅘 𓅙 𓅚 𓅛 𓅜 𓅝 𓅞 𓅟 𓅠 𓅡 𓅢 𓅣 𓅤 𓅥 𓅦 𓅧 𓅨 𓅩 𓅪 𓅫 𓅬 𓅭 𓅮 𓅯 𓅰 𓅱 𓅲 𓅳 𓅴 𓅵 𓅶 𓅷 𓅸 𓅹 𓅺 𓅻 𓅼 𓅽 𓅾 𓅿 𓆀 𓆁 𓆂 𓆃 𓆄 𓆅 𓆆 𓆇 𓆈 𓆉 𓆊 𓆋 𓆌 𓆍 𓆎 𓆏 𓆐 𓆑 𓆒 𓆓 𓆔 𓆕 𓆖 𓆗 𓆘 𓆙 𓆚 𓆛 𓆜 𓆝 𓆞 𓆟 𓆠 𓆡 𓆢 𓆣 𓆤 𓆥 𓆦 𓆧 𓆨 𓆩 𓆪 𓆫 𓆬 𓆭 𓆮 𓆯 𓆰 𓆱 𓆲 𓆳 𓆴 𓆵 𓆶 𓆷 𓆸 𓆹 𓆺 𓆻 𓆼 𓆽 𓆾 𓆿 𓇀 𓇁 𓇂 𓇃 𓇄 𓇅 𓇆 𓇇 𓇈 𓇉 𓇊 𓇋 𓇌 𓇍 𓇎 𓇏 𓇐 𓇑 𓇒 𓇓 𓇔 𓇕 𓇖 𓇗 𓇘 𓇙 𓇚 𓇛 𓇜 𓇝 𓇞 𓇟 𓇠 𓇡 𓇢 𓇣 𓇤 𓇥 𓇦 𓇧 𓇨 𓇩 𓇪 𓇫 𓇬 𓇭 𓇮 𓇯 𓇰 𓇱 𓇲 𓇳 𓇴 𓇵 𓇶 𓇷 𓇸 𓇹 𓇺 𓇻 𓇼 𓇽 𓇾 𓇿 𓈀 𓈁 𓈂 𓈃 𓈄 𓈅 𓈆 𓈇 𓈈 𓈉 𓈊 𓈋 𓈌 𓈍 𓈎 𓈏 𓈐 𓈑 𓈒 𓈓 𓈔 𓈕 𓈖 𓈗 𓈘 𓈙 𓈚 𓈛 𓈜 𓈝 𓈞 𓈟 𓈠 𓈡 𓈢 𓈣 𓈤 𓈥 𓈦 𓈧 𓈨 𓈩 𓈪 𓈫 𓈬 𓈭 𓈮 𓈯 𓈰 𓈱 𓈲 𓈳 𓈴 𓈵 𓈶 𓈷 𓈸 𓈹 𓈺 𓈻 𓈼 𓈽 𓈾 𓈿 𓉀 𓉁 𓉂 𓉃 𓉄 𓉅 𓉆 𓉇 𓉈 𓉉 𓉊 𓉋 𓉌 𓉍 𓉎 𓉏 𓉐 𓉑 𓉒 𓉓 𓉔 𓉕 𓉖 𓉗 𓉘 𓉙 𓉚 𓉛 𓉜 𓉝 𓉞 𓉟 𓉠 𓉡 𓉢 𓉣 𓉤 𓉥 𓉦 𓉧 𓉨 𓉩 𓉪 𓉫 𓉬 𓉭 𓉮 𓉯 𓉰 𓉱 𓉲 𓉳 𓉴 𓉵 𓉶 𓉷 𓉸 𓉹 𓉺 𓉻 𓉼 𓉽 𓉾 𓉿 𓊀 𓊁 𓊂 𓊃 𓊄 𓊅 𓊆 𓊇 𓊈 𓊉 𓊊 𓊋 𓊌 𓊍 𓊎 𓊏 𓊐 𓊑 𓊒 𓊓 𓊔 𓊕 𓊖 𓊗 𓊘 𓊙 𓊚 𓊛 𓊜 𓊝 𓊞 𓊟 𓊠 𓊡 𓊢 𓊣 𓊤 𓊥 𓊦 𓊧 𓊨 𓊩 𓊪 𓊫 𓊬 𓊭 𓊮 𓊯 𓊰 𓊱 𓊲 𓊳 𓊴 𓊵 𓊶 𓊷 𓊸 𓊹 𓊺 𓊻 𓊼 𓊽 𓊾 𓊿 𓋀 𓋁 𓋂 𓋃 𓋄 𓋅 𓋆 𓋇 𓋈 𓋉 𓋊 𓋋 𓋌 𓋍 𓋎 𓋏 𓋐 𓋑 𓋒 𓋓 𓋔 𓋕 𓋖 𓋗 𓋘 𓋙 𓋚 𓋛 𓋜 𓋝 𓋞 𓋟 𓋠 𓋡 𓋢 𓋣 𓋤 𓋥 𓋦 𓋧 𓋨 𓋩 𓋪 𓋫 𓋬 𓋭 𓋮 𓋯 𓋰 𓋱 𓋲 𓋳 𓋴 𓋵 𓋶 𓋷 𓋸 𓋹 𓋺 𓋻 𓋼 𓋽 𓋾 𓋿 𓌀 𓌁 𓌂 𓌃 𓌄 𓌅 𓌆 𓌇 𓌈 𓌉 𓌊 𓌋 𓌌 𓌍 𓌎 𓌏 𓌐 𓌑 𓌒 𓌓 𓌔 𓌕 𓌖 𓌗 𓌘 𓌙 𓌚 𓌛 𓌜 𓌝 𓌞 𓌟 𓌠 𓌡 𓌢 𓌣 𓌤 𓌥 𓌦 𓌧 𓌨 𓌩 𓌪 𓌫 𓌬 𓌭 𓌮 𓌯 𓌰 𓌱 𓌲 𓌳 𓌴 𓌵 𓌶 𓌷 𓌸 𓌹 𓌺 𓌻 𓌼 𓌽 𓌾 𓌿 𓍀 𓍁 𓍂 𓍃 𓍄 𓍅 𓍆 𓍇 𓍈 𓍉 𓍊 𓍋 𓍌 𓍍 𓍎 𓍏 𓍐 𓍑 𓍒 𓍓 𓍔 𓍕 𓍖 𓍗 𓍘 𓍙 𓍚 𓍛 𓍜 𓍝 𓍞 𓍟 𓍠 𓍡 𓍢 𓍣 𓍤 𓍥 𓍦 𓍧 𓍨 𓍩 𓍪 𓍫 𓍬 𓍭 𓍮 𓍯 𓍰 𓍱 𓍲 𓍳 𓍴 𓍵 𓍶 𓍷 𓍸 𓍹 𓍺 𓍻 𓍼 𓍽 𓍾 𓍿 𓎀 𓎁 𓎂 𓎃 𓎄 𓎅 𓎆 𓎇 𓎈 𓎉 𓎊 𓎋 𓎌 𓎍 𓎎 𓎏 𓎐 𓎑 𓎒 𓎓 𓎔 𓎕 𓎖 𓎗 𓎘 𓎙 𓎚 𓎛 𓎜 𓎝 𓎞 𓎟 𓎠 𓎡 𓎢 𓎣 𓎤 𓎥 𓎦 𓎧 𓎨 𓎩 𓎪 𓎫 𓎬 𓎭 𓎮 𓎯 𓎰 𓎱 𓎲 𓎳 𓎴 𓎵 𓎶 𓎷 𓎸 𓎹 𓎺 𓎻 𓎼 𓎽 𓎾 𓎿 𓏀 𓏁 𓏂 𓏃 𓏄 𓏅 𓏆 𓏇 𓏈 𓏉 𓏊 𓏋 𓏌 𓏍 𓏎 𓏏 𓏐 𓏑 𓏒 𓏓 𓏔 𓏕 𓏖 𓏗 𓏘 𓏙 𓏚 𓏛 𓏜 𓏝 𓏞 𓏟 𓏠 𓏡 𓏢 𓏣 𓏤 𓏥 𓏦 𓏧 𓏨 𓏩 𓏪 𓏫 𓏬 𓏭 𓏮 𓏯 𓏰 𓏱 𓏲 𓏳 𓏴 𓏵 𓏶 𓏷 𓏸 𓏹 𓏺 𓏻 𓏽 𓏾 𓏿 𓐀 𓐁 𓐂 𓐃 𓐄 𓐅 𓐆 𓐇 𓐈 𓐉 𓐊 𓐋 𓐌 𓐍 𓐎 𓐏 𓐐 𓐑 𓐒 𓐓 𓐔 𓐕 𓐖 𓐗 𓐘 𓐙 𓐚 𓐛 𓐜 𓐝 𓐞 𓐟 𓐠 𓐡 𓐢 𓐣 𓐤 𓐥 𓐦 𓐧 𓐨 𓐩 𓐪 𓐫 𓐬 𓐭 𓐮',
  
  ipapho: 'ɐ ɑ ɒ ɓ ɔ ɕ ɖ ɗ ɘ ə ɚ ɛ ɜ ɝ ɞ ɟ ɠ ɡ ɢ ɣ ɤ ɥ ɦ ɧ ɨ ɩ ɪ ɫ ɬ ɭ ɮ ɯ ɰ ɱ ɲ ɳ ɴ ɵ ɶ ɷ ɸ ɹ ɺ ɻ ɼ ɽ ɾ ɿ ʀ ʁ ʂ ʃ ʄ ʅ ʆ ʇ ʈ ʉ ʊ ʋ ʌ ʍ ʎ ʏ ʐ ʑ ʒ ʓ ʔ ʕ ʖ ʗ ʘ ʙ ʚ ʛ ʜ ʝ ʞ ʟ ʠ ʡ ʢ ʣ ʤ ʥ ʦ ʧ ʨ ʩ ʪ ʫ ʬ ʭ ʮ ʯ ʰ ʱ ʲ ʳ ʴ ʵ ʶ ʷ ʸ ʹ ʺ ʻ ʼ ʽ ʾ ʿ ˀ ˁ ˂ ˃ ˄ ˅ ˆ ˇ ˈ ˉ ˊ ˋ ˌ ˍ ˎ ˏ ː ˑ ˒ ˓ ˔ ˕ ˖ ˗ ˘ ˙ ˚ ˛ ˜ ˝ ˞ ˟ ˠ ˡ ˢ ˣ ˤ ˥ ˦ ˧ ˨ ˩ ˪ ˫ ˬ ˭ ˮ ˯ ˰ ˱ ˲ ˳ ˴ ˵ ˶ ˷ ˸ ˹ ˺ ˻ ˼ ˽ ˾ ˿ ᴀ ᴁ ᴂ ᴃ ᴄ ᴅ ᴆ ᴇ ᴈ ᴉ ᴊ ᴋ ᴌ ᴍ ᴎ ᴏ ᴐ ᴑ ᴒ ᴓ ᴔ ᴕ ᴖ ᴗ ᴘ ᴙ ᴚ ᴛ ᴜ ᴝ ᴞ ᴟ ᴠ ᴡ ᴢ ᴣ ᴤ ᴥ ᴦ ᴧ ᴨ ᴩ ᴪ ᴫ ᴬ ᴭ ᴮ ᴯ ᴰ ᴱ ᴲ ᴳ ᴴ ᴵ ᴶ ᴷ ᴸ ᴹ ᴺ ᴻ ᴼ ᴽ ᴾ ᴿ ᵀ ᵁ ᵂ ᵃ ᵄ ᵅ ᵆ ᵇ ᵈ ᵉ ᵊ ᵋ ᵌ ᵍ ᵎ ᵏ ᵐ ᵑ ᵒ ᵓ ᵔ ᵕ ᵖ ᵗ ᵘ ᵙ ᵚ ᵛ ᵜ ᵝ ᵞ ᵟ ᵠ ᵡ ᵢ ᵣ ᵤ ᵥ ᵦ ᵧ ᵨ ᵩ ᵪ ᵫ ᵬ ᵭ ᵮ ᵯ ᵰ ᵱ ᵲ ᵳ ᵴ ᵵ ᵶ ᵷ ᵸ ᵹ ᵺ ᵻ ᵼ ᵽ ᵾ ᵿ ᶀ ᶁ ᶂ ᶃ ᶄ ᶅ ᶆ ᶇ ᶈ ᶉ ᶊ ᶋ ᶌ ᶍ ᶎ ᶏ ᶐ ᶑ ᶒ ᶓ ᶔ ᶕ ᶖ ᶗ ᶘ ᶙ ᶚ ᶛ ᶜ ᶝ ᶞ ᶟ ᶠ ᶡ ᶢ ᶣ ᶤ ᶥ ᶦ ᶧ ᶨ ᶩ ᶪ ᶫ ᶬ ᶭ ᶮ ᶯ ᶰ ᶱ ᶲ ᶳ ᶴ ᶵ ᶶ ᶷ ᶸ ᶹ ᶺ ᶻ ᶼ ᶽ ᶾ ᶿ ꜀ ꜁ ꜂ ꜃ ꜄ ꜅ ꜆ ꜇ ꜈ ꜉ ꜊ ꜋ ꜌ ꜍ ꜎ ꜏ ꜐ ꜑ ꜒ ꜓ ꜔ ꜕ ꜖ ꜗ ꜘ ꜙ ꜚ ꜛ ꜜ ꜝ ꜞ ꜟ ⁰ ⁱ ⁴ ⁵ ⁶ ⁷ ⁸ ⁹ ⁺ ⁻ ⁼ ⁽ ⁾ ⁿ ₀ ₁ ₂ ₃ ₄ ₅ ₆ ₇ ₈ ₉ ₊ ₋ ₌ ₍ ₎ ₐ ₑ ₒ ₓ ₔ ₕ ₖ ₗ ₘ ₙ ₚ ₛ ₜ',
  windin1: '✂ ✁ 👓︎ 🕭 🕮 🕯 🕿 ✆ 🖂 🖃 📪︎ 📫︎ 📬︎ 📭︎ 🗀 🗁 🗎 🗏 🗐 🗄 ⏳︎ 🖮 🖰 🖲 🖳 🖴 🖫 🖬 ✇ ✍︎ ✌︎ 🖎 🖏 👍︎ 👎︎ ☜ ☞ ☝︎ 🖗 🖐︎ ☺ 😐︎ ☹ 💣︎ 🕱 🏳 🏱 ✈ ☼ 🌢 ❄ 🕆 ✞ 🕈 ✠ ✡ ☪ ☯ 🕉 ☸ ♈︎ ♉︎ ♊︎ ♋︎ ♌︎ ♍︎ ♎︎ ♏︎ ♐︎ ♑︎ ♒︎ ♓︎ 🙰 🙵 ⚫︎ 🔾 ◼ 🞏 🞐 ❑ ❒ 🞟 ⧫ ◆ ❖ 🞙 ⌧ ⮹ ⌘ 🏵 🏶 🙶 🙷 🄋 ➀ ➁ ➂ ➃ ➄ ➅ ➆ ➇ ➈ ➉ 🄌 ➊ ➋ ➌ ➍ ➎ ➏ ➐ ➑ ➒ ➓ 🙢 🙠 🙡 🙣 🙞 🙜 🙝 🙟 ∙ • ⬝ ⭘ 🞆 🞈 🞊 🞋 🔿 ▪ 🞎 🟁 🟅 🟋 🟏 🟓 🟑 ⯐ ⌖ ⯎ ⯏ ⯑ ✪ ✰ 🕐︎ 🕑︎ 🕒︎ 🕓︎ 🕔︎ 🕕︎ 🕖︎ 🕗︎ 🕘︎ 🕙︎ 🕚︎ 🕛︎ ⮰ ⮱ ⮲ ⮳ ⮴ ⮵ ⮶ ⮷ 🙪 🙫 🙕 🙔 🙗 🙖 🙐 🙑 🙒 🙓 ⌫ ⌦ ⮘ ⮚ ⮙ ⮛ ⮈ ⮊ ⮉ ⮋ 🡨 🡪 🡩 🡫 🡬 🡭 🡯 🡮 🡸 🡺 🡹 🡻 🡼 🡽 🡿 🡾 ⇦ ⇨ ⇧ ⇩ ⬄ ⇳ ⬁ ⬀ ⬃ ⬂ 🢬 🢭 🗶 ✓ 🗷 🗹',
  windin2: '🖊 🖋 🖌 🖍 ✄ ✀ 🕾 🕽 🗅 🗆 🗇 🗈 🗉 🗊 🗋 🗌 🗌 🗌 🗍 📋︎ 🗑 🗔 🖵 🖶 🖷 🖸 🖭 🖯 🖱 🖒 🖓 🖘 🖙 🖚 🖚 🖚 🖚 🖛 👈︎ 👉︎ 🖜 🖝 🖞 🖟 🖠 🖡 👆︎ 👇︎ 🖢 🖣 🖑 🗴 🗸 🗸 🗸 🗸 🗸 🗵 ☑ ⮽ ☒ ⮾ ⮿ 🛇 ⦸ 🙱 🙴 🙲 🙳 ‽ 🙹 🙺 🙻 🙻 🙻 🙻 🙦 🙤 🙥 🙧 🙚 🙘 🙙 🙛 ⓪ ① ② ③ ④ ⑤ ⑥ ⑦ ⑦ ⑦ ⑦ ⑦ ⑦ ⑦ ⑧ ⑨ ⑩ ⓿ ❶ ❷ ❸ ❹ ❺ ❻ ❼ ❽ ❾ ❿ ☉ ☉ ☉ ☉ ☉ ☉ ☉ ☉ 🌕︎ ☽ ☾ ⸿ ✝ 🕇 🕜︎ 🕝︎ 🕞︎ 🕟︎ 🕠︎ 🕡︎ 🕢︎ 🕣︎ 🕤︎ 🕥︎ 🕦︎ 🕧︎ 🙨 🙩 ⋅ 🞄 ⦁ ● ○ 🞅 🞇 🞉 ⊙ ⦿ 🞌 🞍 ◾︎ ■ □ 🞑 🞒 🞓 🞔 ▣ 🞕 🞖 🞗 🞘 ⬩ ⬥ ◇ 🞚 ◈ 🞛 🞜 🞝 🞞 ⬪ ⬧ ◊ 🞠 ◖ ◗ ⯊ ⯋ ⯀ ⯁ ⬟ ⯂ ⬣ ⬢ ⯃ ⯄ 🞡 🞢 🞣 🞤 🞥 🞦 🞧 🞨 🞩 🞪 🞫 🞬 🞭 🞮 🞯 🞰 🞱 🞲 🞳 🞴 🞵 🞶 🞷 🞸 🞹 🞺 🞻 🞼 🞽 🞾 🞿 🟀 🟂 🟄 🟆 🟉 🟊 ✶ 🟌 🟎 🟐 🟒 ✹ 🟃 🟇 ✯ 🟍 🟔 ⯌ ⯍ ※ ⁂',
  windin3: '⌃ ⌤ ⌥ ⇪ ⎋ ␣ ⍽ ▲ △ ▶ ▷ ▼ ▽ ◀ ◁ ◢ ◣ ◤ ◥ ⮠ ⭠ ⭣ ⭡ ⭦ ⭥ ⭪ ⭧ ⭩ ⭰ ⭨ ⭬ ⭭ ⭫ ⭍ ⭮ ⭯ ⭲ ⭳ ⭱ ⭶ ⭸ ⭻ ⭤ ⭿ ⮄ ⮃ ⭾ ⮆ ⮇ ⮅ ⮏ ⮎ ⮌ ⮍ ⮑ ⮒ ⮓ ⮀ ⮜ ⮟ ⮝ 🠐 ⮡ ⮢ ⮣ ⮤ ⮥ ⮦ ⮧ ⮨ ⮩ ⮪ ⮫ ⮬ ⮭ ⮮ ⮯ 🢠 ⯅ ⯆ ⯇ ⯈ 🞀 🞁 🞃 🠂 🠃 🠁 🠄 🠆 🠅 🠇 🠈 🠋 🠊 🠠 🠒 🠓 🠑 🠔 🠖 🠕 🠗 🠘 🠙 🠚 🠛 🠜 🠟 🠝 🠀 🠢 🠤 🠦 🠨 🠪 🠬 🢜 🠮 🠰 🠲 🠴 🠶 🠸 🠻 🠹 🢘 🠾 🠽 🠿 🡀 🡃 🡁 🡄 🡆 🡇 🡅 🡒 🡓 🡑 🡔 🡕 🡗 🡘 🡖 🡙 🡢 🡣 🡡 🡤 🡥 🡧 🡰 🡦 🡲 🡳 🡱 🡴 🡵 🡷 🡶 🢀 🢃 🢁 🢄 🢅 🢇 🢐 🢆 🢒 🢓 🢑 🢔 🢖 🢕 🢚 🢛 🢙 🠼 🢝 🢞 🢟 🢡 🢢 🢣 🢤 🢥 🢦 🢨 🢩 🢪 🢫',
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

//animation dd
const details = document.querySelectorAll('details');

details.forEach(detail => {
  const content = detail.querySelector('div');

  // คำนวณความสูงที่แท้จริงของเนื้อหาภายใน
  const setMaxHeight = () => {
    content.style.maxHeight = content.scrollHeight + 'px';
  };

  detail.addEventListener('toggle', () => {
    if (detail.open) {
      setMaxHeight();
    } else {
      content.style.maxHeight = '0';
      setTimeout(() => {
        content.style.transition = 'none';  // ปิดการ transition ชั่วคราว
        content.offsetHeight;  // รีเฟรช layout
        content.style.transition = 'max-height 0.5s ease, opacity 0.5s ease, transform 0.5s ease';  // เปิดการ transition ใหม่
      }, 100);
    }
  });
});

//single dd
document.addEventListener('DOMContentLoaded', function () {
  const details = document.querySelectorAll('details');

  details.forEach(detail => {
    detail.addEventListener('toggle', function () {
      if (detail.open) {
        // เมื่อเปิด dropdown นี้ ให้ปิด dropdown อื่น ๆ ที่เปิดอยู่
        details.forEach(otherDetail => {
          if (otherDetail !== detail) {
            otherDetail.removeAttribute('open');
          }
        });
      }
    });
  });
});


