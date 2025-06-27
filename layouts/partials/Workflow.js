import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";

const Workflow = ({ workflow }) => {
  return (
    <section className="section pb-0">
      <div className="mb-8 text-center">
        <h2 className="mb-6 text-2xl md:text-3xl font-bold text-primary">
          {workflow.title}
        </h2>
        {markdownify(workflow.description, "p", "mt-3")}
      </div>
      <Image
        src={workflow.image}
        alt="workflow image"
        width={1920}
        height={296}
      />
    </section>
  );
};

export default Workflow;
