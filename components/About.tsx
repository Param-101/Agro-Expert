
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="text-black" id="about">
      <div className="md:grid md:grid-cols-2 gap-6 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 ">
        <Image
          src="/images/About-Image.png"
          width={400}
          height={400}
          className="lg:ml-[150px] hidden sm:block"
          alt={""}
        />
        <div className="mt-4 md:mt-0 mx-4 text-left flex flex-col h-full gap-4 lg:ml-[-100px]">
          <h2 className="text-4xl font-bold text-black mb-4 mt-16">About us</h2>
          <p className="text-base lg:text-lg">
            Our story began with a simple yet powerful inspiration – a desire to make IoT technology accessible and beneficial for everyone. Fueled by the frustration of witnessing countless users struggle with complex interfaces and untapped potential in IoT devices, we set out on a mission to change the game.
          </p>
          <p className="text-base lg:text-lg">
            Driven by a passion for simplicity and innovation, we've assembled a team of dedicated experts who share the vision of empowering IoT users with better user interfaces and comprehensive features. At AgroExpert, we are committed to bridging the gap between technology and understanding, ensuring that our users harness the full potential of IoT devices with ease. Join us in this journey as we simplify the world of IoT, one user at a time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
