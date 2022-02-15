module.exports = {
  up: async (queryInterface, Sequelize) =>queryInterface.bulkInsert('quests',  [
  {name:'Name', level: 2, experience: 1125, time: 4, slots: 1, description: "Description" },
  {name:'Name', level: 2, experience: 1125, time: 3, slots: 1, description: "Description" },
  {name:'Name', level: 3, experience: 1250, time: 4, slots: 1, description: "Description" },
  {name:'Name', level: 3, experience: 1250, time: 4, slots: 1, description: "Description" },
  {name:'Name', level: 4, experience: 1500, time: 4, slots: 1, description: "Description" },
  {name:'Name', level: 4, experience: 1500, time: 4, slots: 1, description: "Description" },
  {name:'Name', level: 5, experience: 1750, time: 4, slots: 1, description: "Description" },
  {name:'Name', level: 5, experience: 1750, time: 4, slots: 1, description: "Description" },
  {name:'Name', level: 6, experience: 2000, time: 4, slots: 1, description: "Description" },
  {name:'Name', level: 6, experience: 2000, time: 4, slots: 1, description: "Description" },
  {name:'Name', level: 7, experience: 2500, time: 4, slots: 1, description: "Description" },
  {name:'Name', level: 7, experience: 2500, time: 4, slots: 1, description: "Description" },
  {name:'Name', level: 8, experience: 3000, time: 4, slots: 1, description: "Description" },
  {name:'Name', level: 8, experience: 3000, time: 4, slots: 1, description: "Description" },
  {name:'Name', level: 9, experience: 3500, time: 4, slots: 1, description: "Description" },
  {name:'Name', level: 9, experience: 3500, time: 4, slots: 1, description: "Description" },
  {name:'Scouts', level: 1, experience: 1000, time: 2, slots: 1, description: "Please excuse me, adventurer. Your assistance is required. We know enemy scouts have managed to infiltrate our camp, they have stolen essential information which could compromise everything we've worked for. I need you to infiltrate their camp and tamper with the documents. Destroy the originals and get rid of the scouts, they might know too much. We'll show those cruel elves. If you don't mind, I'd like to come along. It's your choice though. Tread carefully hero, only a fool would underestimate the elves. If you can, kill as many of them as possible. We want to live in peace and safety. I cannot thank you enough for your help, I'll make sure to reward you greatly once you return. Make haste hero, but tread carefully." },
  { name:'Silverleaf', level: 3, experience: 1250, time: 1, slots: 1, description: "Excuse me, traveler. I'm glad you're here. My husband has fallen ill, he won't wake up no matter what I do. I believe we need to make him drink tea brewed from silverleaf, but they only grow higher up the mountain and I cannot leave my husband's side. Please, hero, gather a handful of silverleaf as quick as you can.Fortunately I have enough left to reward you well if you decide to help me." },
  { name:'Burned village', level: 4, experience: 1500, time: 4, slots: 3, description: "Please, traveler. I'm relieved to see you. They've burned down half our village with wicked sorcery. Hero, I don't know what foul magic they wield, but we cannot let them go unpunished. Please unleash justice upon those miserable lowlives. I had hoped I could you join, but unfortunately I cannot. But I doubt you'd need my help anyway. Be careful hero, don't underestimate those lowlives. Killing them all won't be needed of course, I'm sure your skills will do enough damage to them. I'm happy to say I'll be able to reward you handsomely for your troubles. Now hurry, champion, there's no time to waste. " },
  { name:'Seaweed', level: 5, experience: 1750, time: 6, slots: 1, description: "Pardon me, traveler. I need a favor of you. My brother is such an idiot, he keeps pulling pranks on me and I'm sick and tired of it. It's time for payback and I know the perfect way to do it. My brother is scared of forest spirits, they're not real, but I'm going to make him believe they are. I've made this wooden mask, but I need some more items to make it really scary. Would you mind collect some for me? I need rainbow fowl feathers, some glimmerweed to make the eyes glow and a whole lot of seaweed. Fortunately I have enough left to reward you well if you decide to help me." }
]),
  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('quests', null, {}),
 };
 