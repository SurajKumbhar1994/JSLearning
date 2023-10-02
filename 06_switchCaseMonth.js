var monthOfYear = function (month) {
  switch (month) {
    case 1:
      console.log(`This is Jan.`);
      break;
    case 2:
      console.log(`This is Feb`);
      break;
    case 3:
      console.log(`This is March`);
      break;
    case 4:
      console.log(`This is April`);
      break;
    case 5:
      console.log(`This is May`);
      break;
    case 6:
      console.log(`This is June`);
      break;
    case 7:
      console.log(`This is July`);
      break;
    case 8:
      console.log(`This is August`);
      break;
    case 9:
      console.log(`This is September `);
      break;
    case 10:
      console.log(`This is October`);
      break;
    case 11:
      console.log(`This is Nov.`);
      break;
    case 12:
      console.log(`This is Dec.`);
      break;

    default:
      console.log(`Invaild Data:${month}`);
      break;
  }
};
monthOfYear(0);
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
monthOfYear(null);
monthOfYear(undefined);
