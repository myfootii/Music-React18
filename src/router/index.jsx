import Home from "@/pages/home";
import { createBrowserRouter } from "react-router-dom";
import Rank from "@/pages/rank";
import PlayList from "@/pages/playList";
import PlayListDetail from "@/pages/playList/detail";
import Mv from "@/pages/mv";
import Singer from "@/pages/singer";
import Song from "@/pages/song";
import LayoutMain from "@/pages/Layout";



const router=createBrowserRouter([
  {
    path:'/',
    element:<LayoutMain/>,
    children:[
      {
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
      {
          path: "mv",
          icon: 'mvlist',
          name: "MV",
          isNav: true,
          element: <Mv />
      },
      {
          path: "/singer",
          icon: 'singer',
          name: "歌手",
          isNav: true,
          element: <Singer />
      },
      {
        path: "/song",
        element: <Song />
      },
    ]
  
  },
  {
      path: "/song",
      element: <Song />
  },
  {
    path:'*',
    element:<div>404</div>
  },
])

export default router