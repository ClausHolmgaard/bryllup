const titleText = new Map();
titleText.set('english', 'Wishlist');
titleText.set('dansk', 'Ønskeliste');

const contactText = new Map();
contactText.set('english', 'If you want to coordinate presents, contact Thao’s sister Hien about this.');
contactText.set('dansk', 'Hvis i ønsker at koordinere gaver kan Thao’s søster Hien kontaktes omkring dette.');

const moreText = new Map();
moreText.set('english', 'Click for more!');
moreText.set('dansk', 'Tryk for mere!');

const lessText = new Map();
lessText.set('english', 'Click for less');
lessText.set('dansk', 'Klik for mindre');

const listOfWishes = new Map();
listOfWishes.set('english', [
    ['Philips HD9650/90 Airfryer XXL Avance', 'https://www.elgiganten.dk/product/husholdning/kokkenudstyr/frituregryder-og-airfryer/HD965090/philips-avance-collection-airfryer-xxl-hd9650-90?utm_id=91g3i1&utm_source=partnerads&utm_medium=affiliate&utm_campaign=b2c-loc-partnerads-running&utm_content=all'],
    ['Greenpan Premier stegepande 30cm', 'https://www.imerco.dk/greenpan-premiere-stegepande?id=100405349'],
    ['Greenpan Premier stegepande 24cm', 'https://www.imerco.dk/greenpan-premiere-stegepande?id=100405347'],
    ['Greenpan Premier Wok', 'https://www.imerco.dk/greenpan-premiere-wok?id=100405351'],
    ['Scanpan bradepande 5 liter', 'https://www.kop-kande.dk/scanpan-classic-bradepande-5-ltr-39x27-cm-083421353214'],
    ['Dyson V11', 'https://www.elgiganten.dk/product/husholdning/stovsuger-og-rengoring/179558/dyson-v11-2020-torque-drive-extra-ledningslos-stovsuger'],
    ['WMF Steak Bestiksæt - 12 dele', 'https://www.imerco.dk/wmf-steak-bestiksaet-12-dele?id=100023195'],
    ['Kenwood Chef XL KVL4100S', 'https://www.elgiganten.dk/product/husholdning/kokkenudstyr/kokkenmaskiner/KVL4100S/kenwood-chef-xl-kokkenmaskine-kvl4100s-solv-tank-testvinder?utm_id=91g3i1&utm_source=partnerads&utm_medium=affiliate&utm_campaign=b2c-loc-partnerads-running&utm_content=all'],
    ['Gavekort til wellness ophold', ''],
    ['Gavekort til gourmetophold', ''],
    ['Gavekort til slotsophold', ''],
    ['Træningsbænk - skrå - 300 kg', 'https://shop.getbig.dk/semi-pro-skraabaenk-ms-l101'],
    ['Gavekort til træningsudstyr ved LC Gear', ''],
    ['Gavekort til træningsudstyr ved Rogue Europe', ''],
    ["Chef's Choice CC-1520 knivsliber", 'https://www.skousen.dk/koekkenudstyr/koekkenudstyr/knivsliber%20/product/chef-s-choice-1520/?utm_source=adtraction&utm_medium=affiliate&utm_campaign=Content&utm_campaign=1251558299&at_gd=1BC8BB0451B9D1036763767671C76203C019F9DD'],
    ['DeLonghi Elkedel Active Line', 'https://www.proshop.dk/Elkedel/DeLonghi-Elkedel-Active-Line-Intens-sort-2000-W/2711780?paid=26990&pacid=609e72c0481eb4.31338448&utm_source=partner-ads&utm_medium=cpc&utm_campaign=26990'],
    ['Luigi Bormioli Aero hvidvinsglas 32,5 cl.', 'https://www.imerco.dk/luigi-bormioli-aero-hvidvinsglas-6-stk?id=100325648'],
    ['Luigi Bormioli Aero rødvinsglas 48 cl', 'https://www.imerco.dk/luigi-bormioli-aero-roedvinsglas-6-stk?id=100325646'],
    ['Luigi Bormioli Aero Vandglas', 'https://www.imerco.dk/luigi-bormioli-aero-vandglas-6-stk?id=100325650']
])
listOfWishes.set('dansk', [
    ['Philips HD9650/90 Airfryer XXL Avance', 'https://www.elgiganten.dk/product/husholdning/kokkenudstyr/frituregryder-og-airfryer/HD965090/philips-avance-collection-airfryer-xxl-hd9650-90?utm_id=91g3i1&utm_source=partnerads&utm_medium=affiliate&utm_campaign=b2c-loc-partnerads-running&utm_content=all'],
    ['Greenpan Premier stegepande 30cm', 'https://www.imerco.dk/greenpan-premiere-stegepande?id=100405349'],
    ['Greenpan Premier stegepande 24cm', 'https://www.imerco.dk/greenpan-premiere-stegepande?id=100405347'],
    ['Greenpan Premier Wok', 'https://www.imerco.dk/greenpan-premiere-wok?id=100405351'],
    ['Scanpan bradepande 5 liter', 'https://www.kop-kande.dk/scanpan-classic-bradepande-5-ltr-39x27-cm-083421353214'],
    ['Dyson V11', 'https://www.elgiganten.dk/product/husholdning/stovsuger-og-rengoring/179558/dyson-v11-2020-torque-drive-extra-ledningslos-stovsuger'],
    ['WMF Steak Bestiksæt - 12 dele', 'https://www.imerco.dk/wmf-steak-bestiksaet-12-dele?id=100023195'],
    ['Kenwood Chef XL KVL4100S', 'https://www.elgiganten.dk/product/husholdning/kokkenudstyr/kokkenmaskiner/KVL4100S/kenwood-chef-xl-kokkenmaskine-kvl4100s-solv-tank-testvinder?utm_id=91g3i1&utm_source=partnerads&utm_medium=affiliate&utm_campaign=b2c-loc-partnerads-running&utm_content=all'],
    ['Gavekort til wellness ophold', ''],
    ['Gavekort til gourmetophold', ''],
    ['Gavekort til slotsophold', ''],
    ['Træningsbænk - skrå - 300 kg', 'https://shop.getbig.dk/semi-pro-skraabaenk-ms-l101'],
    ['Gavekort til træningsudstyr ved LC Gear', ''],
    ['Gavekort til træningsudstyr ved Rogue Europe', ''],
    ["Chef's Choice CC-1520 knivsliber", 'https://www.skousen.dk/koekkenudstyr/koekkenudstyr/knivsliber%20/product/chef-s-choice-1520/?utm_source=adtraction&utm_medium=affiliate&utm_campaign=Content&utm_campaign=1251558299&at_gd=1BC8BB0451B9D1036763767671C76203C019F9DD'],
    ['DeLonghi Elkedel Active Line', 'https://www.proshop.dk/Elkedel/DeLonghi-Elkedel-Active-Line-Intens-sort-2000-W/2711780?paid=26990&pacid=609e72c0481eb4.31338448&utm_source=partner-ads&utm_medium=cpc&utm_campaign=26990'],
    ['Luigi Bormioli Aero hvidvinsglas 32,5 cl.', 'https://www.imerco.dk/luigi-bormioli-aero-hvidvinsglas-6-stk?id=100325648'],
    ['Luigi Bormioli Aero rødvinsglas 48 cl', 'https://www.imerco.dk/luigi-bormioli-aero-roedvinsglas-6-stk?id=100325646'],
    ['Luigi Bormioli Aero Vandglas', 'https://www.imerco.dk/luigi-bormioli-aero-vandglas-6-stk?id=100325650']
])

export {titleText, contactText, moreText, lessText, listOfWishes};