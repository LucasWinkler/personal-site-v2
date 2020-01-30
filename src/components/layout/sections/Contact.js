import React from 'react';

function Contact() {
  return (
    <section id='section-contact' className='section-contact'>
      <div className='container contact-wrapper'>
        <div className='contact-header'>
          <h2 className='contact-title'>Get In Touch</h2>
          <p className='contact-body'>
            If you're willing to work on a project or you just want to talk
            about web development then dont be afraid to send a message!
          </p>
        </div>
        <a className='btn btn-contact' href='mailto:lucaswinkler@gmail.com'>
          Say Hello
        </a>
      </div>
    </section>
  );
}

export default Contact;
