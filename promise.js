// 3A
const cekZodiak = (zodiak) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const dataZodiak = ['aquarius','capricorn','cancer','leo','pisces', 'aries', 'gemini']
            let cekZodiak = dataZodiak.find((item)=>{
                return item === zodiak
            })
            if(cekZodiak){
                resolve(cekZodiak)
            }else {
                reject(new Error('Bukan sebuah zodiak'))
            }
        },300)
    })
};

cekZodiak('kambing')
.then((zodiakMu) => {
    cek = zodiakMu;
    console.log(`${zodiakMu} merupakan sebuah zodiak`)
})
.catch((Error) => {
    console.log(Error);
})

// 3B
const loginSosmed = (username, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const requestBody = {
          username,
          password,
        };
        const validUser = [
          { username: "@rzkiypratama", password: "bojonggede123" },
          { username: "@ytandini", password: "kolakolak" },
        ];
        for (let user of validUser) {
          if (
            user.username === requestBody.username &&
            user.password === requestBody.password
          ) {
            return resolve(user);
          }
        }
        return reject(new Error("Invalid username/password"));
      }, 200);
    });
  };
  
  async function loginNeeded(username, password, proses) {
    try {
      if (typeof proses !== "function") throw new Error("invalid param");
      // asynchronous / promise
      const response = await proses(username, password);
      // karena ada await, maka ditunggu
      const welcomeString = `Login Success. Welcome ${response.username}`;
      return welcomeString;
    } catch (error) {
      // handling error
      return error.message;
    }
  }
  
  const doAsync = async () => {
    console.log(await loginNeeded("@rzkiypratama", "bojonggede123", loginSosmed));
  };
  doAsync();

  //  then atau Method then() mengembalikan Promise dan menggunakan dua argumen: 
  // fungsi callback untuk kasus sukses dan gagal pada Promise.
  // Jadi ketika promise itu sudah di penuhi maka then bisa berjalan, 
  // tetapi jika then tidak di penuhi, maka rejected lah yang akan tampil (pesan error),
  // supaya mudah di ingat ibaratkan seperti if dan else ygy, 
  //  bedanya jika if else itu adalah perbandingan, 
  //  tetapi jika then, itu melihat data apakah datanya, seperti itu ygy.

  // Sintaks try..catch membentuk dua bagian utama: pertama try, dan kemudian catch:
try {

// kodingan disini

} catch (err) {

  // Penanganan jika eror

}
// Try .. Catch
// Dari namanya sendiri, Try bisa di katakan untuk mencoba dan catch adalah 
// untuk menangkap.

// Mencoba apa ? Mencoba untuk menjalankan sebuah blok kode.

// Menangkap apa ? Menangkap error misalnya error tersebut terjadi.