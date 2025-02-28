import Link from "next/link";

export default function Hero({ data }) {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20">
      <h1 className="text-4xl font-bold">{data.name}</h1>
      <h2 className="mt-2 text-xl text-gray-500">{data.company}</h2> 
      <p className="mt-2 text-lg">{data.bio}</p>
      <div className="mt-4 flex gap-4">
        {data.socials.map((social, index) => (
          <Link key={index} href={social.link} target="_blank">
            <span className="text-blue-500 hover:underline">{social.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
