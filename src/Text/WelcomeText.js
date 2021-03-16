const titleText = new Map();
titleText.set('english', 'Welcome to our wedding');
titleText.set('dansk', 'Velkommen til vores bryllup');

const bodyText = new Map();
bodyText.set('english', [
    'We are looking forward to seeing you and to celebrate our big day with you.',
    'On this website you will find information that will be useful for our wedding.',
    'You can find a wishlist, pictures of us, and later pictures from the wedding.',
    'There is information on locations and hotel further down the page.'
]);
bodyText.set('dansk', [
    'Vi glæder os til at se jer alle og fejre vores store dag sammen med jer.',
    'Her på hjemmesiden finder i praktiske informationer, som kan være nyttige til vores bryllup.',
    'I kan finde en ønskeliste, billeder af os og senere billeder fra brylluppet.',
    'Der er også informationer om lokationer og hotel længere nede.'
]);

const covidTitle = new Map();
covidTitle.set('english', 'COVID-19');
covidTitle.set('dansk', 'COVID-19');

const covidText = new Map();
covidText.set('english', [
    'We have chosen that our life will not be stopped by a minor pandemic.',
    'BUT we will follow the guidelines and rules given by the authorities, hence there might be changes when the big day nears.'
]);
covidText.set('dansk', [
    'Vi har valgt at vores liv ikke skal bremses af en lille pandemi!',
    'MEN vi overholder de retningslinjer der er fra myndighederne, og derfor kan der komme ændringer når vi nærmer os den store dag.'
]);


export {titleText, bodyText, covidTitle, covidText};