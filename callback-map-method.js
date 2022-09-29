const getMonth = (callback) => {
    setTimeout(() => {
        let error = false;
        let month = [
            "January", "Febuary", "Maret", "April", "Mei", "Juni",
            "Juli", "Agustus", "September", "Oktober", "November",
            "Desember"
        ];
        if (!error) {
            callback(null, month);
        } else {
            callback(new Error("Sorry Data Not Found"), []);
        }
    }, 300);
};

const showMonth = (state, month) => {
   if (month.length !== 0)
   return console.log(month.map((e, i) => (e = `${i + 1}: ${e}`)));;
    return console.log(state);
};

getMonth(showMonth);