import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";

function Cta({ cta }) {
  return (
    <section className="section px-4">
      <div className="section container rounded-xl shadow">
        <div className="row  mx-auto items-center justify-center">
          <div className="md:col-5 lg:col-4">
            <Image
              className="w-full"
              src={cta?.image}
              alt="call to action image"
              width={325}
              height={206}
            />
          </div>
          <div className="mt-5 text-center md:col-6 lg:col-5 md:mt-0 md:text-left">
            <h2>{cta?.title}</h2>
            <p className="mt-6">{markdownify(cta?.content)}</p>
            <form className="mt-6 space-y-4 text-left max-w-md mx-auto">
              <input
                className="form-input w-full rounded"
                name="name"
                type="text"
                placeholder="Họ và tên"
                required
              />
              <input
                className="form-input w-full rounded"
                name="email"
                type="email"
                placeholder="Email"
                required
              />
              <textarea
                className="form-textarea w-full rounded-md"
                rows="4"
                name="message"
                placeholder="Nội dung liên hệ"
                required
              />
              <button type="submit" className="btn btn-primary w-full">
                Gửi liên hệ
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
