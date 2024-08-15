import React, {useState} from 'react';
import './services.css';

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className='services section' id='services'>
      <h2 className='section__title'>Services</h2>
      <span className='section__subtitle'>What I offer</span>

      <div className='services__container container grid'>
        <div className='services__content'>
          <div>
            <i className='uil uil-web-grid services__icon'></i>
            <h3 className='services__title'>Front-End <br /> Developer</h3>
          </div>

          <span className='services__button' onClick={() => toggleTab(1)}>
            View More
            <i className='uil uil-arrow-right services__button-icon'></i>
          </span>

          <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
            <div className='services__modal-content'>
              <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close'></i>

              <h3 className='services__modal-title'>Front-End Developer</h3>
              <p className='services__modal-description'>
                Service with more than 1 year of experience. Providing quality
                work to clients and companies.
              </p>

              <ul className='services__modal-services grid'>
                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>
                  Able to create responsive and intuitive user interfaces using HTML, CSS, and JavaScript.
                  </p>
                </li>

                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>Able to integrate UI/UX design into web applications.</p>
                </li>

                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>
                  Able to use frontend frameworks such as React to build dynamic and efficient web applications.
                  </p>
                </li>

                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>
                  Optimize websites for speed and performance, including file size reduction and fast loading.
                  </p>
                </li>

                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>
                  Able to implement designs and create interactive mockups to visualize and plan projects.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='services__content'>
          <div>
            <i className='uil uil-arrow services__icon'></i>
            <h3 className='services__title'>UI/UX <br /> Designer</h3>
          </div>

          <span onClick={() => toggleTab(2)} className='services__button'>
            View More
            <i className='uil uil-arrow-right services__button-icon'></i>
          </span>

          <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
            <div className='services__modal-content'>
              <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close'></i>

              <h3 className='services__modal-title'>UI/UX Designer</h3>
              <p className='services__modal-description'>
                Service with more than 1 year of experience. Providing quality
                work to clients and companies.
              </p>

              <ul className='services__modal-services grid'>
                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>
                  Create intuitive and visually appealing user interfaces using design tools such as Figma.
                  </p>
                </li>

                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>Conduct user research and usability testing to gather insights and improve design decisions.</p>
                </li>

                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>
                  Develop wireframes, prototypes, and mockups to effectively communicate design ideas and user flows.
                  </p>
                </li>

                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>
                  Design and implement UX strategies that enhance user satisfaction and usability across various platforms.
                  </p>
                </li>

                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>
                  Collaborate with developers and stakeholders to ensure that designs are accurately translated into functional products.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='services__content'>
          <div>
            <i className='uil uil-edit services__icon'></i>
            <h3 className='services__title'>Visual <br /> Designer</h3>
          </div>

          <span onClick={() => toggleTab(3)} className='services__button'>
            View More
            <i className='uil uil-arrow-right services__button-icon'></i>
          </span>

          <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
            <div className='services__modal-content'>
              <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close'></i>

              <h3 className='services__modal-title'>Visual Designer</h3>
              <p className='services__modal-description'>
                Service with more than 1 year of experience. Providing quality
                work to clients and companies.
              </p>

              <ul className='services__modal-services grid'>
                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>
                  Design visual elements for websites and applications, including layouts, typography, and color schemes.
                  </p>
                </li>

                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>Create visual content for social media platforms, such as posts, banners, and ads.</p>
                </li>

                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>
                  Create logos, icons, illustrations, infographics, and other graphic elements for various purposes.
                  </p>
                </li>

                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>
                    Design brochures, posters, flyers, and other print materials that support marketing campaigns.
                  </p>
                </li>

                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>
                    Develop consistent brand identities, including logo design, color palettes, and other branding elements.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
