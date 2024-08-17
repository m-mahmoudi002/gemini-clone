import React, { useContext } from "react";
import "./Main.css";
import photo1 from "./photos/photo1.png";
import images from "./photos/images.png";
import { Context } from "./Context";

function Main() {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);
  return (
    <div className="Main">
      <div className="main-top">
        <h1>Gemini</h1>
        <img src={photo1} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p id="hello">Hello, there!</p>

              <p>
                <span> How can I help you today?</span>
              </p>
            </div>
            <div class="cards">
              <div class="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <i class="fa-regular fa-compass"></i>
              </div>
              <div class="card">
                <p>Briefly summarize this concept: urban planning</p>
                <i class="fa-regular fa-lightbulb"></i>
              </div>
              <div class="card">
                <p>Brainstorm team bonding activities for our work retreat</p>
                <i class="fa-regular fa-file-lines"></i>
              </div>
              <div class="card">
                <p>Tell me about React js and React native</p>
                <i class="fa-solid fa-code"></i>
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={photo1} />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={images} />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Search..."
            />
            <div>
              {input ? (
                <i
                  onClick={() => onSent()}
                  class="fa-solid fa-circle-arrow-up"
                ></i>
              ) : null}
            </div>
          </div>
          <p>Gemini can make mistakes. Check important info.</p>
        </div>
      </div>
    </div>
  );
}

export default Main;
