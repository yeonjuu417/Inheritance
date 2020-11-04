/* CODE GOES HERE
 * Don't forget newlines at the end of all files :) */
var Queue = function() {
  this._storage = {};
  this.rear = 0;
  this.front = 0;
};

Queue.prototype.add = function(value) {
  this.rear ++; //뒤에 값추가
  this._storage[this.rear] = value;
};

Queue.prototype.remove = function(value) {
  if(this.rear === this.front){
    return undefined;
  }
  this.front++;
  return this._storage[this.front];// 앞쪽에서 값 나가기 
};

module.exports = Queue;