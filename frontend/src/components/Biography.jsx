import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
            **Zeecare** is a revolutionary hospital management application
            designed to streamline healthcare services and improve patient care.
            Launched in 2024, Zeecare has been at the forefront of integrating
            technology with healthcare, making it easier for hospitals to manage
            their operations and for patients to access medical services.
          </p>
          <p>
            The idea for Zeecare was born out of the need for a more efficient
            and patient-friendly healthcare system. Our founder, a healthcare
            professional with years of experience in the field, saw firsthand
            the challenges faced by hospitals in managing their operations and
            by patients in accessing timely and quality care. This led to the
            creation of Zeecare, an application designed to address these issues
            and transform the healthcare experience.
          </p>
          {/* <p>
            Zeecare offers a comprehensive suite of features that cater to the
            needs of hospitals, healthcare professionals, and patients. From
            appointment scheduling and patient records management to billing and
            inventory management, Zeecare provides a one-stop solution for
            hospital management.
          </p>
          <p>
            What sets Zeecare apart is its commitment to improving patient care.
            The application includes features that allow patients to book
            appointments, access their medical records, and communicate with
            their doctors online. This not only makes healthcare more accessible
            but also empowers patients to take charge of their health.
          </p> */}
          <p>
            Since its launch, Zeecare has been adopted by numerous hospitals
            across the country and has received positive feedback for its
            user-friendly interface and innovative features. The application
            continues to evolve, with new features being added regularly based
            on user feedback and changing healthcare needs.
          </p>
          <p>
            At Zeecare, we believe in the power of technology to transform
            healthcare. We are committed to providing a platform that helps
            hospitals operate more efficiently and enables patients to access
            the care they need with ease. Join us on our journey to make
            healthcare better, one app at a time.
          </p>
        </div>
      </div>
    </>
  );
};

export default Biography;
