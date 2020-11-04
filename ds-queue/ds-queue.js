/* CODE GOES HERE
 * Don't forget newlines at the end of all files :) */
var Queue = function() {
  this._storage = {};
  this.rear = 0;
  this.front = 0;
};

Queue.prototype.add = function(value) {
   //뒤에 값추가
  this._storage[this.rear] = value;
  this.rear ++;
};

Queue.prototype.remove = function() {
  if(this.rear - this.front === 0){
    return undefined;
  }
  let del = this._storage[this.front];
  delete this._storage[this.front];
  this.front++;
  return del;// 앞쪽에서 값 나가기 
};

module.exports = Queue;