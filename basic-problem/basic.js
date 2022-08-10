const objs = (str, num) => {
  return str[num - 1];
};

const reslut1 = objs("erer4yt", 1);

const reslut3 = objs("klielge", 1);
console.log(reslut1, reslut3);

const myFunction = (str1, str2) => {
  // first solve method
  const result = str2.split(str1).length - 1;
  return result;

  // second solve method
  const result2 = str2.split("").filter((item) => item == str1).length;
  return result2;
};

const repeatTime = myFunction(
  "m",
  "how many times does the character occur in this sentence?"
);
console.log(repeatTime);

const splitFun = (a) => {
  // first solve method
  const resul = a.toString();
  const resul1 = resul.split("");
  const result = resul1.map(Number);
  return result;

  // second solve method
  const string = a + "";
  const strings = string.split("");
  return strings.map((item) => Number(item));
  //   return [...(a + "")].map(Number);
};
const res = splitFun(345);
console.log(res);

const interFun = (a) => {
  // first solve method
  const string = a.toString().split(".");
  return string.length === 1 ? true : false;

  // second solve method
  return a - Math.floor(a) === 0;
};

const int = interFun(23.54);
const int3 = interFun(23);
const int4 = interFun(23787854.03);
const int2 = interFun(233544567);
console.log(int, int2, int4, int3);

const divisibleFun = (x, y) => {
  // first solve method
  if (x % y === 0) {
    return x;
  } else if (y && x < 0) {
    return 0;
  } else {
    const divisor = parseInt(x / y);
    return divisor * y + y;
  }

  // second solve method
  while (x % y !== 0) x++;
  return x;
};

const divi = divisibleFun(1, 23);
const divi1 = divisibleFun(23, 23);
const divi2 = divisibleFun(7, 3);
const divi3 = divisibleFun(-5, 7);
console.log(divi, divi1, divi2, divi3);

const concatFun = (a, b) => {
  // first solve method
  return a.indexOf(b) !== -1 ? b + a : a.concat(b);

  // second solve method
  return a.indexOf(b) !== -1 ? b + a : a + b;
};
const str4 = concatFun("lips", "s");
const str3 = concatFun("Java", "Script");

console.log(str3, str4);

const primeFun = (a) => {
  // first solve method
  const checkPrime = (num) => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  };

  let n = a;
  while (!checkPrime(n)) n++;
  return n;

  // second solve method
  for (let i = 2; i < a; i++) {
    if (a % i === 0) {
      return primeFun(a + 1);
    }
  }
  return a;

  // third solve method
  const checkPrim = (a) => {
    for (let i = 2; i < a; i++) {
      if (a % i === 0) {
        return false;
      }
    }
    return true;
  };
  if (checkPrim(a)) {
    return a;
  } else {
    while (checkPrim(a) === false) {
      a++;
    }
  }
  return a;
};

const prime1 = primeFun(115);
const prime2 = primeFun(17);
const prime3 = primeFun(2000);
console.log(prime1, prime2, prime3);

const insertChart = (str, c) => {
  // first solve method
  let result = [];
  console.log(result);
  let rest = str;
  while (rest.length) {
    result.push(rest.slice(-3));
    rest = rest.slice(0, -3);
  }
  return result.reverse().join(c);

  // second solve method
  let resultStr = "";
  let index = 0;
  for (let i = str.length - 1; i > -1; i--) {
    index++;
    resultStr = str[i] + resultStr;
    if (index % 3 === 0) {
      resultStr = c + resultStr;
    }
  }
  return resultStr;
};

const input = "abcdefghijklmnopqrstuvwxyz";
const inputChar = ".";
console.log(insertChart(input, inputChar));

const correctWord = (a) => {
  // first solve method
  const ltr = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i <= a.split("").length - 1; i++) {
    const str = ltr.indexOf(a.charAt(i)) + 1;
    const lstr = ltr.charAt(str);
    result += lstr;
  }
  return result;

  // second solve method
  const arr = [...a];
  const correctArray = arr.map((e) => String.fromCharCode(e.charCodeAt() + 1));
  return correctArray.join("");
};
const incre = correctWord("bnchmf");
const incre1 = correctWord("bgddrd");
const incre2 = correctWord("sdrshmf");
console.log(incre, incre1, incre2);

const roundedFun = (a) => {
  // first solve method
  return Math.round((a + Number.EPSILON) * 100) / 100;

  // second solve method
  return Number(a.toFixed(2));
};
const round = roundedFun(4);
const round1 = roundedFun(5.53987843);
const round2 = roundedFun(44.535343);
console.log(round, round1, round2);

const chaosFun = (a, b) => {
  // first solve method
  const c = b.split("").reverse().join("");
  const result = a.concat(c).replace(/[^a-zA-Z ]/g, "");
  return result.charAt(0).toUpperCase() + result.slice(1);

  // second solve method
  const func = (x) => x.replace(/[^a-zA-Z ]/g, "");
  const first = func(a);
  const second = func(b).split("").reverse().join("");
  return first.charAt(0).toUpperCase() + first.slice(1) + second;
};

const chaos1 = chaosFun("Java", "tpi%rcs");
const chaos2 = chaosFun("c#ountry", "edis");
const chaos3 = chaosFun("down", "nw$ot");
console.log(chaos1, chaos2, chaos3);
