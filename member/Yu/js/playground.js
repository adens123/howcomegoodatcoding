// 等差數列 2n-1

// 建立一個印出空格跟星星的函式
function printStars(space, stars) {
  let result = "";
  for (let i = 0; i < space; i++) {
    result += " ";
  }
  for (let i = 0; i < stars; i++) {
    result += "*";
  }
  console.log(result);
}

function pyramid(num) {
  // 初始化，0空格1星
  let stars = 1;
  let space = num - 1;

  // 最後一行會是0空格，就會停止迴圈
  while (space >= 0) {
    printStars(space, stars);

    // 下一行星星會加2個，空格減1個
    stars += 2;
    space -= 1;
  }
}
