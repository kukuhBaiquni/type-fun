export interface i_Towns {
  name: string
  img: string
  bgColor: string
  textColor: string
  hoverTextColor?: string
  hoverBgColor: string
  townId: number,
}

const TOWNS: i_Towns[] = [
  {
    name: 'Ruben',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Ftown%2Fruben.png?alt=media&token=d3b2870f-4dc0-49fc-8e5d-640284cd72b9',
    bgColor: 'bg-ruben',
    textColor: 'text-ruben dark:text-ruben-dark',
    hoverBgColor: 'hover:bg-ruben',
    townId: 0,
  },
  {
    name: 'Elder',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Ftown%2Felder.png?alt=media&token=274c5e82-6cca-4b4b-a8e1-d140a9c1af7f',
    bgColor: 'bg-elder',
    textColor: 'text-elder dark:text-elder-dark',
    hoverBgColor: 'hover:bg-elder',
    townId: 1,
  },
  {
    name: 'Bethma',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Ftown%2Fbethma.png?alt=media&token=391ab771-2c8c-4b8c-a5db-465691750929',
    bgColor: 'bg-bethma',
    textColor: 'text-bethma dark:text-bethma-dark',
    hoverBgColor: 'hover:bg-bethma',
    townId: 2,
  },
  {
    name: 'Altera',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Ftown%2Faltera.png?alt=media&token=8642c231-ec9a-4154-b59e-184490c22a82',
    bgColor: 'bg-altera',
    textColor: 'text-altera dark:text-altera-dark',
    hoverBgColor: 'hover:bg-altera',
    townId: 3,
  },
  {
    name: 'Feita',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Ftown%2Ffeita.png?alt=media&token=39d61809-b0e5-47fd-9d4d-332ed7ff5714',
    bgColor: 'bg-feita',
    textColor: 'text-feita dark:text-feita-dark',
    hoverBgColor: 'hover:bg-feita',
    townId: 4,
  },
  {
    name: 'Velder',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Ftown%2Fvelder.png?alt=media&token=4d36a19c-a2dd-426b-b03b-d778689106fd',
    bgColor: 'bg-velder',
    textColor: 'text-velder dark:text-velder-dark',
    hoverBgColor: 'hover:bg-velder',
    townId: 5,
  },
  {
    name: 'Hamel',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Ftown%2Fhamel.png?alt=media&token=9cd26e68-5fd8-40b6-a47b-6b600ba22d83',
    bgColor: 'bg-hamel',
    textColor: 'text-hamel dark:text-hamel-dark',
    hoverBgColor: 'hover:bg-hamel',
    townId: 6,
  },
  {
    name: 'Sander',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Ftown%2Fsander.png?alt=media&token=0937dda6-8793-48c5-af8e-25eeffc9ba58',
    bgColor: 'bg-sander',
    textColor: 'text-gray-600 dark:text-sander',
    hoverTextColor: 'hover:text-gray-600 dark:hover:text-gray-600',
    hoverBgColor: 'hover:bg-sander',
    townId: 7,
  },
  {
    name: 'Lanox',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Ftown%2Flanox.png?alt=media&token=afe5ab61-6dd2-4d27-8c51-2327fc9ea0d6',
    bgColor: 'bg-lanox',
    textColor: 'text-lanox dark:text-lanox-dark',
    hoverBgColor: 'hover:bg-lanox',
    townId: 8,
  },
  {
    name: 'Atlas',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Ftown%2Fatlas.png?alt=media&token=11a9e960-b2c2-489a-a06d-259ef205d043',
    bgColor: 'bg-atlas',
    textColor: 'text-atlas dark:text-atlas-dark',
    hoverBgColor: 'hover:bg-atlas',
    townId: 9,
  },
  {
    name: 'Elysion',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Ftown%2Felysion.png?alt=media&token=7b3b2019-e678-4cb2-9386-cca1f57cf723',
    bgColor: 'bg-elysion',
    textColor: 'text-elysion dark:text-elysion-dark',
    hoverBgColor: 'hover:bg-elysion',
    townId: 10,
  },
  {
    name: 'Elrianode',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Ftown%2Felrianode.png?alt=media&token=d9a74d9c-7021-4607-a4f0-a4c42bda319f',
    bgColor: 'bg-elrianode',
    textColor: 'text-elrianode dark:text-elrianode-dark',
    hoverBgColor: 'hover:bg-elrianode',
    townId: 11,
  },
  {
    name: 'Varnimyr',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Ftown%2Fvarnimyr.png?alt=media&token=510cb5a8-ce59-4b1f-8c17-0833ef04d056',
    bgColor: 'bg-varnimyr',
    textColor: 'dark:text-gray-400 text-varnimyr',
    hoverBgColor: 'hover:bg-varnimyr',
    townId: 12,
  },
  {
    name: 'Rigomor',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Ftown%2Fgeneral.png?alt=media&token=7ff1d45d-76d9-403b-9cb0-b04442a9d8d7',
    bgColor: 'bg-rigomor',
    textColor: 'text-rigomor dark:text-rigomor-dark',
    hoverBgColor: 'hover:bg-rigomor',
    townId: 13,
  },
  {
    name: 'Master Road',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Ftown%2Fgeneral.png?alt=media&token=7ff1d45d-76d9-403b-9cb0-b04442a9d8d7',
    bgColor: 'bg-master-road',
    textColor: 'text-master-road dark:text-master-road-dark',
    hoverBgColor: 'hover:bg-master-road',
    townId: 14,
  },
  {
    name: 'Pruinaum',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Ftown%2Fpruinaum.png?alt=media&token=68a73b33-0e7c-4fa6-8036-d952ab02f467',
    bgColor: 'bg-pruinaum',
    textColor: 'text-pruinaum dark:text-pruinaum-dark',
    hoverBgColor: 'hover:bg-pruinaum',
    townId: 15,
  },
  {
    name: 'Pruinaum Outskirt',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Ftown%2Fgeneral.png?alt=media&token=7ff1d45d-76d9-403b-9cb0-b04442a9d8d7',
    bgColor: 'bg-pruinaum-outskirt',
    textColor: 'text-pruinaum-outskirt dark:text-pruinaum-outskirt-dark',
    hoverBgColor: 'hover:bg-pruinaum-outskirt',
    townId: 16,
  },
]

export default TOWNS
