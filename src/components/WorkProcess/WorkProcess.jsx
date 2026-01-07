

import Container from "../Layout/Container";

const WorkProcess = () => {
  const processData = [
    {
      id: "01",
      title: "Research",
      desc: "Understanding project requirements and goals clearly."
    },
    {
      id: "02",
      title: "Planning",
      desc: "Creating a proper workflow, timeline, and technology stack."
    },
    {
      id: "03",
      title: "Design",
      desc: "Designing a clean, user-friendly, and modern UI."
    },
    {
      id: "04",
      title: "Development",
      desc: "Developing the project using modern technologies."
    },
    {
      id: "05",
      title: "Testing",
      desc: "Testing the project for bugs, performance, and responsiveness."
    },
    {
      id: "06",
      title: "Deployment",
      desc: "Making the project live and ready for users."
    }
  ];

  return (
    <div className="pt-10">
      <Container>
        <div className="mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-primary text-[38px] font-semibold text-primary">
            My Work Process
          </h2>
          <p className="mt-2 font-secondary text-[18px] text-secondary">
            How I turn ideas into real-world digital products
          </p>
        </div>
         <div className="flex flex-wrap justify-center gap-8">
          {processData.map((item) => (
            <div
              key={item.id}
              className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:bg-white hover:shadow-lg transition duration-300 w-full sm:w-[48%] lg:w-[30%]"
            >
              <span className="font-primary font-bold text-[35px] text-primary">
                {item.id}
              </span>
              <h3 className="mt-3 font-primary font-semiblod tracking-[3px] text-[30px] text-primary">
                {item.title}
              </h3>
              <p className="mt-2 font-secondary text-[16px] text-secondary">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      </Container>
    </div>
  );
};

export default WorkProcess;
