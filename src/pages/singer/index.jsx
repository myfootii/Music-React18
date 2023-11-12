import { useEffect, useRef,useState,memo,useMemo } from 'react';

const MemoSon=(memo(function Son(){
  console.log('hhh')
  const [num,setNum]=useState(0)
  return (
    <div>
      <button onClick={()=>setNum(num+1)}>{num}</button>
    </div>
  )

}))

const Singer=()=>{
  onst [count,setCount]=useState(0)

  const list=useMemo(()=>{return [1,2,3]},[])
  return (
    <div>
      Singer
      <MemoSon list={list}/>
      <button onClick={()=>setCount(count+1)}>{count}</button>
    </div>
  )
}
export default Singer