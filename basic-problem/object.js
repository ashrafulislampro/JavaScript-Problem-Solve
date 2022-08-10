const objKey = (obj, key) => {
  // const result = obj.`${key}`;
  // return result;
};

const reslut = objKey({ country: "bng", count: "two" }, "country");
const reslut2 = objKey({ country: "IND", count: "twoo" }, "count");
console.log(reslut, reslut2);
