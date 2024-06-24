import React from 'react'
import RootLayout from '../layout'

const About = () => {
  return (
    <RootLayout>
      <section className="about">
        <div className="page-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="page-title">About Us</h1>
                {/* <h2 className="page-description">About</h2> */}
              </div>
            </div>
          </div>
        </div>
        <div className="page-content">
          <div className="grid grid-cols-1 lg:grid-cols-2  gap-4">
            <div className=' p-6' >
              <img src="/img/product1.jpeg" alt="product" className="w-100" />
            </div>
            <div className=' p-6 ' >
              <div className="about-item">
                <div className="title">Reimagining real estate to
                  make it easier to unlock.</div>
                <div className="about-text">
                  Lorem ipsum is simply free text dolor sit am adipi we help you
                  ensure everyone is in the right jobs sicing elit, sed do
                  consulting firms Et leggings across the nation tempor.
                </div>
                <div className="about-features">
                  <p className="about-feature">
                    Lorem ipsum
                    is simply
                  </p>
                  <p className="about-feature">
                    Lorem ipsum
                    is simply
                  </p>
                  <p className="about-feature">
                    Lorem ipsum
                    is simply
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </RootLayout>
  )
}

export default About