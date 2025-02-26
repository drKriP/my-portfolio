export default function About({ data }) {
    return (
      <section className="max-w-3xl mx-auto text-center py-16 px-4">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="mt-4 text-lg">{data.description}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          {data.skills.map((skill, index) => (
            <span key={index} className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm">
              {skill}
            </span>
          ))}
        </div>
      </section>
    );
  }
  