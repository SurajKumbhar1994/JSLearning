function stringHandsOn() {
  var str = "     Hey you are doing good,keep it up      ";

  console.log(`1.Given string is: "${str}"`);
  var strLength = str.length;
  console.log(`2.The length of given string is:${strLength}`);
  var strSpaceRemove = str.trim();
  var strWithoutSp = strSpaceRemove.length;
  console.log(
    `3.After removeing the leading and trailing spaces string is:"${strSpaceRemove}" || and its length is:${strWithoutSp}`
  );
  var extraSpaceCount = strLength - strWithoutSp;
  console.log(`4.Extra space are removed count is:${extraSpaceCount}`);
  console.log(
    `5.First and Last Character of string after removeing Extra Spaces respectively are: "${
      strSpaceRemove[0]
    }","${strSpaceRemove[strSpaceRemove.length - 1]}"`
  );
  var countWords = strSpaceRemove.split(" ");
  console.log(`6.Total words in Trimmed string is: ${countWords.length}`);
  var findIndex = strSpaceRemove.search("good");
  console.log(`7.Index of good is: ${findIndex}`);
  var substring1 = strSpaceRemove.substring(22);
  var substring2 = strSpaceRemove.slice(22);
  console.log(`1.Substring using substring: "${substring1}".`);
  console.log(`2.Substring using slice: "${substring2}".`);
  var strEnd = strSpaceRemove.endsWith("up");
  console.log(`9.String Ends with "up" is: ${strEnd}.`);
  var strStart = strSpaceRemove.startsWith("Hey");
  console.log(`10.String Starts with "Hey" is: ${strStart}.`);
}
stringHandsOn();
