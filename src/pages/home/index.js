import React from "react";
import axios from "axios";

export default class Home extends React.Component {
  static async getInitialProps() {
    const res = await axios.get(
      "https://autumnfish.cn/search?keywords=%E6%B5%B7%E9%98%94%E5%A4%A9%E7%A9%BA"
    );

    const songList = res.data;

    return { songList };
  }

  render() {
    const { songList } = this.props;

    console.log({ songList });

    return (
      <div>
        <div style={{ marginTop: "20px" }}>
          <h4>搜索《海阔天空》:</h4>
          {songList &&
            songList.result &&
            songList.result.songs.map((elem) => {
              return (
                <div key={elem.id} style={{ marginLeft: "20px" }}>
                  {elem.name}
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
