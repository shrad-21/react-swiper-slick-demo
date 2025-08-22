import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { 
  TestimonialWrapper,
  TestimonialContainer, 
  TestimonialCard, 
  Header, 
  Avatar, 
  NameRoleContainer, 
  Name, 
  Role, 
  DescriptionContainer,
  TestimonialSlide
} from './TestimonialsStyles';
import { SectionHeading, SectionWrapper } from '../../StyledComponents/CommonStyles';

// Testimonials Data
const testimonials = new Array(6).fill({
  name: 'John Doe',
  role: 'School Administrator',
  description: 'FaceBio has revolutionized our school’s security system.',
  subdescription: 'With seamless integration and lightning-fast recognition, we now have a robust tool ensuring the safety of our students. It’s user-friendly, and the real-time alerts provide an added layer of confidence for our staff and parents.'
});

const Testimonials = () => {
  return (
    <SectionWrapper>
              <SectionHeading>Testimonials</SectionHeading>
      <TestimonialContainer>
        <Swiper
          slidesPerView={3}
          initialSlide={1}
          loop={true}
          spaceBetween={10}
          navigation={true}
          centeredSlides={true}
          pagination={{ clickable: true }}
          modules={[Navigation]}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialSlide key={index}>
              <TestimonialCard>
                <Header>
                  <Avatar />
                  <NameRoleContainer>
                    <Name>{testimonial.name}</Name>
                    <Role>{testimonial.role}</Role>
                  </NameRoleContainer>
                </Header>
                <DescriptionContainer>
                  <span>{testimonial.description}</span>
                  <span className="subDesc">{testimonial.subdescription}</span>
                </DescriptionContainer>
              </TestimonialCard>
            </TestimonialSlide>
          ))}
        </Swiper>
      </TestimonialContainer>
    </SectionWrapper>
  );
};

export default Testimonials;
