import { useEffect, useState } from 'react';
import './sendMailer.css'
import axios from 'axios';

export default function SendMailer() {
    const [title, setTitle] = useState("");
    const [html, setHtml] = useState("");
    const [count, setCount] = useState(null);
    const [errorCount, setErrorCount] = useState(null);
    const [mailRes, setMailRes] = useState([]);
    const [flag , setFlag] = useState(false);

    const [emailList, setEmailList] = useState([]);
     
    const sendEmails = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://api.prebidestimationhouse.com/bulk-mail', {
                message: emailList,
                title: title,
                html: html
            });

           console.log(response.data);
           setMailRes(response.data);
           // Replace with the actual received string
           
           // Split the string into an array using the newline character as the delimiter
           
          // setMailRes(mailRes);
            setFlag(true);
        } catch (error) {
            console.error('Error sending emails:', error);
        }
    };

    // useEffect(() => {
    //     // if (mailRes.length > 0) {
    //         console.log("Mail response changed:", mailRes);
            
    //    // }
    // }, [mailRes]);

    const uploadEmails = async (e) => {
        e.preventDefault();
      //  console.log(mailRes);
        console.log("data stored working");
        try {
               
            const response = await axios.post('https://api.prebidestimationhouse.com/api/email/upload-mail', {
                content: [
                    "fawad@gmail.com status ok","fa@gmail.com"
                ],
            });
            console.log("Successfully uploaded to MongoDB");
            console.log(response.data);
            // Optionally, reset mailRes state after successful upload
            setFlag(false);
        } catch (error) {
            console.error('Error uploading emails:', error);
        }
    };

    const handleTextareaChange = (e) => {
        const emailsArray = e.target.value.split(',').map(email => email.trim());
        setEmailList(emailsArray);
    };

    return (
        <>
        <div className="sendMailer">
            <h1 className="sendMailerTitle">Enter Emails To Send</h1>
            <form className="sendMailerForm">
                <textarea 
                onChange={handleTextareaChange}
                className='sendMailerTextArea'></textarea>
                
                <div className="sendMailerFormLeft">
                    <label>Subject</label>
                    <input
                        type="text"
                        placeholder="subject"
                        name='title'
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <label>Html Code</label>
                    <textarea
                        type="text"
                        placeholder="html code"
                        name='year'
                        onChange={(e) => setHtml(e.target.value)}
                    ></textarea>
                    {count &&
                    <>
                        <span className='success'>Total mails sent are: {count}</span>
                        <span className='success'>Error : {errorCount}</span>
                    </>
                    }
                </div>
                <div className="sendMailerFormRight">
                    {flag ? (
                    
                    <button
                    className="MailerButton"
                    onClick={uploadEmails}
                    >Create</button>
               ): (

                   <button
                   className="MailerButton"
                   onClick={sendEmails}
                   >Send</button>
                   ) }
                </div>
            </form>
        </div>
        </>
    )
}
