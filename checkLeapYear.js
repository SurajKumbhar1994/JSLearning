var leapYear =function(year){
    if (year % 100 === 0 ? year % 400 === 0 : year % 4 === 0) {
   console.log(" Input year:", year, "is a Leap Year");
    } else {
        console.log(
            " Input year:",
            year,
            "is NOT a Leap Year"
        );
    }

}

leapYear(2020);
leapYear(1999);
leapYear(1600);
leapYear(2022);
leapYear(1945);
leapYear(null);
leapYear("Twenty Twenty");
leapYear(undefined);
leapYear(NaN);
leapYear(1750);