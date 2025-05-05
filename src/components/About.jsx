import React, { useState, useEffect } from 'react';

function About() {
  const [slideIndex, setSlideIndex] = useState(1);

  // Function to show slides
  const showSlides = (n) => {
    let newIndex = n;
    if (newIndex > 6) newIndex = 1; // Updated to 6 slides
    if (newIndex < 1) newIndex = 6; // Updated to 6 slides
    setSlideIndex(newIndex);
  };

  // Functions for navigation
  const plusSlides = (n) => {
    showSlides(slideIndex + n);
  };

  const currentSlide = (n) => {
    showSlides(n);
  };

  // Auto-advance slideshow every 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      plusSlides(1);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [slideIndex]);

  return (
    <div className="main-content">
      <section className="hero about-hero">
        <div className="hero-content">
          <h2>About ShopEasy</h2>
          <p>Your trusted online shopping destination since 2020</p>
        </div>
      </section>

      {/* Enhanced Slideshow section with 6 slides */}
      <section style={{ backgroundColor: '#fff', padding: '40px 5%' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Our Journey</h2>
        
        <div className="slideshow-container" style={{ width: '1000px', height: '400px', position: 'relative', margin: 'auto' }}>
          {/* Slide 1 */}
          <div className={`mySlides fade ${slideIndex === 1 ? 'block' : 'none'}`} style={{ display: slideIndex === 1 ? 'block' : 'none', width: '100%', height: '100%' }}>
            <div className="numbertext" style={{ color: '#f2f2f2', fontSize: '12px', padding: '8px 12px', position: 'absolute', top: 0 }}>1 / 6</div>
            <img src="https://artificialpaintings.com/wp-content/uploads/2024/06/468_how_to_create_an_AI-based_website.webp" alt="Company Foundation" style={{ width: '1000px', height: '400px', objectFit: 'cover', borderRadius: '8px' }} />
            <div className="text" style={{ color: '#f2f2f2', fontSize: '15px', padding: '8px 12px', position: 'absolute', bottom: '8px', right: '40%', width: '20%', textAlign: 'center', backgroundColor: 'rgba(0,0,0,0.7)', borderRadius: '4px' }}>Our Founding</div>
          </div>

          {/* Slide 2 */}
          <div className={`mySlides fade ${slideIndex === 2 ? 'block' : 'none'}`} style={{ display: slideIndex === 2 ? 'block' : 'none', width: '100%', height: '100%' }}>
            <div className="numbertext" style={{ color: '#f2f2f2', fontSize: '12px', padding: '8px 12px', position: 'absolute', top: 0 }}>2 / 6</div>
            <img src="https://techcrunch.com/wp-content/uploads/2020/06/TC-Early-Stage-Graphi.png" alt="Early Days" style={{ width: '1000px', height: '400px', objectFit: 'cover', borderRadius: '8px' }} />
            <div className="text" style={{ color: '#f2f2f2', fontSize: '15px', padding: '8px 12px', position: 'absolute', bottom: '8px', right: '40%', width: '20%', textAlign: 'center', backgroundColor: 'rgba(0,0,0,0.7)', borderRadius: '4px' }}>Early Days</div>
          </div>

          {/* Slide 3 */}
          <div className={`mySlides fade ${slideIndex === 3 ? 'block' : 'none'}`} style={{ display: slideIndex === 3 ? 'block' : 'none', width: '100%', height: '100%' }}>
            <div className="numbertext" style={{ color: '#f2f2f2', fontSize: '12px', padding: '8px 12px', position: 'absolute', top: 0 }}>3 / 6</div>
            <img src="https://media.tychesoftwares.com/wp-content/uploads/2014/11/employee-growth.png" alt="Team Growth" style={{ width: '1000px', height: '400px', objectFit: 'cover', borderRadius: '8px' }} />
            <div className="text" style={{ color: '#f2f2f2', fontSize: '15px', padding: '8px 12px', position: 'absolute', bottom: '8px', right: '40%', width: '20%', textAlign: 'center', backgroundColor: 'rgba(0,0,0,0.7)', borderRadius: '4px' }}>Team Growth</div>
          </div>

       
          <div className={`mySlides fade ${slideIndex === 4 ? 'block' : 'none'}`} style={{ display: slideIndex === 4 ? 'block' : 'none', width: '100%', height: '100%' }}>
            <div className="numbertext" style={{ color: '#f2f2f2', fontSize: '12px', padding: '8px 12px', position: 'absolute', top: 0 }}>4 / 6</div>
            <img src="https://www.callcentrehelper.com/images/stories/2023/04/productinnovation-747030889-760.jpg" alt="Product Innovation" style={{ width: '1000px', height: '400px', objectFit: 'cover', borderRadius: '8px' }} />
            <div className="text" style={{ color: '#f2f2f2', fontSize: '15px', padding: '8px 12px', position: 'absolute', bottom: '8px', right: '40%', width: '20%', textAlign: 'center', backgroundColor: 'rgba(0,0,0,0.7)', borderRadius: '4px' }}>Innovation</div>
          </div>

     
          <div className={`mySlides fade ${slideIndex === 5 ? 'block' : 'none'}`} style={{ display: slideIndex === 5 ? 'block' : 'none', width: '100%', height: '100%' }}>
            <div className="numbertext" style={{ color: '#f2f2f2', fontSize: '12px', padding: '8px 12px', position: 'absolute', top: 0 }}>5 / 6</div>
            <img src="https://www.airswift.com/hs-fs/hubfs/shutterstock_1932216302.png?width=800&name=shutterstock_1932216302.png" alt="Global Expansion" style={{ width: '1000px', height: '400px', objectFit: 'cover', borderRadius: '8px' }} />
            <div className="text" style={{ color: '#f2f2f2', fontSize: '15px', padding: '8px 12px', position: 'absolute', bottom: '8px', right: '40%', width: '20%', textAlign: 'center', backgroundColor: 'rgba(0,0,0,0.7)', borderRadius: '4px' }}>Expansion</div>
          </div>

        
          <div className={`mySlides fade ${slideIndex === 6 ? 'block' : 'none'}`} style={{ display: slideIndex === 6 ? 'block' : 'none', width: '100%', height: '100%' }}>
            <div className="numbertext" style={{ color: '#f2f2f2', fontSize: '12px', padding: '8px 12px', position: 'absolute', top: 0 }}>6 / 6</div>
            <img src="https://itsm.tools/wp-content/uploads/2018/06/success-levels.gif" alt="Current Success" style={{ width: '1000px', height: '400px', objectFit: 'cover', borderRadius: '8px' }} />
            <div className="text" style={{ color: '#f2f2f2', fontSize: '15px', padding: '8px 12px', position: 'absolute', bottom: '8px', right: '40%', width: '20%', textAlign: 'center', backgroundColor: 'rgba(0,0,0,0.7)', borderRadius: '4px' }}>Today</div>
          </div>

    
          <a className="prev" onClick={() => plusSlides(-1)} style={{ cursor: 'pointer', position: 'absolute', top: '50%', width: 'auto', padding: '16px', marginTop: '-22px', color: 'white', backgroundColor: 'rgba(0,0,0,0.5)', fontWeight: 'bold', fontSize: '18px', transition: '0.6s ease', borderRadius: '0 3px 3px 0', userSelect: 'none', left: 0 }}>❮</a>
          <a className="next" onClick={() => plusSlides(1)} style={{ cursor: 'pointer', position: 'absolute', top: '50%', width: 'auto', padding: '16px', marginTop: '-22px', color: 'white', backgroundColor: 'rgba(0,0,0,0.5)', fontWeight: 'bold', fontSize: '18px', transition: '0.6s ease', borderRadius: '3px 0 0 3px', userSelect: 'none', right: 0 }}>❯</a>
        </div>
        <br />

  
        <div style={{ textAlign: 'center' }}>
          <span className={`dot ${slideIndex === 1 ? 'active' : ''}`} onClick={() => currentSlide(1)} style={{ cursor: 'pointer', height: '15px', width: '15px', margin: '0 2px', backgroundColor: slideIndex === 1 ? '#717171' : '#bbb', borderRadius: '50%', display: 'inline-block', transition: 'background-color 0.6s ease' }}></span>
          <span className={`dot ${slideIndex === 2 ? 'active' : ''}`} onClick={() => currentSlide(2)} style={{ cursor: 'pointer', height: '15px', width: '15px', margin: '0 2px', backgroundColor: slideIndex === 2 ? '#717171' : '#bbb', borderRadius: '50%', display: 'inline-block', transition: 'background-color 0.6s ease' }}></span>
          <span className={`dot ${slideIndex === 3 ? 'active' : ''}`} onClick={() => currentSlide(3)} style={{ cursor: 'pointer', height: '15px', width: '15px', margin: '0 2px', backgroundColor: slideIndex === 3 ? '#717171' : '#bbb', borderRadius: '50%', display: 'inline-block', transition: 'background-color 0.6s ease' }}></span>
          <span className={`dot ${slideIndex === 4 ? 'active' : ''}`} onClick={() => currentSlide(4)} style={{ cursor: 'pointer', height: '15px', width: '15px', margin: '0 2px', backgroundColor: slideIndex === 4 ? '#717171' : '#bbb', borderRadius: '50%', display: 'inline-block', transition: 'background-color 0.6s ease' }}></span>
          <span className={`dot ${slideIndex === 5 ? 'active' : ''}`} onClick={() => currentSlide(5)} style={{ cursor: 'pointer', height: '15px', width: '15px', margin: '0 2px', backgroundColor: slideIndex === 5 ? '#717171' : '#bbb', borderRadius: '50%', display: 'inline-block', transition: 'background-color 0.6s ease' }}></span>
          <span className={`dot ${slideIndex === 6 ? 'active' : ''}`} onClick={() => currentSlide(6)} style={{ cursor: 'pointer', height: '15px', width: '15px', margin: '0 2px', backgroundColor: slideIndex === 6 ? '#717171' : '#bbb', borderRadius: '50%', display: 'inline-block', transition: 'background-color 0.6s ease' }}></span>
        </div>
      </section>

      <section className="about-content" style={{ padding: '40px 5%', backgroundColor: '#f0f5ff' }}>
        <div className="about-section" style={{ marginBottom: '40px' }}>
          <h2>Our Story</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', alignItems: 'center' }}>
            <img
              src="https://t3.ftcdn.net/jpg/06/92/85/66/360_F_692856646_qd3HiA32KKpMr2LR3mMdV9ebBH6jLMf9.jpg"
              alt="Our Story"
              style={{ borderRadius: '12px', boxShadow: '0 4px 12px rgba(79, 70, 229, 0.15)' }}
            />
            <div>
              <p style={{ marginBottom: '20px' }}>
                ShopEasy was founded in 2020 with a simple mission: to make online
                shopping easy, affordable, and enjoyable for everyone. What started as
                a small online store has grown into a trusted e-commerce platform
                offering thousands of products across multiple categories.
              </p>
              <p>
                Our founder, Jane Smith, recognized the need for a more
                customer-focused online shopping experience. After years working in
                retail, she set out to create an e-commerce platform that prioritizes
                user experience, product quality, and excellent customer service.
              </p>
            </div>
          </div>
        </div>

        <div className="about-section" style={{ marginBottom: '40px' }}>
          <h2>Our Values</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '30px' }}>
            <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '20px', boxShadow: '0 4px 12px rgba(79, 70, 229, 0.15)' }}>
              <h3 style={{ marginBottom: '10px' }}>Quality First</h3>
              <p>
                We carefully select and test all products to ensure they meet our
                high standards.
              </p>
            </div>
            <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '20px', boxShadow: '0 4px 12px rgba(79, 70, 229, 0.15)' }}>
              <h3 style={{ marginBottom: '10px' }}>Customer Satisfaction</h3>
              <p>
                Your happiness is our priority. We strive to exceed expectations
                with every purchase.
              </p>
            </div>
            <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '20px', boxShadow: '0 4px 12px rgba(79, 70, 229, 0.15)' }}>
              <h3 style={{ marginBottom: '10px' }}>Transparency</h3>
              <p>
                Clear pricing, honest product descriptions, and no hidden fees.
                What you see is what you get.
              </p>
            </div>
            <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '20px', boxShadow: '0 4px 12px rgba(79, 70, 229, 0.15)' }}>
              <h3 style={{ marginBottom: '10px' }}>Sustainability</h3>
              <p>
                We're committed to reducing our environmental impact through
                eco-friendly practices.
              </p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>Our Team</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '30px' }}>
            <div style={{ backgroundColor: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(79, 70, 229, 0.15)', textAlign: 'center' }}>
              <img 
                src="/api/placeholder/200/200" 
                alt="NANDHAKUMAR V M" 
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
              <div style={{ padding: '15px' }}>
                <h3 style={{ marginBottom: '5px' }}>NANDHAKUMAR V M</h3>
                <p>Founder & CEO</p>
              </div>
            </div>
            <div style={{ backgroundColor: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(79, 70, 229, 0.15)', textAlign: 'center' }}>
              <img 
                src="/api/placeholder/200/200" 
                alt="SOWMYA J V" 
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
              <div style={{ padding: '15px' }}>
                <h3 style={{ marginBottom: '5px' }}>SOWMYA J V</h3>
                <p>Head of Product</p>
              </div>
            </div>
            <div style={{ backgroundColor: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(79, 70, 229, 0.15)', textAlign: 'center' }}>
              <img 
                src="/api/placeholder/200/200" 
                alt="SUDARMUGI B" 
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
              <div style={{ padding: '15px' }}>
                <h3 style={{ marginBottom: '5px' }}>SUDARMUGI B</h3>
                <p>Customer Service Manager</p>
              </div>
            </div>
            <div style={{ backgroundColor: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(79, 70, 229, 0.15)', textAlign: 'center' }}>
              <img 
                src="/api/placeholder/200/200" 
                alt="SANMATHI M K" 
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
              <div style={{ padding: '15px' }}>
                <h3 style={{ marginBottom: '5px' }}>SANMATHI M K</h3>
                <p>Lead Developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;