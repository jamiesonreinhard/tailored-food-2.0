import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function PasswordPage() {
  const [password, setPassword] = useState('');
  const [viewportWidth, setViewportWidth] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === 'bowie-and-lia') {
      localStorage.setItem('passwordEntered', 'true');
      window.location.replace('/');
    } else {
      alert('Incorrect password');
    }
  };

  useEffect(() => {
    setViewportWidth(window.innerWidth)
    setViewportHeight(window.innerHeight)

    const handleResize = () => {
      setViewportWidth(window.innerWidth)
      setViewportHeight(window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="w-screen h-screen flex items-center justify-center relative">
        <Image
          src="/images/home.jpg"
          alt="password background image"
          width={viewportWidth}
          height={viewportHeight}
          className="w-full h-full object-cover absolute top-0 left-0"
        />
        <form
            onSubmit={handleSubmit}
            className="absolute top-[50%] left-[50%] text-[40px]
            -translate-y-[50%] -translate-x-[50%] z-[10]
            bg-white/[0.9] p-[24px] lg:p-[40px] flex flex-col items-center
            gap-[20px] cursive text-[#ffaa6b] w-[90%] lg:w-auto text-center"
        >
            <div className="text-[60px]">J & L Boda</div>
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                className="bg-black text-white indent-[30px] rounded-[8px] focus:outline-none"
            />
            <button type="submit" className='px-[20px] py-[10px] rounded-[10px] bg-black'>Enter</button>
        </form>
    </div>
  );
}
