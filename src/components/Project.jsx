import { PortableText } from '@portabletext/react';
import Link from 'next/link';

const Project = ({ data }) => {
  console.log('Project Data: ', data);
  return (
    <>
      <div className="flex items-center gap-6">
        <Link
          href={'/'}
          className="p-4 rounded-lg hover:bg-indigo-400 transition-colors duration-500 ease-in-out h-full flex items-center"
        >
          <svg viewBox="0 0 24 24" className="fill-none h-8 w-8">
            <path
              fill="currentColor"
              d="M16.243 6.343L14.828 4.93 7.758 12l7.07 7.071 1.415-1.414L10.586 12l5.657-5.657z"
            />
          </svg>
        </Link>
        <div>
          <h1 className="text-6xl font-semibold">{data.title}</h1>
          <p className="text-xl font-semibold italic mt-4">{data.tagLine}</p>
        </div>
      </div>
      <div role="divider" className="h-1 w-full bg-white my-4" />

      <div className="blog-post-content rounded-md p-2 flex-1 overflow-y-auto">
        <PortableText value={data.content} />
      </div>
    </>
  );
};

export default Project;
