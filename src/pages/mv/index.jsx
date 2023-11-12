import InfiniteScroll from 'react-infinite-scroll-component';
const Mv=()=>{
  const loadMore=()=>{
    console.log(111)
  }
  const list=[1,2,3,4,5]
  return (
    <div>
      Mv
      <InfiniteScroll
          dataLength={list.length}
          next={loadMore}
          hasMore={true}
          // hasMore={lists.length < total}
      >
          {list.map(item=><div key={item}>{item}</div>)}
      </InfiniteScroll>
    </div>
  )
}
export default Mv