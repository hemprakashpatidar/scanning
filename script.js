function run(name, count) {
  const url = "https://seeedemaseekhelp.com/camp/form.php?emp_code=160550&lan_id=3&doctor_code=CIR17756";

  const payload =
    `name=${encodeURIComponent(name)}&` +
    `qst_0=${getAge()}&` +
    `qst_1=22-0-1&` +
    `qst_2=23-${randInt()}&` +
    `qst_3=24-${randInt()}&` +
    `qst_4=25-${randInt()}&` +
    `qst_5=26-${randInt()}&` +
    `qst_6=27-${randInt()}&` +
    `qst_7=28-${randInt()}&` +
    `qst_8=29-${randInt()}`;

  const headers = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8',
    'Cache-Control': 'max-age=0',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Origin': 'https://seeedemaseekhelp.com',
    'Referer': 'https://seeedemaseekhelp.com/camp/form.php?emp_code=160550&lan_id=3&doctor_code=CIR17756',
    'Sec-CH-UA': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
    'Sec-CH-UA-Mobile': '?0',
    'Sec-CH-UA-Platform': '"macOS"',
    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'same-origin',
    'Sec-Fetch-User': '?1',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'
  };

  fetch(url, {
    method: 'POST',
    headers: headers,
    body: payload
  })
    .then(response => response.text())
    .then(result => {
      console.log('Response:', result);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function randInt() {
  // Randomly return "0" or "1" as a string
  return Math.floor(Math.random() * 2).toString();
}

function getAge() {
  // Randomly return '21-0-0' or '21-1-1'
  return Math.random() < 0.5 ? '21-0-0' : '21-1-1';
}

// Example usage
function callApi () {
  run("Rajesh",1)
}
