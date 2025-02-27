export type SettingsType = 'true' | '0';

export type Bosses =
	| 'Monstro'
	| 'Larry Jr.'
	| 'Chub'
	| 'Gurdy'
	| 'Monstro II'
	| 'Mom'
	| 'Scolex'
	| "Mom's Heart"
	| 'Famine'
	| 'Pestilence'
	| 'War'
	| 'Death'
	| 'Duke of Flies'
	| 'Peep'
	| 'Loki'
	| 'Blastocyst'
	| 'Gemini'
	| 'Fistula'
	| 'Gish'
	| 'Steven'
	| 'C.H.A.D'
	| 'Headless Horseman'
	| 'The Fallen'
	| 'Satan'
	| 'It Lives'
	| 'The Hollow'
	| 'Carrion Queen'
	| 'Gurdy Jr.'
	| 'The Husk'
	| 'The Bloat'
	| 'Lokii'
	| 'Blighted Ovum'
	| 'Teratoma'
	| 'Widow'
	| 'Mask of Infamy'
	| 'The Wretched'
	| 'Pin'
	| 'Conquest'
	| 'Isaac'
	| '???'
	| 'Daddy Long Legs'
	| 'Triachnid';

export type Floors =
	| 'Basement / Cellar 1'
	| 'Basement / Cellar 2'
	| 'Caves / Catacombs 1'
	| 'Caves / Catacombs 2'
	| 'The Depths / Necropolis 1'
	| 'The Depths / Necropolis 2'
	| 'The Womb / Utero 1'
	| 'The Womb / Utero 2'
	| 'Sheol / Cathedral'
	| '(Afterbirth) Blue Womb'
	| 'The Chest';

export type MiniBosses =
	| ''
	| 'Sloth'
	| 'Lust'
	| 'Wrath'
	| 'Gluttony'
	| 'Greed'
	| 'Envy'
	| 'Pride';

export type Collections =
	| 'The Sad Onion'
	| 'The Inner Eye'
	| 'Spoon Bender'
	| "Max's Head"
	| 'My Reflection'
	| 'Number one'
	| 'Blood of the Martyr'
	| 'Brother Bobby'
	| 'Skatole'
	| 'Halo of Flies'
	| '1up!'
	| 'Magic Mushroom'
	| 'The Virus'
	| 'Roid Rage'
	| '<3'
	| 'Raw Liver'
	| 'Skeleton Key'
	| 'A dollar!'
	| 'Boom!'
	| 'Transcendence'
	| 'The Compass'
	| 'Lunch'
	| 'Dinner'
	| 'Dessert'
	| 'Breakfast'
	| 'Rotten Meat '
	| 'Wooden Spoon'
	| 'The Belt'
	| 'Moms Underwear'
	| 'Moms Heels '
	| 'Moms Lipstick'
	| 'Wire Coat hanger!'
	| 'The Bible'
	| 'The Book of Belial'
	| 'The Necronomicon'
	| 'The Poop!'
	| 'Mr. Boom!'
	| 'Tammys Head'
	| 'Moms Bra'
	| 'kamikaze!'
	| 'Moms Pad '
	| 'Bobs Rotten Head'
	| 'Pills here!'
	| 'Teleport!'
	| 'Yum Heart'
	| 'Lucky Foot'
	| 'Doctors Remote'
	| 'Cupids arrow'
	| 'Shoop da Whoop!'
	| 'Steven'
	| 'Pentagram'
	| 'Dr Fetus'
	| 'Magneto'
	| 'Treasure Map'
	| 'Moms Eye'
	| 'Lemon Mishap'
	| 'Distant Admiration'
	| 'Book of shadows'
	| 'Wiggle Worm'
	| 'The Ladder'
	| 'Tarot Card'
	| 'Charm of the vampire'
	| 'The Battery'
	| 'Steam Sale'
	| 'Anarchist Cookbook'
	| 'The Hourglass'
	| 'Sister Maggy'
	| 'Technology'
	| 'Chocolate Milk'
	| 'Growth Hormones'
	| 'Mini Mush'
	| 'Rosary'
	| 'Cube of Meat'
	| 'A Quarter'
	| 'PHD'
	| 'Xray-Vision'
	| 'My little Unicorn'
	| 'Book of Revelations'
	| 'The Mark'
	| 'The Pact'
	| 'Dead Cat'
	| 'Lord of the Pit'
	| 'the Nail'
	| 'We need to go deeper!'
	| 'Deck of Cards'
	| 'Monstros Tooth'
	| 'Lokis Horns'
	| 'Lil Chubby'
	| 'Spider Bite'
	| 'The Small Rock'
	| 'Spelunker Hat'
	| 'Super Bandage'
	| 'The Gamekid'
	| 'Sack of pennies'
	| 'Robo-Baby'
	| 'Little Chad'
	| 'The Book of Sin'
	| 'The Relic'
	| 'Little Gish'
	| 'Little Steve'
	| 'The Halo'
	| 'Moms Bottle of Pills'
	| 'The common cold'
	| 'The Parasite'
	| 'The Dice'
	| 'Mr. Mega'
	| 'The Pinking Shears'
	| 'The Wafer'
	| 'Money = Power'
	| 'Moms Contacts'
	| 'The Bean'
	| 'Guardian Angel'
	| 'Demon Baby'
	| 'Moms Knife'
	| 'Ouija Board'
	| '9 Volt'
	| 'Dead Bird'
	| 'Brimstone'
	| 'Blood Bag'
	| 'Odd Mushroom'
	| 'Odd Mushroom'
	| 'Whore of Babylon'
	| 'Monster Manuel'
	| 'Dead Sea Scrolls'
	| 'Bobby - Bomb'
	| 'Razor Blade'
	| 'Forget Me Now'
	| 'Forever alone'
	| 'Bucket of Lard'
	| 'A Pony'
	| 'Bomb Bag'
	| 'A Lump of Coal'
	| 'Guppys Paw'
	| 'Guppys Tail'
	| 'IV Bag'
	| 'Best Friend'
	| 'Remote Detonator'
	| 'Stigmata'
	| 'Moms Purse'
	| 'Bobs Curse'
	| 'Pageant Boy'
	| 'Scapular'
	| 'Speed Ball'
	| 'Bum friend'
	| 'Guppys Head'
	| 'Prayer Card'
	| 'Notched Axe'
	| 'Infestation'
	| 'Ipecac'
	| 'Tough love'
	| 'The Mulligan'
	| 'Technology 2'
	| 'Mutant Spider'
	| 'Chemical peel'
	| 'The Peeper!'
	| 'Habit'
	| 'Bloody Lust'
	| 'Crystal Ball'
	| 'Spirit of the night'
	| 'Crack the Sky'
	| 'Ankh'
	| 'Celtic cross'
	| 'Ghost Baby'
	| 'The Candle'
	| 'Cat-o-nine-tails'
	| 'D20'
	| 'Harlequin baby'
	| 'Epic Fetus'
	| 'Polyphemus'
	| 'Daddy longlegs'
	| 'Spider Butt'
	| 'Sacrificial Dagger'
	| 'Mitre'
	| 'Rainbow Baby'
	| 'Dads Key'
	| 'Stem cells'
	| 'Portable Slot!'
	| 'Holy Water'
	| 'Fate'
	| 'The Black Bean'
	| 'White Pony'
	| 'Sacred Heart'
	| 'Tooth Picks'
	| 'Holy Grail'
	| 'Dead Dove'
	| 'Blood Rights'
	| 'Guppys Hairball'
	| 'Abel'
	| 'SMB Super Fan!'
	| 'Pyro'
	| '3 Dollar bill'
	| 'Telepathy for Dummies'
	| 'MEAT!'
	| 'Magic 8 ball'
	| 'Moms coin purse'
	| 'Squeezy'
	| 'Jesus Juice'
	| 'BOX';

export type Secrets =
	| 'Maggy'
	| 'Cain'
	| 'Judas'
	| 'The Womb Floors'
	| 'Horsemen Appear'
	| 'Cube of Meat'
	| 'Book of Revelations'
	| 'Transcendence (A Noose)'
	| 'The Nail'
	| 'Quarter'
	| 'Dr. Fetus (A Fetus In A Jar)'
	| 'A Poop'
	| 'Spider Bite (Radioactive Spider)'
	| 'Spelunker'
	| 'Yum Heart'
	| 'Luck Foot'
	| 'The Book of Belial'
	| 'Small Rock'
	| "Monstro's Tooth"
	| 'Lil Chubby'
	| "Loki's Horns"
	| 'Steven -Boss (Something From The Future in the Basement)'
	| 'C.H.A.D. -Boss (Something Cute in the Caves)'
	| 'Gish -Boss (Something Sticky in the Depths)'
	| 'Super Bandage'
	| 'The Relic (A Cross)'
	| 'Bag of Pennies'
	| 'Robo-Baby'
	| 'Book of Sins'
	| 'Little Gish'
	| 'Little Steven'
	| 'Little C.H.A.D.'
	| 'Gamekid'
	| 'Halo'
	| 'Mr. Mega'
	| "Mom's Bottle of Pills"
	| 'Common Cold'
	| '(Isaac now Holds) The D6'
	| 'Pinking Shears'
	| 'The Parasite'
	| 'Blue Baby (???)'
	| 'Everything Is Terrible!!!'
	| 'The Wafer'
	| 'Money=Power'
	| "It Lives! -Boss (Your Future's Past Waits)"
	| 'The Bean'
	| "Mom's Contact"
	| 'Necronomicon'
	| 'Basement Boy'
	| 'Spelunker Boy'
	| 'Dark Boy'
	| "Mama's Boy"
	| 'Golden God'
	| 'Eve'
	| "Mom's Knife"
	| 'Dead Bird'
	| 'Whore of Babylon (Curse)'
	| 'The Razor'
	| 'Guardian Angel'
	| 'Bag of Bombs'
	| 'Demon Baby'
	| 'Forget Me Now'
	| 'Monster Manuel'
	| 'Lump of Coal'
	| 'D20'
	| 'Celtic Cross (Crucifix)'
	| 'Abel'
	| 'Curved Horn'
	| 'Sacrificial Knife'
	| 'Rainbow Baby'
	| 'Blood Lust'
	| 'Bloody Penny'
	| 'Blood Rights'
	| 'The Polaroid'
	| "Dad's Key"
	| 'The Candle'
	| 'Burnt Penny'
	| 'Lucky Toe'
	| "Guppy's Tail"
	| 'Epic Fetus'
	| 'Fish Head'
	| 'Super Fan'
	| 'Spider Butt'
	| 'CounterFit Coin'
	| "Guppy's HairBall"
	| "Daddy's Love (Egg Sack)"
	| 'Conquest -Boss (A Forgotten Horseman)'
	| 'Samson'
	| 'Triachnid -Boss (Something Icky in the Womb & Utero)'
	| 'Platinum God'
	| "Isaac's Head"
	| "Maggy's Faith"
	| "Judas' Tongue"
	| "???'s Soul"
	| "Samson's Lock"
	| "Cain's Eye"
	| "Eve's Bird Foot"
	| 'The Left Hand'
	| 'Eternal Mom'
	| 'Eternal Satan'
	| 'Eternal Isaac'
	| 'Eternal Heart'
	| 'Eternal Blue'
	| 'Eternal Personalities'
	| 'Eternal God'
	| 'You are Eternal (Isaac)'
	| 'You are Eternal (Judas)'
	| 'You are Eternal (Magdaiene)'
	| 'You are Eternal (Cain)'
	| 'You are Eternal (Eve)'
	| 'You are Eternal (Samson)'
	| 'You are Eternal (???)'
	| 'Eternal Life';

export type ItemsCollected = {
	name: Collections;
	unlocked: boolean;
};

export type SecretsUnlocked = {
	name: Secrets;
	unlocked: boolean;
};

export type BossesKilled = {
	name: Bosses;
	count: number;
};

export type MiniBossesKilled = {
	name: MiniBosses;
	count: number;
};

export type FloorsCompleted = {
	name: Floors;
	count: number;
};
