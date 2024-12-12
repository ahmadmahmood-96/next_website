import React from 'react';

const Navbar = () => {
  return (
    <div className="framer-7n5wjw-container">
      <nav
        className="framer-ShIKp framer-x4kpz framer-v-x4kpz"
        style={{ backdropFilter: 'blur(20px)', width: '100%', opacity: 1 }}
      >
        <div className="framer-1eienyp">
          <div className="framer-v9w41m">
            <div className="framer-19pcrl4">
              <div
                style={{
                  position: 'absolute',
                  borderRadius: 'inherit',
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <img
                  decoding="async"
                  sizes="(min-width: 1440px) 113px, (min-width: 1280px) and (max-width: 1439px) 113px, (min-width: 810px) and (max-width: 1279px) 113px, (max-width: 809px) 113px"
                  srcSet="
                    https://framerusercontent.com/images/Rdx3O0iFASJ7WRvWLpnh5AQdc.png?scale-down-to=512 512w,
                    https://framerusercontent.com/images/Rdx3O0iFASJ7WRvWLpnh5AQdc.png?scale-down-to=1024 1024w,
                    https://framerusercontent.com/images/Rdx3O0iFASJ7WRvWLpnh5AQdc.png 1225w"
                  src="https://framerusercontent.com/images/Rdx3O0iFASJ7WRvWLpnh5AQdc.png?scale-down-to=1024"
                  alt=""
                  style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    borderRadius: 'inherit',
                    objectPosition: 'center',
                    objectFit: 'cover',
                  }}
                  draggable="false"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="framer-1wp6rvb"
          style={{
            background:
              'radial-gradient(50% 50% at 50% 50%, rgb(240, 68, 54) 0%, rgba(255, 255, 255, 0) 100%)',
          }}
        ></div>
      </nav>
    </div>
  );
};

export default Navbar;
