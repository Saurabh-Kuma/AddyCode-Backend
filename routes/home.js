const router= require('express').Router()
const nodemailer= require('nodemailer')
require('dotenv').config()

router.post('/', (req, res)=>{ 
    const {userName, email, telNo, message}= req.body
    
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'addycodeserve@gmail.com',
            pass: process.env.password
            
        }
    });

    const mailOptions = {
        from: email,
        to: 'arch444ana@gmail.com',
        subject: `Contact Form Submission from ${userName}`,
        text: `Name: ${userName}\nEmail: ${email}\nTelNo: ${telNo}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error)
            return res.status(500).send({ error: 'Failed to send email' });
        }
        res.status(200).send({message: 'Email sent successfully'});
    });
})

module.exports= router