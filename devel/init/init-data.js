// This file is a fucking mess.

microdb = require('nodejs-microdb');

var gamedata = new microdb({'file':'gamedata.db', 'savetime': 0});
var darkhorse = new microdb({'file':'darkhorse.db', 'datatype': 0, 'maxrec': 12});
var patrons = new microdb({'file': 'patrons.db', 'datatype': 0, 'maxrec': 12});
var daily = new microdb({'file':'dailyhap.db', 'datatype': 0, 'maxrec': 12});
var flowers = new microdb({'file':'flowers.db', 'datatype':0, 'maxrec':10});
var dirt = new microdb({'file':'dirt.db', 'datatype':0, 'maxrec':10});

dirt.add(['Jack the `9Ripper', '`1Mighty quiet around here...']);
dirt.flush();

flowers.add(['`%Fairy Tisha', '`0Oooh!  I love flowers!  And I love to kiss.']);
flowers.add(['`%Fairy Nolan', '`0Yes!  I\'m glad humans can\'t read our flowers!']);
flowers.add(['`%Fairy Glimmer', '`0Agreed.  They are all big dumb animals.']);
flowers.flush();


// Init DBasees.

bigdata = {};

bigdata.classes = [ "empty", "Death Knight", "Mystical", "Thief" ]

weapon      = [ "None", "Stick", "Dagger", "Short Sword", "Long Sword", "Huge Axe", "Bone Cruncher", "Twin Swords", "Power Axe", "Able's Sword", "Wan's Weapon", "Spear Of Gold", "Crystal Shard", "Niras's Teeth", "Blood Sword", "Death Sword" ]
weaponprice = [ 0, 200, 1000, 3000, 10000, 30000, 100000, 150000, 200000, 400000, 1000000, 4000000, 10000000, 40000000, 100000000, 400000000 ]
weaponstr   = [ 0, 5, 10, 20, 30, 40, 60, 80, 120, 180, 250, 350, 500, 800, 1200, 1800 ]
weaponnstr  = [ 0, 0, 0, 15, 22, 32, 44, 64, 99, 149, 224, 334, 334, 334, 334, 334 ]

bigdata.weapon = [];
for ( var x in weapon ) {
  bigdata.weapon.push({'name': weapon[x], 'price': weaponprice[x], 'strong': weaponstr[x], 'reqstrong': weaponnstr[x]});
}

armor      = [ "None", "Coat", "Heavy Coat", "Leather Vest", "Bronze Armour", "Iron Armour", "Graphite Armour", "Erdrick's Armour", "Armour of Death", "Able's Armour", "Full Body Armour", "Blood Armour", "Magic Protection", "Belar's Mail", "Golden Armour", "Armour Of Lore" ]
armorprice = [ 0, 200, 1000, 3000, 10000, 30000, 100000, 150000, 200000, 400000, 1000000, 4000000, 10000000, 40000000, 100000000, 400000000 ]
armordef   = [ 0, 1, 3, 10, 15, 25, 35, 50, 75, 100, 150, 225, 300, 400, 600, 1000 ]
armorndef  = [ 0, 0, 0, 2, 5, 10, 20, 35, 57, 92, 152, 232, 232, 232, 232, 232 ]

bigdata.armor = [];
for ( var x in armor ) {
  bigdata.armor.push({'name': armor[x], 'price': armorprice[x], 'def': armordef[x], 'reqdef': armorndef[x]});
}

bigdata.thebard = [ [['',''],[''],''],
  [['..."There once was a warrior, with a beard"...', '..."He had a power, yes XX was feared"...', '..."Nothing he did, could ever be wrong"...', '..."He was quick, and he was strong"...'],
    ['The song makes you feel powerful!', 'YOU RECEIVE THREE MORE FOREST FIGHTS FOR TODAY!'],
    'ffight = ffight + 3'],
  [['..."There once was a woman, of exceeding fame"...', '..."She had a power, XX was her name"...', '..."Nothing she did, could ever be wrong"...', '..."She was quick, and she was strong"...' ],
    ['The song makes you feel powerful!', 'YOU RECEIVE THREE MORE FOREST FIGHTS FOR TODAY!'],
    'ffight = ffight + 3'],
  [['..."Waiting in the forest, waiting for his prey"...', '..."XX didn\'t care what they would say"...', '..."He killed in the town, the lands"...', '..."He wanted evil\'s blood, on his hands"...', '..."A true man was XX, a warrior proud"...', '..."He voiced his opinions meekly, never very loud"...', '..."But he ain\'t no wimp, he took Violet to bed"...', '..."He\'s definately a man, at least that\'s what she said!"...' ],
    ['The song makes you glad you are male!', 'YOU RECEIVE TWO EXTRA FOREST FIGHTS!'],
    'ffight = ffight + 2'],
  [['..."This is the story, of a bard"...', '..."Stabbed in the hand, with a shard"...', '..."They said he\'d never play, but they would rue the day"...', '..."He practiced all the time, becoming good before long"...', '..."Able got his revenge, by proving them wrong"...' ],
    ['The song makes you feel sad, yet happy.', 'YOU RECEIVE TWO MORE FOREST FIGHTS FOR TODAY!' ],
    'ffight = ffight + 2'],
  [['..."Let me tell you the Legend, of the Red Dragon"...', '..."They said he was old, that his claws were saggin"...', '..."It\'s not so, don\'t be fooled"...', '..."He\'s alive and well, still killing where he ruled"...' ],
    ['The song makes you feel a strange wonder, an awakening..', 'YOU RECEIVE ONE MORE FOREST FIGHT FOR TODAY!'],
    'ffight = ffight + 1'],
  [['..."The children are missing, the children are gone"...', '..."They have no pillow to lay upon,"...', '..."The hopes of the people are starting to dim"...', '..."They are gone, because the Dragon has eaten them"...' ],
    ['Tears run down your face.  You swear you will avenge the children.', 'YOU RECEIVE AN EXTRA USER BATTLE FOR TODAY!'],
    'pfight = pfight + 1'],
  [['..."XX was a warrior, a man"...', '..."When he wants to do a thing, he can"...', '..."To live, to die, it\'s all the same"...', '..."But it is better to die, than live in shame"...' ],
    ['The song makes you feel your heritage.', 'YOUR HIT POINTS ARE MAXED OUT!' ],
    'hp = hpmax'],
  [['..."XX has a story, that must be told"...', '..."He is already a legend, and he ain\'t even old"...', '..."He can drink a river of blood and not burst"...', '..."He can swallow a desert and never thirst"...' ],
    ['The hero has inspired you, and in doing so, made you a better warrior.', 'YOUR HITPOINTS INCREASE BY ONE!'],
    'hpmax = hpmax + 1'],
  [['..."The Gods have powers, the Gods are just"...', '..."The Gods help us people, when they must"...', '..."Gods can heal the sick, even the cancered"...', '..."Pray to the Gods, and you will be answered"...' ],
    ['You find yourself wishing for more money."', 'SOMEWHERE, MAGIC HAS HAPPENED!' ],
    'bank = bank * 2'],
  [['..."XX was a warrior, a queen"...', '..."She was a beauty, and she was mean"...', '..."She could melt a heart, at a glance"...', '..."And men would pay, to see her dance!"...' ],
    ['The song makes you feel pretty!', 'YOU RECEIVE A CHARM POINT!' ],
    'charm = charm + 1']
  ]

enemies = [[],
  [
    ['Small Thief', 'Small Dagger', 6, 9, 56, 2, 'You disembowel the little thieving menace!'],
    ['Rude Boy', 'Cudgel', 3, 7, 7, 3, 'You quietly watch as the very Rude Boy bleeds to death.'],
    ['Old Man', 'Cane', 5, 13, 73, 4, 'You finish him off, by tripping him with his own cane.'],
    ['Large Green Rat', 'Sharp Teeth', 3, 4, 32, 1, 'A well placed step ends this small rodents life.'],
    ['Wild Boar', 'Sharp Tusks', 10, 9, 58, 5, 'You impale the boar between the eyes!'],
    ['Ugly Old Hag', 'Garlic Breath', 6, 9, 109, 4, 'You emotionally crush the hag, by calling her ugly!'],
    ['Large Mosquito', 'Blood Sucker', 2, 3, 46, 2, 'With a sharp slap, you end the Mosquitos life.'],
    ['Bran The Warrior', 'Short Sword', 12, 15, 234, 10, 'After a hardy duel, Bran lies at your feet, dead.'],
    ['Evil Wretch', 'Finger Nail', 7, 12, 76, 3, 'With a swift boot to her head, you kill her.'],
    ['Small Bear', 'Claws', 9, 7, 154, 6, 'After a swift battle, you stand holding the Bears heart!'],
    ['Small Troll', 'Uglyness', 6, 14, 87, 5, 'This battle reminds you how of how much you hate trolls.']
  ],[
    ['Green Python', 'Dripping Fangs', 13, 17, 80, 6, 'You tie the mighty snake\'s carcass to a tree.'],
    ['Gath The Barbarian', 'Huge Spiked Club', 12, 13, 134, 9, 'You knock Gath down, ignoring his constant groaning.'],
    ['Evil Wood Nymph', 'Flirtatios Behavior', 15, 10, 160, 11, 'You shudder to think of what would have happened, had you given in.'],
    ['Fedrick The Limping Baboon', 'Scary Faces', 8, 23, 97, 6, 'Fredrick will never grunt in anyones face again.'],
    ['Wild Man', 'Hands', 13, 14, 134, 8, 'Pitting your wisdom against his brawn has one this battle.'],
    ['Brorandia The Viking', 'Hugely Spiked Mace', 21, 18, 330, 20, 'You consider this a message to her people, "STAY AWAY!".'],
    ['Huge Bald Man', 'Glare From Forehead', 19, 19, 311, 16, 'It wasn\'t even a close battle, you slaughtered him.'],
    ['Senile Senior Citizen', 'Crazy Ravings', 13, 11, 270, 13, 'You may have just knocked some sense into this old man.'],
    ['Membrain Man', 'Strange Ooze', 10, 16, 190, 11, 'The monstrosity has been slain.'],
    ['Bent River Dryad', 'Pouring Waterfall', 12, 16, 150, 9, 'You cannot resist thinking the Dryad is "All wet".'],
    ['Rock Man', 'Large Stones', 8, 27, 300, 12, 'You have shattered the Rock Mans head!']
  ], [
    ['Lazy Bum', 'Unwashed Body Odor', 19, 29, 380, 18, '"This was a bum deal" You think to yourself.'],
    ['Two Headed Rotwieler', 'Twin Barking', 18, 32, 384, 17, 'You have silenced the mutt, once and for all.'],
    ['Purple Monchichi', 'Continous Whining', 14, 29, 763, 23, 'You cant help but realize you have just killed a real loser.'],
    ['Bone', 'Terrible Smoke Smell', 27, 11, 432, 16, 'Now that you have killed Bone, maybe he will get a life..'],
    ['Red Neck', 'Awfull Country Slang', 19, 16, 563, 19, 'The dismembered body causes a churning in your stomach.'],
    ['Winged Demon Of Death', 'Red Glare', 42, 23, 830, 28, 'You cut off the Demons head, to be sure of its death.'],
    ['Black Owl', 'Hooked Beak', 28, 29, 711, 26, 'A well placed blow knocks the winged creature to the ground.'],
    ['Muscled Midget', 'Low Punch', 26, 19, 870, 32, 'You laugh as the small man falls to the ground.'],
    ['Headbanger Of The West', 'Ear Shattering Noises', 23, 27, 245, 43, 'You slay the rowdy noise maker and destroy his evil machines.'],
    ['Morbid Walker', 'Endless Walking', 28, 10, 764, 9, 'Even lying dead on its back, it is still walking.'],
    ['Magical Evil Gnome', 'Spell Of Fire', 24, 25, 638, 28, 'The Gnome\'s small body is covered in a deep red blood.']
  ], [
    ['Death Dog', 'Teeth', 36, 52, 1150, 36, 'You rejoice as the dog wimpers for the very last time.'],
    ['Weak Orc', 'Spiked Club', 27, 32, 900, 25, 'A solid blow removes the Orcs head!'],
    ['Dark Elf', 'Small bow', 43, 57, 1070, 33, 'The Elf falls at your feet, dead.'],
    ['Evil Hobbit', 'Smoking Pipe', 35, 95, 1240, 46, 'The Hobbit will never bother anyone again!'],
    ['Short Goblin', 'Short Sword', 34, 45, 768, 24, 'A quick lunge renders him dead!'],
    ['Huge Black Bear', 'Razor Claws', 67, 48, 1765, 76, 'You bearly beat the Huge Bear...'],
    ['Rabid Wolf', 'Deathlock Fangs', 45, 39, 1400, 43, 'You pull the dogs lifeless body off you.'],
    ['Young Wizard', 'Weak Magic', 64, 35, 1754, 64, 'This Wizard will never cast another spell!'],
    ['Mud Man', 'Mud Balls', 56, 65, 870, 43, 'You chop up the Mud Man into sushi!'],
    ['Death Jester', 'Horrible Jokes', 34, 46, 1343, 32, 'You feel no pity for the Jester, his jokes being as bad as they were.'],
    ['Rock Man', 'Large Stones', 87, 54, 1754, 76, 'You have shattered the Rock Mans head!']
  ], [
    ['Pandion Knight', 'Orkos Broadsword', 64, 59, 3100, 98, 'You are elated in the knowledge that you both fought honorably.'],
    ['Jabba', 'Whiplashing Tail', 61, 198, 2384, 137, 'The fat thing falls down, never to squirm again.'],
    ['Manoken Sloth', 'Dripping Paws', 54, 69, 2452, 97, 'You have cut him down, spraying a neaby tree with blood.'],
    ['Trojan Warrior', 'Twin Swords', 73, 87, 3432, 154, 'You watch, as the ants claim his body.'],
    ['Misfit The Ugly', 'Strange Ideas', 75, 89, 2563, 120, 'You cut him cleanly down the middle, in a masterfull stroke.'],
    ['George Of The Jungle', 'Echoing Screams', 56, 43, 2230, 128, 'You thought the story of George was a myth, until now.'],
    ['Silent Death', 'Pale Smoke', 113, 98, 4711, 230, 'Instead of spilling blood, the creature seems filled with only air.'],
    ['Bald Medusa', 'Glare Of Stone', 78, 120, 4000, 256, 'You are lucky you didnt look at her... Man was she ugly!'],
    ['Black Alligator', 'Extra Sharp Teeth', 65, 65, 3245, 123, 'With a single stroke, you sever the creatures head right off.'],
    ['Clancy, Son Of Emporor Len', 'Spiked Bull Whip', 52, 224, 4764, 324, 'Its a pity so many new warriors get so proud.'],
    ['Black Sorcerer', 'Spell Of Lightning', 86, 25, 2838, 154, 'Thats the last spell this Sorcerer will ever cast!']
  ], [
    ['Iron Warrior', '3 Iron', 100, 253, 6542, 364, 'You have bent the Iron warriors Iron!'],
    ['Black Soul', 'Black Candle', 112, 432, 5865, 432, 'You have released the black soul.'],
    ['Gold Man', 'Rock Arm', 86, 354, 8964, 493, 'You kick the body of the Gold man to reveal some change..'],
    ['Screaming Zombie', 'Gaping Mouth Full Of Teeth', 98, 286, 5322, 354, 'The battle has rendered the zombie even more unatractive then he was.'],
    ['Satans Helper', 'Pack Of Lies', 112, 165, 7543, 453, 'Apparently you have seen through the Devils evil tricks'],
    ['Wild Stallion', 'Hoofs', 78, 245, 4643, 532, 'You only wish you could have spared the animals life.'],
    ['Belar', 'Fists Of Rage', 120, 352, 9432, 565, 'Not even Belar can stop you!'],
    ['Empty Armour', 'Cutting Wind', 67, 390, 6431, 432, 'The whole battle leaves you with a strange chill.'],
    ['Raging Lion', 'Teeth And Claws', 98, 274, 3643, 365, 'You rip the jaw bone off the magnificient animal!'],
    ['Huge Stone Warrior', 'Rock Fist', 112, 232, 4942, 543, 'There is nothing left of the stone warrior, except a few pebbles.'],
    ['Magical Evil Gnome', 'Spell Of Fire', 89, 234, 6384, 321, 'The Gnomes small body is covered in a deep red blood.']
  ], [
    ['Emporer Len', 'Lightning Bull Whip', 210, 432, 12043, 764, 'His last words were.. "I have failed to avenge my son."'],
    ['Night Hawk', 'Blood Red Talons', 220, 675, 10433, 686, 'Your last swing pulls the bird out of the air, landing him at your feet'],
    ['Charging Rhinoceros', 'Rather Large Horn', 187, 454, 9853, 654, 'You finally fell the huge beast, not without a few scratches.'],
    ['Goblin Pygmy', 'Death Squeeze', 165, 576, 13252, 754, 'You laugh at the little Goblin\'s puny attack.'],
    ['Goliath', 'Six Fingered Fist', 243, 343, 14322, 898, 'Now you know how David felt...'],
    ['Angry Liontaur', 'Arms And Teeth', 187, 495, 13259, 753, 'You have laid this mythical beast to rest.'],
    ['Fallen Angel', 'Throwing Halos', 154, 654, 12339, 483, 'You slay the Angel, then watch as it gets sucked down into the ground.'],
    ['Wicked Wombat', 'The Dark Wombats Curse', 198, 464, 13283, 786, 'It\'s hard to believe a little wombat like that could be so much trouble'],
    ['Massive Dinosaur', 'Gaping Jaws', 200, 986, 16753, 1204, 'The earth shakes as the huge beast falls to the ground.'],
    ['Swiss Butcher', 'Meat Cleaver', 230, 453, 8363, 532, 'You\'re glad you won...You really didn\'t want the haircut..'],
    ['Death Gnome', 'Touch Of Death', 270, 232, 10000, 654, 'You watch as the animals pick away at his flesh.']
  ], [
    ['Screeching Witch', 'Spell Of Ice', 300, 674, 19753, 2283, 'You have silenced the witch\'s infernal screeching.'],
    ['Rundorig', 'Poison Claws', 330, 675, 17853, 2748, 'Rundorig, once your friend, now lays dead before you.'],
    ['Wheeler', 'Annoying Laugh', 250, 786, 23433, 1980, 'You rip the wheeler\'s wheels clean off!'],
    ['Death Knight', 'Huge Silver Sword', 287, 674, 21923, 4282, 'The Death knight finally falls, not only wounded, but dead.'],
    ['Werewolf', 'Fangs', 230, 543, 19474, 3853, 'You have slaughtered the Werewolf. You didn\'t even need a silver bullet'],
    ['Fire Ork', 'FireBall', 267, 674, 24933, 3942, 'You have put out this Fire Orks flame!'],
    ['Wans Beast', 'Crushing Embrace', 193, 1243, 17141, 2432, 'The hairy thing has finally stopped moving.'],
    ['Lord Mathese', 'Fencing Sword', 245, 875, 24935, 2422, 'You have wiped the sneer off his face once and for all.'],
    ['King Vidion', 'Long Sword Of Death', 400, 1243, 28575, 6764, 'You feel lucky to have lived, things could have gone sour..'],
    ['Baby Dragon', 'Dragon Smoke', 176, 2322, 25863, 3675, 'This Baby Dragon will never grow up.'],
    ['Death Gnome', 'Touch Of Death', 356, 870, 31638, 2300, 'You watch as the animals pick away at his flesh.']
  ], [
    ['Pink Elephant', 'Stomping', 434, 1232, 33844, 7843, 'You have witnessed the Pink Elephant...And you aren\'t even drunk!'],
    ['Gwendolens Nightmare', 'Dreams', 490, 764, 35846, 8232, 'This is the first Nightmare you have put to sleep.'],
    ['Flying Cobra', 'Poison Fangs', 400, 1123, 37694, 8433, 'The creature falls to the ground with a sickening thud.'],
    ['Rentakis Pet', 'Gaping Maw', 556, 987, 37584, 9854, 'You vow to find Rentaki and tell him what you think about his new pet.'],
    ['Ernest Brown', 'Knee', 432, 2488, 34833, 9754, 'Ernest has finally learned his lesson it seems.'],
    ['Scallian Rap', 'Way Of Hurting People', 601, 788, 22430, 6784, 'Scallians dead...Looks like you took out the trash...'],
    ['Apeman', 'Hairy Hands', 498, 1283, 38955, 7202, 'The battle is over...Nothing is left but blood and hair.'],
    ['Hemo-Glob', 'Weak Insults', 212, 1232, 27853, 4432, 'The battle is over.. And you really didn\'t find him particularly scary.'],
    ['FrankenMoose', 'Butting Head', 455, 1221, 31221, 5433, 'That Moose was a perversion of nature!'],
    ['Earth Shaker', 'Earthquake', 767, 985, 37565, 7432, 'The battle is over...And it looks like you shook him up...'],
    ['Gollums Wrath', 'Ring Of Invisibility', 621, 2344, 42533, 13544, 'Gollums ring apparently wasn\'t powerfull enough.']
  ], [
    ['Toraks Son, Korak', 'Sword Of Lightning', 921, 1384, 46575, 13877, 'You have slain the son of a God! You ARE great!'],
    ['Brand The Wanderer', 'Fighting Quarter Staff', 643, 2788, 38755, 13744, 'Brand will wander no more.'],
    ['The Grimest Reaper', 'White Sickle', 878, 1674, 39844, 14237, 'You have killed that which was already dead. Odd.'],
    ['Death Dealer', 'Stare Of Paralization', 765, 1764, 47333, 13877, 'The Death Dealer has been has been delt his last hand.'],
    ['Tiger Of The Deep Jungle', 'Eye Of The Tiger', 587, 3101, 43933, 9766, 'The Tiger\'s cubs weep over their dead mother.'],
    ['Sweet Looking Little Girl', 'Demon Strike', 989, 1232, 52322, 14534, 'If it wasn\'t for her manners, you might have got along with her.'],
    ['Floating Evil Eye', 'Evil Stare', 776, 2232, 43233, 13455, 'You really didn\'t like the look of that Eye...'],
    ['Slock', 'Swamp Slime', 744, 1675, 56444, 14333, 'Walking away fromm the battle, you nearly slip on the thing\'s slime.'],
    ['Adult Gold Dragon', 'Dragon Fire', 565, 3222, 56444, 15364, 'He was strong, but you were stronger.'],
    ['Kill Joy', 'Terrible Stench', 988, 3222, 168844, 25766, 'Kill Joy has fallen, and can\'t get up.'],
    ['Black Sorcerer', 'Spell Of Lightning', 86, 25, 2838, 187, 'Thats the last spell this Sorcerer will ever cast!']
  ], [
    ['Gorma The Leper', 'Contagous Desease', 1132, 2766, 168774, 26333, 'It looks like the lepers fighting stratagy has fallen apart..'],
    ['Shogun Warrior', 'Japanese Nortaki', 1143, 3878, 165433, 26555, 'He was tough, but not nearly tough enough.'],
    ['Apparently Weak Old Woman', '*GODS HAMMER*', 1543, 1878, 173522, 37762, 'You pull back the old womans hood, to reveal an eyeless skull.'],
    ['Ables Creature', 'Bear Hug', 985, 2455, 176775, 28222, 'That was a mighty creature. Created by a mighty man.'],
    ['White Bear Of Lore', 'Snow Of Death', 1344, 1875, 65544, 16775, 'The White Bear Of Lore DOES exist you\'ve found. Too bad it\'s now dead.'],
    ['Mountain', 'Landslide', 1544, 1284, 186454, 38774, 'You have knocked the mountain to the ground. Now it IS the ground.'],
    ['Sheena The Shapechanger', 'Deadly Illusions', 1463, 1898, 165755, 26655, 'Sheena is now a quivering mass of flesh. Her last shapechange.'],
    ['ShadowStormWarrior', 'Mystical Storm', 1655, 2767, 162445, 26181, 'The storm is over, and the sunshine greets you as the victor.'],
    ['Madman', 'Chant Of Insanity', 1265, 1764, 149564, 25665, 'Madman must have been mad to think he could beat you!'],
    ['Vegetable Creature', 'Pickled Cabbage', 111, 172, 4838, 2187, 'For once you finished off your greens...'],
    ['Cyclops Warrior', 'Fire Eye', 1744, 2899, 204000, 49299, 'The dead Cyclop\'s one eye stares at you blankly.']
  ], [
    ['Corinthian Giant', 'De-rooted Tree', 2400, 2544, 336643, 60333, 'You hope the giant has brothers, more sport for you.'],
    ['The Screaming Eunich', 'High Pitched Voice', 1488, 2877, 197888, 78884, 'If it wasn\'t for his ugly features, you thought he looked female.'],
    ['Black Warlock', 'Satanic Choruses', 1366, 2767, 168483, 58989, 'You have slain Satan\'s only son.'],
    ['Kal Torak', 'Cthrek Goru', 876, 6666, 447774, 94663, 'You have slain a God! You are the ultimate warrior!'],
    ['The Mighty Shadow', 'Shadow Axe', 1633, 2332, 176333, 51655, 'The mighty Shadow is now only a Shadow of his former self.'],
    ['Black Unicorn', 'Shredding Horn', 1899, 1587, 336693, 41738, 'You have felled the Unicorn, not the first, not the last.'],
    ['Mutated Black Widow', 'Venom Bite', 2575, 1276, 434370, 98993, 'A well placed stomp ends this Spider\'s life.'],
    ['Humongous Black Wyre', 'Death Talons', 1166, 3453, 653834, 76000, 'The Wyre\'s dead carcass covers the whole field!'],
    ['The Wizard Of Darkness', 'Chant Of Insanity', 1497, 1383, 224964, 39878, 'This Wizard of Darkness will never bother you again'],
    ['Great Ogre Of The North', 'Spiked Steel Mace', 1800, 2878, 524838, 112833, 'No one is going to call him The "Great" Ogre Of The North again.']
  ]]
  
bigdata.enemy = [];

for ( var lvl in enemies ) {
  if ( enemies[lvl].length > 0 ) {
    var thisArr = [];
    for ( var emy in enemies[lvl] ) {
      var thisemy = enemies[lvl][emy];
      thisArr.push({'name': thisemy[0], 'weapon': thisemy[1], 'hit': thisemy[2], 'hp': thisemy[3], 'winmsg': thisemy[6], 'exp': thisemy[5], 'gold': thisemy[4]});
    }
    bigdata.enemy.push(thisArr);
  } else {
    bigdata.enemy.push([]);
  }
}


masters = [[],
  [
    'Halder', 'Short Sword', 100,
    ['"Hi there.  Although I may not look muscular, I ain\'t all', 'that weak.  You cannot advance to another Master until you', 'can best me in battle.  I don\'t really have any advice', 'except wear a groin cup at all times.  I learned the hard', 'way."'],
    '"Gee, your muscles are getting bigger than mine...',
    'Belar!!!  You are truly a great warrior!',
    30, 15, 3
  ], [
    'Barak', 'Battle Axe', 400,
    ['"You are now level two, and a respected warrior.', 'Try talking to the Bartender, he will see you now.  He', 'is a worthy asset... Remember, your ultimate goal is', 'to reach Ultimate Warrior status, which is level twelve."'],
    '"You know, you are actually getting pretty good with that thing..."',
    'Children Of Mara!!!  You have bested me??!',
    45, 22, 6
  ], [
    'Aragorn', 'Twin Swords', 1000,
    ['"You are now level three, and you are actually becoming', 'well known in the realm.  I heard your name being mentioned', 'by Violet.... Ye Gods she\'s hot...."'],
    '"You have learned everything I can teach you."',
    'Torak\'s Eye!!!  You are a great warrior!',
    65, 32, 11
  ], [
    'Olodrin', 'Power Axe', 4000,
    ['"You are now level four.  But don\'t get cocky - There', 'are many in the realm that could kick your...  Nevermind,', 'I\'m just not good at being insperational."'],
    '"You\'re becoming a very skilled warrior."',
    'Ye Gods!!  You are a master warrior!',
    95, 44, 21
  ], [
    'Sandtiger', 'Blessed Sword', 10000,
    ['"You are now level five..Not bad...Not bad at all..', 'I am called Sandtiger - Because.. Actually I can\'t', 'remember why people call me that.  Oh - Don\'t pay attention"', 'to that stupid bartender - I could make a much better one.'],
    '"Gee - You really know how to handle your shaft!"',
    'Very impressive...Very VERY impressive.',
    145, 64, 36
  ], [
    'Sparhawk', 'Double Bladed Sword', 40000,
      ['"You are level six!  Vengeance is yours!', 'You can now beat up on all those young punks that made', 'fun of you when you were level 1.  This patch?  Oh - I', 'lost my eye when I fell on my sword after tripping', 'over a gopher.  If you tell anyone this, I\'ll hunt you', 'down.'],
    '"You\'re getting the hang of it now!"',
    'This Battle is yours...You have fought with honor.',
    220, 99, 58
  ], [
    'Atsuko Sensei', 'Huge Curved Blade', 100000,
    ['"Even in my country,  you would be considered a good', 'warrior.  But you have much to learn.  Remember to', 'always respect your teachers, for it is right."'],
    '"You are ready to be tested on the battle field!"',
    'Even though you beat me, I am proud of you.',
    345, 149, 93
  ], [
    'Aladdin', 'Shiny Lamp', 400000,
    ['"You are now level eight.  Remember, do not use your', 'great strength in bullying the other warriors.  Do not', 'be a braggart.  Be humble, and remember, honor is everything."' ],
    '"You REALLY know how to use your weapon!!!"',
    'I don\'t need a genie to see that you beat me, man!',
    530, 224, 153
  ], [
    'Prince Caspian', 'Flashing Rapier', 1000000,
    ['"You are now level nine.  You have traveled far on the', 'road of hardships,  but what doesn\'t kill you, only', 'makes you stronger.  Never stop fighting.' ],
    '"Something tells me you are as good as I am now.."',
    'Good show, chap!  Jolly good show!',
    780, 334, 233
  ], [
    'Gabdalf', 'Huge Fireballs', 4000000,
    ['"You are now level ten.. A true honor!', 'Do not stop now... You may be the one to rid the realm', 'of the Red Dragon yet...  Only two more levels to go', 'until you are the greatest warrior in the land."' ],
    '"You\'re becoming a very skilled warrior.',
    'Torak\'s Tooth!  You are great!', 
    1130, 484, 353
  ], [
    'Turgon', 'Ables Sword', 10000000,
    ['"I am Turgon, son.  The greatest warrior in the realm.', 'You are a great warrior, and if you best me, you must', 'find and kill the Red Dragon.  I have every faith in you."' ],
    '"You are truly the BEST warrior in the realm."',
    'You are a master warrior!',
    1680, 684, 503
  ]]

masterwin = [[],
  [10, 5, 2],
  [15, 7, 3],
  [20, 10, 5],
  [30, 12, 10],
  [50, 20, 15],
  [75, 35, 22],
  [125, 50, 35],
  [185, 75, 60],
  [250, 110, 80],
  [350, 150, 120],
  [550, 200, 150]]
  
bigdata.master = [];

for ( var lvl in masters ) {
  if ( masters[lvl].length > 0 ) {
    var mas = masters[lvl];
    var win = masterwin[lvl];
    bigdata.master.push({
      'name': mas[0], 'weapon': mas[1], 'needExp': mas[2], 'wisdom': mas[3], 'noFight': mas[4], 'yesFight': mas[5], 'hp': mas[6], 'strong': mas[7], 'def': mas[8],
      'winHP': win[0], 'winStrong': win[1], 'winDef': win[2]
    });
  } else {
    bigdata.master.push([]);
  }
}

bigdata.forestdie = [
  '`5"Damn, Damn, Damn!," `#`g`5 roars.',
  '`5"I would rather gargle razor blades then be beaten by you,`n `#`e`5 !," `#`g`5 screams.',
  '`5"How the hell did you do that?!," `#`g`5 shouts.',
  '`5"You got lucky, `#`e`5!," `#`g`5 declares.',
  '`5"Try that again!  I\'ll decapitate you!," `#`g`5 challenges.',
  '`5"You are definatly stronger than you look, `#`e`5," `#`g`5 admits.',
  '`5"I am SO mad I could slice you in two!," `#`g`5  screams.',
  '`5"You have not seen the last of me, `#`e`5!," `#`g`5 threatens.',
  '`5"How could a scrawny little wimp like `#`e`5 best me?," `#`g`5`n  wonders aloud.',
  '`5"How many of you `#`e`5\'s live in that forest anyway?!,"`n  `#`g`5 ponders.',
  '`5"Ack!  I was under the impression I was invincible. I suppose I was wrong,"`n  `#`g`5 admits.',
  '`5"Killed by `#`e`5.  I am disgraced," grieves `#`g`5.',
  '`5"I\'LL BE BACK!," swears `#`g`5.',
  '`5"At least I wasn\'t bested by Large Rat, eh?," shrugs `#`g`5.',
  '`5"My goodness.  This a turn for the worse," states `#`g`5.',
  '`5"You never think it can happen to you...Then WHAM!," explains `#`g`5.',
  '`5"I think I\'m going to be sick," `#`g`5 moans pitifully.',
  '`5"I feel ill," elucidates `#`g`5.',
  '`5"Well...So much for my reputation!," expounds `#`g`5.',
  '`5"Damnit!  I was looking for the Dark Cloak Tavern," explains`n  `#`g`5 in dismay.',
  '`#`e`5 devours `#`g`5 raw.',
  '`#`e`5 carefully burys `#`g`5.',
  '`#`g`5\'s entrails are littering the forest.',
  '`5Halder laughs at `#`g`5\'s plight.',
  '`5The banker is already looking for `#`g`5\'s next of kin'];

bigdata.flirts = [[],
  [[1, '(W)ink', 5],[2, '(K)iss Her Hand', 10],[4, '(P)eck Her On The Lips', 20],[8, '(S)it Her On Your Lap', 30],[16, '(G)rab Her Backside', 40],[32, '(C)arry Her Upstairs', 40]],
  [[1, '(W)ink', 5],[2, '(F)lutter Eyelashes', 10],[4, '(D)rop Hankee', 20],[8, '(A)sk The Bard to Buy You a Drink', 30],[16, '(K)iss The Bard Soundly', 40],[32, '(C)ompletely Seduce The Bard', 40]]
  ]

bigdata.flirtresult = [],[
 [0, 5, 'You pluck up your courage, catch Violet\'s eye,\r\n  and seductivly wink...', 'Violet smiles and blushes deeply.\r\n  Your relationship is taking off!' ,'Violet glares back and returns to her work.'],
 [1, 10, 'As Violet delivers your beer, you grab her hand,\r\n  pucker up and kiss it...', 'Violet giggles and blushes deeply.\r\n  Your relationship is taking off!', 'Violet pulls her hand back and slaps you across the face.'],
 [3, 20, 'You bolt up as Violet takes your hard earned gold,\r\n  smile, and plant one on her lips...', 'Violet gasps and hurries away.\r\n  Your relationship is starting to really move now!', 'Violet knees you right in the family gem stones.'],
 [7, 30, 'You beckon Violet over, and sit her on your lap...', 'Violet snuggles down for a moment, then hurries back to work.\r\n  Very smooth ex-lax.', 'Violet grabs a fork from the table and embeds it in your knee.'],
 [15, 40, 'As you wander the bar, you spot Violet, and firmly caress\r\n  her glorious behind...', 'Violet yalps, spins around and gives you a peck on the cheek.\r\n  Lovely moves son...', 'Violet twists your arm behind your back, dumps a beer on\r\n  you, and walks away.  Ouch.'],
 [31, 40, 'You slam your beer down, exclaim \'the hell with it\', grab Violet,\r\n  and head upstairs to the nearest unused room...', 'Violet shifts in your arms, revealing that she\r\n  \'forgot\' to wear something this morning.\r\n  Unfortunatally, women\'s personal uh... \'hygiene\' wasn\'t\r\n  what it is now in the dark ages.', 'Violet tears off your pants, grabs a knife, and only your \'small stature\'\r\n  prevents a Bobbit incident.  Bummer.']
 ], [
 [ 0,  5 , 'You pluck up your courage, catch Seth\'s eye,\r\n  and seductivly wink...', 'Seth smiles and nod back\r\n  Your relationship is taking off!' ,'Seth glares back and returns to his drink.'],
 [ 1,  10, 'You bat your eyes wildly in Seth\'s general direction', 'Seth chuckles lightly, and winks back at you', 'Seth rolls his eyes and goes back to strumming his instrument'],
 [ 3,  20, 'You wander over near the bard, and \'accidentally\' drop\r\n your hankee near him', 'Seth leans over, picks up the hankee, and gently caresses\r\b your hand while returning it', 'Seth leans over, grabs the hankee, and proceeds to blow his nose,\r\n  chucking the snot-ladden rag in the nearest corner when he finishes' ],
 [ 7,  30, 'You nod to Seth, and breathlessly ask if he will buy you a drink', 'Seth smiles, and nods to the bartender, caressin\r\n your ass while handing you a pina collada ', 'Seth orders a double whiskey, and while glaring at you,\r\n downs the drink in one big spite-filled gulp'],
 [ 15, 40, 'As you wander back from the latrine, you spot Seth,\r\n wander over, and plant a firm one on the Bard\'s lips', 'Seth grunts a little,\r\n and returns the kiss with some tounge.', 'Seth grunts a little,\r\n turns his head, and vomits on the floor.\r\n  You go get a mop.'],
 [ 31, 40, 'You decide action is needed.  You\r\n drop you panties carefully, saunter over to Seth,\r\n drop his pants and begin gyrating.', 'Seth smiles, and allows you to continue, making little\r\n mewling noises the whole time.  You\r\n realize your going to need a mop.', 'Seth goes instantly limp, jumps up from his spot\r\n on the floor, and runs for the forest, yelling something\r\n about \'even a dragon clawing my eyes out won\'t get rid of this image\'']]

bigdata.charmsay = [[],[
  'is the ugliest person in the realm. Easily.',
  'looks like a fresh piece of troll dung.',
  'needs a wizard to fix that ugly mug!',
  'is so ugly he makes Barak look good!',
  'has arms are made of noodles.',
  'is so dumb, he doesn\'t know how dumb he is.',
  'isn\'t what you would call good, or even ok looking.',
  'reminds me of a cabbage.',
  'gives new meaning to the word \'dingleberry\'.',
  'needs to learn the meaning of \'showering\'.',
  'scares small children with his face!',
  'isn\'t the ugliest mother, but he looks like a woman.',
  'doesn\'t have very proud parents.',
  'makes women give up on the male race.',
  'isn\'t what you would call \'handsome\'...',
  'isn\'t troll dung, but he ain\'t that great either.',
  'is better then other fellows out there. A few anyway.',
  'should be the birthcontrol spokesperson.',
  'is ok..If you don\'t care about outward appearances.',
  'is ok, except his left eye is always looking at his right.',
  'is alright looking...After 10 mugs of ale.',
  'makes halder seem ultra cool.',
  'has a nice face - but his body is of an Old Woman!',
  'is a nice boy. But only a boy',
  'wouldn\'t be so bad if his breasts didn\'t sag like an Old Womans!',
  'must be a level one boy, he\'s so weak.',
  'is only one step away from good looking..But a long one.',
  'screams like a woman when he is scared!',
  'drinks milk at the Inn!',
  'always smells like Violet\'s perfume!',
  'is very average looking. Not bad at all.',
  'is fine except for that huge nose!',
  'is a pretty boy, but with no heart.',
  'is fine, but he wears lipstick.',
  'is fairly strapping, but his hair is SOOO long!',
  'is definatly above average - but only just.',
  'has an honest face. But does that mean he\'s honest?',
  'is a lady killer. Literally.',
  'face doesn\'t hurt the eyes, but he is no Seth Able!',
  'has a great body, but a bad complexion.',
  'looks good - but seems a little superficial.',
  'is rather attractive.. Not at all ugly.',
  'is a very suitable suitor..',
  'seems to use deodorant, a definate plus.',
  'is very sweet. In his own way.',
  'is definitley a good catch.',
  'is nice in body and spirit.',
  'would make a good father.',
  'seems to have a lot going for him.',
  'likes to help the elderly, very decent of him.',
  'is a very good man - been through a lot.',
  'is very secure and sure of himself.',
  'has an irresistable lopsided grin.',
  'has a beautiful body.',
  'is a wonderful warrior.',
  'is a hero, a very good man to have around.',
  'has mighty pecks!',
  'has a huge amount of honor.',
  'has many virtues, including putting the lid down.',
  'is smart enough to run if he has to.',
  'can quaff more liquor an an hour then anyone!',
  'is a real man. A knocka knocka knockout!',
  'is quite a nice chuck of meat.',
  'has features chiseled in stone.',
  'has muscles hard as rock - yet a sensitive side.',
  'rocks the world with every blow.',
  'is a noble individual.',
  'can drink a river and not burst. Yes it\'s true.',
  'would give his life for his love.',
  'can supposedly please a woman all night.',
  'makes the Baldwin brothers look like schoolboys.',
  'makes Stallone look like he needs to workout.',
  'is like a medieval Fabio!',
  'has lots of women chasing him.',
  'is grade A male - With a nice T-Bone!',
  'is too sexy for his hat. What do you think of that?',
  'is note a fake, he is for real.',
  'is so muscular, his breast are larger then most womens!',
  'makes women quiver at the slightest touch.',
  'dances better then anyone in the village!',
  'has a sexier accent then Byrk almost!',
  'makes Jason Priestly look homely!',
  'sings nearly as good as Seth Able.',
  'has a better sense of humor than Tim Allen.',
  'does NOT shop at the goodwill.',
  'A very good syne.',
  'would look handsome no matter what clothes he wore.',
  'is very nearly the perfect looking man.',
  'is an absolute dream!',
  'looks a bit like Elvis - (When he looked good)',
  'could lift a house if he had to!',
  'has a better top ten list then David Letterman!',
  'has a smile like butter!',
  'is so good looking he makes people varclempht!',
  'must have been modeled after Hurcules!',
  'makes women go insane! So hot!',
  'is truly a work of art.',
  'is as good looking as Seth Able!',
  'makes womens chemicals boil!',
  'will hold a woman afterwords!',
  'is the IT. There is no one better looking.',
  'has a God Like body, and soul to match.'],
  ['is a cow - Not even a good looking one.',
  'is so ugly she makes The Old Woman look good!',
  'has breasts that sag hugely.',
  'is so dumb, she doesn\'t know how dumb she is.',
  'scares small children with her face!',
  'doesn\'t make it easy to tell her gender.',
  'is a little on the hefty side. (Moo)',
  'isn\'t what you would call \'pretty\'...',
  'isn\'t a cow, but she ain\'t that great either.',
  'is better then other women out there. A few anyway.',
  'is ok, except her left eye is always looking at her right.',
  'makes Roseanne seem thin.',
  'has a nice face - but her body is of 10 year old boy!',
  'is a nice girl. But only girl',
  'doesn\'t seem to possess a thing called breasts.',
  'doesn\'t seem to like to comb her hair.',
  'seems to ALWAYS smell funky.',
  'wouldn\'t look that bad, if she washed.',
  'always smells like Seths cologne!',
  'is a pretty girl, but with no heart.',
  'is fine, but she wears a jockstrap.',
  'is fairly cute, but her hair is too short.',
  'has an honest face. But does that mean she\'s honest?',
  'is a man killer. Literally.',
  'face doesn\'t hurt the eyes, but she is no Violet!',
  'is a very suitable woman.',
  'seems to use deodorant, a definite plus.',
  'is very sweet. In her own way.',
  'would make a good mother.',
  'seems to have a lot going for her.',
  'likes to help the elderly, very decent of her.',
  'is a very good woman - been through a lot.',
  'is very secure and sure of herself.',
  'has more curves then a circle!',
  'looks like Shannen Doherty!',
  'has very large er, tracts of land.',
  'has a voice like a trickling stream.',
  'has many virtues, including not nagging!',
  'is smart enough to watch 90210!',
  'always seems to smell like a rose.',
  'is a real woman! A knocka knocka knockout!',
  'looks like a blond, yet is smart.',
  'looks so good, she should be in a rag mag!',
  'could make a eunuch grow a tree!',
  'is sweet package of trusting beauty.',
  'is a blue jean baby queen.',
  'would give her life for her love.',
  'can supposedly please a man all night.',
  'makes the Olson Twins look like schoolgirls!',
  'makes Kim Basinger look plain!',
  'is like a medieval Cindy Crawford!',
  'has lots of men chasing her.',
  'is grade A female - With nice mellons!',
  'is too sexy for her hat. What do you think of that?',
  'is note a fake, she is for real.',
  'is so pretty, she would make a tree hard.',
  'makes men quiver at the slightest touch.',
  'makes Jennie Garth look homely!',
  'commands love by just walking by.',
  'would look wonderful no matter what clothes she wore.',
  'is very nearly the perfect looking woman.',
  'looks a bit like Shirly Temple - (When she looked good)',
  'makes men tingle like when they climbed the rope in.',
  'has a smile more beautiful then the sunrise.',
  'is so good looking she makes people varclempht!',
  'must have been modeled after a model.',
  'makes men go insane! So hot!',
  'is as good looking as Violet!',
  'makes mens chemicals boil!',
  'will still be there in the morning!',
  'has a fantastic body, and soul to match.']]

bigdata.killerwin = [
  '`6"I wasn\'t ready!," `@`e`4 screams.',
  '`6"How dare you presume to strike ME, `$`g`6,"`n  `@`e`4 screams.',
  '`6"This means WAR!," `@`e`4 shouts savagely.',
  '`6"Ack!  What a jealous person you\'ve become, `$`g`6!",`n  `@`e`4 cries.',
  '`6"You have NO right to that, `$`g`6!," `@`e`4 whines.',
  '`6"And don\'t you EVER come \'round here again!," `@`g`4 warns.',
  '`6"YESSS!  My luck has finally changed!," `@`g`4 yells.',
  '`6"The Gods have deserted me!!," `@`e`4 insists.',
  '`6"Yeow!  My sword is hot today!," `@`g`4 states.',
  '`6"Your nothing but an overgrown catfish, `$`g`6," `4admonishes`n  `@`e`4.',
  '`6"The only reason you won was because I wasn\'t feeling well!," `4whines `n  `@`e`4.',
  '`6"GREAT BALLS OF FIRE, I\'M GOOD!," `4cries `@`g`4 in delight.',
  '`6"You will have no children!," `4curses `@`e`4 with relish.',
  '`6"Oh don\'t get a big head, `$`g`6!  You suck!," `4taunts `@`e`4.',
  '`6"Oh man..I should\'ve stayed in bed today...," `4moans `@`e`4.',
  '`6"I don\'t usually swear...but...TORAKS TOOTH!," `4swears `@`e`4.',
  '`6"If I ever see you in this town again, I\'ll whup ya again!,"`n  `4laughs `@`g`4.',
  '`6"I hope the ivy grows around your rotting body, `$`e`6,"`n  `4laughs `@`g`4.',
  '`6"Holy Moly!  You\'re such an ass!," `4shrieks `@`e`4.',
  '`6"Next time `$`e`6, try a thing called putting up a fight, eh,"`n  `@`g`4 says seriously.',
  '`6"Defeat me, will ya?  I have friends in this world!," `4squeals `@`e`4.',
  '`6"If you were a fruit, you would be a crab-apple!, `$`g`6!,"`n  `@`e`4 mutters.',
  '`6"At least I have honor, something you cannot say, `$`g`6,"`n  `@`e`4 rebukes.',
  '`6"I wish I\'d never been born!," `4rants `@`e`4.',
  '`@`g`4 laughs.',
  '`@`g`4 kicks `@`e`4 one more time for good measure.',
  '`@`e`4 sobs uncontrollably.',
  '`@`e`4 cries bitterly.  "I thought you were my friend!"',
  '`@`e`4 cries bitterly.  "I don\'t know how, but you cheated!"',
  '`6"You\'re a loser.  You will always be a loser," `@`g`4 informs `@`e`4.',
  '`6"Oh fine...Just destroy my life please!," `@`e`4 says tearfully.',
  '`6"Oh my God!  I\'m covered in blood!," `4gasps `@`e.`4',
  '`6"My goodness.  I do believe I\'m dead." `@`e`4 realizes.',
  '`@`g`4 does a little dance over `@`e`4\'s grave.',
  '`@`e`4\'s scream as he falls is heard all over the realm.',
  '`@`g`4 sticks `@`e`4\'s head on a stick for all to see.',
  '`@`e`4\'s ashen white face is mud splattered.',
  '`6"Beware, DRAGON!  For you are next," `@`g`4 promises.']

bigdata.killerlose = [
  '`6"Oh man!  I didn\'t think you had it in you, `$`e`6,"`n  `@`g`4 exclaims.',
  '`6"Damn, Damn, Damn!," `$`g`6 roars in frusteration.',
  '`6"Geez!  I don\'t believe this! Last time I attack you, `$`e`6!,"`n  `@`g`4 lements.',
  '`6"I must not be as studly as I thought...!," `@`g`4 concedes.',
  '`6"You got lucky, `$`e`6.  You know you did!," `@`g`4 declares.',
  '`6"I\'m having a very bad day...," `@`g`4 moans.',
  '`6"Somebody tell me this is a dream...," `@`g`4 groans.',
  '`6"Um..`$`e`6 old pal...Since when were you stronger then me?,"`n  `@`g`4 inquires.',
  '`6"LIFE IS *NOT* FAIR!,"`4 yowls `@`g`4 in agony.',
  '`6"YOU WILL PAY WITH YOUR FIRSTBORN, `$`e`6," `4utters `@`g`4.',
  '`6"I\'ll tell everyone you wear a girdle, `$`e`6!,"`4 reveals `@`g`4.',
  '`@`e`4 laughs.  `6"I don\'t think you will be attacking me again, pal."',
  '`@`e`4 smiles.  `6"You are too slow.  You are too stupid."',
  '`@`g`4 sobs uncontrollably.',
  '`6"Ack!  I\'m humiliated in front of all!,"`4 explaims `@`g`4.',
  '`6"Why do I even try?  Why did I get up today?," `@`g`4 wonders aloud.',
  '`6"Haw! Haw!  I told you to run!," `4laughs `@`e`4.']

bigdata.story = [
  '"HALLOWEEN" by Seth A. Robinson, \'94','',
  'Billy was a kid who didn\'t fit in.  He couldn\'t talk and he was lame, poor',
  'little Billy just wasn\'t the same.','',
  'He couldn\'t leave the house, because of his face.',
  'Last time he did, he met a can of mace.','',
  'But even Billy had his time, and it was Halloween.  It was his favorite day -',
  'A night to walk the earth unseen.','',
  'Other children won\'t point, won\'t laugh, won\'t harm.',
  'Little girls won\'t run away in alarm.','',
  'Tiny Goblin, Tiny ghost and visions of the dead.',
  'Little witch with her stick and Jack Pumpkin head.','',
  'Billy knew he fit right in, he didn\'t have to ask.',
  'The only difference was, he wasn\'t wearing a mask']
  
bigdata.endstory = [[],[
  '  After your bloody duel with the huge Dragon, your first inpulse is to',
  '  rip it\'s head off and bring it town.  Carefull thought reveals it is',
  '  much to big for your horse, so that plan is moot.  Your second notion',
  '  is bring back the childrens bones.  Bags and bags of them for proper',
  '  barial, but you realize this would only cause the towns inhabitants',
  '  MORE pain.  You finally decide on the Dragons heart.  After adding',
  '  ten years to your swords life, you finally chip off enough scales to',
  '  wallow in the huge beasts insides.','',
  '  When you are finished, and fit the still heart in a gunny sack you',
  '  brought, (who would have thought this would be its use?) you make',
  '  your way back to town.  As you share your story to a crowd of excited',
  '  onlookers, this crowd becomes a gathering, and this gathering becomes',
  '  an assemblage, and this assemblage becomes a multitude!','',
  '  This multitude nearly becomes a mob, but thinking quick, you make a',
  '  speech.','',
  '  "PEOPLE!" your voice booms.  "It is true I have ridden this town of',
  '  it\'s curse, the Red Dragon.  And this is his heart."','',
  '  You dump the bloody object onto the ground.  From the back, Barak\'s',
  '  voice is heard.  "How do we know where you got that thing?  It looks',
  '  like you skinned a sheep!"  A flicker of annoyance crosses your face,',
  '  but you force a smile.  "Why Barak, would you doubt me?  A LEVEL 12',
  '  warrior?  If I am not mistaken, you are quite a bit lower, still at',
  '  level two, eh?"','',
  '  Barak gives you no more trouble, and you are declared a hero by all.',
  '  Violet tops off the evening by giving you a kiss on the cheek, and a',
  '  whisper of things to come later that night makes even you almost',
  '  blush.  Almost.'],[
  '  Still shaking from the battle, you decide it is time to return to',
  '  town and share the good tidings.  You close your eyes and',
  '  concentrate.  "There is no place like Town"...A when you open your',
  '  eyes, you are under a cow in a farm outside - Not far from Abduls',
  '  Armour.  You trek the distance to the Armoury, cursing as you go.',
  '  Wizards were not made for this kind of hardship you tell yourself.','',
  '  Miss Abdul is estatic when you tell her about your escapades.  She',
  '  agrees to accompany you to the Inn.  She lends you a horse when you',
  '  tell her of how your feet ache.','',
  '  When you enter the smokey bar with a loud clatter, merry makers stop',
  '  their carousing, people hunched over their meals stop chewing and',
  '  Seth Able stops playing in mid-strum.','',
  '  "People!  I have slain the beast!" you shout triumphantly. A voice is',
  '  heard from the back. "What beast?  A large rat or something?"  You',
  '  scowl.  It is Barak.  You nonchalantly make a gesture with one hand.',
  '  A few moments later, Barak stands up suprised.  He looks wildly',
  '  around, then makes a bolt for the door.','',
  '  "What happened to him?" Miss Adbul asks you in puzzlement.','',
  '  "Nature called." you smile.  Your face becomes serious as you address',
  '  the bar.  "The Red Dragon is no more." Violet sets her serving tray',
  '  down to hear better. "We cannot bring back those dead, but I have',
  '  stopped this from happening again."','',
  '  "And he did it with Armour from Abduls Armour!" Miss Abdul adds.','',
  '  "Er, thank you.  Anyway, make sure you put something in the Daily',
  '  happenings about this!"  The crowd gives you a standing ovation.'],[
  '  You breath a sigh of relief, retrieve your daggers and carefully',
  '  clean them. Although you realized some may think it cold hearted if',
  '  they ever found out, you pick through the childrens bones, picking up',
  '  a gold piece here, a silver there. Afterall, these children didn\'t',
  '  need it to buy a meal anymore... They WERE a meal!  You smile at',
  '  your own dry wit and realize you had better get to town and share the',
  '  news.','',
  '  The hike to town is long, but you are used to it, and rather enjoy',
  '  the peace it brings.  You find the town deserted.  You enter the Inn,',
  '  hoping find some clue, but all you find is Violet.','',
  '  "Via, Where has everyone gone?  Have they finally given up hope of',
  '  ever stopping the Red Dragon, and have gone to seek a new lifestyle?','',
  '  There is a pause, then she responds.','',
  '  "No, they are having a feast at Turgons Place.  Naturally SOMEONE had',
  '  to stay here, and OF COURSE it would be me...I never get to have any',
  '  fun!"','',
  '  You give her a wink.  "That just isn\'t so...Remember last night?"',
  '  She giggles, and after a few more naughty sayings you have her cheeks',
  '  as deep a scarlet as a rose.','',
  '  When you finally meet up at Turgons, you share your story.  You can\'t',
  '  help but be pleased at seeing so many faces in awe over your doings,',
  '  so you \'spice\' up the story in a few places... As you are finishing,',
  '  a woman in the back cries out.','',
  '  "That Thief is wearing the ring I gave my Ellie the last birthday',
  '  before disappeared!"','',
  '  You decide now would be the perfect time to make your departure.']]

bigdata.randdaily = [ 
  'More children are missing today.',
  'A small girl was missing today.',
  'The town is in grief.  Several children didnt come home today.',
  'Dragon sighting reported today by a drunken old man.',
  'Despair covers the land - more bloody remains have been found today.',
  'A group of children did not return from a nature walk today.',
  'The land is in chaos today.  Will the abductions ever stop?',
  'Dragon scales have been found in the forest today..Old or new?',
  'Several farmers report missing cattle today.',
  'A Child was found today!  But scared deaf and dumb.']

darkhorse.add(['`%Chance','`0Pull up a chair, friends.']);
darkhorse.add(['`%Barak','`0Ok - These chairs are light...probably because I\'m strong.']);
darkhorse.add(['`%Aragorn','`0I really doubt that...']);
darkhorse.add(['`%Barak','`0I could juggle these chairs I\'m such a stud!']);
darkhorse.add(['`%Aragorn','`0Chance, did you forget to give Barak his medicine?']);
darkhorse.add(['`%Chance','`0Whups.  I\'ll slip it in his ale...']);
darkhorse.add(['`%Aragorn','`0Why don\'t you move this pub to town?  More business there.']);
darkhorse.add(['`%Chance','`0Nah, I don\'t like towns.  Even though I do like that Violet.']);
darkhorse.add(['`%Barak','`0She\'s mine I say!  All mine!']);
darkhorse.flush();

patrons.add(['`%Violet', '`0Hey everyone.  Did you hear about that little boy Charles?']);
patrons.add(['`%Bartender', '`0Yeah.  He is missing.  It\'s a shame.  He was so young.']);
patrons.add(['`%Halder', '`0Someone has to do something about the Red Dragon!']);
patrons.add(['`%Aragorn', '`0Look. No one has seen the Red Dragon for 13 years.']);
patrons.add(['`%Sparhawk', '`0Yes it is. He never died... He is out there.  Somewhere.']);
patrons.add(['`%Halder', '`0Well lets find him!']);
patrons.add(['`%Barak', '`0Fine.  You go slay the Dragon then, tough guy.']);
patrons.add(['`%Halder', '`0Me?!?!  No way!   Let one of those new fools try it!  Haw!']);
patrons.add(['`%Bartender', '`0Yeah...Those new warriors in town are a joke.']);
patrons.flush();

daily.data = [ 
  'More children are missing today.',
  'A small girl was missing today.',
  'The town is in grief.  Several children didnt come home today.',
  'Dragon sighting reported today by a drunken old man.',
  'Despair covers the land - more bloody remains have been found today.',
  'A group of children did not return from a nature walk today.',
  'The land is in chaos today.  Will the abductions ever stop?',
  'Dragon scales have been found in the forest today..Old or new?',
  'Several farmers report missing cattle today.',
  'A Child was found today!  But scared deaf and dumb.'];
daily.flush();

gamedata.data = bigdata;

gamedata.flush();

process.exit();

