import React, { useState } from "react";

const MyImage = ({ amazonImages = [{ url: "" }] }) => {
  const [mainimg, setmaiimg] = useState(amazonImages[0]);
  return (
    <React.Fragment>
      <section className=" flex items-center">
        <div>
          {amazonImages &&
            amazonImages.map((curElm, index) => {
              return (
                <section>
                  <div className=" mb-4">
                    <img
                      className=" w-[200px]"
                      src={curElm.url}
                      key={index}
                      alt={curElm.filename}
                      onClick={() => setmaiimg(curElm)}
                    />
                  </div>
                </section>
              );
            })}
        </div>
        <div className="mainpic items-center p-5">
          <img src={mainimg.url} alt={mainimg.filename} />
        </div>
      </section>
    </React.Fragment>
  );
};

export default MyImage;
