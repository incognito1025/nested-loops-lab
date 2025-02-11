const musicData = require("./data.json");
//console.log(musicData);

/**
 * This function should return an array of just the artist names from the musicData JSON.
 * @param {Object[]} artists - An array of objects. See the JSON file for more details.
 * @return {string[]}  An array of strings which are the names of each arist.
 */ 
// access the names artists within an object within an array
//keyword variable = arrayofObjects[0].name;
//for loop to go from one name to another
//for (i = 0; i <= musicData.length; i++)
//console.log(name)
function getAllArtistNames(artists) {
  let artist = [];
  for (let i = 0; i < artists.length; i++) {
    artist.push(artists[i].name); 
  } 
  return artist;
}
// console.log(getAllArtistNames(musicData));
/**
 *  This function should return an array of the artist album titles from the musicData JSON.
 * @param {Object[]} artists - An array of objects. See the JSON file for more details.
 * @return {string[]}  An array of strings which are the names of each album title from all the artists.
 */
function getAllAlbumTitles(artists) {
  let albumTitles = []; 
  for (let i = 0; i < artists.length; i++) {
    for (let j = 0; j < artists[i].albums.length; j++) {
   albumTitles.push(artists[i].albums[j].title);
  }
  }
return albumTitles;
}

/**
 *  This function should return an array of the all the song names from the musicData JSON.
 * @param {Object[]} artists - An array of objects. See the JSON file for more details.
 * @return {string[]}  An array of strings which are the names of every song from the JSON file.
 */
function getAllSongs(artists) {
  let allSongs = []; 
  for (let i = 0; i < artists.length; i++) {
    for (let j = 0; j < artists[i].albums.length; j++) {
      for (let k = 0; k < artists[i].albums[j].songs.length; k++) {
        allSongs.push(artists[i].albums[j].songs[k]);
      }
    }
}
  return allSongs;
}
// console.log(getAllSongs(musicData));

/**
 * Create a string that represents a checkboard. See the instructions.md for more details
 * @return {string} a string of spaces and # that represent a checkerboard that is 8 x 8.
 */
function simpleCheckerBoard() {
  let board = "";
  let size = 8;

  for (let row = 0; row < size; row++) { //outer loop for rows
    for (let col = 0; col < size; col++) { //inner loop for columns
      let isLightSquare = (row + col) % 2 === 0;//light or dark square
      board += isLightSquare ? " " : "#";
    }
      board += "\n";
  }
  return board;
  }
console.log(simpleCheckerBoard());
  

/**
 * Create a string that represents a checkboard. See the instructions.md for more details
 * @param {number} [rows = 4 ]- An integer that represents the number of rows to create.
 * @param {number} [cols = 4] - An integer that represents the number of columns to create.
 * @return {string} a string of spaces and # that represent a checkerboard that has the appropriate number of rows on columns based on the parameters passed.
 */
function dynamicCheckerBoard(rows = 4, cols = 4) {
  let board = "";

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const isLightSquare = (row + col) % 2 ===0;
      board += isLightSquare ? " " : "#";
    }
    board += "\n";
  }
  return board;
}
// console.log(dynamicCheckerBoard(rows = 4, cols = 4));


/**
 * Create an array of square objects that represent a chessboard. Please see instructions for more details
 * @return {Object[]} An array of square objects that have the following properties: piece, positionX, positionY, and color.
 */

function createChessBoard() {
  let board = [];
  let size = 8;

  for (let row = size - 1; row >= 0; row--) {
    let rowArray = [];

    for (let col = 0; col < size; col++) {
      let isLightSquare = (row + col) % 2 === 0;
      let squareColor = isLightSquare ? 'dark' : 'light';

      let square = {
        piece: null,
        positionX: size - row -1,
        positionY: col, 
        color: squareColor,
      };
      rowArray.push(square);
      }
    board.push(rowArray);
    }
  return board;
  }

/**
 * Update a square on the board to have a chess piece "on" it
 * @param {string} piece - An array of guest objects. See the instructions and tests for a full breakdown of what is in each guest object.
 * @param {number} row - An array of guest objects. See the instructions and tests for a full breakdown of what is in each guest object.
 * @param {number} column - An array of guest objects. See the instructions and tests for a full breakdown of what is in each guest object.
 * @return {Object{}}  The modified board array of objects.
 */
function addPieceToChessBoard(piece, row, column) {
  
  let board = [];
  let size = 8;
  
  for (let row = size - 1; row >= 0; row--) {
    let rowArray = [];
  
    for (let col = 0; col < size; col++) {
      let isLightSquare = (row + col) % 2 === 0;
      let squareColor = isLightSquare ? 'dark' : 'light';
  
      let square = {
        piece: null,
        positionX: size - row -1,
        positionY: col, 
        color: squareColor,
      };
      rowArray.push(square);
      }
    board.push(rowArray);
    }
    
    // understand this  
    board[row][column]["piece"] = piece;
  
    return board;
  }
   
  console.log(addPieceToChessBoard("rook", 3, 5));

module.exports = {
  getAllArtistNames,
  getAllAlbumTitles,
  getAllSongs,
  simpleCheckerBoard,
  dynamicCheckerBoard,
  createChessBoard,
  addPieceToChessBoard,
};
