import React, { useState } from 'react';
import './qualification.css';

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className='qualification section'>
      <h2 className='section__title'>Qualification</h2>
      <span className='section__subtitle'>My Personal Journey</span>

      <div className='qualification__container container'>
        <div className='qualification__tabs'>
          <div
            className={
              toggleState === 1
                ? 'qualification__button qualification__active button--flex'
                : 'qualification__button qualification__button button--flex'
            }
            onClick={() => toggleTab(1)}
            > 
            <i className='uil uil-graduation-cap qualification__icon'></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? 'qualification__button qualification__active button--flex'
                : 'qualification__button qualification__button button--flex'
            }
            onClick={() => toggleTab(2)}
            >
            <i className='uil uil-briefcase-alt qualification__icon'></i>
            Experience
          </div>
        </div>

        <div className='qualification__sections'>
          <div
            className={
              toggleState === 1
                ? 'qualification__content qualification__content-active'
                : 'qualification__content'
            }>
            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>Universitas Pasundan</h3>
                <span className='qualification__subtitle'>
                  Informatics Engineering
                </span>
                <div className='qualification__calender'>
                  <i className='uil uil-calendar-alt'></i> 2021 - Present
                </div>
              </div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>

            <div className='qualification__data'>
              <div></div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>

              <div>
                <h3 className='qualification__title'>SMKN 2 Bandung</h3>
                <span className='qualification__subtitle'>
                  Software Engineering
                </span>
                <div className='qualification__calender'>
                  <i className='uil uil-calendar-alt'></i> 2018 - 2021
                </div>
              </div>
            </div>

            {/* <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>Web Development</h3>
                <span className='qualification__subtitle'>
                  Spain - Institute
                </span>
                <div className='qualification__calender'>
                  <i className='uil uil-calendar-alt'></i> 2018 - 2020
                </div>
              </div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>

            <div className='qualification__data'>
              <div></div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>

              <div>
                <h3 className='qualification__title'>UX Expert</h3>
                <span className='qualification__subtitle'>
                  Spain - Institute
                </span>
                <div className='qualification__calender'>
                  <i className='uil uil-calendar-alt'></i> 2017 - 2018
                </div>
              </div>
            </div> */}
          </div>

          <div
            className={
              toggleState === 2
                ? 'qualification__content qualification__content-active'
                : 'qualification__content'
            }>
            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>React Back-End Developer</h3>
                <span className='qualification__subtitle'>
                  SIB Dicoding
                </span>
                <div className='qualification__calender'>
                  <i className='uil uil-calendar-alt'></i> Feb - Jun 2024
                </div>
              </div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>

            <div className='qualification__data'>
              <div></div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>

              <div>
                <h3 className='qualification__title'>Web Development Student</h3>
                <span className='qualification__subtitle'>
                  GDSC ITB
                </span>
                <div className='qualification__calender'>
                  <i className='uil uil-calendar-alt'></i> Oct 2023 - Jun 2024
                </div>
              </div>
            </div>

            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>UI/UX Student</h3>
                <span className='qualification__subtitle'>GDSC ITB</span>
                <div className='qualification__calender'>
                  <i className='uil uil-calendar-alt'></i> Oct 2023 - Jun 2024
                </div>
              </div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
