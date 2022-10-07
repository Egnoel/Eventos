import React from "react";
import { ChatState } from "../../context/ChatProvider";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navbar/NavBar";
import {
  GoChevronDown,
  GoChevronLeft,
  GoChevronRight,
  GoCommentDiscussion,
  GoHeart,
} from "react-icons/go";
import "./searchpage.css";

const SearchPage = () => {
  const { user } = ChatState();

  return (
    <div className="searchpage-container">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="content">
        <div className="filter">
          <div className="filter-top">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search Any Event"
            />
            <button>Search</button>
          </div>
          <div className="filter-down">
            <div className="weekdays">
              Weekdays
              <GoChevronDown className="icon" />
            </div>
            <div className="eventType">
              EventType
              <GoChevronDown className="icon" />
            </div>
            <div className="eventCategory">
              Any Category
              <GoChevronDown className="icon" />
            </div>
          </div>
        </div>
        <div className="eventlist-content">
          <div className="content">
            <div className="reaction">
              <div className="price">1500Kz</div>

              <div className="like">
                <div className="icon">
                  <GoCommentDiscussion className="item chat" />
                </div>
                <div className="icon">
                  <GoHeart className="item" />
                </div>
              </div>
            </div>
            <div className="upp">
              <img src="./image/arcade.jpg" alt="imageTest" className="image" />
            </div>
            <div className="down">
              <div className="left">
                <p className="month">Sept</p>
                <p className="day">18</p>
              </div>
              <div className="right">
                <p className="title">Game Arena</p>
                <p className="text">It is a long established fact.</p>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="reaction">
              <div className="price">1000Kz</div>

              <div className="like">
                <div className="icon">
                  <GoCommentDiscussion className="item chat" />
                </div>
                <div className="icon">
                  <GoHeart className="item" />
                </div>
              </div>
            </div>
            <div className="upp">
              <img src="./image/club.jpg" alt="imageTest" className="image" />
            </div>
            <div className="down">
              <div className="left">
                <p className="month">Sept</p>
                <p className="day">17</p>
              </div>
              <div className="right">
                <p className="title">Game Arena</p>
                <p className="text">It is a long established fact.</p>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="reaction">
              <div className="price">FREE</div>

              <div className="like">
                <div className="icon">
                  <GoCommentDiscussion className="item chat" />
                </div>
                <div className="icon">
                  <GoHeart className="item" />
                </div>
              </div>
            </div>
            <div className="upp">
              <img src="./image/colors.jpg" alt="imageTest" className="image" />
            </div>
            <div className="down">
              <div className="left">
                <p className="month">Sept</p>
                <p className="day">16</p>
              </div>
              <div className="right">
                <p className="title">Game Arena</p>
                <p className="text">It is a long established fact.</p>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="reaction">
              <div className="price">2500Kz</div>

              <div className="like">
                <div className="icon">
                  <GoCommentDiscussion className="item chat" />
                </div>
                <div className="icon">
                  <GoHeart className="item" />
                </div>
              </div>
            </div>
            <div className="upp">
              <img src="./image/cycle.jpg" alt="imageTest" className="image" />
            </div>
            <div className="down">
              <div className="left">
                <p className="month">Sept</p>
                <p className="day">15</p>
              </div>
              <div className="right">
                <p className="title">Game Arena</p>
                <p className="text">It is a long established fact.</p>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="reaction">
              <div className="price">2500Kz</div>

              <div className="like">
                <div className="icon">
                  <GoCommentDiscussion className="item chat" />
                </div>
                <div className="icon">
                  <GoHeart className="item" />
                </div>
              </div>
            </div>
            <div className="upp">
              <img src="./image/dj.jpg" alt="imageTest" className="image" />
            </div>
            <div className="down">
              <div className="left">
                <p className="month">Sept</p>
                <p className="day">14</p>
              </div>
              <div className="right">
                <p className="title">Game Arena</p>
                <p className="text">It is a long established fact.</p>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="reaction">
              <div className="price">FREE</div>

              <div className="like">
                <div className="icon">
                  <GoCommentDiscussion className="item chat" />
                </div>
                <div className="icon">
                  <GoHeart className="item" />
                </div>
              </div>
            </div>
            <div className="upp">
              <img src="./image/expo.jpg" alt="imageTest" className="image" />
            </div>
            <div className="down">
              <div className="left">
                <p className="month">Sept</p>
                <p className="day">13</p>
              </div>
              <div className="right">
                <p className="title">Game Arena</p>
                <p className="text">It is a long established fact.</p>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="reaction">
              <div className="price">1500Kz</div>

              <div className="like">
                <div className="icon">
                  <GoCommentDiscussion className="item chat" />
                </div>
                <div className="icon">
                  <GoHeart className="item" />
                </div>
              </div>
            </div>
            <div className="upp">
              <img src="./image/arcade.jpg" alt="imageTest" className="image" />
            </div>
            <div className="down">
              <div className="left">
                <p className="month">Sept</p>
                <p className="day">18</p>
              </div>
              <div className="right">
                <p className="title">Game Arena</p>
                <p className="text">It is a long established fact.</p>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="reaction">
              <div className="price">1000Kz</div>

              <div className="like">
                <div className="icon">
                  <GoCommentDiscussion className="item chat" />
                </div>
                <div className="icon">
                  <GoHeart className="item" />
                </div>
              </div>
            </div>
            <div className="upp">
              <img src="./image/club.jpg" alt="imageTest" className="image" />
            </div>
            <div className="down">
              <div className="left">
                <p className="month">Sept</p>
                <p className="day">17</p>
              </div>
              <div className="right">
                <p className="title">Game Arena</p>
                <p className="text">It is a long established fact.</p>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="reaction">
              <div className="price">FREE</div>

              <div className="like">
                <div className="icon">
                  <GoCommentDiscussion className="item chat" />
                </div>
                <div className="icon">
                  <GoHeart className="item" />
                </div>
              </div>
            </div>
            <div className="upp">
              <img src="./image/colors.jpg" alt="imageTest" className="image" />
            </div>
            <div className="down">
              <div className="left">
                <p className="month">Sept</p>
                <p className="day">16</p>
              </div>
              <div className="right">
                <p className="title">Game Arena</p>
                <p className="text">It is a long established fact.</p>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="reaction">
              <div className="price">2500Kz</div>

              <div className="like">
                <div className="icon">
                  <GoCommentDiscussion className="item chat" />
                </div>
                <div className="icon">
                  <GoHeart className="item" />
                </div>
              </div>
            </div>
            <div className="upp">
              <img src="./image/cycle.jpg" alt="imageTest" className="image" />
            </div>
            <div className="down">
              <div className="left">
                <p className="month">Sept</p>
                <p className="day">15</p>
              </div>
              <div className="right">
                <p className="title">Game Arena</p>
                <p className="text">It is a long established fact.</p>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="reaction">
              <div className="price">2500Kz</div>

              <div className="like">
                <div className="icon">
                  <GoCommentDiscussion className="item chat" />
                </div>
                <div className="icon">
                  <GoHeart className="item" />
                </div>
              </div>
            </div>
            <div className="upp">
              <img src="./image/dj.jpg" alt="imageTest" className="image" />
            </div>
            <div className="down">
              <div className="left">
                <p className="month">Sept</p>
                <p className="day">14</p>
              </div>
              <div className="right">
                <p className="title">Game Arena</p>
                <p className="text">It is a long established fact.</p>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="reaction">
              <div className="price">FREE</div>

              <div className="like">
                <div className="icon">
                  <GoCommentDiscussion className="item chat" />
                </div>
                <div className="icon">
                  <GoHeart className="item" />
                </div>
              </div>
            </div>
            <div className="upp">
              <img src="./image/expo.jpg" alt="imageTest" className="image" />
            </div>
            <div className="down">
              <div className="left">
                <p className="month">Sept</p>
                <p className="day">13</p>
              </div>
              <div className="right">
                <p className="title">Game Arena</p>
                <p className="text">It is a long established fact.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="eventlist-footer">
          <GoChevronLeft className="icon-left" />
          <GoChevronRight className="icon-right" />
          <div className="numbers">
            <p>1</p>
            <p>2</p>
            <p>3</p>
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default SearchPage;
