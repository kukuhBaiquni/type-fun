export interface TYPE_CONTRIBUTION {
  name: string
  path: string
  img: string
  list: Array<string>
}

export interface TYPE_DUNGEON {
  name: string
  img: string
  townId: number
  dungeonId: number
}

export interface TYPE_TOWN {
  name: string
  img: string
  bgColor: string
  textColor: string
  hoverTextColor?: string
  hoverBgColor: string
  townId: number,
}
