const process = require("process");
const otplib = require("otplib");

if (process.argv.length < 3 || process.argv.length > 3) {
  console.log(`$ npm run generete [OTP_SECRET]\n$ node index.js [OTP_SECRET]`);
  process.exit();
}

const secret = process.argv[2];
const otp_key = otplib.authenticator.generate(secret);

process.stdout.write(otp_key);

