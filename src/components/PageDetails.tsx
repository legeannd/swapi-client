import { ChevronLeft } from "lucide-react";
import { Link } from "react-router";

interface PageDetailsProps {
  data:
    | {
        key: string;
        value: unknown;
      }[]
    | undefined;
  basePath: string;
}

const PageDetails = ({ data, basePath }: PageDetailsProps) => {

  const formatStringURL = (string: string) => {
    if (string.startsWith("http")) {
      return <a className='hover:underline' target="_blank" href={string}>{string}</a>
    } else {
      return string
    }

  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data?.map((item) => (
          <div key={item.key} className="mb-4">
            <h3 className="text-lg font-semibold text-yellow-400 capitalize">
              {item.key.replace("_", " ")}:
            </h3>
            {Array.isArray(item.value) ? (
              <ul className="list-disc list-inside">
                {item.value.length > 0 ? (
                  item.value.map((item, index) => (
                    <li key={index} className="text-white">
                      {formatStringURL(String(item))}
                    </li>
                  ))
                ) : (
                  <li className="text-white">None</li>
                )}
              </ul>
            ) : (
              <p className="text-white">{formatStringURL(String(item.value)) || "Unknown"}</p>
            )}
          </div>
        ))}
      </div>
      <Link
        to={basePath}
        className="flex items-center mt-8 hover:text-white hover:underline"
      >
        <ChevronLeft size={20} />
        Back to list
      </Link>
    </>
  );
};

export default PageDetails;
