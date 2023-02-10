import React from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../Wrapper";
// import { urlFor, client } from '../../client';
import "./testimonials.scss";

const Testimonial = () => {
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const [testimonials, setTestimonials] = useState([]);
  // const [brands, setBrands] = useState([]);

  // const handleClick = (index) => {
  //   setCurrentIndex(index);
  // };

  // useEffect(() => {
  //   const query = '*[_type == "testimonials"]';
  //   const brandsQuery = '*[_type == "brands"]';

  //   client.fetch(query).then((data) => {
  //     setTestimonials(data);
  //   });

  //   client.fetch(brandsQuery).then((data) => {
  //     setBrands(data);
  //   });
  // }, []);

  const testimonials = [];

  const brands = [];

  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img src={testimonials.imgurl} alt={testimonials.name} />
            <div className="app__testimonial-content">
              <p className="p-text">{testimonials.feedback}</p>
              <div>
                <h4 className="bold-text">{testimonials.name}</h4>
                <h5 className="p-text">{testimonials.company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            {/* handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1) */}
            <div className="app__flex" onClick={() => {}}>
              <HiChevronLeft />
            </div>

            {/* handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1) */}
            <div className="app__flex" onClick={() => {}}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={brand._id}
          >
            <img src={brand.imgUrl} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, "app__testimonial"),
  "testimonial",
  "app__primarybg"
);
