import React from 'react'
import Chat from './Chat'

const Chats = () => {
  return (
    <div>
      <Chat 
        name="Garbage"
        message="Yo whats up?"
        timestamp="five minutes ago..."
        profilePic="https://bloximages.chicago2.vip.townnews.com/host.madison.com/content/tncms/assets/v3/editorial/c/65/c656c6de-e913-11df-b2a3-001cc4c002e0/4fcc961a97dd8.image.jpg"
      />
      <Chat 
        name="Radiohead"
        message="Everything ok?"
        timestamp="five minutes ago..."
        profilePic="https://duckduckgo.com/?q=Radiohead&t=brave&iar=images&iax=images&ia=images&iai=http%3A%2F%2Fdailybruin.com%2Fimages%2F2015%2F10%2Fweb.ae_.theroaring90s3.OURTESY.jpg"
      />
      <Chat 
        name="Marilyn Manson"
        message="what about the song...?"
        timestamp="five minutes ago..."
        profilePic="https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/methode/2019/11/28/aa160482-1184-11ea-82cd-148dc44829b8_image_hires_144028.jpg?itok=r3rqJ44K&v=1574923235"
      />
    </div>
  );
}

export default Chats;