export interface TYPE_CONTINENT {
  name: string
  description: string
  teritority: {
    name: string
    description: string
  }[]
}

const CONTINENT = {
  name: 'Elsword World',
  description: 'The Elsword World is the fantasy world created by KOG Studios, in which is depicted the story of Elsword.  According to the Lore of Elsword, the world of Elrios was once a desolate with life being scarce.  That all changed when the El was bestowed upon the land and life began to flourish.  The all mighty Ellian Kingdom was born surrounding the El until the day of the El Explosion, scattering the El all across Elrios giving birth to many villages and kingdoms.  The Elsword world consists of a major supercontinent called Elrios.  This supercontinent split into two continents, Lurensia and Fluone, due to the explosion of the El in the Festival of Harmony.',
  teritory: [
    {
      name: 'Lurensia',
      description: 'The Elrios supercontinent has been divided into two continents, Lurensia being the western one. Due to the El, Lurensia housed a fertile and prosperous environment and at the same time, filled it with the supreme energy of green earth.',
    },
    {
      name: 'Fluone',
      description: 'The Elrios continent exploded whilst in chaos, causing the colossal mountain to sink within the sea. After several months of pandemonium, the Elrios continent was eventually split into two separate continents.  From the Velder Kingdom in Lurensia, one can pass through the Velder Marina to the eastern Elrios Continent called Fluone.',
    },
    {
      name: 'Demon Realms',
      description: 'The opposite of the physical world that Elrios exists in.  Created by Elia during the creation of the two worlds, the Demon Realm became inhabited with creatures vastly different than those who exist in the physical world such as Glitters, Shadows, Incubi, Succubi, among many others.  This is where Lu originates from as well as many demon figures invading Elrios.',
    },
    {
      name: 'Other Location',
      description: '',
    },
  ],
}

export default CONTINENT
