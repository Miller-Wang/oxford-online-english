const path = require('path');
const fs = require('fs');

const lessons = {
  Vocabulary: {
    url: 'https://www.oxfordonlineenglish.com/free-english-lessons',
    lessons: [
      'https://www.oxfordonlineenglish.com/collocations-in-english',
      'https://www.oxfordonlineenglish.com/how-to-talk-about-tv',
      'https://www.oxfordonlineenglish.com/working-in-a-team',
      'https://www.oxfordonlineenglish.com/british-slang',
      'https://www.oxfordonlineenglish.com/talk-about-your-studies',
      'https://www.oxfordonlineenglish.com/talking-about-environment',
      'https://www.oxfordonlineenglish.com/phrasal-verbs-for-business',
      'https://www.oxfordonlineenglish.com/hotel-english',
      'https://www.oxfordonlineenglish.com/phrasal-verbs',
      'https://www.oxfordonlineenglish.com/business-english-phrases-idioms',
      'https://www.oxfordonlineenglish.com/talking-about-crime-and-court',
      'https://www.oxfordonlineenglish.com/talk-about-health-lifestyle',
      'https://www.oxfordonlineenglish.com/talk-about-nature',
      'https://www.oxfordonlineenglish.com/talk-about-emotions',
      'https://www.oxfordonlineenglish.com/everyday-problems',
      'https://www.oxfordonlineenglish.com/how-to-rent-house-apartment',
      'https://www.oxfordonlineenglish.com/weather-expressions',
      'https://www.oxfordonlineenglish.com/describing-appearance',
      'https://www.oxfordonlineenglish.com/prepositions-of-place',
      'https://www.oxfordonlineenglish.com/prepositions-of-movement',
      'https://www.oxfordonlineenglish.com/talk-about-illness-medicine',
      'https://www.oxfordonlineenglish.com/tour-of-london-english',
      'https://www.oxfordonlineenglish.com/going-shopping-in-english',
      'https://www.oxfordonlineenglish.com/talk-about-transport-and-driving',
      'https://www.oxfordonlineenglish.com/talking-about-smartphones',
      'https://www.oxfordonlineenglish.com/talking-about-daily-routine',
      'https://www.oxfordonlineenglish.com/pub-english',
      'https://www.oxfordonlineenglish.com/airport-english',
      'https://www.oxfordonlineenglish.com/talk-about-money-in-english',
      'https://www.oxfordonlineenglish.com/talk-about-clothes-in-english',
      'https://www.oxfordonlineenglish.com/talking-on-phone-english',
      'https://www.oxfordonlineenglish.com/describe-pictures',
      'https://www.oxfordonlineenglish.com/essential-phrases',
      'https://www.oxfordonlineenglish.com/talking-about-your-vacation',
      'https://www.oxfordonlineenglish.com/talking-about-sports',
      'https://www.oxfordonlineenglish.com/talk-about-football',
      'https://www.oxfordonlineenglish.com/talk-about-movies',
      'https://www.oxfordonlineenglish.com/describe-people-english',
      'https://www.oxfordonlineenglish.com/talking-about-weather',
      'https://www.oxfordonlineenglish.com/talking-about-hometown',
      'https://www.oxfordonlineenglish.com/talk-about-love',
      'https://www.oxfordonlineenglish.com/talk-about-food',
      'https://www.oxfordonlineenglish.com/talking-about-family',
      'https://www.oxfordonlineenglish.com/talking-about-home',
      'https://www.oxfordonlineenglish.com/talking-about-job',
      'https://www.oxfordonlineenglish.com/free-time-and-hobbies',
    ],
  },

  Business: {
    url: 'https://www.oxfordonlineenglish.com/free-business-english-lessons',
    lessons: [
      'https://www.oxfordonlineenglish.com/talking-on-the-phone',
      'https://www.oxfordonlineenglish.com/hotel-english',
      'https://www.oxfordonlineenglish.com/write-emails-in-english',
      'https://www.oxfordonlineenglish.com/presentations-in-english',
      'https://www.oxfordonlineenglish.com/how-to-negotiate-in-business',
      'https://www.oxfordonlineenglish.com/attending-business-meeting',
      'https://www.oxfordonlineenglish.com/formal-informal-english',
      'https://www.oxfordonlineenglish.com/write-cv-in-english',
      'https://www.oxfordonlineenglish.com/english-job-interview',
    ],
  },
  Listening: {
    url: 'https://www.oxfordonlineenglish.com/free-english-listening-lessons',
    lessons: [
      'https://www.oxfordonlineenglish.com/listening-football-match',
      'https://www.oxfordonlineenglish.com/cooking-class',
      'https://www.oxfordonlineenglish.com/listening-lesson-wedding-nightmares',
      'https://www.oxfordonlineenglish.com/listening-lesson-stinky-fruit',
      'https://www.oxfordonlineenglish.com/working-in-an-office',
      'https://www.oxfordonlineenglish.com/playing-cards',
      'https://www.oxfordonlineenglish.com/talking-on-the-phone',
      'https://www.oxfordonlineenglish.com/names',
      'https://www.oxfordonlineenglish.com/arguing-about-music',
      'https://www.oxfordonlineenglish.com/phoning-for-a-pizza-listening-lesson-a1',
      'https://www.oxfordonlineenglish.com/train-tickets',
      'https://www.oxfordonlineenglish.com/clothes-shopping',
      'https://www.oxfordonlineenglish.com/studying-history-listening-lesson-c1-c2',
      'https://www.oxfordonlineenglish.com/talking-about-holidays',
      'https://www.oxfordonlineenglish.com/checking-in-airport',
      'https://www.oxfordonlineenglish.com/ordering-at-a-coffee-shop-listening-lesson-a1',
      'https://www.oxfordonlineenglish.com/the-c1-advanced-speaking-exam-listening-lesson-c1',
      'https://www.oxfordonlineenglish.com/boring-man-party',
      'https://www.oxfordonlineenglish.com/going-to-the-doctor',
      'https://www.oxfordonlineenglish.com/hot-weather',
      'https://www.oxfordonlineenglish.com/paying-a-restaurant-bill-listening-lesson-a2',
      'https://www.oxfordonlineenglish.com/buying-a-phone',
      'https://www.oxfordonlineenglish.com/the-b2-first-speaking-exam-listening-lesson-b2',
      'https://www.oxfordonlineenglish.com/playing-football',
      'https://www.oxfordonlineenglish.com/giving-directions',
      'https://www.oxfordonlineenglish.com/build-a-website',
      'https://www.oxfordonlineenglish.com/the-football-results-listening-lesson-a1',
      'https://www.oxfordonlineenglish.com/a-talk-about-climate-change-listening-lesson-c1-c2',
      'https://www.oxfordonlineenglish.com/language-learning',
      'https://www.oxfordonlineenglish.com/train-station-announcements-listening-lesson-a1',
      'https://www.oxfordonlineenglish.com/photo-editing',
      'https://www.oxfordonlineenglish.com/computer-problems',
      'https://www.oxfordonlineenglish.com/talk-about-films-listening',
      'https://www.oxfordonlineenglish.com/a-phone-in-about-id-cards-listening-lesson-c1-c2',
      'https://www.oxfordonlineenglish.com/transport-getting-to-work',
      'https://www.oxfordonlineenglish.com/head-injury',
      'https://www.oxfordonlineenglish.com/the-ielts-speaking-exam-listening-lesson-b2-c1',
      'https://www.oxfordonlineenglish.com/opening-bank-account',
    ],
  },

  Grammar: {
    url: 'https://www.oxfordonlineenglish.com/free-english-grammar-lessons',
    lessons: [
      'https://www.oxfordonlineenglish.com/sentence-structure',
      'https://www.oxfordonlineenglish.com/english-verb-tenses',
      'https://www.oxfordonlineenglish.com/improve-english-grammar',
      'https://www.oxfordonlineenglish.com/present-perfect-verb-tense',
      'https://www.oxfordonlineenglish.com/verb-be',
      'https://www.oxfordonlineenglish.com/use-the',
      'https://www.oxfordonlineenglish.com/adjective-order-in-english',
      'https://www.oxfordonlineenglish.com/use-have-get',
      'https://www.oxfordonlineenglish.com/using-should',
      'https://www.oxfordonlineenglish.com/5-levels-english-grammar-do',
      'https://www.oxfordonlineenglish.com/5-levels-english-grammar-be',
      'https://www.oxfordonlineenglish.com/prepositions-of-movement',
      'https://www.oxfordonlineenglish.com/make-complex-sentences',
      'https://www.oxfordonlineenglish.com/use-make-and-do',
      'https://www.oxfordonlineenglish.com/how-to-use-adjectives',
      'https://www.oxfordonlineenglish.com/grammar-lesson-1-sentence-structure',
      'https://www.oxfordonlineenglish.com/talk-about-time',
      'https://www.oxfordonlineenglish.com/strange-sentences',
      'https://www.oxfordonlineenglish.com/talk-about-the-past-in-english',
      'https://www.oxfordonlineenglish.com/parts-of-speech',
      'https://www.oxfordonlineenglish.com/would-have-could-have-should-have',
      'https://www.oxfordonlineenglish.com/adverbs-in-english',
      'https://www.oxfordonlineenglish.com/talk-about-future',
      'https://www.oxfordonlineenglish.com/fce-reading-use-english-part-two',
      'https://www.oxfordonlineenglish.com/prepositions-to-in-at',
      'https://www.oxfordonlineenglish.com/would-modal-verbs',
      'https://www.oxfordonlineenglish.com/present-continuous',
      'https://www.oxfordonlineenglish.com/should-ought-supposedto-hadbetter',
      'https://www.oxfordonlineenglish.com/passive-voice',
      'https://www.oxfordonlineenglish.com/present-simple-verb-tense',
      'https://www.oxfordonlineenglish.com/how-to-use-must',
      'https://www.oxfordonlineenglish.com/commas',
      'https://www.oxfordonlineenglish.com/can-could-be-able-to',
      'https://www.oxfordonlineenglish.com/modal-verbs-possibility',
      'https://www.oxfordonlineenglish.com/colons-semicolons',
      'https://www.oxfordonlineenglish.com/english-modal-verbs-introduction',
      'https://www.oxfordonlineenglish.com/uncountable-nouns',
      'https://www.oxfordonlineenglish.com/will-would-might',
      'https://www.oxfordonlineenglish.com/must-have-to-should',
    ],
  },

  Spoken: {
    url: 'https://www.oxfordonlineenglish.com/free-spoken-english-lessons',
    lessons: [
      'https://www.oxfordonlineenglish.com/airport-english',
      'https://www.oxfordonlineenglish.com/give-receive-feedback-business-english',
      'https://www.oxfordonlineenglish.com/talking-about-family',
      'https://www.oxfordonlineenglish.com/talk-about-football',
      'https://www.oxfordonlineenglish.com/ielts-speaking-band-9-sample-test',
      'https://www.oxfordonlineenglish.com/ways-to-agree',
      'https://www.oxfordonlineenglish.com/how-to-talk-about-apps',
      'https://www.oxfordonlineenglish.com/free-time-and-hobbies',
      'https://www.oxfordonlineenglish.com/talk-about-money-in-english',
      'https://www.oxfordonlineenglish.com/talking-about-crime-and-court',
      'https://www.oxfordonlineenglish.com/talk-about-health-lifestyle',
      'https://www.oxfordonlineenglish.com/talk-about-emotions',
      'https://www.oxfordonlineenglish.com/everyday-problems',
      'https://www.oxfordonlineenglish.com/adding-emphasis-in-english',
      'https://www.oxfordonlineenglish.com/how-to-rent-house-apartment',
      'https://www.oxfordonlineenglish.com/tell-me-about-yourself',
      'https://www.oxfordonlineenglish.com/talk-about-illness-medicine',
      'https://www.oxfordonlineenglish.com/active-listening',
      'https://www.oxfordonlineenglish.com/use-have-get',
      'https://www.oxfordonlineenglish.com/british-slang',
      'https://www.oxfordonlineenglish.com/how-to-make-small-talk',
      'https://www.oxfordonlineenglish.com/how-to-talk-about-tv',
      'https://www.oxfordonlineenglish.com/tour-of-london-english',
      'https://www.oxfordonlineenglish.com/going-shopping-in-english',
      'https://www.oxfordonlineenglish.com/talking-about-environment',
      'https://www.oxfordonlineenglish.com/talk-about-transport-and-driving',
      'https://www.oxfordonlineenglish.com/talking-about-smartphones',
      'https://www.oxfordonlineenglish.com/talking-about-daily-routine',
      'https://www.oxfordonlineenglish.com/talk-about-time',
      'https://www.oxfordonlineenglish.com/how-to-negotiate-in-business',
      'https://www.oxfordonlineenglish.com/pub-english',
      'https://www.oxfordonlineenglish.com/natural-english-conversation-responses',
      'https://www.oxfordonlineenglish.com/sentence-stress',
      'https://www.oxfordonlineenglish.com/talk-about-the-past-in-english',
      'https://www.oxfordonlineenglish.com/talk-about-clothes-in-english',
      'https://www.oxfordonlineenglish.com/intonation-in-english',
      'https://www.oxfordonlineenglish.com/compare-contrast',
      'https://www.oxfordonlineenglish.com/talking-on-phone-english',
      'https://www.oxfordonlineenglish.com/likes-dislikes-english',
      'https://www.oxfordonlineenglish.com/talk-about-future',
      'https://www.oxfordonlineenglish.com/tell-a-story',
      'https://www.oxfordonlineenglish.com/describe-pictures',
      'https://www.oxfordonlineenglish.com/essential-phrases',
      'https://www.oxfordonlineenglish.com/english-greetings-how-are-you',
      'https://www.oxfordonlineenglish.com/talking-about-your-vacation',
      'https://www.oxfordonlineenglish.com/talking-about-sports',
      'https://www.oxfordonlineenglish.com/speak-english-with-confidence',
      'https://www.oxfordonlineenglish.com/talk-about-your-studies',
      'https://www.oxfordonlineenglish.com/how-to-use-sarcasm',
      'https://www.oxfordonlineenglish.com/talk-about-movies',
      'https://www.oxfordonlineenglish.com/describe-people-english',
      'https://www.oxfordonlineenglish.com/talking-about-weather',
      'https://www.oxfordonlineenglish.com/have-english-conversation',
      'https://www.oxfordonlineenglish.com/talking-about-hometown',
      'https://www.oxfordonlineenglish.com/understand-native-speakers',
      'https://www.oxfordonlineenglish.com/talk-about-love',
      'https://www.oxfordonlineenglish.com/vague-language',
      'https://www.oxfordonlineenglish.com/how-to-thank-people',
      'https://www.oxfordonlineenglish.com/talk-about-food',
      'https://www.oxfordonlineenglish.com/shopping-clothes-english',
      'https://www.oxfordonlineenglish.com/order-coffee-english',
      'https://www.oxfordonlineenglish.com/compliments',
      'https://www.oxfordonlineenglish.com/reading-english-dates',
      'https://www.oxfordonlineenglish.com/boring-man-party',
      'https://www.oxfordonlineenglish.com/greetings-introductions',
      'https://www.oxfordonlineenglish.com/talking-about-home',
      'https://www.oxfordonlineenglish.com/talking-about-job',
    ],
  },
  Pronunciation: {
    url: 'https://www.oxfordonlineenglish.com/free-english-pronunciation-lessons',
    lessons: [
      'https://www.oxfordonlineenglish.com/pronounce-vowel-sounds',
      'https://www.oxfordonlineenglish.com/english-contractions',
      'https://www.oxfordonlineenglish.com/pronounce-difficult-english-words',
      'https://www.oxfordonlineenglish.com/british-american-pronunciation',
      'https://www.oxfordonlineenglish.com/weak-forms-english',
      'https://www.oxfordonlineenglish.com/intonation-in-english',
      'https://www.oxfordonlineenglish.com/linking-pronunciation',
      'https://www.oxfordonlineenglish.com/understand-fast-speakers-elision',
      'https://www.oxfordonlineenglish.com/how-to-read-ipa',
    ],
  },
  IELTS: {
    url: 'https://www.oxfordonlineenglish.com/free-ielts-preparation-lessons',
    lessons: [
      'https://www.oxfordonlineenglish.com/5-common-ielts-mistakes',
      'https://www.oxfordonlineenglish.com/ielts-essay-paraphrasing',
      'https://www.oxfordonlineenglish.com/ielts-writing-vocabulary-score',
      'https://www.oxfordonlineenglish.com/write-band-9-ielts-essay',
      'https://www.oxfordonlineenglish.com/the-ielts-speaking-exam-listening-lesson-b2-c1',
      'https://www.oxfordonlineenglish.com/make-ielts-study-plan',
      'https://www.oxfordonlineenglish.com/ielts-speaking-exam-part-two',
      'https://www.oxfordonlineenglish.com/ielts-life-skills-b1',
      'https://www.oxfordonlineenglish.com/ielts-writing-task-1-general-band-9',
      'https://www.oxfordonlineenglish.com/ielts-speaking-band-9-sample-test',
      'https://www.oxfordonlineenglish.com/compare-contrast',
      'https://www.oxfordonlineenglish.com/ielts-academic-writing-task-1',
      'https://www.oxfordonlineenglish.com/ielts-speaking-band-7',
      'https://www.oxfordonlineenglish.com/get-band-7-ielts-writing-exam',
      'https://www.oxfordonlineenglish.com/ielts-reading-matching-headings',
      'https://www.oxfordonlineenglish.com/ielts-reading-true-false-notgiven',
      'https://www.oxfordonlineenglish.com/ielts-speaking-exam-part-three',
      'https://www.oxfordonlineenglish.com/ielts-speaking-exam-part-one',
      'https://www.oxfordonlineenglish.com/improve-english-listening',
    ],
  },
  StudyAdvice: {
    url: 'https://www.oxfordonlineenglish.com/free-english-study-advice-lessons',
    lessons: [
      'https://www.oxfordonlineenglish.com/how-to-learn-english',
      'https://www.oxfordonlineenglish.com/make-ielts-study-plan',
      'https://www.oxfordonlineenglish.com/vocabulary-notebook',
      'https://www.oxfordonlineenglish.com/how-to-understand-fast-speech',
      'https://www.oxfordonlineenglish.com/things-stop-saying-learn-english',
      'https://www.oxfordonlineenglish.com/improve-english-reading-skills',
      'https://www.oxfordonlineenglish.com/learn-english-vocabulary',
      'https://www.oxfordonlineenglish.com/improve-english-listening',
      'https://www.oxfordonlineenglish.com/smart-goals',
    ],
  },
  Writing: {
    url: 'https://www.oxfordonlineenglish.com/free-english-writing-lessons',
    lessons: [
      'https://www.oxfordonlineenglish.com/improve-english-writing',
      'https://www.oxfordonlineenglish.com/ielts-writing-improve-grammar-score',
      'https://www.oxfordonlineenglish.com/ielts-essay-paraphrasing',
      'https://www.oxfordonlineenglish.com/commas',
      'https://www.oxfordonlineenglish.com/make-complex-sentences',
      'https://www.oxfordonlineenglish.com/ielts-writing-linking-words-phrases',
      'https://www.oxfordonlineenglish.com/ielts-writing-task-1-general-band-9',
      'https://www.oxfordonlineenglish.com/formal-informal-english',
      'https://www.oxfordonlineenglish.com/ielts-writing-task-2-essay',
      'https://www.oxfordonlineenglish.com/write-band-9-ielts-essay',
      'https://www.oxfordonlineenglish.com/write-emails-in-english',
      'https://www.oxfordonlineenglish.com/get-band-7-ielts-writing-exam',
      'https://www.oxfordonlineenglish.com/colons-semicolons',
    ],
  },
  CambridgeExam: {
    url: 'https://www.oxfordonlineenglish.com/free-cambridge-exam-preparation-lessons',
    lessons: [
      'https://www.oxfordonlineenglish.com/fce-writing-exam-essay',
      'https://www.oxfordonlineenglish.com/cae-speaking-exam-parts-3-4',
      'https://www.oxfordonlineenglish.com/fce-writing-exam-review',
      'https://www.oxfordonlineenglish.com/cae-speaking-exam-part-1-part-2',
      'https://www.oxfordonlineenglish.com/fce-speaking-exam-part-three',
      'https://www.oxfordonlineenglish.com/fce-reading-use-english-part-one',
      'https://www.oxfordonlineenglish.com/fce-speaking-exam-part-four',
      'https://www.oxfordonlineenglish.com/b1-preliminary-speaking-parts-1-2',
      'https://www.oxfordonlineenglish.com/fce-speaking-exam-part-two',
    ],
  },
};

const host = 'https://www.oxfordonlineenglish.com/';
const pdfPath = 'https://github.com/Miller-Wang/oxford-online-english/tree/main/assets/';
const results = [`# [OxfordOnlineEnglish free lessons](https://www.oxfordonlineenglish.com/free-english-lessons)`];

Object.entries(lessons).map(([title, obj]) => {

  let pdfFiles = [];
  try {
    pdfFiles = fs.readdirSync(path.resolve(__dirname, `../assets/Vocabulary`));
  } catch (error) {
    console.log(error);
  }


  results.push(`## [${title}](${obj.url})`);
  const subLessons = obj.lessons.map((url) => {
    const name = url.replace(host, '').replace(/-/g, ' ');
    const pdfName = pdfFiles.find(v => v.toLowerCase().includes(name));
    let str = `#### [${name}](${url})`;
    
    if (pdfName) {
      str += ` - [pdf](${encodeURI(`${pdfPath}/${title}/${pdfName}`)})`;
    }
    return str;
  });
  results.push(...subLessons);
});

// fs.writeFileSync('./README.md', results.join('\n'));