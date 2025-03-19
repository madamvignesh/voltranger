'use client';

export default function AboutSection() {
  const teamMembers = [
    {
      name: 'M Vignesh',
      role: 'Leader',
      image: '/assets/images/team/team1.jpg',
      description: 'Leading the Team, guiding the team and making sure the team is on the right track.'
    },
    {
      name: 'Sai Anirudh',
      role: 'Designer',
      image: '/assets/images/team/team2.jpg',
      description: 'Expert in smart desiging and executing.'
    },
    {
      name: 'Naveena',
      role: 'Member',
      image: '/assets/images/team/team3.jpg',
      description: 'Specializes in power distribution and energy storage solutions.'
    },
    {
      name: 'Mahesh',
      role: 'Member',
      image: '/assets/images/team/team3.jpg',
      description: 'Specializes in power distribution and energy storage solutions.'
    }
  ];

  const stats = [
    { title: 'Unique', label: 'Only product specifically dedicated to talk management' },
    { title: 'First to Market', label: 'First beautifully designed product that\'s both stylish and functional' },
    { title: 'Tested', label: 'Conducted testing with start ups in the area' },
    { title: 'Authentic', label: 'Designed with he help and input of software exports' }
  ];

  return (
    <div className="pt-24 bg-gradient-to-b from-gray-900 to-gray-800 text-black min-h-screen">
      {/* Hero Section */}
      <section className="mx-auto px-4 py-12 bg-celeste">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 ">About Voltranger</h1>
          <p className="text-lg md:text-xl mb-8 md:pl-10 md:pr-10 ">
          VoltRanger is a rugged, off-road electric scooter designed for adventure and sustainability. Built with 
          high-performance engineering, it offers power, durability, and zero-emission mobility for any terrain.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-thistle py-16 text-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-black">Our Mission</h2>
            <p className="text-lg leading-relaxed text-justify mb-8 text-black-500">
            VoltRanger is committed to transforming off-road mobility with efficient, high-performance 
            electric technology that is sustainable. We're driven by a purpose to deliver an eco-friendly,
             long-lasting, and energy-efficient off-road EV that combines power with sustainability. Through 
             innovation, safety, and energy efficiency, our goal is to rethink adventure without any emissions. 
             Drive the future of off-road discovery with us, sustainably.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="mx-auto px-4 py-16 bg-celeste">
        <h2 className="text-3xl font-bold text-center mb-12">Product Overview</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-lg md:text-2xl font-bold mb-2">{stat.title}</div>
              <div className="text-sm md:text-base ">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="mx-auto px-4 py-16 bg-thistle">
        <h2 className="text-3xl font-bold text-center mb-12 ">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-lavender p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 ">Innovation</h3>
            <p className="text-black">
              Constantly pushing boundaries to deliver cutting-edge electrical solutions that meet tomorrow&apos;s challenges.
            </p>
          </div>
          <div className="bg-lavender p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-black">Sustainability</h3>
            <p className="text-black">
              Committed to eco-friendly practices and renewable energy solutions for a greener future.
            </p>
          </div>
          <div className="bg-lavender p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-black">Excellence</h3>
            <p className="text-black">
              Delivering the highest quality service and maintaining rigorous safety standards in every project.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-celeste py-16">
        <div className="mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-robin rounded-lg p-6 text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <div className="w-32 h-32 rounded-full bg-ruddy flex items-center justify-center">
                    <span className="text-4xl text-celeste">{member.name[0]}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-black mb-3">{member.role}</p>
                <p className="text-black-500 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 