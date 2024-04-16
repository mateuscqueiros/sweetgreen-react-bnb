import { IconArrowRight } from '@tabler/icons-react';
import bannerImg from '../../../assets/images/banner.png';
import { Button } from '../../Elements';

export function HomeBanner() {
  return (
    <section id="home-banner" className="relative w-full">
      <div className="banner-image brightness-75">
        <img
          src={bannerImg}
          alt="Sweetgreen Restaurant"
          className="min-w-full object-cover h-[500px]"
        />
      </div>
      <div className="banner-content absolute top-0 flex items-end justify-start p-5 h-full w-full">
        <div className="banner-info text-white">
          <span className="uppercase">New menu</span>
          <h1 className="text-3xl md:text-4xl my-4 font-light leading-[3.5rem]">
            Now serving summer
          </h1>
          <Button className="uppercase" icon={<IconArrowRight size={16} />}>
            Order now
          </Button>
        </div>
      </div>
    </section>
  );
}
