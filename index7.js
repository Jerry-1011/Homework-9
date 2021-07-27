const data = {
  type: 'champion',
  format: 'standAloneComplex',
  version: '11.14.1',
  data: {
    Aatrox: {
      id: 'Aatrox',
      key: '266',
      name: 'Aatrox',
      title: 'the Darkin Blade',
      image: {
        full: 'Aatrox.png',
        sprite: 'champion0.png',
        group: 'champion',
        x: 0,
        y: 0,
        w: 48,
        h: 48,
      },
      skins: [
        {
          id: '266000',
          num: 0,
          name: 'default',
          chromas: false,
        },
        {
          id: '266001',
          num: 1,
          name: 'Justicar Aatrox',
          chromas: false,
        },
        {
          id: '266002',
          num: 2,
          name: 'Mecha Aatrox',
          chromas: true,
        },
        {
          id: '266003',
          num: 3,
          name: 'Sea Hunter Aatrox',
          chromas: false,
        },
        {
          id: '266007',
          num: 7,
          name: 'Blood Moon Aatrox',
          chromas: false,
        },
        {
          id: '266008',
          num: 8,
          name: 'Blood Moon Aatrox Prestige Edition',
          chromas: false,
        },
        {
          id: '266009',
          num: 9,
          name: 'Victorious Aatrox',
          chromas: true,
        },
        {
          id: '266011',
          num: 11,
          name: 'Odyssey Aatrox',
          chromas: true,
        },
      ],
      tags: ['Fighter', 'Tank'],
      partype: 'Blood Well',
      info: {
        attack: 8,
        defense: 4,
        magic: 3,
        difficulty: 4,
      },
      stats: {
        hp: 580,
        hpperlevel: 90,
        mp: 0,
        mpperlevel: 0,
        movespeed: 345,
        armor: 38,
        armorperlevel: 3.25,
        spellblock: 32,
        spellblockperlevel: 1.25,
        attackrange: 175,
        hpregen: 3,
        hpregenperlevel: 1,
        mpregen: 0,
        mpregenperlevel: 0,
        crit: 0,
        critperlevel: 0,
        attackdamage: 60,
        attackdamageperlevel: 5,
        attackspeedperlevel: 2.5,
        attackspeed: 0.651,
      },
      spells: [
        {
          id: 'AatroxQ',
          name: 'The Darkin Blade',
          description:
            'Aatrox slams his greatsword down, dealing physical damage. He can swing three times, each with a different area of effect.',
          tooltip:
            'Aatrox slams his greatsword, dealing <physicalDamage>{{ qdamage }} physical damage</physicalDamage>. If they are hit on the edge, they are briefly <status>Knocked Up</status> and they take <physicalDamage>{{ qedgedamage }}</physicalDamage> instead. This Ability can be <recast>Recast</recast> twice, each one changing shape and dealing 25% more damage than the previous one.',
          leveltip: {
            label: ['Cooldown', 'Damage', 'Total AD Ratio'],
            effect: [
              '{{ cooldown }} -> {{ cooldownNL }}',
              '{{ qbasedamage }} -> {{ qbasedamageNL }}',
              '{{ qtotaladratio*100.000000 }}% -> {{ qtotaladrationl*100.000000 }}%',
            ],
          },
          maxrank: 5,
          cooldown: [14, 12, 10, 8, 6],
          cooldownBurn: '14/12/10/8/6',
          cost: [0, 0, 0, 0, 0],
          costBurn: '0',
          datavalues: {},
          effect: [
            null,
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
          ],
          effectBurn: [null, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
          vars: [],
          costType: 'No Cost',
          maxammo: '-1',
          range: [25000, 25000, 25000, 25000, 25000],
          rangeBurn: '25000',
          image: {
            full: 'AatroxQ.png',
            sprite: 'spell0.png',
            group: 'spell',
            x: 240,
            y: 48,
            w: 48,
            h: 48,
          },
          resource: 'No Cost',
        },
        {
          id: 'AatroxW',
          name: 'Infernal Chains',
          description:
            'Aatrox smashes the ground, dealing damage to the first enemy hit. Champions and large monsters have to leave the impact area quickly or they will be dragged to the center and take the damage again.',
          tooltip:
            'Aatrox fires a chain, <status>Slowing</status> the first enemy hit by {{ wslowpercentage*-100 }}% for {{ wslowduration }} seconds and dealing <physicalDamage>{{ wdamage }} physical damage</physicalDamage>. Champions and large jungle monsters have {{ wslowduration }} seconds to leave the impact area or be <status>Pulled</status> back to the center and damaged again for the same amount.',
          leveltip: {
            label: ['Cooldown', 'Damage'],
            effect: [
              '{{ cooldown }} -> {{ cooldownNL }}',
              '{{ wbasedamage }} -> {{ wbasedamageNL }}',
            ],
          },
          maxrank: 5,
          cooldown: [26, 23, 20, 17, 14],
          cooldownBurn: '26/23/20/17/14',
          cost: [0, 0, 0, 0, 0],
          costBurn: '0',
          datavalues: {},
          effect: [
            null,
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
          ],
          effectBurn: [null, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
          vars: [],
          costType: 'No Cost',
          maxammo: '-1',
          range: [825, 825, 825, 825, 825],
          rangeBurn: '825',
          image: {
            full: 'AatroxW.png',
            sprite: 'spell0.png',
            group: 'spell',
            x: 288,
            y: 48,
            w: 48,
            h: 48,
          },
          resource: 'No Cost',
        },
        {
          id: 'AatroxE',
          name: 'Umbral Dash',
          description:
            'Passively, Aatrox heals when damaging enemy champions. On activation, he dashes in a direction.',
          tooltip:
            '<spellPassive>Passive:</spellPassive> Aatrox gains <lifeSteal>{{ espellvamp }}% Omnivamp</lifeSteal> against champions, increased to <lifeSteal>{{ espellvampempowered }}% Omnivamp</lifeSteal> during <keywordMajor>World Ender</keywordMajor>.<br /><br /><spellActive>Active:</spellActive> Aatrox dashes. He can use this Ability while winding up his other Abilities.',
          leveltip: {
            label: ['Cooldown', 'Healing %', 'Healing % during World Ender'],
            effect: [
              '{{ cooldown }} -> {{ cooldownNL }}',
              '{{ espellvamp }}% -> {{ espellvampNL }}%',
              '{{ espellvampempowered }}% -> {{ espellvampempoweredNL }}%',
            ],
          },
          maxrank: 5,
          cooldown: [9, 8, 7, 6, 5],
          cooldownBurn: '9/8/7/6/5',
          cost: [0, 0, 0, 0, 0],
          costBurn: '0',
          datavalues: {},
          effect: [
            null,
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
          ],
          effectBurn: [null, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
          vars: [],
          costType: 'No Cost',
          maxammo: '1',
          range: [25000, 25000, 25000, 25000, 25000],
          rangeBurn: '25000',
          image: {
            full: 'AatroxE.png',
            sprite: 'spell0.png',
            group: 'spell',
            x: 336,
            y: 48,
            w: 48,
            h: 48,
          },
          resource: 'No Cost',
        },
        {
          id: 'AatroxR',
          name: 'World Ender',
          description:
            'Aatrox unleashes his demonic form, fearing nearby enemy minions and gaining attack damage, increased healing, and movement speed. If he gets a takedown, this effect is extended.',
          tooltip:
            'Aatrox reveals his true demonic form, <status>Fearing</status> nearby minions for {{ rminionfearduration }} seconds and gaining <speed>{{ rmovementspeedbonus*100 }}% Move Speed</speed> decaying over {{ rduration }} seconds. He also gains <scaleAD>{{ rtotaladamp*100 }}% Attack Damage</scaleAD> and increases <healing>self-healing by {{ rhealingamp*100 }}%</healing> for the duration.<br /><br />Champion takedowns extend the duration of this effect by {{ rextension }} seconds and refresh the <speed>Move Speed</speed> effect.',
          leveltip: {
            label: [
              'Total Attack Damage Increase',
              'Healing Increase',
              'Move Speed',
              'Cooldown',
            ],
            effect: [
              '{{ rtotaladamp*100.000000 }}% -> {{ rtotaladampnl*100.000000 }}%',
              '{{ rhealingamp*100.000000 }}% -> {{ rhealingampnl*100.000000 }}%',
              '{{ rmovementspeedbonus*100.000000 }}% -> {{ rmovementspeedbonusnl*100.000000 }}%',
              '{{ cooldown }} -> {{ cooldownNL }}',
            ],
          },
          maxrank: 3,
          cooldown: [120, 100, 80],
          cooldownBurn: '120/100/80',
          cost: [0, 0, 0],
          costBurn: '0',
          datavalues: {},
          effect: [
            null,
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
          ],
          effectBurn: [null, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
          vars: [],
          costType: 'No Cost',
          maxammo: '-1',
          range: [25000, 25000, 25000],
          rangeBurn: '25000',
          image: {
            full: 'AatroxR.png',
            sprite: 'spell0.png',
            group: 'spell',
            x: 384,
            y: 48,
            w: 48,
            h: 48,
          },
          resource: 'No Cost',
        },
      ],
      passive: {
        name: 'Deathbringer Stance',
        description:
          "Periodically, Aatrox's next basic attack deals bonus <physicalDamage>physical damage</physicalDamage> and heals him, based on the target's max health. ",
        image: {
          full: 'Aatrox_Passive.png',
          sprite: 'passive0.png',
          group: 'passive',
          x: 0,
          y: 0,
          w: 48,
          h: 48,
        },
      },
      recommended: [],
    },
  },
};

/*
  
  To deal with arrays:
  
  .filter()  - filter with a certain trait
  .map() - break down and return the array, you can run a function on each item
  .reduce() - combine all items into 1 under a function
  .forEach() - iterate through your array
   
  for loops - iterate through your array with a starting and ending index (i)
  
  .length - the size of your array
  .join() - put together all items in an array into a string with a delimiter
  .split() - break down a string into array items
  .splice() - remove item from array at an index
  .push() - put new item to the end of array
  .slice() - slice off a number of items from array with start and end
  .includes() - returns true if something is found within the array
  .indexOf() - returns the index of what you're looking for
  
  
  To deal with objects
  
  Object.keys()
  Object.values()
  Object.entries()
  
  const { key, anotherKey } = object;
  
  */

// 1. Create a 'skins' list, and assign it to Aatrox's original skins list
/*
  [
      {
      "id": "266000",
      "num": 0,
      "name": "default",
      "chromas": false
      },
      {
      "id": "266001",
      "num": 1,
      "name": "Justicar Aatrox",
      "chromas": false
      },
      {
      "id": "266002",
      "num": 2,
      "name": "Mecha Aatrox",
      "chromas": true
      }
  ]
  */
const skins = data.data.Aatrox.skins;

// 2. From the skins list, I need an array of skin names, just the names.
// ['Mecha Aatrox', 'Justicar Aatrox']

// 3. From the skins list, I need a array of objects that looks like this:
/*
  
  [
      {
          skinName: 'Mecha Aatrox',
          id: '266002'
      },
      {
          skinName: 'Blood Moon Aatrox',
          id: '266007'
      }
      ...
  ]
  
  */

// 4. From the skins list, I need an object that looks like this:

// push items into an object
// data['Mecha Aatrox'] = id

/*
  
  {
      'Mecha Aatrox': '266003',
      'Blood Moon Aatrox': '266007',
      ...
  }
  
  
  */

// 5. Show me a list of skins with just the names like Q#2. But only show me skins that have chromas.

const q1 = (champion) => {
  return champion.data.Aatrox.skins;
};
const q2 = (champion) => {
  const skins = q1(champion);
  const getName = (skin) => skin.name;
  return skins.map(getName);

  return skins.map((skin) => skin.name);
  // const result = [];
  // for (let i = 0; i < skins.length; i ++) {
  //     result.push(skins[i].name)
  // }
  // return result;
};

// I need a list of spell names like this: ['The Darkin Blade', 'World Ender', ...]
// data.data.Aatrox.spells

// data.data.Aatrox.spells.map(spell => spell.name)

const q3 = (champion) => {
  const skins = q1(champion);
  return skins.map((skin) => ({
    skinName: skin.name,
    id: skin.id,
    chromas: skin.chromas,
  }));
};

/*
  
  [
      {
          skinName: 'Mecha Aatrox',
          id: '266002',
          chromas: true,
      },
      {
          skinName: 'Blood Moon Aatrox',
          id: '266007',
          chromas: true,
      }
      ...
  ]
  
  */

const practice = (champion) => {
  return champion.data.Aatrox.spells.map((spell) => ({
    description: spell.description,
    leveltip: spell.leveltip,
  }));
};
/*
  spells array: map through the spells, and return spells that look like the following:
  [
      {
          description: 'No Cost',
          leveltip: ''
      },
    {
          costType: '',
          cooldown: ''
      },
      ...
  ]
  
  */

const q4 = (champion) => {
  const skins = q1(champion);
  const result = {};
  for (let i = 0; i < skins.length; i++) {
    result[skins[i].name] = skins[i].id;
  }
  return result;
};

const q5 = (champion) => {
  const skins = q1(champion);
  return skins.filter((skin) => skin.chromas === true).map((skin) => skin.name);
};

console.log(q1(data)); //
console.log(q2(data)); //
console.log(q3(data)); //
console.log(q4(data)); //
console.log(q5(data)); //

// Homework questions for week 9

// 1. Go through the list of spells, and return with list of modified spells that looks like the following:

/*

[
    {
          tooltip: "....",
          rangeBurn: "25000",
          imageName: "AatroxQ.png",
          costType: "No Cost"
    },
    {
          tooltip: "....",
          rangeBurn: "5000",
          imageName: "AatroxW.png",
          costType: "No Cost"
    },
]*/

const spell = (champion) => {
  return champion.data.data.Aatrox.spells
}; 
const q6 = (champion) => {
  const spell = spell(champion);
  return spells.map((spells) => ({
    tooltips: spells.tooltip,
    rangeBurns: spells.rangeBurn,
    costTypes: spells.costBurn,
  }))
};
console.log(q6(data));
//.map(v => ({tooltip,rangeBurn,costType})

//return spell.map(value => value.tooltip.rangeBurn.costType)


