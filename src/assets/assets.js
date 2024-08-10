import bell_icon from "./icons/bell.png";
import home_icon from "./icons/home.png";
import like_icon from "./icons/like.png";
import loop_icon from "./icons/loop.png";
import mic_icon from "./icons/mic.png";
import next_icon from "./icons/next.png";
import play_icon from "./icons/play.png";
import pause_icon from "./icons/pause.png";
import plays_icon from "./icons/plays.png";
import prev_icon from "./icons/prev.png";
import search_icon from "./icons/search.png";
import shuffle_icon from "./icons/shuffle.png";
import speaker_icon from "./icons/speaker.png";
import stack_icon from "./icons/stack.png";
import zoom_icon from "./icons/zoom.png";
import plus_icon from "./icons/plus.png";
import arrow_icon from "./icons/arrow.png";
import mini_player_icon from "./icons/mini-player.png";
import queue_icon from "./icons/queue.png";
import volume_icon from "./icons/volume.png";
import arrow_right from "./icons/right_arrow.png";
import arrow_left from "./icons/left_arrow.png";
import spotify_logo from "./images/spotify_logo.png";
import clock_icon from "./icons/clock_icon.png";

import imgA from "./images/imgA.jpg";
import imgB from "./images/imgB.jpg";
import imgD from "./images/imgD.jpg";
import imgC from "./images/imgC.jpg";
import imgE from "./images/imgE.jpg";
import imgF from "./images/imgF.jpg";

import img2 from "./images/img2.png";
import img1 from "./images/img1.png";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";
import img5 from "./images/img5.png";
import img6 from "./images/img6.png";
import img7 from "./images/img7.png";
import img8 from "./images/img8.png";
import img9 from "./images/img9.png";
import img10 from "./images/img10.png";
import img11 from "./images/img11.png";
import img12 from "./images/img12.png";

import song1 from "./audio/Tauba Tauba.mp3";
import song2 from "./audio/Aaj Ki Raat.mp3";
import song3 from "./audio/Suniyan.mp3";
import song4 from "./audio/O Sajni Re.mp3";
import song5 from "./audio/Ve Kamleya.mp3";
import song6 from "./audio/Satranga.mp3";
import song7 from "./audio/Tum Se.mp3";
import song8 from "./audio/Aayi Nahi.mp3";
import song9 from "./audio/Softly.mp3";
import song10 from "./audio/Dekha.mp3";
import song11 from "./audio/Angaaron.mp3";
import song12 from "./audio/Taras.mp3";

export const assets = {
  bell_icon,
  home_icon,
  like_icon,
  loop_icon,
  mic_icon,
  next_icon,
  play_icon,
  plays_icon,
  prev_icon,
  search_icon,
  shuffle_icon,
  speaker_icon,
  stack_icon,
  zoom_icon,
  plus_icon,
  arrow_icon,
  mini_player_icon,
  volume_icon,
  queue_icon,
  pause_icon,
  arrow_left,
  arrow_right,
  spotify_logo,
  clock_icon,
};

export const albumsData = [
  {
    id: 0,
    name: "Top 50 Global",
    image: imgA,
    desc: "Your daily update of the most played tracks right now - Global.",
    bgColor: "#2a4365",
  },
  {
    id: 1,
    name: "Top 50 India",
    image: imgB,
    desc: "Your daily update of the most played tracks right now - India.",
    bgColor: "#22543d",
  },
  {
    id: 2,
    name: "Trending India",
    image: imgC,
    desc: "Your weekly update of the most played tracks right now - India.",
    bgColor: "#742a2a",
  },
  {
    id: 3,
    name: "Trending Global",
    image: imgD,
    desc: "Your daily update of the most played tracks right now - Global.",
    bgColor: "#44337a",
  },
  {
    id: 4,
    name: "Mega Hits,",
    image: imgE,
    desc: "A mega mix of 75 favorites from the last few years!",
    bgColor: "#234e52",
  },
  {
    id: 5,
    name: "Happy Favorites",
    image: imgF,
    desc: "Put a smile on your face with these happy tunes from the last 30 years.",
    bgColor: "#744210",
  },
];

export const songsData = [
  {
    id: 0,
    name: "Tauba Tauba",
    image: img1,
    file: song1,
    desc: "Karan Aujla",
    duration: "3:27",
  },
  {
    id: 1,
    name: "Aaj ki Raat",
    image: img2,
    file: song2,
    desc: "Sachin Jigar, Amitabh Bhattacharya",
    duration: "3:48",
  },
  {
    id: 2,
    name: "Suniyan",
    image: img3,
    file: song3,
    desc: "Juss, MixSingh",
    duration: "3:30",
  },
  {
    id: 3,
    name: "Sajni",
    image: img4,
    file: song4,
    desc: "Ram Sampath, Arijit Singh, Pranshant Pandey",
    duration: "2:50",
  },
  {
    id: 4,
    name: "Ve Kamleya",
    image: img5,
    file: song5,
    desc: "Arijit Singh, Shreya Ghoshal",
    duration: "2:58",
  },
  {
    id: 5,
    name: "Satranga",
    image: img6,
    file: song6,
    desc: "Arijit Singh, Shreyas Puranik, Siddarth-Garima",
    duration: "4:31",
  },
  {
    id: 6,
    name: "Tum se",
    image: img7,
    file: song7,
    desc: "Sachin Jigar, Raghav Chaitanya, Varun Jain",
    duration: "2:45",
  },
  {
    id: 7,
    name: "Aayi Nahi",
    image: img8,
    file: song8,
    desc: "Sachin Jigar,Amitabh Bhattacharya, Pawan Singh",
    duration: "2:58",
  },

  {
    id: 8,
    name: "Softly",
    image: img9,
    file: song9,
    desc: "Karan Aujla, Ikky",
    duration: "2:35",
  },
  {
    id: 9,
    name: "Dekha Tenu",
    image: img10,
    file: song10,
    desc: "Mohammad Faiz, Jaani",
    duration: "4:41",
  },
  {
    id: 10,
    name: "Angaaron",
    image: img11,
    file: song11,
    desc: "Shreya Ghoshal, Devi Sri Prasad, Raqueeb Alam",
    duration: "4:24",
  },
  {
    id: 11,
    name: "Taras",
    image: img12,
    file: song12,
    desc: "Sachin Jigar, Jasmin Sandlas, Amitabh Bhattacharya",
    duration: "2:46",
  },
];
