import Image from 'next/image';
import { FC } from 'react';

const About: FC = () => {
  return (
    <div style={{ padding: 20 }}>
      <div className="container p-4 flex flex-col md:flex-row gap-6 items-center">
        <div className="flex-1 max-w-full md:max-w-md">
          <h2>About Us</h2>
          <p className="mb-4">
            We are a team of professionals with a passion for education. Our
            goal is to empower individuals to achieve their full potential
            through learning.
          </p>
          <p>
            We are dedicated to making high-quality learning accessible to all,
            regardless of their background or location.
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            src={'/images/about.png'}
            width={400}
            height={300}
            alt="About Us"
            style={{ borderRadius: 10 }}
          />
        </div>
      </div>
    </div>
  );
};
export default About;
