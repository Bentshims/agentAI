const fs = require('fs');

const testStrings = [
  "ÃƒÆ’Ã‚Â¢Ãƒâ€šÃ‚Â ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œ Je n'ai pas compris cette demande.",
  "ÃƒÆ’Ã‚Â¢Ãƒâ€¦Ã‚Â¡Ãƒâ€šÃ‚Â ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¸Ãƒâ€šÃ‚Â  *Aucun prospect ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â  analyser*",
  "ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â©"
];

for (const s of testStrings) {
  console.log('Original:', s);
  
  let temp = s;
  for(let j=1; j<=4; j++){
      temp = Buffer.from(temp, 'utf8').toString('latin1');
      console.log(`reverse ${j}:`, temp);
  }
}
