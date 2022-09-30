const DUMMY_EVENTS = [{
  "_id": "60c09b1b1756293ce89e91bc",
  "Title": "Batman: The Animated Series",
  "Year": "1992–1995",
  "Poster": "https://m.media-amazon.com/images/M/MV5BOTM3MTRkZjQtYjBkMy00YWE1LTkxOTQtNDQyNGY0YjYzNzAzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_SX300.jpg",
  "Ratings": "9.0",
  "imdbID": "tt0103359",
  "__v": 0
},{
  "_id": "60c09dd65d26c601cc1f9e60",
  "Title": "Superman: Doomsday",
  "Year": "2007",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMmJhN2RmMTUtMDMzMy00YTQ4LWEyZDMtOGM1NWVmMDE3NTBjXkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg",
  "Ratings": "7.0",
  "imdbID": "tt0934706",
  "__v": 0
},{
  "_id": "60c09ff0095b1f599479eb35",
  "Title": "Lois & Clark: The New Adventures of Superman",
  "Year": "1993–1997",
  "Poster": "https://m.media-amazon.com/images/M/MV5BZTU1ZGFjNzEtZWYzZC00ZmI0LTg2NmMtN2YyNTY4YzhlODIyXkEyXkFqcGdeQXVyMjExMjk0ODk@._V1_SX300.jpg",
  "imdbRating": "6.7",
  "imdbID": "tt0106057",
  "__v": 0
},{
  "_id": "60c0a007095b1f599479eb36",
  "Title": "Superman Returns",
  "Year": "2006",
  "Poster": "https://m.media-amazon.com/images/M/MV5BNzY2ZDQ2MTctYzlhOC00MWJhLTgxMmItMDgzNDQwMDdhOWI2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
  "imdbRating": "6.0",
  "imdbID": "tt0348150",
  "__v": 0
},{
  "_id": "60c0a01b095b1f599479eb37",
  "Title": "Batman v Superman: Dawn of Justice",
  "Year": "2016",
  "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  "imdbRating": "6.4",
  "imdbID": "tt2975590",
  "__v": 0
},{
  "_id": "60c0a1e0a619a32600165ad0",
  "Title": "Batman v Superman: Dawn of Justice",
  "Year": "2016",
  "imdbID": "tt2975590",
  "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  "__v": 0
},{
  "_id": "60c0a1e0a619a32600165ad1",
  "Title": "Superman Returns",
  "Year": "2006",
  "imdbID": "tt0348150",
  "Poster": "https://m.media-amazon.com/images/M/MV5BNzY2ZDQ2MTctYzlhOC00MWJhLTgxMmItMDgzNDQwMDdhOWI2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
  "__v": 0
},{
  "_id": "60c0a1e0a619a32600165ad2",
  "Title": "Superman",
  "Year": "1978",
  "imdbID": "tt0078346",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMzA0YWMwMTUtMTVhNC00NjRkLWE2ZTgtOWEzNjJhYzNiMTlkXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
  "__v": 0
},{
  "_id": "60c0a1e0a619a32600165ad3",
  "Title": "Superman II",
  "Year": "1980",
  "imdbID": "tt0081573",
  "Poster": "https://m.media-amazon.com/images/M/MV5BODk2NjgzNTEtYzZhZC00ZTBkLTllMGQtMmMxMzU1NDRkM2RlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
  "__v": 0
},{
  "_id": "60c0a1e0a619a32600165ad4",
  "Title": "Superman III",
  "Year": "1983",
  "imdbID": "tt0086393",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMzI3ZDllMTctNmI2Mi00OGQ4LTk2ZTQtYTJhMjA5ZGI2YmRkXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
  "__v": 0
},{
  "_id": "60c0a1e0a619a32600165ad5",
  "Title": "Superman IV: The Quest for Peace",
  "Year": "1987",
  "imdbID": "tt0094074",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMmIwZWY1YTYtNDlhOS00NDRmLWI4MzItNjk2NDc1N2NhYzNlXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_SX300.jpg",
  "__v": 0
},{
  "_id": "60c0b1e67291c85c50a208c9",
  "Title": "The Amazing Spiderman T4 Premiere Special",
  "Year": "2012",
  "imdbID": "tt2233044",
  "Poster": "N/A",
  "__v": 0
},{
  "_id": "60c0b1e67291c85c50a208ca",
  "Title": "Spiderman in Cannes",
  "Year": "2016",
  "imdbID": "tt5978586",
  "Poster": "https://m.media-amazon.com/images/M/MV5BZDlmMGQwYmItNTNmOS00OTNkLTkxNTYtNDM3ZWVlMWUyZDIzXkEyXkFqcGdeQXVyMTA5Mzk5Mw@@._V1_SX300.jpg",
  "__v": 0
},{
  "_id": "60c0b1e67291c85c50a208cb",
  "Title": "Amazing Spiderman Syndrome",
  "Year": "2012",
  "imdbID": "tt2586634",
  "Poster": "N/A",
  "__v": 0
}]

export default function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((events) => events)
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });

  return filteredEvents;
}

export function getEventById(id) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}
