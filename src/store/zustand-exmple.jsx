import {create} from 'zustand'
import {persist} from 'zustand/middleware' //做本地存储用的
import { mountStoreDevtool } from 'simple-zustand-devtools' //react连接zustand
import { concatPlayList } from '@/utils/util'
import { playList } from '@/apis/home'

//一次性添加歌单的操作
const concatList=(list,playList=[])=>{
  const arr=list.filter(item=> {return !item.license&& !item.vip}) //有版权并无vip
  console(arr)
  return concatPlayList(arr,playList)
}

//当前歌曲在播放列表的索引
const findIndex=(curSong,playList)=>{
  return playList.findIndex(id=>id===curSong.id)
}

let timer=null
//延迟函数
const clearTimer=(set)=>{
  clearTimeout(timer);
  timer=setTimeout(()=>{
    set({
      tipsInfo:{
        visiable: false,
        text: ''
        }
    })
  },3000)
}

const playListInfoStore= create(
  persist((set,get)=>({
    playList:[],  //当前播放列表
    playIndex: 0, //当前播放索引
    isPlayed: false, //当前是否播放音乐

    tipsInfo: {
      visiable: false,
      text: ''
    },

    setPlayed:(flag)=>set(()=>({isPlayed:flag})),
    //播放选中歌曲
    selectPlay:(list)=>{
      const playList=concatList(list,get().playList)
      const playIndex=findIndex(list[0],playList)

      set({
        playList,
        playIndex,
        isPlayed: true,
        tipsInfo: {
          visiable: true,
          text: '已经开始播放'
        },        
      })
      clearTimer(set)
    },
    //添加歌曲
    addToList:(List)=>{
      const playList=concatList(list.get().playList)
      set({
        playList,
        tipsInfo: {
          visiable: true,
          text: '已添加到播放列表'
        }, 
      })
      clearTimer(set)
    },

    // 播放歌曲列表里全部歌曲（清空当前播放列表）
    playAllSong (list) {
      // 之前的不要了用这个
      const playList = concatList(list);

      set({
          playList,
          isPlayed: true,
          tipsInfo: {
              visiable: true,
              text: '已添加到播放列表'
          },
          playIndex: 0
      });

      clearTimer(set);
    },
    // 当前播放歌曲的索引值
    setPlayIndex(val = 0) {
      set({
          playIndex: val
      });
    },
    // 设置当前播放列表
    setPlayList(val = []) {
      set({
          playList: val
    });
  }


  }),{
    name:'PLAYLIST',
    partialize:(state)=>({
      playList: state.playList,
      playIndex: state.playIndex
    })
  }
  )
)

mountStoreDevtool('playListInfoStore',playListInfoStore)
export { playListInfoStore }

