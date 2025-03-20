import React from 'react';

function Home() {
    const handleDownload = () => {
        const fileUrl = '/screencapture-builder-zety-resume-final-resume-2025-03-20-12_39_45.pdf';
        // Replace with actual file path
        const anchor = document.createElement('a');
        anchor.href = fileUrl;
        anchor.download = 'Ankit_Gangrade_Resume.pdf';
        anchor.click();
        anchor.remove();
      };

    return (
        <div className="contained1 h-screen w-full bg-gradient-to-r from-[#007bff] to-[#2e2e2e]">
            <div className="bg-text relative bg-black bg-opacity-60 text-white font-bold border-4 border-gray-300 p-5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-11/12 sm:w-3/5 lg:w-1/3 h-3/5">
                <div className="bg-in mx-auto mt-4 lg:mt-10 w-4/5 md:w-3/4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-none">
                        I'm <br />
                        <span className="text-yellow-400 font-extrabold uppercase">Ankit</span> <span className="font-extrabold uppercase">Gangrade</span>
                    </h1>
                    <p className="text-lg sm:text-xl tracking-widest mt-4">Creative Web Designer</p>

                    {/* Download Button */}
                    <div className="mt-8 flex justify-center">
                        <button onClick={handleDownload} className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded flex items-center">
                            Download
                            <svg className="w-6 h-6 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17" />
                            </svg>
                        </button>
                    </div>

                    {/* Social Media */}
                    <div className="mt-8 flex justify-center space-x-4">
                        {/* GitHub Button */}
                       <button className="social w-10 h-10"> <a href='https://github.com/ankit3028k' target='_blank'>
                            <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 .5C5.373.5 0 5.873 0 12.5c0 5.173 3.288 9.577 7.839 11.116.573.105.782-.248.782-.553 0-.27-.01-1.175-.016-2.11-3.007.651-3.646-1.446-3.646-1.446-.494-1.25-1.207-1.585-1.207-1.585-1.194-.815.091-.8.091-.8 1.32.092 2.014 1.354 2.014 1.354 1.173 2.005 3.071 1.426 3.83 1.09.118-.848.459-1.426.835-1.754-2.665-.303-5.466-1.334-5.466-5.93 0-1.31.465-2.384 1.235-3.221-.124-.303-.535-1.523.117-3.173 0 0 1.007-.322 3.302 1.227.957-.266 1.988-.399 3.005-.403 1.017.004 2.049.137 3.007.403 2.295-1.549 3.302-1.227 3.302-1.227.653 1.65.243 2.87.119 3.173.77.837 1.235 1.911 1.235 3.221 0 4.603-2.803 5.623-5.469 5.925.472.407.895 1.207.895 2.43 0 1.757-.016 3.16-.016 3.581 0 .308.207.664.785.553C20.712 22.077 24 17.573 24 12.5 24 5.873 18.627.5 12 .5z" />
                            </svg></a>
                        </button>

                        {/* Linkdin Button */}
                     <button className="social w-10 h-10">   <a href='https://www.linkedin.com/in/ankit-gangrade-90b89b259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'  target='_blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">

                                <path
                                    d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                            </svg></a>
                        </button>
                        {/* Twitter Button */}
                       <button className="social w-10 h-10"> <a href='https://x.com/gangradean72849' target='_blank'>
                            <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.954 4.569c-.885.392-1.83.654-2.825.775 1.014-.609 1.794-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.196-.896-.954-2.172-1.548-3.591-1.548-2.716 0-4.919 2.205-4.919 4.919 0 .385.045.761.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.731-.666 1.577-.666 2.475 0 1.706.87 3.213 2.189 4.098-.807-.026-1.566-.247-2.228-.616v.062c0 2.385 1.691 4.374 3.934 4.826-.414.111-.848.171-1.294.171-.316 0-.624-.031-.927-.086.624 1.953 2.434 3.375 4.574 3.415-1.678 1.314-3.795 2.097-6.086 2.097-.394 0-.784-.023-1.173-.067 2.164 1.384 4.735 2.19 7.485 2.19 8.982 0 13.895-7.434 13.895-13.887 0-.211-.005-.423-.014-.634.952-.688 1.775-1.55 2.43-2.537z" />
                            </svg></a>
                        </button>

                        {/* WhatsApp Button */}
                      <button className="social w-10 h-10">
                      <a href='https://wa.me/+918959305284?text=Hello' target='_blank'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 448 512">
                                <path
                                    d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                            </svg></a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
