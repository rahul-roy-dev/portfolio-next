// work slider data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/zakiyah.png',
          
        },
        {
          title: 'title',
          path: '/qwords.png',
          link: 'https://qwords-clone-website.vercel.app/',
        },
        {
          title: 'title',
          path: '/xiaomi.png',
        },
        {
          title: 'title',
          path: '/harisenin1.png',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/espoir.png',
        },
        {
          title: 'title',
          path: '/qwords.png',
        },
        {
          title: 'title',
          path: '/xiaomi.png',
        },
        {
          title: 'title',
          path: '/harisenin1.png',
        },
      ],
    },
  ],
};

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

// icons
import { BsArrowRight } from 'react-icons/bs';
// next image
import Image from 'next/image';

const WorkSlider = () => {
  const slides = [
    {
      images: [
        {
          title: 'title',
          path: '/zakiyah.png',
          link: 'https://zakiyahtravel.com/', // Link for the first project in the first slide
        },
        {
          title: 'title',
          path: '/qwords.png',
          link: 'https://qwords-clone-website.vercel.app/', // Link for the second project in the first slide
        },
        {
          title: 'title',
          path: '/xiaomi.png',
          link: 'https://react-xiaomi-phone.vercel.app/', // Link for the second project in the first slide
        },
        {
          title: 'title',
          path: '/harisenin1.png',
          link: 'https://fsd-assignment-js.vercel.app/', // Link for the second project in the first slide
        },
        // Add more projects as needed
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/espoir.png',
          link: 'https://e-commerce-espoir-website.vercel.app/', // Link for the first project in the second slide
        },
       
        // Add more projects as needed
      ],
    },
  ];

  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[480px]'
    >
      {slides.map((slide, slideIndex) => {
        return (
          <SwiperSlide key={slideIndex}>
            <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
              {slide.images.map((image, imageIndex) => {
                return (
                  <div
                    className='relative rounded-lg overflow-hidden flex items-center justify-center group'
                    key={imageIndex}
                  >
                    <a href={image.link} target="_blank" rel="noopener noreferrer">
                      <div className='flex items-center justify-center relative overflow-hidden group rounded-lg'>
                        {/* image */}
                        <Image src={image.path} width={500} height={300} alt='' />
                        {/* overlay gradient */}
                        <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#ff1c00] to-[#fea837] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                        {/* title */}
                        <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                          <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                            {/* title part 1 */}
                            <div className='delay-100'>LIVE</div>
                            {/* title part 2 */}
                            <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>
                              PROJECT
                            </div>
                            {/* icon */}
                            <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                              <BsArrowRight />
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
