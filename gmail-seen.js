const nodemailer = require('nodemailer');
const { google } = require('googleapis');

 /// เปลี่ยน clientId CLEINT_SECRET  REFRESH_TOKEN
const CLIENT_ID = '606479954152-jc83qdpbih35tstu0rf9vr4mu6e5ba8u.apps.googleusercontent.com'; 
const CLEINT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//04HD9OSktk8ZMCgYIARAAGAQSNwF-L9Iryb_QRdyyFGCokswMLEkBnuLm_zclblK9L-PIA9BCYztwf_Ai2d4LrhcqgMN8KRr7Bn0';

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLEINT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function sendMail(mailOptions) {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: '63015144@kmitl.ac.th',
        clientId: CLIENT_ID,
        clientSecret: CLEINT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    
    const mailOptions = {
      from: '63015144@kmitl.ac.th',
      to: 'minaseyux@gmail.com',
      subject: 'Hello from gmail using API',
      text: 'Hello from gmail email using API',
      html: '<h1>Hello from gmail email using API <br> https://docs.google.com/forms/d/e/1FAIpQLScdmYuPc2IMTY6To--FFTeEsTU45aOWx3M2ZM60dolR_FtHxQ/viewform </br> </h1>',
    };
    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
}
const sento = {
  from: '63015144@kmitl.ac.th',
  to: 'minaseyux@gmail.com',
  subject: 'Hello from gmail using API',
  text: 'Hello from gmail email using API',
  html: '<h1>Hello from gmail email using API <br> https://docs.google.com/forms/d/e/1FAIpQLScdmYuPc2IMTY6To--FFTeEsTU45aOWx3M2ZM60dolR_FtHxQ/viewform </br> </h1>',
};
sendMail(sento)
  .then((result) => console.log('Email sent...', result))
  .catch((error) => console.log(error.message));