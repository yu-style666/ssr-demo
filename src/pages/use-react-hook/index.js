import React, { useState } from "react";
import axios from "axios";

const UseReactHook = (props) => {
  const [count, setCount] = useState(0);
  const { songList } = props;

  console.log({ songs: songList });

  return (
    <div>
      <div>count: {count}</div>
      <button type='button' onClick={() => setCount(count + 1)}>
        click to add count
      </button>
      <div style={{ marginTop: "20px" }}>
        {Array(count)
          .fill("")
          .map((elem, index) => {
            return (
              <img key={String(index)} src='/static/icon_star.png' alt='图片' />
            );
          })}
      </div>
      <div style={{ marginTop: "20px" }}>
        <h4>网易云音乐热搜列表：</h4>
        {songList &&
          songList.result &&
          songList.result.hots.map((elem) => {
            return (
              <div key={elem.first} style={{ marginLeft: "20px" }}>
                {elem.first}
              </div>
            );
          })}
      </div>
    </div>
  );
};

UseReactHook.getInitialProps = async () => {
  const res = await axios.get("https://autumnfish.cn/search/hot");
  const songList = res.data;
  return { songList };
};

export default UseReactHook;
