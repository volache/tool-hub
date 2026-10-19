// One brick icon per tool, designed from what each tool does and how it looks (see brick-icons.js for the format).
// Each uses its own tool's colour as 'main', and borrows a small detail from the tool's own page.
export const ICON_SPECS={
  // Assetra: coral and three pills (coral, blue, green) in its page; "every asset has a clear place to be" -> a cabinet of labelled drawers.
  assetra:{color:'#e5705a',parts:[
    ['box',0,0,0,2,2.3,1,'main'],
    ['box',0,.7,.55,1.7,.58,.12,'face'],['box',0,0,.55,1.7,.58,.12,'face'],['box',0,-.7,.55,1.7,.58,.12,'face'],
    ['box',0,.7,.64,.7,.14,.1,'blue'],['box',0,0,.64,.7,.14,.1,'green'],['box',0,-.7,.64,.7,.14,.1,'gold'],
    ['box',-.75,-1.2,0,.35,.1,.8,'dark'],['box',.75,-1.2,0,.35,.1,.8,'dark'],
    ['stud',-.5,1.21,0,.9],['stud',.5,1.21,0,.9],
    ['box',1.08,.55,.25,.1,.6,.42,'gold']
  ]},
  // Consump: indigo, a box icon beside its name; stock in and out, issuing supplies -> a shopping cart loaded with supplies.
  consump:{color:'#4f46e5',parts:[
    ['box',0,-.1,0,1.9,.12,1.1,'main'],
    ['box',0,.3,.55,1.9,.8,.1,'main'],['box',0,.3,-.55,1.9,.8,.1,'main'],
    ['box',-.95,.3,0,.1,.8,1.1,'main'],['box',.95,.3,0,.1,.8,1.1,'main'],
    ['box',-.4,.4,0,.55,.6,.55,'gold'],['box',.3,.55,.05,.5,.9,.45,'face'],['tube',-.55,.9,-.15,.16,.8,.16,'red'],['tube',.7,.85,.2,.16,.7,.16,'teal'],
    ['box',-1.1,.65,-.45,.12,.9,.12,'silver',0,0,.25],['box',-1.1,.65,.45,.12,.9,.12,'silver',0,0,.25],['box',-1.3,1.1,0,.16,.16,1.1,'silver'],
    ['box',-.7,-.25,.5,.1,.25,.1,'silver'],['box',.7,-.25,.5,.1,.25,.1,'silver'],['box',-.7,-.25,-.5,.1,.25,.1,'silver'],['box',.7,-.25,-.5,.1,.25,.1,'silver'],
    ['tube',-.7,-.45,.58,.4,.14,.4,'ink',1.5708],['tube',.7,-.45,.58,.4,.14,.4,'ink',1.5708],['tube',-.7,-.45,-.58,.4,.14,.4,'ink',1.5708],['tube',.7,-.45,-.58,.4,.14,.4,'ink',1.5708],
    ['stud',-.5,.76,.55,.8],['stud',.5,.76,.55,.8]
  ]},
  // Library: a cream and sage page with butter-yellow buttons and a sparkle in its title -> a stack of books, a ribbon and a star.
  library:{color:'#7fa17a',parts:[
    ['box',0,-.85,0,2.3,.5,1.5,'main'],['box',.1,-.85,0,2.1,.34,1.56,'face'],
    ['box',-.1,-.35,0,2,.46,1.35,'gold'],['box',0,-.35,0,1.85,.3,1.41,'face'],
    ['box',.1,.1,0,1.7,.44,1.2,'dark'],['box',.18,.1,0,1.55,.28,1.26,'face'],
    ['box',.62,-.3,.74,.14,.75,.06,'coral'],
    ['box',.1,.82,0,.5,.5,.2,'gold'],['box',.1,.82,0,.5,.5,.2,'gold',0,0,.785],
    ['stud',-.5,.38,.2,.8],['stud',.1,.38,-.2,.8]
  ]},
  // Directory: names, phone numbers, group filter and printed lists -> an address book with index tabs and a contact on the cover.
  directory:{color:'#2f6fdd',parts:[
    ['box',-.1,0,0,1.9,2.4,.5,'main'],['box',.95,0,0,.2,2.2,.42,'face'],
    ['box',1.15,.7,0,.28,.38,.3,'red'],['box',1.15,.05,0,.28,.38,.3,'gold'],['box',1.15,-.6,0,.28,.38,.3,'green'],
    ['tube',-.1,.55,.3,.62,.1,.62,'face',1.5708],['box',-.1,-.12,.28,1.1,.55,.1,'face'],
    ['box',-.1,-.78,.28,1.2,.12,.08,'face'],['box',-.1,-1.0,.28,.9,.12,.08,'face'],
    ['stud',-.5,1.26,0,.8],['stud',.2,1.26,0,.8]
  ]},
  // PassVault: a blue card with a single focused form -> a padlock with a keyhole.
  passvault:{color:'#2b7de0',parts:[
    ['box',0,-.4,0,2,1.5,.9,'main'],
    ['box',-.55,.8,0,.3,.9,.4,'silver'],['box',.55,.8,0,.3,.9,.4,'silver'],['box',0,1.1,0,1.4,.3,.4,'silver'],
    ['tube',0,-.2,.5,.85,.08,.85,'face',1.5708],['tube',0,-.12,.55,.3,.08,.3,'ink',1.5708],['box',0,-.4,.55,.14,.45,.08,'ink'],
    ['stud',-.85,.41,0,.7],['stud',.85,.41,0,.7]
  ]},
  // Huoban: teal, "team duty rosters and stock" -> a roster board with a coloured shift grid and two teammates standing in front.
  huoban:{color:'#0d9488',parts:[
    ['box',0,.15,0,2.5,1.9,.4,'main'],['box',0,.9,.22,2.4,.4,.08,'dark'],
    ['box',-.7,.35,.24,.55,.36,.07,'face'],['box',0,.35,.24,.55,.36,.07,'gold'],['box',.7,.35,.24,.55,.36,.07,'face'],
    ['box',-.7,-.15,.24,.55,.36,.07,'face'],['box',0,-.15,.24,.55,.36,.07,'face'],['box',.7,-.15,.24,.55,.36,.07,'coral'],
    ['box',-.7,-.65,.24,.55,.36,.07,'gold'],['box',0,-.65,.24,.55,.36,.07,'face'],['box',.7,-.65,.24,.55,.36,.07,'face'],
    ['box',-.8,-.9,.7,.4,.3,.3,'ink'],['box',-.8,-.5,.7,.5,.55,.32,'coral'],['tube',-.8,-.05,.7,.4,.28,.4,'gold'],['stud',-.8,.12,.7,.5],
    ['box',.8,-.9,.7,.4,.3,.3,'ink'],['box',.8,-.5,.7,.5,.55,.32,'blue'],['tube',.8,-.05,.7,.4,.28,.4,'gold'],['stud',.8,.12,.7,.5],
    ['stud',-.7,1.16,0,.9],['stud',.7,1.16,0,.9]
  ]},
  // Rizhi: parchment page, a big dark-green date, red and blue columns for do and avoid -> a tear-off calendar showing the character for "day".
  rizhi:{color:'#2f6b3a',parts:[
    ['box',.1,-.1,-.3,2.1,2.3,.3,'dark'],
    ['box',0,-.15,0,2.1,2.2,.45,'face'],['box',0,.85,.06,2.1,.5,.55,'main'],
    ['tube',-.55,1.2,0,.2,.5,.2,'ink'],['tube',.55,1.2,0,.2,.5,.2,'ink'],
    ['box',-.3,-.35,.26,.2,1.15,.07,'main'],['box',.3,-.35,.26,.2,1.15,.07,'main'],
    ['box',0,.15,.26,.8,.2,.07,'main'],['box',0,-.85,.26,.8,.2,.07,'main'],['box',0,-.35,.26,.5,.16,.07,'main'],
    ['box',-.78,-1.0,.26,.3,.3,.07,'red'],['box',.78,-1.0,.26,.3,.3,.07,'blue']
  ]},
  // Case summary: no page to look at yet, so it follows the name -> a case folder with papers, a yellow summary note, a magnifier and a pen.
  casefile:{color:'#d9822b',parts:[
    ['box',0,-.1,-.15,2.3,1.9,.3,'dark'],['box',-.6,.98,-.15,.9,.25,.3,'dark'],
    ['box',-.1,.2,0,1.9,1.9,.1,'face'],['box',.1,.3,.08,1.9,1.9,.1,'white'],
    ['box',0,.9,.15,1.2,.1,.05,'silver'],['box',-.1,.65,.15,1,.1,.05,'silver'],
    ['box',0,-.4,.3,2.3,1.35,.3,'main'],
    ['box',.5,-.3,.5,.9,.8,.08,'gold',0,0,-.08],
    ['box',.5,-.12,.56,.6,.08,.05,'ink'],['box',.45,-.32,.56,.5,.08,.05,'ink'],['box',.4,-.52,.56,.4,.08,.05,'ink'],
    ['ring',-.65,-.35,.5,.28,.07,0,'face'],['box',-.4,-.65,.5,.34,.08,.08,'face',0,0,.78],
    // a pen lying across the note: body, nib and cap along one tilted axis
    ['tube',.75,-.15,.66,.16,1.1,.16,'blue',0,0,-.9],['tube',.233,-.56,.66,.1,.22,.1,'ink',0,0,-.9],['tube',1.26,.25,.66,.18,.2,.18,'gold',0,0,-.9]
  ]}
};
