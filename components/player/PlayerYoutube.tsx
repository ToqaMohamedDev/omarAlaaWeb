'use client'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import ReactModal from 'react-modal';

export default function PlayerYoutube() {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true);
    }, []);
  
    if (!isClient) return null;
    return (
        
        <div className='' style={{ position: 'relative', paddingTop: '56.25%' }}>
        <ReactPlayer
          url="https://youtu.be/zMDo4ljVCt0?si=gh6S5-0d-qMLERxq" // استبدل your_video_id بمعرف الفيديو الخاص بك
          playing={false}
          controls={false} // يعطل عناصر التحكم
          loop={true} // تشغيل الفيديو بشكل متكرر
          muted={true} // تعطيل الصوت
          width="100%"
          height="100%"
          config={{
            youtube: {
              playerVars: {
                modestbranding: 1, // إخفاء العلامة المائية ليوتيوب
                controls: 0, // تعطيل التحكم بالفيديو
                showinfo: 0, // تعطيل عرض المعلومات
                rel: 0, // منع إظهار فيديوهات مقترحة
                fs: 0, // تعطيل زر الشاشة الكاملة
              },
            },
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        />
      </div>
    )
}
