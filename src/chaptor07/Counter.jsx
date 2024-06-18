import React, { useState, useEffect } from "react";

export default function Counter(props) {
  const [isOnline, setIsOnline] = useState(null)
  useEffect(() => {
    document.title = `총 ${count}번 클릭했습니다.`
  })

  const [count, setCount] = useState(0);

  function handleStatusChange(status){
    setIsOnline(status.isOnline)
  }

  /* useEffect(() => {
    ServerAPI.subscribeUserStatu(props.user.id, handleStatusChange)
    return () => {
      ServerAPI.subscribeUserStatu(props.user.id, handleStatusChange)
    }
    
   
  });*/

  if (isOnline == null){
  return '대기 중...'
  }
  return isOnline ? '온라인' : '오프라인'

  // return (
  //   <div>
  //     <p>총 {count}번 클릭했습니다.</p>
  //     <button onClick={() => setCount(count + 1)}>
  //       클릭
  //     </button>
  //   </div>
  // );
}


