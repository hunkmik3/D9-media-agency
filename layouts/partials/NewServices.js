import Image from "next/image";

const NewServices = ({ new_services }) => {
  if (!new_services) return null;
  return (
    <section className="section py-10">
      <div className="container">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-primary mb-8 uppercase">
          {new_services.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {new_services.items.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
              <Image
                src={item.image}
                alt={item.title}
                width={340}
                height={180}
                className="rounded-xl object-cover mb-4 w-full h-[180px]"
              />
              <h3 className="text-lg font-bold text-dark mb-2 uppercase text-center">{item.title}</h3>
              <ul className="w-full mt-2">
                {item.services.map((sv, i) => (
                  <li key={i} className="border-b border-gray-200 py-1 text-center text-base text-dark font-medium last:border-b-0">
                    {sv}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewServices; 