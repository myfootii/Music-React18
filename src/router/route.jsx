import { lazy } from 'react';
const Home = lazy(()=>import('@/views/home'))
const Rank = lazy(()=>import('@/views/rank'))
const PlayList = lazy(()=>import('@/views/playList'))
const PlayListDetail = lazy(()=>import('@/views/playList/detail'))
const Song = lazy(()=>import('@/views/song'))



const routeList=[
      {
        path: "/",
        icon: 'home',
        name: "主页",
        index:true,
        element:<Home/>
      },
      {
          path: "rank",
          icon: 'rank',
          name: "排行榜",
          isNav: true,
          element: <Rank />
      },
      {
          path: "playlist",
          icon: 'playlist',
          name: "歌单",
          isNav: true,
          element: <PlayList />
      },
      {
        path: "/playlist/detail",
        element: <PlayListDetail />
      },
      // {
      //     path: "mv",
      //     icon: 'mvlist',
      //     name: "MV",
      //     isNav: true,
      //     element: <Mv />
      // },
      // {
      //     path: "/singer",
      //     icon: 'singer',
      //     name: "歌手",
      //     isNav: true,
      //     element: <Singer />
      // },
      {
        path: "/song",
        element: <Song />
      },
    ]
  
//   },
//   {
//       path: "/song",
//       element: <Song />
//   },
//   {
//     path:'*',
//     element:<div>404</div>
//   },
// ])

export default routeList;