const API_KEY = "AIzaSyCyq8ia0zL3TKxdjUK6ipQJf2ys_VihAYk";
export const YOUTUBE_API_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  API_KEY;
export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const YOUTUBE_QUERY_SEARCH_API =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&key=" +
  API_KEY +
  "&q=";

  export const CHAT_MESSAGES_LIMIT = 50;
  export const CHAT_API_FETCH_SPEED = 1500;
