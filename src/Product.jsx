import React, { useState } from 'react';
import './Product.css'; // Assuming you have a CSS file for styling

const ProductDetails = () => {
  // State to manage selected color
  const [selectedColor, setSelectedColor] = useState('red'); // Default to red

  // Event handler for when a color is clicked
  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <main className="container">
      {/* Left Column / Headphones Image */}
      <div className="left-column">
        <img data-image="black" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdCUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D" alt="" className={selectedColor === 'black' ? 'active' : ''} />
        <img data-image="blue" src="https://media.istockphoto.com/id/1472421626/photo/3d-rendering-of-wireless-headphones-on-blue-background.webp?b=1&s=170667a&w=0&k=20&c=vZhyxhzZf0trfpp_kywz7989t78U_zBuqSKTBU16mKo=" alt="" className={selectedColor === 'blue' ? 'active' : ''} />
        <img data-image="red" src="https://media.istockphoto.com/id/1193373535/photo/headphones-realistic-3d-render-music-lover-minimalistic-background-with-blue-white-and-golden.webp?b=1&s=170667a&w=0&k=20&c=n-hG5CFWORX57IxTV1LTTFSn2ykskGlkL3zfc8plSng=" alt="" className={selectedColor === 'red' ? 'active' : ''} />
      </div>

      {/* Right Column */}
      <div className="right-column">
        {/* Product Description */}
        <div className="product-description">
          <span>Headphones</span>
          <h1>Beats EP</h1>
          <p>The preferred choice of a vast range of acclaimed DJs. Punchy, bass-focused sound and high isolation. Sturdy headband and on-ear cushions suitable for live performance</p>
        </div>

        {/* Product Configuration */}
        <div className="product-configuration">
          {/* Product Color */}
          <div className="product-color">
            <span>Color</span>

            <div className="color-choose">
              <div>
                <input
                  data-image="red"
                  type="radio"
                  id="red"
                  name="color"
                  value="red"
                  checked={selectedColor === 'red'}
                  onChange={() => handleColorClick('red')}
                />
                <label htmlFor="red"><span></span></label>
              </div>
              <div>
                <input
                  data-image="blue"
                  type="radio"
                  id="blue"
                  name="color"
                  value="blue"
                  checked={selectedColor === 'blue'}
                  onChange={() => handleColorClick('blue')}
                />
                <label htmlFor="blue"><span></span></label>
              </div>
              <div>
                <input
                  data-image="black"
                  type="radio"
                  id="black"
                  name="color"
                  value="black"
                  checked={selectedColor === 'black'}
                  onChange={() => handleColorClick('black')}
                />
                <label htmlFor="black"><span></span></label>
              </div>
            </div>
          </div>

          {/* Cable Configuration */}
          <div className="cable-config">
            <span>Cable configuration</span>

            <div className="cable-choose">
              <button>Straight</button>
              <button>Coiled</button>
              <button>Long-coiled</button>
            </div>

            <a href="#">How to configure your headphones</a>
          </div>
        </div>

        {/* Product Pricing */}
        <div className="product-price">
          <span>148$</span>
          <a href="#" className="cart-btn">Add to cart</a>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;
