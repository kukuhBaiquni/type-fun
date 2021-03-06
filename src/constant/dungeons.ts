const DUNGEONS = [
  {
    name: 'Tree of Life',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Ftree-of-life.png?alt=media&token=6e494ab9-7bff-45ba-961c-47183bb440c3',
    townId: 0,
    dungeonId: 0,
  },
  {
    name: 'Forest Ruins',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fforest-ruins.png?alt=media&token=6326fdb7-f1ee-456b-9aeb-9eb8c3df589b',
    townId: 0,
    dungeonId: 1,
  },
  {
    name: 'White Mist Swamp',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fwhite-mist-swamp.png?alt=media&token=0b0decbf-40aa-45b7-812e-a5a110d3fc5e',
    townId: 0,
    dungeonId: 2,
  },
  {
    name: 'Shadow Forest',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fshadow-forest-old.png?alt=media&token=1a0b599f-a242-489a-ae6b-61e52d95270a',
    townId: 1,
    dungeonId: 0,
  },
  {
    name: 'Banthus Cave',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fbanthus-cave.png?alt=media&token=f8a07521-3295-4e83-a34c-82aaff39cb48',
    townId: 1,
    dungeonId: 1,
  },
  {
    name: 'Underground Waterway',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Funderground-waterway.png?alt=media&token=54363778-a2e4-4c3e-acb1-7121164dfebf',
    townId: 1,
    dungeonId: 2,
  },
  {
    name: 'Suburbs of Wally Castle',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fsuburbs-of-wally-castle.png?alt=media&token=16de4442-1900-471a-9d3e-43b71b77dac0',
    townId: 1,
    dungeonId: 3,
  },
  {
    name: 'Wally Castle',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fwally-castle.png?alt=media&token=73c93b46-9cc7-4dfd-b1e6-98a9a81c8936',
    townId: 1,
    dungeonId: 4,
  },
  {
    name: 'Dragon Road',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fdragon-road.png?alt=media&token=ad75f154-e8ad-46a2-8c7c-97fb2b806876',
    townId: 2,
    dungeonId: 0,
  },
  {
    name: 'Bethma Lake',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fbethma-lake.png?alt=media&token=3f41888b-8699-4de6-b101-72207b5f5a36',
    townId: 2,
    dungeonId: 1,
  },
  {
    name: 'Bethma Lake Night',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fbethma-lake-night.png?alt=media&token=e2f2c3e2-4660-4836-8e1b-c9599332504f',
    townId: 2,
    dungeonId: 2,
  },
  {
    name: 'Dragon Nest',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fdragon-nest.png?alt=media&token=627d9707-4bef-49c6-9930-aaf59d2b8067',
    townId: 2,
    dungeonId: 3,
  },
  {
    name: 'Richie Mines',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Frichie-mines.png?alt=media&token=0e782ea0-087a-4014-8b1c-a0e4517dd6bb',
    townId: 2,
    dungeonId: 4,
  },
  {
    name: 'Cargo Airship',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fcargo-airship.png?alt=media&token=b16fc62b-cdcb-48a3-ac8a-1e38e4ef650e',
    townId: 2,
    dungeonId: 5,
  },
  {
    name: 'The Black Crow',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fthe-black-crow.png?alt=media&token=d2ebcff2-d903-4883-9d60-5b31cdb40647',
    townId: 3,
    dungeonId: 0,
  },
  {
    name: 'Return Plains',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Freturn-plains.png?alt=media&token=e046d3a7-603a-4c66-addf-47eda211e6ee',
    townId: 3,
    dungeonId: 1,
  },
  {
    name: 'Transporting Tunnel B4-1',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Ftransporting-tunnel.png?alt=media&token=99747a11-c087-44f7-8dd6-88ddd90178c7',
    townId: 3,
    dungeonId: 2,
  },
  {
    name: 'Altera Plains',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Faltera-plains.png?alt=media&token=1f15f89b-91ae-4766-9260-708046297b73',
    townId: 3,
    dungeonId: 3,
  },
  {
    name: 'Nasod Foundry',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fnasod-foundry.png?alt=media&token=7ee258a1-8c6d-4078-9f50-223eaaee1693',
    townId: 3,
    dungeonId: 4,
  },
  {
    name: 'Altera Core',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Faltera-core.png?alt=media&token=f327b890-7492-4ea1-9194-465eab05e79b',
    townId: 3,
    dungeonId: 5,
  },
  {
    name: 'Shrine of Dedication',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fshrine-of-dedication.png?alt=media&token=2eb93076-a871-4fdd-a726-51b433b66b62',
    townId: 4,
    dungeonId: 0,
  },
  {
    name: 'Spiral Corridor',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fspiral-corridor.png?alt=media&token=6c1c2557-2f44-4bf7-98ca-8b71b7b04e0d',
    townId: 4,
    dungeonId: 1,
  },
  {
    name: 'Underground Chappel',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Funderground-chappel.png?alt=media&token=91d501d4-48c3-4906-9d02-e7a357ff2088',
    townId: 4,
    dungeonId: 2,
  },
  {
    name: 'Underground Garden',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Funderground-garden.png?alt=media&token=caafaca3-3b06-4844-b856-c0f5ea9513bf',
    townId: 4,
    dungeonId: 3,
  },
  {
    name: 'Heart of Spire',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fheart-of-spire.png?alt=media&token=4d9998e8-17d8-49e3-9555-6d78b1cb86d1',
    townId: 4,
    dungeonId: 4,
  },
  {
    name: 'Altar of Dedication',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Faltar-of-dedication.png?alt=media&token=6f0fe502-26ab-47cb-8626-28eaa3ca9286',
    townId: 4,
    dungeonId: 5,
  },
  {
    name: 'Residential Area 3',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fresidential-area-3.png?alt=media&token=1a99c182-2de5-464f-a5ad-9709d19a6666',
    townId: 5,
    dungeonId: 0,
  },
  {
    name: 'Hope Bridge',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fhope-bridge.png?alt=media&token=150e864d-58dd-412e-af2c-3f3a59516c5c',
    townId: 5,
    dungeonId: 1,
  },
  {
    name: 'Palace Entrance',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fpalace-entrance.png?alt=media&token=ded31ded-a727-45fa-bf03-da50ce0add94',
    townId: 5,
    dungeonId: 2,
  },
  {
    name: 'Burning Hope Bridge',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fburning-hope-bridge.png?alt=media&token=18e92ece-1fff-44a9-b3ca-13e1db5c66b7',
    townId: 5,
    dungeonId: 3,
  },
  {
    name: 'Commercial Area 1',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fcommercial-area-1.png?alt=media&token=db47e56b-fbd3-4924-9f84-5bbb63defb62',
    townId: 5,
    dungeonId: 4,
  },
  {
    name: 'Southern Gate',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fsouthern-gate.png?alt=media&token=ffa21e84-324a-4dc1-a0ae-0d58d278ae16',
    townId: 5,
    dungeonId: 5,
  },
  {
    name: 'Resiam Outskirt',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fresiam-outskirt.png?alt=media&token=897c046a-d2cf-49eb-91c0-d1a57d76133d',
    townId: 6,
    dungeonId: 0,
  },
  {
    name: 'Sunken Resiam',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fsunken-resiam.png?alt=media&token=5ddcc182-ba38-498b-aef8-f977ec540494',
    townId: 6,
    dungeonId: 1,
  },
  {
    name: 'Ancient Waterway',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fancient-waterway.png?alt=media&token=8edda985-b056-4697-92f6-a43ff4c9f0e5',
    townId: 6,
    dungeonId: 2,
  },
  {
    name: 'Heart of the Ancient Waterway',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fheart-of-the-ancient-waterway.png?alt=media&token=5fe3ad74-d391-45ba-9069-0e9f5cc8d518',
    townId: 6,
    dungeonId: 3,
  },
  {
    name: 'Magmanta Cave',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fmagmanta-cave.png?alt=media&token=591082e3-d2e6-4f5d-9ecc-b95af26ed10b',
    townId: 6,
    dungeonId: 4,
  },
  {
    name: 'Temple of Frozen Water',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Ftemple-of-frozen-water.png?alt=media&token=6e376f0d-e9ed-4d1c-b76b-246b2f408034',
    townId: 6,
    dungeonId: 5,
  },
  {
    name: 'Halls of Water',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fhalls-of-water.png?alt=media&token=0798e033-ce6b-4f7c-a997-b72859d4934e',
    townId: 6,
    dungeonId: 6,
  },
  {
    name: 'Barren Sander',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fbarren-sander.png?alt=media&token=d5f46300-c79a-427c-9f80-312bdd2809d2',
    townId: 7,
    dungeonId: 0,
  },
  {
    name: 'Garpai Rock',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fgarpai-rock.png?alt=media&token=e91df220-00f8-4330-91ea-65671f62102c',
    townId: 7,
    dungeonId: 1,
  },
  {
    name: 'Trock Lair',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Ftrock-lair.png?alt=media&token=8906d527-ab05-4e0d-b218-7699177d16af',
    townId: 7,
    dungeonId: 2,
  },
  {
    name: 'Calluso Tribal Village',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fcalluso-tribal-village.png?alt=media&token=ada40df2-b07c-4191-a08a-12ccd6c74761',
    townId: 7,
    dungeonId: 3,
  },
  {
    name: 'Sandtilus',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fsandtilus.png?alt=media&token=1394b399-fd02-4cb5-bf74-f454a5d198aa',
    townId: 7,
    dungeonId: 4,
  },
  {
    name: 'Heart of Behemoth',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fheart-of-behemoth.png?alt=media&token=3f47006e-c583-4ef1-a17e-d4685434f6bb',
    townId: 7,
    dungeonId: 5,
  },
  {
    name: 'Burnt Forest',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fburnt-forest.png?alt=media&token=de322dd3-4ca3-489e-b020-f369073c433d',
    townId: 8,
    dungeonId: 0,
  },
  {
    name: 'Ash Covered Village',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fash-covered-village.png?alt=media&token=b11cedad-6733-42fc-a8d8-0517a0511fea',
    townId: 8,
    dungeonId: 1,
  },
  {
    name: 'Phantasmal Geyser',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fphantasmal-geyser.png?alt=media&token=413cb0c7-8e6a-4f05-b75b-bc0c53fb3f1d',
    townId: 8,
    dungeonId: 2,
  },
  {
    name: 'Volcanic Flame Entrance',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fvolcanic-flame-entrance.png?alt=media&token=553b710c-347f-4454-a587-3f89835b8315',
    townId: 8,
    dungeonId: 3,
  },
  {
    name: 'Collapsing Temple of Fire',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fcollapsing-temple-of-fire.png?alt=media&token=03bfc4b3-78d5-4880-a0bd-bf97bbea4ce8',
    townId: 8,
    dungeonId: 4,
  },
  {
    name: 'Grand Cavern Chasm of the Divided Land',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Foath-of-ruin.png?alt=media&token=c994a3a5-2139-444b-ae72-0d34627b8237',
    townId: 8,
    dungeonId: 5,
  },
  {
    name: 'Diceon Mines',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fdiceon-mines.png?alt=media&token=daa6caf0-12f5-447b-95e2-b33688885f14',
    townId: 9,
    dungeonId: 0,
  },
  {
    name: 'Atlas City',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fatlas-city.png?alt=media&token=0b0cd9c1-09d4-4aaa-b65f-5ab61fda9054',
    townId: 9,
    dungeonId: 1,
  },
  {
    name: 'Elysion Tower',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Felysion-tower.png?alt=media&token=f2f2a175-b03b-4223-97c4-ed6abe685877',
    townId: 9,
    dungeonId: 2,
  },
  {
    name: 'Celestial Crossroad',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fcelestial-crossroad.png?alt=media&token=dc051d25-ec52-408f-a2cf-44d7132a5935',
    townId: 10,
    dungeonId: 0,
  },
  {
    name: 'Adrian Palace',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fadrian-palace.png?alt=media&token=79019c92-de67-4460-acea-04f674929264',
    townId: 10,
    dungeonId: 1,
  },
  {
    name: 'Solace Fortress',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fsolace-fortress.png?alt=media&token=c99edda7-05fe-4ed6-8357-f1a3058318be',
    townId: 10,
    dungeonId: 2,
  },
  {
    name: 'Halted Sun Memory',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fhalted-sun-memory.png?alt=media&token=7254642a-2c7d-4728-92a8-52b92b362003',
    townId: 10,
    dungeonId: 3,
  },
  {
    name: 'Hall of El',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fhall-of-el.png?alt=media&token=e1b9d19b-63eb-4472-b048-fc31c5b0e19b',
    townId: 11,
    dungeonId: 0,
  },
  {
    name: 'Water Dragon Sanctum',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fwater-dragon-sanctum.png?alt=media&token=8fd8408d-f055-4f82-9456-b3a92247a5b2',
    townId: 11,
    dungeonId: 1,
  },
  {
    name: 'Elrianode City',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Felrianode-city.png?alt=media&token=341be8d5-9dab-46c8-a8d9-c8dbcbbb72fc',
    townId: 11,
    dungeonId: 2,
  },
  {
    name: 'Debrian Laboratory',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fdebrian-laboratory.png?alt=media&token=72055e83-2c6e-4d8c-98c7-8b2adc28d87f',
    townId: 11,
    dungeonId: 3,
  },
  {
    name: 'El Tower Defense',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fel-tower-defense.png?alt=media&token=cd86c486-4982-46af-a875-f9cf95577381',
    townId: 11,
    dungeonId: 4,
  },
  {
    name: 'Forgotten Elrian Sanctum',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fforgotten-elrian-sanctum.png?alt=media&token=fa9bcce4-4c5f-4211-98be-53130e9cd2a8',
    townId: 11,
    dungeonId: 5,
  },
  {
    name: 'Labyrinth of Ruin',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Flabyrinth-of-ruin.png?alt=media&token=ba014866-0891-4e9c-8591-9c87c3733756',
    townId: 12,
    dungeonId: 0,
  },
  {
    name: 'Guardian Forest',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fguardian-forest.png?alt=media&token=016a9d94-0b52-403b-a16f-1420334196cb',
    townId: 12,
    dungeonId: 1,
  },
  {
    name: 'Dark Elves Outpost',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fdark-elves-outpost.png?alt=media&token=66fdcae3-6512-451d-a35f-bffa8ff97150',
    townId: 12,
    dungeonId: 2,
  },
  {
    name: 'Forsaken Spirit Asylum',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fforsaken-spirit-asylum.png?alt=media&token=88e5f372-4d3d-48dc-8f13-74b9202f8067',
    townId: 12,
    dungeonId: 3,
  },
  {
    name: 'Crimson Tower of Howling Flames',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fcrimson-tower-of-howling-flames.png?alt=media&token=29b1cf7d-0aee-480f-aebd-67eb9df08639',
    townId: 12,
    dungeonId: 4,
  },
  {
    name: 'Never Ending Darkness',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fnever-ending-darkness.png?alt=media&token=45daa7ef-767a-47b4-9ab1-279a6be17a7d',
    townId: 12,
    dungeonId: 5,
  },
  {
    name: 'Crimson Cradle of Flames',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fcrimson-cradle-of-flames.png?alt=media&token=35f27abc-8b62-4c0f-a7df-4569d6777980',
    townId: 12,
    dungeonId: 6,
  },
  {
    name: 'Shadow Vein',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fshadow-vein.png?alt=media&token=723df361-968b-414e-84ce-b7c23c05baa6',
    townId: 12,
    dungeonId: 7,
  },
  {
    name: 'Sea of Ruin',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fsea-of-ruin.png?alt=media&token=d0c2c616-2252-4832-8fb3-8775314982d8',
    townId: 13,
    dungeonId: 0,
  },
  {
    name: 'Abandoned Deep Sea Tunnel',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fabandoned-deep-sea-tunnel.png?alt=media&token=0be26676-277d-462e-8057-33d8dc9cb0f7',
    townId: 13,
    dungeonId: 1,
  },
  {
    name: 'Trosh\'s Nest',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Ftrosh-nest.png?alt=media&token=8b22d748-90bd-434f-be58-d217419dfb92',
    townId: 13,
    dungeonId: 2,
  },
  {
    name: 'Abandoned Icerite Plant',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fabandoned-icerite-plant.png?alt=media&token=8fce955b-7f69-4e42-94ed-2a69cbc87883',
    townId: 13,
    dungeonId: 3,
  },
  {
    name: 'Titan\'s Groto',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Ftitan-groto.png?alt=media&token=728b9c74-0061-4216-ab82-789367c4f1c9',
    townId: 13,
    dungeonId: 4,
  },
  {
    name: ' Shrine of the Two-Headed Serpent',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fmaster-road-gaia.png?alt=media&token=2e328717-9a72-4828-8820-2d472f9b993a',
    townId: 14,
    dungeonId: 0,
  },
  {
    name: 'Elrianode Training Grounds',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fmaster-road-rosso.png?alt=media&token=c7fe617e-3788-445f-ae08-78c6bb442f13',
    townId: 14,
    dungeonId: 1,
  },
  {
    name: 'Spirit Sanctum',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fmaster-road-ventus.png?alt=media&token=3ec0b1ad-b0f1-4e50-9afa-5b32d69cf346',
    townId: 14,
    dungeonId: 2,
  },
  {
    name: 'Water Dragon\'s Compass',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fmaster-road-denif.png?alt=media&token=e8034a4c-5c1a-49fb-b345-04aeac0e0084',
    townId: 14,
    dungeonId: 3,
  },
  {
    name: 'Nasod Testing Chamber',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fmaster-road-herbaon.png?alt=media&token=68a48efe-c75b-4950-9afb-c7145cd93904',
    townId: 14,
    dungeonId: 4,
  },
  {
    name: 'Gate of the Setting Sun',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fmaster-road-solace.png?alt=media&token=85000468-a828-44cc-b10b-851cf1b9c082',
    townId: 14,
    dungeonId: 5,
  },
  {
    name: 'Anguish of the Wavering Servant',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fmaster-road-hernia.png?alt=media&token=54bfd325-5102-40c4-82af-5cf7ec03cc77',
    townId: 14,
    dungeonId: 6,
  },
  {
    name: 'Unraveling the Knot of Memories',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fmaster-road-ebalon.png?alt=media&token=222d54f0-363d-4447-a094-e2269552fedd',
    townId: 14,
    dungeonId: 7,
  },
  {
    name: 'Glacial Land',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fglacial-land.png?alt=media&token=830cc528-bc3f-49e2-8a0f-282c16270ad8',
    townId: 15,
    dungeonId: 0,
  },
  {
    name: 'Old Village Site',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fold-village-site.png?alt=media&token=60a9c312-c311-46ab-99d0-1acdca3fa9a7',
    townId: 15,
    dungeonId: 1,
  },
  {
    name: 'Sanctuary of the Soul',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fsanctuary-of-the-soul.png?alt=media&token=4c2a5842-61a0-47f9-b242-b30f1f481c48',
    townId: 15,
    dungeonId: 2,
  },
  {
    name: 'Capital Bound Train',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fcapital-bound-train.png?alt=media&token=15230c89-2e25-4c76-8a4e-6778bf40fb59',
    townId: 15,
    dungeonId: 3,
  },
  {
    name: 'Savage White Ghost\'s Castle',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fsavage-white-ghost-castle.png?alt=media&token=7c5390d1-4a3a-44a3-8c4e-42515e0e25df',
    townId: 15,
    dungeonId: 4,
  },
  {
    name: 'Altar of Invocation',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Faltar-of-invocation.png?alt=media&token=d28ed72d-9c0b-4302-a5be-15586440ee8e',
    townId: 15,
    dungeonId: 5,
  },
  {
    name: 'Plegas\'s Gaze',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fplegas-gaze.png?alt=media&token=9c8cc7fa-fcaf-416d-8eda-22bb502f25af',
    townId: 16,
    dungeonId: 0,
  },
  {
    name: 'Plegas\'s Reflection',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fplegas-reflection.png?alt=media&token=07dba3e7-158e-4d31-abfe-b6d21ea59461',
    townId: 16,
    dungeonId: 1,
  },
  {
    name: 'Plegas\'s Labyrinth',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Fdungeon%2Fplegas-labyrinth.png?alt=media&token=c5fb27d7-af12-44d9-84e5-d03f512775e4',
    townId: 16,
    dungeonId: 2,
  },
]

export default DUNGEONS
