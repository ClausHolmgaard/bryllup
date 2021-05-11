
const helloText = new Map();
helloText.set('english', `
    We are getting married!
`);
helloText.set('dansk', `
    Vi skal giftes!
`);

const rsvpText = new Map();
rsvpText.set('english', 'RSVP');
rsvpText.set('dansk', 'S.U.');

const participatingText = new Map();
participatingText.set('english', `I'm going`);
participatingText.set('dansk', 'Deltager');

const notParticipatingText = new Map();
notParticipatingText.set('english', 'Not going');
notParticipatingText.set('dansk', 'Deltager ikke');

const nameText = new Map();
nameText.set('english', 'Name');
nameText.set('dansk', 'Navn');

const numAdultText = new Map();
numAdultText.set('english', 'Number of adults');
numAdultText.set('dansk', 'Antal voksne');

const numChildren0to3Text = new Map();
numChildren0to3Text.set('english', 'Children under the age of 3');
numChildren0to3Text.set('dansk', 'Børn under 3 år');

const numChildren3to12Text = new Map();
numChildren3to12Text.set('english', 'Children ages 3 to 12');
numChildren3to12Text.set('dansk', 'Børn fra 3 til 12');

const allergyText = new Map();
allergyText.set('english', 'Allergies or other dietary restrictions');
allergyText.set('dansk', 'Allergier eller andre kost begrænsninger');

const replyReceivedText = new Map();
replyReceivedText.set('english', 'Reply Received');
replyReceivedText.set('dansk', 'Svar modtaget');

const replyErrorText = new Map();
replyErrorText.set('english', 'Error sending reply. Please contact rsvp@buiholmgaard.dk.');
replyErrorText.set('dansk', 'Problem ved afsendelse af svar. Tag kontakt venligst rsvp@buiholmgaard.dk.');

const cancelText = new Map();
cancelText.set('english', 'Cancel');
cancelText.set('dansk', 'Afbryd');

const fallbackText = new Map();
fallbackText.set('english', 'For any further information: ');
fallbackText.set('dansk', 'For yderligere information: ');

export {helloText,
        rsvpText,
        participatingText,
        notParticipatingText,
        nameText,
        numAdultText,
        numChildren0to3Text,
        numChildren3to12Text,
        allergyText,
        replyReceivedText,
        replyErrorText,
        cancelText,
        fallbackText};
