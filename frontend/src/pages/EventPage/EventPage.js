import React from "react";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navbar/NavBar";
import "./eventpage.css";
import Hero from "../../components/heroSection/Hero";
import { GoCommentDiscussion, GoHeart } from "react-icons/go";

const data = {
  title: "Game Arena",
  creator: "Egnokoji",
  location: "Luanda, Talatona",
  date: "10 Setembro 2022",
  time: "10:30",
};

const EventPage = () => {
  return (
    <div className="eventPage-container">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="eventPage-hero">
        <Hero data={data} />
      </div>
      <div className="eventPage-content">
        <div className="left">
          <div className="description">
            <p>Description</p>
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
          </div>
          <div className="contact">
            <p>How can I contact the organizer?</p>
            <div>
              <p>Organizer social network</p>
              <div>
                <p>Facebook</p>
                <p>Instagram</p>
                <p>Twitter</p>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="location">
            <p className="title">Event Location</p>
            <div className="map">
              <img src="./image/Simple-Location-Picker.webp" alt="map" />
            </div>
            <div className="map-location">
              <p>{data.title}</p>
              <p>{data.location}</p>
            </div>
          </div>
          <div className="taags">
            <p>Tags</p>
            <div className="tags">
              <p>Event</p> <p>Arena</p> <p>Game</p>
              <p>Game</p>
            </div>
          </div>
          <div className="share">Share</div>
        </div>
      </div>
      <div className="eventPage-footer">
        <p>Others Events You May Like</p>
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
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default EventPage;
